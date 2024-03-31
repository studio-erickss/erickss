import Image from "next/image";
import styles from '@/styles/main.module.scss'
import Link from "next/link";
import { Menu } from '@carbon/icons-react'


export default function Header() {
    return (
        <>
            <div id={styles['utility-bar']}>
                WhatsApp <a href="tel:+2547467352" style={{fontWeight: 'bold'}}>+254 746 7352</a> or 
                Email <a href="mailto:info@erickss.com" style={{fontWeight: 'bold'}}>info@erickss.com</a>
            </div>
            <header>
                <Link href='/'><Image src='/erickss-logo.png' alt="Erick's Studio logo" width={100} height={60}/></Link>
                <div>
                    <nav>
                        <Link href='/products'>PRODUCTS</Link>
                        <Link href='/design'>DESIGN SERVICES</Link>
                    </nav>
                    <Menu id={styles.hamburger} size={32}/>
                </div>
            </header>
        </>
    );
}