import Link from 'next/link';
import React from 'react';

export default async function ContactForm() {
    return (
        // <div className="py-8 px-4 mx-auto max-w-screen-md glass rounded-2xl">
        //     <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">Contact Us</h2>
        //     <p className="mb-8 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
        //         This form is currently disabled.
        //         For custom design requests, updates on your purchases, or inquiry, please leave us a message via our communication channels and we will get back to you right away.
        //         Call <a href="tel:+254717543033" target="_blank" style={{ fontWeight: 'bold' }}>+254 717 543 033</a> or
        //         Email <a href="mailto:info@erickss.com" style={{ fontWeight: 'bold' }} target="_blank">info@erickss.com</a> or
        //         <Link aria-label="Chat on WhatsApp" href="https://wa.me/254746767352" target="_blank" className='underline'> WhatsApp us.</Link>
        //     </p>
        //     <form action="#" className="space-y-2 flex flex-col gap-1">
        //         <label className="input input-bordered flex items-center gap-2">
        //             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg>
        //             <input type="text" className="grow" placeholder="email@example.com" />
        //             <span className="badge badge-info bg-accent">email</span>
        //         </label>
        //         <label className="input input-bordered flex items-center gap-2">
        //             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" /></svg>
        //             <input type="text" className="grow" placeholder="John Doe" />
        //             <span className="badge badge-info bg-accent">name</span>
        //         </label>
        //         <div className="sm:col-span-2">
        //             <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Your message</label>
        //             <textarea disabled id="message" rows={6} className="block p-2.5 w-full text-base text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Let us know how we can help you..."></textarea>
        //         </div>
        //         <button type="submit" className="bg-secondary self-end py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 btn-disabled">Send message</button>
        //     </form>
        // </div>



        <div className="">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="relative mx-auto mb-12 w-fit">
                    <h2 className="text-base-content text-2xl font-bold md:text-3xl lg:text-4xl">Contact Us</h2>
                    <span
                        className="from-primary/40 to-primary/5 absolute start-0 top-9 h-1 w-full rounded-full bg-gradient-to-r"
                    ></span>
                </div>

                <div className="grid items-center gap-6 lg:gap-12 lg:grid-cols-2">
                    <div>
                        <h3 className="text-base-content mb-6 text-2xl font-semibold">Happy to help you!</h3>
                        <p className="text-base-content/80 mb-10 text-lg font-medium">
                            For custom design requests, updates on your purchases, or inquiry, please leave us a message via our communication channels and we will get back to you right away.
                            Call <a href="tel:+254717543033" target="_blank" style={{ fontWeight: 'bold' }}>+254 717 543 033</a> or
                            Email <a href="mailto:info@erickss.com" style={{ fontWeight: 'bold' }} target="_blank">info@erickss.com</a> or
                            <Link aria-label="Chat on WhatsApp" href="https://wa.me/254746767352" target="_blank" className='underline'> WhatsApp us.</Link>
                        </p>
                    </div>

                    <div className="grid gap-2 sm:grid-cols-2">
                            <div className="card shadow-none">
                                <div className="card-body p-2 items-center gap-1">
                                    <div className="avatar avatar-placeholder">
                                        <div className="border-primary/20 text-primary w-9 rounded-full border">
                                            {/*<span className="icon-[tabler--clock] text-primary size-6"></span>*/}
                                            <svg xmlns="http://www.w3.org/2000/svg"
                                                 viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                                 stroke-linecap="round" stroke-linejoin="round"
                                                 className="icon icon-tabler icons-tabler-outline icon-tabler-clock">
                                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                                <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"/>
                                                <path d="M12 7v5l3 3"/>
                                            </svg>
                                        </div>
                                    </div>
                                    <h4 className="text-base-content text-lg font-medium">Office Hours</h4>
                                    <div className="text-center">
                                        <p className="text-base-content/80">Monday-Friday</p>
                                        <p className="text-base-content/80">9:00 am to 5:00 pm</p>
                                    </div>
                                </div>
                            </div>

                            <div className="card shadow-none">
                                <div className="card-body p-2 items-center gap-1">
                                    <div className="avatar avatar-placeholder">
                                        <div className="border-primary/20 text-primary w-9 rounded-full border">
                                            {/*<span className="icon-[tabler--map-pin] text-primary size-6"></span>*/}
                                            <svg xmlns="http://www.w3.org/2000/svg"
                                                 viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                                 stroke-linecap="round" stroke-linejoin="round"
                                                 className="icon icon-tabler icons-tabler-outline icon-tabler-map-pin">
                                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                                <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"/>
                                                <path
                                                    d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0"/>
                                            </svg>
                                        </div>
                                    </div>
                                    <h4 className="text-base-content text-lg font-medium">Our Address</h4>
                                    <address className="text-base-content/80 text-center not-italic">
                                        Gataka Rd, Ongata Rongai
                                        <br/>
                                        Nairobi, Kenya
                                    </address>
                                </div>
                            </div>

                            <div className="card shadow-none">
                                <div className="card-body p-2 items-center gap-1">
                                    <div className="avatar avatar-placeholder">
                                        <div className="border-primary/20 text-primary w-9 rounded-full border">
                                            {/*<span className="icon-[tabler--phone] text-primary size-6"></span>*/}
                                            <svg xmlns="http://www.w3.org/2000/svg"
                                                 viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                                 stroke-linecap="round" stroke-linejoin="round"
                                                 className="icon icon-tabler icons-tabler-outline icon-tabler-phone">
                                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                                <path
                                                    d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2"/>
                                            </svg>
                                        </div>
                                    </div>
                                    <h4 className="text-base-content text-lg font-medium">Get in Touch</h4>
                                    <div className="text-center">
                                        <p className="text-base-content/80">+254717543033</p>
                                        <p className="text-base-content/80">+254746767352</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                </div>
            </div>
        </div>
    );
}
