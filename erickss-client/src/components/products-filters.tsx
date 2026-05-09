'use client';

import { useCallback, useEffect, useRef } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import styles from '@/styles/main.module.scss';

export default function ProductsFilters() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const searchDebounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);
    const searchInputRef = useRef<HTMLInputElement | null>(null);
    const shouldRestoreSearchFocusRef = useRef(false);

    const urlQuery = searchParams.get('query') || '';

    // Get current values from URL
    const currentFilterBy = searchParams.get('filterBy') || '';
    const currentSortBy = searchParams.get('sortBy') || '';

    // Update URL params helper
    const updateParams = useCallback((updates: Record<string, string>) => {
        const params = new URLSearchParams(searchParams.toString());
        
        Object.entries(updates).forEach(([key, value]) => {
            if (value) {
                params.set(key, value);
            } else {
                params.delete(key);
            }
        });

        // Reset to page 1 when filters change
        params.set('page', '1');
        
        const nextUrl = `/products?${params.toString()}`;
        const currentUrl = `/products?${searchParams.toString()}`;
        if (nextUrl !== currentUrl) {
            router.push(nextUrl);
        }
    }, [router, searchParams]);

    // Handle filter change
    const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        updateParams({ filterBy: e.target.value });
    };

    // Handle sort change
    const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        updateParams({ sortBy: e.target.value });
    };

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const nextQuery = e.target.value;
        shouldRestoreSearchFocusRef.current = document.activeElement === e.target;

        if (searchDebounceRef.current) {
            clearTimeout(searchDebounceRef.current);
        }

        searchDebounceRef.current = setTimeout(() => {
            updateParams({ query: nextQuery });
        }, 300);
    };

    useEffect(() => {
        if (!shouldRestoreSearchFocusRef.current) return;

        const input = searchInputRef.current;
        if (!input) return;

        input.focus();
        const end = input.value.length;
        input.setSelectionRange(end, end);
        shouldRestoreSearchFocusRef.current = false;
    }, [urlQuery]);

    return (
        <div id={styles['search-and-filters']} className="flex flex-col gap-4">
            <div id={styles.search}>
                <label className="input border-b-2 border-b-base-300 flex items-center gap-2 focus-within:outline-none">
                    <input
                        ref={searchInputRef}
                        key={urlQuery}
                        type="text"
                        className="grow focus:outline-none focus:ring-0"
                        placeholder="Search"
                        defaultValue={urlQuery}
                        onChange={handleSearchChange}
                    />
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        className="w-4 h-4 opacity-70"
                    >
                        <path
                            fillRule="evenodd"
                            d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                            clipRule="evenodd"
                        />
                    </svg>
                </label>
            </div>

            <div id={styles['products-filters']}>
                <div id={styles['products-filter-by']}>
                    <div>Filter By</div>
                    <select
                        className="select select-ghost"
                        value={currentFilterBy}
                        onChange={handleFilterChange}
                    >
                        <option value=''>All Products</option>
                        <option value='water-features'>Water Features</option>
                        <option value='flower-pots'>Flower Pots</option>
                        <option value='birdbaths-and-feeders'>Birdbaths &amp; Feeders</option>
                        <option value='furniture'>Furniture</option>
                        <option value='sculptures'>Sculptures</option>
                        <option value='furniture-and-sculptures'>Furniture &amp; Sculptures</option>
                    </select>
                </div>

                <div id={styles['products-sort-by']}>
                    <div>Sort By</div>
                    <select
                        className="select select-ghost"
                        value={currentSortBy}
                        onChange={handleSortChange}
                    >
                        <option value=''>Default</option>
                        <option value='affordable'>Affordable</option>
                        <option value='expensive'>Expensive</option>
                    </select>
                </div>
            </div>
        </div>
    );
}
