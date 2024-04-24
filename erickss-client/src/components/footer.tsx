import styles from '@/styles/main.module.scss'
import { LogoFacebook, LogoInstagram } from '@carbon/icons-react';
import Link from 'next/link';


export default function Footer() {
    return (
        <footer>
            <section id={styles['erickss-footer-section']}>
                <div className={styles['footer-section-header']}>Studio Erickss</div>
                <div>
                    Transform your home into a sanctuary and your garden into a thriving paradise with Studio Erickss.
                    We're your all-in-one solution for expert design, premium products, and the inspiration to realize your dream spaces.
                    Let's create something beautiful together.
                </div>
            </section>
            <section id={styles['links-footer-section']}>
                <div className={styles['footer-section-header']}>Quick Links</div>
                <div>link 1</div>
                <div>link 2</div>
                <div>link 3</div>
            </section>
            <section id={styles['socials-footer-section']}>
                <div className={styles['footer-section-header']}>Socials</div>
                <Link href={'https://www.instagram.com/erickss.ke'} className={`${styles['footer-social']} ${styles['footer-social-instagram']}`}>
                    <LogoInstagram size={24} />Erickss - Instagram
                </Link>
                <Link href={'https://www.facebook.com/erickss.ke'} className={`${styles['footer-social']} ${styles['footer-social-facebook']}`}>
                    <LogoFacebook size={24} />Erickss - Facebook
                </Link>
            </section>
            <section id={styles['newsletter-footer-section']}>
                <div className={styles['footer-section-header']}>Newsletter</div>
            </section>
        </footer>
    );
}
