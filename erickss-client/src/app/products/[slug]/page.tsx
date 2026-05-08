import React from 'react';
import Image from 'next/image';
import { products } from '@/testdata';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from "next/link";


export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const product = products.find(p => p.slug === slug)

    return {
        title: product?.name,
        description: `${product?.name} - ${product?.shortDescription}`,
        openGraph: {
            images: product ? [product.mainImageUrl, ...product.images] : 'opengraph-image.png',
        },
        
    }
}

export default async function Product({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const product = products.find(p => p.slug === slug)

    if (!product) {
        notFound()
    }

    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'KES',
    });

    return (
        <>
            {product ?
                <section className="flex flex-col gap-4 justify-between flex-1" style={{ width: '95%' }}>

                    <nav className="flex" aria-label="Breadcrumb">
                        <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
                            <li className="inline-flex items-center">
                                <Link href="/" className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-secondary dark:text-gray-400 dark:hover:text-white">
                                    <svg className="w-3 h-3 me-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
                                    </svg>
                                    Home
                                </Link>
                            </li>
                            <li>
                                <div className="flex items-center">
                                    <svg className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
                                    </svg>
                                    <Link href="/products" className="ms-1 text-sm font-medium text-gray-700 hover:text-secondary md:ms-2 dark:text-gray-400 dark:hover:text-white">Products</Link>
                                </div>
                            </li>
                            <li aria-current="page">
                                <div className="flex items-center">
                                    <svg className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
                                    </svg>
                                    <span className="ms-1 text-sm font-medium text-gray-500 md:ms-2 dark:text-gray-400">{product.name}</span>
                                </div>
                            </li>
                        </ol>
                    </nav>

                    <div className="flex-1">
                        <div className='flex flex-wrap gap-4 justify-center'>
                            <div className="carousel flex flex-1 shrink gap-1 min-w-80">
                                {/* MAIN IMAGE */}
                                <Image className="rounded-md h-full carousel-item object-cover" unoptimized width={100} height={100} style={{ width: product.images.length ? '90%' : '100%'}}
                                    src={product.mainImageUrl} alt={`Product Image - ${product.name}`}
                                    placeholder='blur' blurDataURL='/erickss-logo-compressed.png' />
                                {/* OTHER IMAGES */}
                                {product.images.map((image, index) => <Image key={index} className="rounded-md h-full carousel-item object-cover" unoptimized width={100} height={100} style={{ width: '90%'}}
                                    src={image} alt={`Product Image - ${product.name}`}
                                    placeholder='blur' blurDataURL='/erickss-logo-compressed.png' />)}
                            </div>

                            <div className="min-w-80" style={{ maxWidth: '600px' }}>
                                {/*<div className="gap-4 flex items-center mb-3" style={{*/}
                                {/*    bottom: '1rem', position: 'sticky'*/}
                                {/*}}>*/}
                                {/*    <div className="flex items-center">*/}
                                {/*        <button type="button" id="decrement-button" data-input-counter-decrement="counter-input" className="inline-flex shrink-0 items-center justify-center rounded-md border border-gray-300 bg-base-200 hover:bg-base-300 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:hover:bg-base-300 dark:focus:ring-gray-700">*/}
                                {/*            <svg className="h-2.5 w-2.5 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http:www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">*/}
                                {/*                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h16" />*/}
                                {/*            </svg>*/}
                                {/*        </button>*/}
                                {/*        <input type="text" id="counter-input" data-input-counter className="w-10 shrink-0 border-0 bg-transparent text-center text-sm font-medium text-gray-900 focus:outline-none focus:ring-0 dark:text-white" placeholder="" defaultValue="1" required />*/}
                                {/*        <button type="button" id="increment-button" data-input-counter-increment="counter-input" className="inline-flex shrink-0 items-center justify-center rounded-md border border-gray-300 bg-base-200 hover:bg-base-300 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:hover:bg-base-300 dark:focus:ring-gray-700">*/}
                                {/*            <svg className="h-2.5 w-2.5 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http:www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">*/}
                                {/*                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 1v16M1 9h16" />*/}
                                {/*            </svg>*/}
                                {/*        </button>*/}
                                {/*    </div>*/}
                                {/*    <button className="btn btn-primary flex items-center justify-center py-2.5 flex-1"><IconShoppingCartPlus />Order</button>*/}
                                {/*</div>*/}

                                <h1
                                    className="text-lg font-semibold text-gray-900 sm:text-2xl dark:text-white"
                                >
                                    {product.name}
                                </h1>
                                <div className='dull-text bg-base-200 px-2 py-1 rounded-lg' style={{ width: 'max-content' }}>{product.category}</div>

                                <hr className="my-2 md:my-3 border-gray-200 dark:border-gray-800" />

                                <div className="items-center gap-2 flex flex-wrap">
                                    <div className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">{formatter.format(product.salePrice ?? product.listPrice)}</div>
                                    {product.salePrice &&
                                        <div className={`flex gap-1 items-center flex-wrap`}>
                                            <span className="font-bold line-through dull-text text-md">{formatter.format(product.listPrice)}</span>
                                            <span className={`bg-secondary px-2 py-1 rounded-md text-sm`}>{Math.round((product.listPrice - product.salePrice) / product.listPrice * 100)}% off</span>
                                        </div>
                                    }
                                </div>

                                <hr className="my-2 md:my-3 border-gray-200 dark:border-gray-800" />

                                <p className="text-gray-500 dark:text-gray-400 mb-2 w-96">
                                    {product.measurements}
                                </p>
                                <p className="text-gray-500 dark:text-gray-400 mb-2 w-96">
                                    {product.shortDescription}
                                </p>

                                <Image className="rounded-md w-auto carousel-item max-h-[50svh]" unoptimized width={100} height={100}
                                    src={product.mainImageUrl} alt={`Product Image - ${product.name}`}
                                    placeholder='blur' blurDataURL='/erickss-logo-compressed.png' />
                            </div>

                            <p className="text-gray-500 dark:text-gray-400">
                                {product.longDescription}
                            </p>
                        </div>
                    </div>
                </section>


                :
                <div>404 | Product Not Found</div>
            }
        </>
    );
}
