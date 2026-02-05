import React from 'react';
import styles from '@/styles/main.module.scss'
import { IconChevronLeft, IconChevronsLeft, IconChevronsRight, IconChevronRight } from '@tabler/icons-react'
import ProductCard from '@/components/product-card';
import Skeleton from '@/components/skeleton';
import CustomProductCard from '@/components/custom-product-card';
import { products } from '@/testdata';
import { Metadata } from 'next';


export const metadata: Metadata = {
    title: "Products"
}

export default async function Products({ params, searchParams }: any) {
    const productsData = await getServerSideProps(searchParams)

    return (
        <div id={styles['products-container']}>
            {/*<div id={styles['search-and-filters']}>*/}
            {/*    <div id={styles.search}>*/}
            {/*        <label className="input border-b-2 border-b-base-300 flex items-center gap-2">*/}
            {/*            /!* <svg className='cursor-pointer hover:text-red-100 icon icon-tabler icons-tabler-outline icon-tabler-x w-4 h-4' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M18 6l-12 12" /><path d="M6 6l12 12" /></svg> *!/*/}
            {/*            <input type="text" className="grow" placeholder="Search" />*/}
            {/*            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70 cursor-pointer"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>*/}
            {/*        </label>*/}
            {/*    </div>*/}
            {/*    <div id={styles['products-filters']}>*/}

            {/*        <div id={styles['products-filter-by']}>*/}
            {/*            <div>Filter By</div>*/}
            {/*            <select className="select select-ghost" defaultValue=''>*/}
            {/*                <option value=''>All Products</option>*/}
            {/*                <option value='water-features'>Water Features</option>*/}
            {/*                <option value='flower-pots'>Flower Pots</option>*/}
            {/*                <option value='birdbaths-and-feeders'>Birdbaths & Feeders</option>*/}
            {/*                <option value='furniture'>Furniture</option>*/}
            {/*                <option value='sculptures'>Sculptures</option>*/}
            {/*            </select>*/}
            {/*        </div>*/}

            {/*        <div id={styles['products-sort-by']}>*/}
            {/*            <div>Sort By</div>*/}
            {/*            <select className="select select-ghost" defaultValue=''>*/}
            {/*                <option value='popular'>Most Popular</option>*/}
            {/*                <option value='affordable'>Affordable</option>*/}
            {/*                <option value='expensive'>Expensive</option>*/}
            {/*                <option value='newest'>Newest</option>*/}
            {/*            </select>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}

            <div id={styles.products}>
                {productsData ?
                    productsData.results.map(product => <ProductCard key={product.id} product={{ ...product, mainImageUrl: product.mainImageUrl || `/erickss-logo-compressed.png` }} />)
                    :
                    <>
                        <Skeleton className={styles['product-card']} />
                        <Skeleton className={styles['product-card']} />
                        <Skeleton className={styles['product-card']} />
                    </>
                }
                <CustomProductCard />

            </div>

            <div id={styles['products-pagination']}>
                {/* <div className={`dull-text text-sm underline-offset-2 underline`}>97 | Total products</div> */}
                <div className="join">
                    <button className="join-item btn btn-disabled"><IconChevronsLeft /></button>
                    <button className="join-item btn btn-disabled"><IconChevronLeft /> Previous</button>
                    <button className="join-item btn btn-disabled">1</button>
                    <button className="join-item btn">Next (2) <IconChevronRight /></button>
                    <button className="join-item btn"><IconChevronsRight /></button>
                </div>
            </div>
        </div>
    );
}


const getServerSideProps = async (searchParams: any) => {
    const { page = 1, filterBy, sortBy, query } = searchParams;

    return {
        results: [...products],
        page: 1,
        totalCount: 24,
        count: 24,
        filterBy: '',
        sortBy: '',
        query: ''
    }
}
