import Image from "next/image";
import styles from '@/styles/main.module.scss'
import Link from "next/link";



export default function Header() {
    return (
        <>
            <div id={styles['utility-bar']}>
                WhatsApp <a href="tel:+2547467352" style={{fontWeight: 'bold'}}>+254 746 7352</a> or 
                Email <a href="mailto:sales@erickss.com" style={{fontWeight: 'bold'}}>sales@erickss.com</a>
            </div>
            <header>
                <Link href='/'><Image src='/erickss-logo.png' alt="Erick's Studio logo" width={100} height={60}/></Link>
                <div>
                    <nav>
                        <Link href='/home'>HOME</Link>
                        <Link href='/garden'>GARDEN</Link>
                        <Link href='/landscape'>LANDSCAPE</Link>
                        <Link href='/design'>DESIGN</Link>
                    </nav>

                </div>
            </header>
        </>
    );
}