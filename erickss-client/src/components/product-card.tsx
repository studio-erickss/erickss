import React from 'react';
import Image from 'next/image';
import styles from '@/styles/main.module.scss'
import { Product } from '@/types';
import ProductImage from "@/components/product-image";


function ProductCard({ product }: { product: Product }) {
    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'KES',
    });

    return (
        // https://flowbite.com/docs/components/card/#e-commerce-card
        <div className={` ${styles['product-card']} bg-white border flex flex-col gap-1 border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700`}>
            <a href={`/products/${product.slug}`} className='relative flex-1'>
                {/*<Image className="rounded-t-lg absolute inset-0 w-full h-full object-cover" fill unoptimized*/}
                {/*    src={product.mainImageUrl} alt={`Product Image - ${product.name}`}*/}
                {/*    placeholder='blur' blurDataURL='/erickss-logo-compressed.png'*/}
                {/*/>*/}
                <ProductImage product={product} />
            </a>
            <div className="px-5 pb-5">
                <a href={`/products/${product.slug}`}>
                    <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{product.name}</h5>
                </a>
                <div className="inline-flex items-center gap-2 py-2 rounded-lg text-gray-800 dark:text-gray-200 flex-wrap">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-ruler-icon lucide-ruler">
                        <path d="M21.3 15.3a2.4 2.4 0 0 1 0 3.4l-2.6 2.6a2.4 2.4 0 0 1-3.4 0L2.7 8.7a2.41 2.41 0 0 1 0-3.4l2.6-2.6a2.41 2.41 0 0 1 3.4 0Z"/>
                        <path d="m14.5 12.5 2-2"/>
                        <path d="m11.5 9.5 2-2"/>
                        <path d="m8.5 6.5 2-2"/>
                        <path d="m17.5 15.5 2-2"/>
                    </svg>
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-400">
                        <span className="font-bold text-gray-800 dark:text-gray-300">{product.measurements.length} {product.measurements.unit}</span> × <span className="font-bold text-gray-800 dark:text-gray-300">{product.measurements.width} {product.measurements.unit}</span> × <span className="font-bold text-gray-800 dark:text-gray-300">{product.measurements.height} {product.measurements.unit}</span>
                    </span>
                    <span className="text-xs text-gray-500 dark:text-gray-400">
                        (L × W × H)
                    </span>
                </div>
                <div className="flex items-center justify-between">
                    <div>
                        <div className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">{formatter.format(product.salePrice ?? product.listPrice)}</div>
                        {product.salePrice &&
                            <div className={`flex gap-1 items-center flex-wrap`}>
                                <span className="font-bold line-through dull-text text-md">{formatter.format(product.listPrice)}</span>
                                <span className={`bg-secondary px-2 py-1 rounded-md text-sm`}>{Math.round((product.listPrice - product.salePrice) / product.listPrice * 100)}% off</span>
                            </div>
                        }
                    </div>
                    {/*<button className='btn btn-primary'>Order</button>*/}
                </div>
            </div>
        </div>
    );
}

export default ProductCard;