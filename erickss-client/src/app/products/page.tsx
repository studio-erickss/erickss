import React from 'react';
import styles from '@/styles/main.module.scss';
import { IconChevronLeft, IconChevronsLeft, IconChevronsRight, IconChevronRight } from '@tabler/icons-react';
import ProductCard from '@/components/product-card';
import Skeleton from '@/components/skeleton';
import CustomProductCard from '@/components/custom-product-card';
import ProductsFilters from '@/components/products-filters';
import { products } from '@/testdata';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: "Products",
};

export default async function Products({ searchParams }: any) {
    const productsData = await getServerSideProps(searchParams);
    const pageSize = 24;
    const totalPages = Math.max(1, Math.ceil((productsData?.totalCount ?? 0) / pageSize));
    const currentPage = Math.min(Math.max(1, productsData?.page ?? 1), totalPages);

    const makeHref = (page: number) => {
        const params = new URLSearchParams();
        if (searchParams?.filterBy) params.set('filterBy', String(searchParams.filterBy));
        if (searchParams?.sortBy) params.set('sortBy', String(searchParams.sortBy));
        if (searchParams?.query) params.set('query', String(searchParams.query));
        params.set('page', String(page));
        return `/products?${params.toString()}`;
    };

    const pageNumbers = (() => {
        const windowSize = 5;
        const half = Math.floor(windowSize / 2);
        let start = Math.max(1, currentPage - half);
        let end = Math.min(totalPages, start + windowSize - 1);
        start = Math.max(1, end - windowSize + 1);
        const pages: number[] = [];
        for (let p = start; p <= end; p += 1) pages.push(p);
        return pages;
    })();

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
                <div className={`dull-text text-sm flex items-center`}>
                    {productsData?.totalCount ?? 0} | Total products
                </div>
                <div className="join">
                    {currentPage > 1 ? (
                        <Link className="join-item btn" href={makeHref(1)} aria-label="First page">
                            <IconChevronsLeft />
                        </Link>
                    ) : (
                        <button className="join-item btn btn-disabled" aria-disabled="true">
                            <IconChevronsLeft />
                        </button>
                    )}

                    {currentPage > 1 ? (
                        <Link className="join-item btn" href={makeHref(currentPage - 1)} aria-label="Previous page">
                            <IconChevronLeft /> Previous
                        </Link>
                    ) : (
                        <button className="join-item btn btn-disabled" aria-disabled="true">
                            <IconChevronLeft /> Previous
                        </button>
                    )}

                    {pageNumbers.map((p) =>
                        p === currentPage ? (
                            <span key={p} className="join-item btn btn-active" aria-current="page">
                                {p}
                            </span>
                        ) : (
                            <Link key={p} className="join-item btn" href={makeHref(p)} aria-label={`Page ${p}`}>
                                {p}
                            </Link>
                        )
                    )}

                    {currentPage < totalPages ? (
                        <Link className="join-item btn" href={makeHref(currentPage + 1)} aria-label="Next page">
                            Next <IconChevronRight />
                        </Link>
                    ) : (
                        <button className="join-item btn btn-disabled" aria-disabled="true">
                            Next <IconChevronRight />
                        </button>
                    )}

                    {currentPage < totalPages ? (
                        <Link className="join-item btn" href={makeHref(totalPages)} aria-label="Last page">
                            <IconChevronsRight />
                        </Link>
                    ) : (
                        <button className="join-item btn btn-disabled" aria-disabled="true">
                            <IconChevronsRight />
                        </button>
                    )}
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
