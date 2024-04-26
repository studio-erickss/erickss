import React from 'react';
import styles from '@/styles/main.module.scss'


function CustomProductCard() {
    return (
        <div className={`${styles['custom-product-card']}  bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700`}>
            <a href="#" className="flex flex-col items-center md:flex-row">
                <img className="object-cover w-full rounded-t-lg h-48 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src="/images/custom-abstract.jpeg" alt="" />
                <div className="flex flex-col justify-between p-4 leading-normal">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Didn't find what you were looking for?</h5>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">No worries, contact us and we will be happy to design and build custom ones just for you.</p>
                </div>
            </a>
        </div>

    );
}

export default CustomProductCard;