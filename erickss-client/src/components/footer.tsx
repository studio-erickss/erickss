import styles from '@/styles/main.module.scss'
import { LogoFacebook, LogoInstagram } from '@carbon/icons-react';
import Link from 'next/link';


export default function Footer() {
    return (
        <footer>
            <section id={styles['erickss-footer-section']}>
                <div className={styles['footer-section-header']}>Studio Erickss</div>
                <div>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus vero aut hic maxime amet quibusdam sapiente porro corporis iure. Totam veniam dolor deserunt nemo voluptas. Exercitationem architecto recusandae reprehenderit illum.</div>
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
