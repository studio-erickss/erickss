import styles from '@/styles/main.module.scss'
import { HomeBento } from "@/components/home-bento";
import { Grid2 } from '@/components/grid2';
import Link from 'next/link';


export default function Home() {
	return (
		<>
			<div id={styles.hero}>
				<div id={styles['hero-main']}>
					<div id={styles['hero-main-general']}>
						<div id={styles['hero-main-general-text-container']} className='bg-base-100'>
							<h1 id={styles['hero-main-general-text-main']}>We are your <span style={{ color: 'var(--light-orange)' }}>home</span> and <span style={{ color: 'var(--dark-green)' }}>garden</span> partner.</h1>
							<div id={styles['hero-main-general-text-sub']}>
								<p >
									Transform your home into a sanctuary and your garden into a thriving paradise with Studio Erickss.
									We're your all-in-one solution for expert design, premium products, and the inspiration to realize your dream spaces.
									Let's create something beautiful together.
								</p>
								<div id={styles.ctabtns}>
									<Link className="btn btn-accent" href='/design-services'>Custom Design</Link>
									<Link className="btn btn-primary" href='/products'>Shop Our Products</Link>
								</div>
							</div>
						</div>
					</div>
					<div id={styles['hero-main-categories']}>
						<div className={styles['hero-main-category']} style={{backgroundImage: 'url(/images/water-features.jpg)'}}>
							<div className={`${styles['hero-main-category-label']} glass`}>Water Features</div>
						</div>
						<div className={styles['hero-main-category']} style={{backgroundImage: 'url(/images/charm42.jpg)'}}>
						<div className={`${styles['hero-main-category-label']} glass`}>Flower Pots</div>
						</div>
						<div className={styles['hero-main-category']} style={{backgroundImage: 'url(/images/birdbaths-feeders.jpg)'}}>
						<div className={`${styles['hero-main-category-label']} glass`}>Birdbaths & Feeders</div>
						</div>
						<div className={styles['hero-main-category']} style={{backgroundImage: 'url(/images/water-features.jpg)'}}>
						<div className={`${styles['hero-main-category-label']} glass`}>Furniture & Sculptures</div>
						</div>
					</div>
				</div>
				<HomeBento />
			</div>
		</>
	);
}

// Custom Products
// Are you looking for a particular custom design or products in non-standard dimensions not found in our inventory? Feel free to inform us, and we’ll collaborate with you to create items tailored to your exact specifications.

// Order Custom Product
// Design Services
// We offer our expertise in both space design and product selection, catering to your specific space, budget, and lifestyle requirements. Our dedicated team is committed to assisting you in crafting the ideal living environment.

// Request Design Help