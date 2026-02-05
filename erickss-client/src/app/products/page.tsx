import React from 'react';
import styles from '@/styles/main.module.scss';
import { IconChevronLeft, IconChevronsLeft, IconChevronsRight, IconChevronRight } from '@tabler/icons-react';
import ProductCard from '@/components/product-card';
import Skeleton from '@/components/skeleton';
import CustomProductCard from '@/components/custom-product-card';
import ProductsFilters from '@/components/products-filters';
import { products } from '@/testdata';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Products",
};

export default async function Products({ searchParams }: any) {
    const productsData = await getServerSideProps(searchParams);

    return (
        <div id={styles['products-container']}>
            <ProductsFilters />

            <div id={styles.products}>
                {productsData
                    ? productsData.results.map((product: any) => (
                        <ProductCard
                            key={product.id}
                            product={{
                                ...product,
                                mainImageUrl: product.mainImageUrl || `/erickss-logo-compressed.png`,
                            }}
                        />
                    ))
                    : (
                        <>
                            <Skeleton className={styles['product-card']} />
                            <Skeleton className={styles['product-card']} />
                            <Skeleton className={styles['product-card']} />
                        </>
                    )}
                <CustomProductCard />
            </div>

            <div id={styles['products-pagination']}>
                {/* <div className={`dull-text text-sm underline-offset-2 underline`}>97 | Total products</div> */}
                <div className="join">
                    <button className="join-item btn btn-disabled"><IconChevronsLeft /></button>
                    <button className="join-item btn btn-disabled"><IconChevronLeft /> Previous</button>
                    <button className="join-item btn btn-disabled">1</button>
                    <button className="join-item btn btn-disabled">Next <IconChevronRight /></button>
                    <button className="join-item btn btn-disabled"><IconChevronsRight /></button>
                </div>
            </div>
        </div>
    );
}

const getServerSideProps = async (searchParams: any) => {
    const pageSize = 24;
    const {
        page = '1',
        filterBy = '',
        sortBy = '',
        query = '',
    } = searchParams || {};

    let results = [...products];

    // Filter by category
    if (filterBy) {
        if (filterBy === 'furniture-and-sculptures') {
            results = results.filter(
                (p) => p.category === 'furniture' || p.category === 'sculptures'
            );
        } else {
            results = results.filter((p) => p.category === filterBy);
        }
    }

    // Search by name and short description
    if (query) {
        const q = String(query).toLowerCase();
        results = results.filter((p) => {
            const name = p.name?.toLowerCase() || '';
            const shortDescription = p.shortDescription?.toLowerCase() || '';
            return name.includes(q) || shortDescription.includes(q);
        });
    }

    // Sort results
    if (sortBy) {
        if (sortBy === 'affordable') {
            results.sort((a, b) => {
                const priceA = a.salePrice ?? a.listPrice;
                const priceB = b.salePrice ?? b.listPrice;
                return priceA - priceB;
            });
        } else if (sortBy === 'expensive') {
            results.sort((a, b) => {
                const priceA = a.salePrice ?? a.listPrice;
                const priceB = b.salePrice ?? b.listPrice;
                return priceB - priceA;
            });
        }
        // Default leaves original ordering
    }

    const pageNumber = parseInt(String(page), 10) || 1;
    const totalCount = results.length;
    const start = (pageNumber - 1) * pageSize;
    const paginated = results.slice(start, start + pageSize);

    return {
        results: paginated,
        page: pageNumber,
        totalCount,
        count: paginated.length,
        filterBy,
        sortBy,
        query,
    };
};
