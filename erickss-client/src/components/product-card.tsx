import React from 'react';
import Image from 'next/image';
import styles from '@/styles/main.module.scss'
import { Product } from '@/types';


function ProductCard({ product }: { product: Product }) {
    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'KES',
    });

    return (
        // https://flowbite.com/docs/components/card/#e-commerce-card
        <div className={` ${styles['product-card']} bg-white border flex flex-col gap-1 border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700`}>
            <a href={`/products/${product.slug}`} className='relative flex-1'>
                <Image className="rounded-t-lg absolute inset-0 w-full h-full object-cover" fill unoptimized
                    src={product.mainImageUrl} alt={`Product Image - ${product.name}`}
                    placeholder='blur' blurDataURL='/erickss-logo-compressed.png'
                />
            </a>
            <div className="px-5 pb-5">
                <a href={`/products/${product.slug}`}>
                    <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{product.name}</h5>
                </a>
                <div className="flex items-center dull-text pb-2">category</div>
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
                    <button className='btn btn-primary'>Order</button>
                </div>
            </div>
        </div>
    );
}

export default ProductCard;