import React from 'react';
import styles from '@/styles/main.module.scss'
import {IconChevronLeft, IconChevronsLeft, IconChevronsRight, IconChevronRight} from '@tabler/icons-react'
import ProductCard from '@/components/product-card';
import Skeleton from '@/components/skeleton';
import CustomProductCard from '@/components/custom-product-card';


function Products() {
    return (
        <div id={styles['products-container']}>
            <div id={styles['products-filters']}>
                <div id={styles['products-filter-by']}>
                    <div>Filter By</div>
                    <select className="select select-ghost">
                        <option selected>All Products</option>
                        <option>Water Features</option>
                        <option>Flower Pots</option>
                        <option>Birdbaths & Feeders</option>
                        <option>Furniture</option>
                        <option>Sculptures</option>
                    </select>
                </div>
                <div id={styles['products-sort-by']}>
                    <div>Sort By</div>
                    <select className="select select-ghost">
                        <option selected>Cheapest</option>
                        <option>Svelte</option>
                        <option>Vue</option>
                        <option>React</option>
                    </select>
                </div>
            </div>

            <div id={styles.products}>
                {/* <Skeleton className={styles['product-card']}/>
                <Skeleton className={styles['product-card']}/>
                <Skeleton className={styles['product-card']}/> */}
                <ProductCard product={{mainImageUrl: 'https://flowbite.com/docs/images/products/apple-watch.png', id: 'apple-watch', name: 'Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport', listPrice: 3034, salePrice: 2024}}/>
                <ProductCard product={{mainImageUrl: 'https://flowbite.com/docs/images/products/apple-watch.png', id: 'apple-watch', name: 'Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport', listPrice: 3034, salePrice: null}}/>
                <ProductCard product={{mainImageUrl: 'https://flowbite.com/docs/images/products/apple-watch.png', id: 'apple-watch', name: 'Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport', listPrice: 3034, salePrice: 2024}}/>
                <ProductCard product={{mainImageUrl: 'https://flowbite.com/docs/images/products/apple-watch.png', id: 'apple-watch', name: 'Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport', listPrice: 3034, salePrice: 2024}}/>

                <ProductCard product={{mainImageUrl: 'https://flowbite.com/docs/images/products/apple-watch.png', id: 'apple-watch', name: 'Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport', listPrice: 3034, salePrice: 2024}}/>
                <ProductCard product={{mainImageUrl: 'https://flowbite.com/docs/images/products/apple-watch.png', id: 'apple-watch', name: 'Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport', listPrice: 3034, salePrice: null}}/>
                <ProductCard product={{mainImageUrl: 'https://flowbite.com/docs/images/products/apple-watch.png', id: 'apple-watch', name: 'Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport', listPrice: 3034, salePrice: 2024}}/>
                <ProductCard product={{mainImageUrl: 'https://flowbite.com/docs/images/products/apple-watch.png', id: 'apple-watch', name: 'Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport', listPrice: 3034, salePrice: 2024}}/>

                {/* <ProductCard product={{mainImageUrl: 'https://flowbite.com/docs/images/products/apple-watch.png', id: 'apple-watch', name: 'Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport', listPrice: 3034, salePrice: 2024}}/>
                <ProductCard product={{mainImageUrl: 'https://flowbite.com/docs/images/products/apple-watch.png', id: 'apple-watch', name: 'Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport', listPrice: 3034, salePrice: null}}/>
                <ProductCard product={{mainImageUrl: 'https://flowbite.com/docs/images/products/apple-watch.png', id: 'apple-watch', name: 'Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport', listPrice: 3034, salePrice: 2024}}/> */}
                {/* <ProductCard product={{mainImageUrl: 'https://flowbite.com/docs/images/products/apple-watch.png', id: 'apple-watch', name: 'Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport', listPrice: 3034, salePrice: 2024}}/> */}

                <CustomProductCard />
            </div>

            <div id={styles['products-pagination']}>
                {/* <div className={`dull-text text-sm underline-offset-2 underline`}>97 | Total products</div> */}
                <div className="join">
                    <button className="join-item btn"><IconChevronsLeft /></button>
                    <button className="join-item btn"><IconChevronLeft/> Previous (1)</button>
                    <button className="join-item btn btn-disabled">2</button>
                    <button className="join-item btn">Next (3) <IconChevronRight /></button>
                    <button className="join-item btn"><IconChevronsRight/></button>
                </div>
            </div>
        </div>
    );
}

export default Products;