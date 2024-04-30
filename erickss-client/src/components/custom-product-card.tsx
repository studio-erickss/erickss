import React from 'react';
import styles from '@/styles/main.module.scss'
import Image from 'next/image';


function CustomProductCard() {
    return (
        // <div className={`${styles['custom-product-card']}  bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700`}>
            <a href="/design-services" className={`${styles['custom-product-card']} flex flex-col justify-center flex-1 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700`}>
                <div className='flex-1 relative min-w-75' id={styles['custom-card-image']}>
                    {/* <Image className="object-cover rounded-t-lg absolute" src="/images/protruding-squares.svg" alt="" fill/> */}
                </div>
                <div className="flex flex-col p-4 leading-normal">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Didn't find what you were looking for?</h5>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                        We design spaces and products to fit your needs, budget, and lifestyle.
                        Contact us today and let's collaborate to create your dream environment.
                    </p>
                </div>
            </a>
        // </div>

    );
}

export default CustomProductCard;