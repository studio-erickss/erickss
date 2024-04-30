'use client'
import ContactForm from '@/components/contact-form';
import React from 'react';

export default function ContactUs() {
    return (
        <section className="w-full h-full" style={{ backgroundImage: 'url(/images/undraw_contact_us_re_4qqt.svg)', }}>
            <ContactForm />
        </section>
    );
}
