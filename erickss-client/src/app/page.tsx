import Image from "next/image";
import styles from '@/styles/main.module.scss'
import { url } from "inspector";


export default function Home() {
	return (
		<>
			<section id={styles.hero}>
				<div id={styles['hero-content']}>
					<div>Erick's Studio</div>
					<h1>We are your home and garden partner.</h1>
					<p>
						Want to turn your house into a haven and your garden into a flourishing paradise? <br/>
						Erick's Studio is your one-stop shop for creating dream spaces. <br/>
						We're your home and garden partner, offering expert design, top-quality products, 
						and the inspiration to bring your vision to life. <br/>
						Let's cultivate something beautiful together.
					</p>
					<button id={styles['call-to-action']}>Explore Design Ideas</button>
				</div>
			</section>
			<section id={styles['product-categories-section']}>
				<div id={styles['product-categories-left']}>
					<div className={styles['product-category-card']}>
						<div className={styles['product-category-card-image']} style={{backgroundImage: 'url(/images/charm42.jpg)'}}></div>
						<div className={styles['product-category-card-text']}>
							<h1>Flower Pots</h1>
							<p>We're your home and garden partner, offering expert design, top-quality products, and the inspiration to bring your vision to life.</p>
						</div>
					</div>
					<div className={styles['product-category-card']}>
						<div className={styles['product-category-card-image']} style={{backgroundImage: 'url(/images/water-features.jpg)'}}></div>
						<div className={styles['product-category-card-text']}>
							<h1>Water Features</h1>
							<p>We're your home and garden partner, offering expert design, top-quality products, and the inspiration to bring your vision to life.</p>
						</div>
					</div>
					<div className={styles['product-category-card']}>
						<div className={styles['product-category-card-image']} style={{backgroundImage: 'url(/images/birdbaths-feeders.jpg)'}}></div>
						<div className={styles['product-category-card-text']}>
							<h1>Birdbaths & Feeders</h1>
							<p>We're your home and garden partner, offering expert design, top-quality products, and the inspiration to bring your vision to life.</p>
						</div>
					</div>
					<div className={styles['product-category-card']}>
						<div className={styles['product-category-card-image']} style={{backgroundImage: 'url(/images/plants.jpg)'}}></div>
						<div className={styles['product-category-card-text']}>
							<h1>Plants</h1>
							<p>We're your home and garden partner, offering expert design, top-quality products, and the inspiration to bring your vision to life.</p>
						</div>
					</div>
					<div className={styles['product-category-card']}>
						<div className={styles['product-category-card-image']} style={{backgroundImage: 'url(/images/charm42.jpg)'}}></div>
						<div className={styles['product-category-card-text']}>
							<h1>Flower Pots</h1>
							<p>We're your home and garden partner, offering expert design, top-quality products, and the inspiration to bring your vision to life.</p>
						</div>
					</div>
					<div className={styles['product-category-card']}>
						<div className={styles['product-category-card-image']} style={{backgroundImage: 'url(/images/charm42.jpg)'}}></div>
						<div className={styles['product-category-card-text']}>
							<h1>Flower Pots</h1>
							<p>We're your home and garden partner, offering expert design, top-quality products, and the inspiration to bring your vision to life.</p>
						</div>
					</div>
				</div>
				<div id={styles['product-categories-right']}>
					<h1>We are your home and garden partner.</h1>
					<p>
						Want to turn your house into a haven and your garden into a flourishing paradise? <br/>
						Erick's Studio is your one-stop shop for creating dream spaces. <br/>
						We're your home and garden partner, offering expert design, top-quality products, 
						and the inspiration to bring your vision to life. <br/>
						Let's cultivate something beautiful together.
					</p>
				</div>
			</section>
		</>
	);
}
