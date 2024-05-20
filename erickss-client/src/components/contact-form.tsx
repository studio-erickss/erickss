import Link from 'next/link';
import React from 'react';

export default async function ContactForm() {
    return (
        <div className="py-8 px-4 mx-auto max-w-screen-md glass rounded-2xl">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">Contact Us</h2>
            <p className="mb-8 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
                This form is currently disabled. 
                For custom design requests, updates on your purchases, or inquiry, please leave us a message via our communication channels and we will get back to you right away.
                Call <a href="tel:+254717543033" target="_blank" style={{ fontWeight: 'bold' }}>+254 717 543 033</a> or
                Email <a href="mailto:info@erickss.com" style={{ fontWeight: 'bold' }} target="_blank">info@erickss.com</a> or
                <Link aria-label="Chat on WhatsApp" href="https://wa.me/254746767352" target="_blank" className='underline'> WhatsApp us.</Link>
            </p>
            <form action="#" className="space-y-2 flex flex-col gap-1">
                <label className="input input-bordered flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg>
                    <input type="text" className="grow" placeholder="email@example.com" />
                    <span className="badge badge-info bg-accent">email</span>
                </label>
                <label className="input input-bordered flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" /></svg>
                    <input type="text" className="grow" placeholder="John Doe" />
                    <span className="badge badge-info bg-accent">name</span>
                </label>
                <div className="sm:col-span-2">
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Your message</label>
                    <textarea disabled id="message" rows={6} className="block p-2.5 w-full text-base text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Let us know how we can help you..."></textarea>
                </div>
                <button type="submit" className="bg-secondary self-end py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 btn-disabled">Send message</button>
            </form>
        </div>
    );
}
