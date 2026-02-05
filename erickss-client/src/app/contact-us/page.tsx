import ContactForm from '@/components/contact-form';
import { Metadata } from 'next';
import React from 'react';


export const metadata: Metadata = {
    title: "Contact Us"
}

export default function ContactUs() {
    return (
        <section className="w-full h-full">
            <ContactForm />
        </section>
    );
}
