import { Suspense } from 'react';
import styles from '@/styles/main.module.scss';
import { IconChevronLeft, IconChevronsLeft, IconChevronsRight, IconChevronRight } from '@tabler/icons-react';
import ProductCard from '@/components/product-card';
import Skeleton from '@/components/skeleton';
import CustomProductCard from '@/components/custom-product-card';
import ProductsFilters from '@/components/products-filters';
import { products } from '@/testdata';
import { Metadata } from 'next';
import Link from 'next/link';
import {Product} from "@/types";

export const metadata: Metadata = {
    title: "Products",
};

type SearchParams = Record<string, string | string[] | undefined>;

const getSearchParamValue = (value: string | string[] | undefined): string => {
    if (Array.isArray(value)) return value[0] ?? '';
    return value ?? '';
};

export default async function Products({ searchParams }: { searchParams: Promise<SearchParams> }) {
    const resolvedSearchParams = await searchParams;
    const productsData = getServerSideProps(resolvedSearchParams);
    const pageSize = 24;
    const totalPages = Math.max(1, Math.ceil((productsData?.totalCount ?? 0) / pageSize));
    const currentPage = Math.min(Math.max(1, productsData?.page ?? 1), totalPages);

    const makeHref = (page: number) => {
        const params = new URLSearchParams();
        const filterBy = getSearchParamValue(resolvedSearchParams?.filterBy);
        const sortBy = getSearchParamValue(resolvedSearchParams?.sortBy);
        const query = getSearchParamValue(resolvedSearchParams?.query);
        if (filterBy) params.set('filterBy', filterBy);
        if (sortBy) params.set('sortBy', sortBy);
        if (query) params.set('query', query);
        params.set('page', String(page));
        return `/products?${params.toString()}`;
    };

    const pageNumbers = (() => {
        const windowSize = 5;
        const half = Math.floor(windowSize / 2);
        let start = Math.max(1, currentPage - half);
        const end = Math.min(totalPages, start + windowSize - 1);
        start = Math.max(1, end - windowSize + 1);
        const pages: number[] = [];
        for (let p = start; p <= end; p += 1) pages.push(p);
        return pages;
    })();

    return (
        <div id={styles['products-container']}>
            <Suspense fallback={null}>
                <ProductsFilters />
            </Suspense>

            <div id={styles.products}>
                {productsData
                    ? productsData.results.map((product: Product) => (
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

const getServerSideProps = (searchParams: SearchParams) => {
    const pageSize = 24;
    const {
        page: rawPage,
        filterBy: rawFilterBy,
        sortBy: rawSortBy,
        query: rawQuery,
    } = searchParams || {};

    const page = getSearchParamValue(rawPage) || '1';
    const filterBy = getSearchParamValue(rawFilterBy);
    const sortBy = getSearchParamValue(rawSortBy);
    const query = getSearchParamValue(rawQuery);

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
