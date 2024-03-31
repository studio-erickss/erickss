import Image from "next/image";
import styles from '@/styles/main.module.scss'
import { url } from "inspector";
import { ShoppingCartPlus } from "@carbon/icons-react";


export default function Home() {
	return (
		<>
			<section id={styles.hero}>
				<div id={styles['hero-content']}>
					<div>Studio Erickss</div>
					<h1>We are your home and garden partner.</h1>
					<p>
						Want to turn your house into a haven and your garden into a flourishing paradise? <br />
						Erick's Studio is your one-stop shop for creating dream spaces. <br />
						We're your home and garden partner, offering expert design, top-quality products,
						and the inspiration to bring your vision to life. <br />
						Let's cultivate something beautiful together.
					</p>
					<div id={styles['call-to-action-container']} >
						{/* <button className={styles['tertiary-button']}>Contact Us</button> */}
						<button className={styles['secondary-button']}>Request Custom Design</button>
						<button className={styles['primary-button']}>Shop Our Products</button>
					</div>
				</div>
			</section>

			<section id={styles['product-categories-section']} className={`${styles.spacer} ${styles['wave-pale-aqua']}`}>
				<div id={styles['product-categories-left']}>
					<div className={styles['product-category-card']}>
						<div className={styles['product-category-card-image']} style={{ backgroundImage: 'url(/images/charm42.jpg)' }}></div>
						<div className={styles['product-category-card-text']}>
							<h1>Flower Pots</h1>
							<p>We're your home and garden partner, offering expert design, top-quality products, and the inspiration to bring your vision to life.</p>
						</div>
					</div>
					<div className={styles['product-category-card']}>
						<div className={styles['product-category-card-image']} style={{ backgroundImage: 'url(/images/water-features.jpg)' }}></div>
						<div className={styles['product-category-card-text']}>
							<h1>Water Features</h1>
							<p>We're your home and garden partner, offering expert design, top-quality products, and the inspiration to bring your vision to life.</p>
						</div>
					</div>
					<div className={styles['product-category-card']}>
						<div className={styles['product-category-card-image']} style={{ backgroundImage: 'url(/images/birdbaths-feeders.jpg)' }}></div>
						<div className={styles['product-category-card-text']}>
							<h1>Birdbaths & Feeders</h1>
							<p>We're your home and garden partner, offering expert design, top-quality products, and the inspiration to bring your vision to life.</p>
						</div>
					</div>
					<div className={styles['product-category-card']}>
						<div className={styles['product-category-card-image']} style={{ backgroundImage: 'url(/images/plants.jpg)' }}></div>
						<div className={styles['product-category-card-text']}>
							<h1>Plants</h1>
							<p>We're your home and garden partner, offering expert design, top-quality products, and the inspiration to bring your vision to life.</p>
						</div>
					</div>
					<div className={styles['product-category-card']}>
						<div className={styles['product-category-card-image']} style={{ backgroundImage: 'url(/images/charm42.jpg)' }}></div>
						<div className={styles['product-category-card-text']}>
							<h1>Furniture</h1>
							<p>We're your home and garden partner, offering expert design, top-quality products, and the inspiration to bring your vision to life.</p>
						</div>
					</div>
					<div className={styles['product-category-card']}>
						<div className={styles['product-category-card-image']} style={{ backgroundImage: 'url(/images/charm42.jpg)' }}></div>
						<div className={styles['product-category-card-text']}>
							<h1>Sculptures</h1>
							<p>We're your home and garden partner, offering expert design, top-quality products, and the inspiration to bring your vision to life.</p>
						</div>
					</div>
				</div>
				<div id={styles['product-categories-right']}>
					<h1>We are your home and garden partner.</h1>
					<p>
						Want to turn your house into a haven and your garden into a flourishing paradise? <br />
						Erick's Studio is your one-stop shop for creating dream spaces. <br />
						We're your home and garden partner, offering expert design, top-quality products,
						and the inspiration to bring your vision to life. <br />
						Let's cultivate something beautiful together.
					</p>
				</div>
			</section>

			<section id={styles['popular-products-section']} className={`${styles.spacer} ${styles['wave-light-sea-green']}`}>
				<div id={styles['popular-products']}>
					<h2>POPULAR PRODUCTS</h2>
					<div id={styles['popular-products-cards']}>
						<div className={styles['popular-product-card']}>
							<div className={styles['popular-product-card-image']} style={{ backgroundImage: 'url(/images/charm42.jpg)' }}></div>
							<div className={styles['popular-product-card-text']}>
								<p className={styles['popular-product-card-category']}>category</p>
								<div className={styles['popular-product-card-title']}>Flower Pots</div>
								<p>Ksh. 2,024</p>
								<button className={`${styles['primary-button']} ${styles['order-button']}`}><ShoppingCartPlus size={24} />Order</button>
							</div>
						</div>
						<div className={styles['popular-product-card']}>
							<div className={styles['popular-product-card-image']} style={{ backgroundImage: 'url(/images/water-features.jpg)' }}></div>
							<div className={styles['popular-product-card-text']}>
								<p className={styles['popular-product-card-category']}>category</p>
								<div className={styles['popular-product-card-title']}>Water Features</div>
								<p>Ksh. 2,024</p>
								<button className={`${styles['primary-button']} ${styles['order-button']}`}><ShoppingCartPlus size={24} />Order</button>
							</div>
						</div>
						<div className={styles['popular-product-card']}>
							<div className={styles['popular-product-card-image']} style={{ backgroundImage: 'url(/images/birdbaths-feeders.jpg)' }}></div>
							<div className={styles['popular-product-card-text']}>
								<p className={styles['popular-product-card-category']}>category</p>
								<div className={styles['popular-product-card-title']}>Birdbaths & Feeders</div>
								<p>Ksh. 2,024</p>
								<button className={`${styles['primary-button']} ${styles['order-button']}`}><ShoppingCartPlus size={24} />Order</button>
							</div>
						</div>
						<div className={styles['popular-product-card']}>
							<div className={styles['popular-product-card-image']} style={{ backgroundImage: 'url(/images/charm42.jpg)' }}></div>
							<div className={styles['popular-product-card-text']}>
								<p className={styles['popular-product-card-category']}>category</p>
								<div className={styles['popular-product-card-title']}>Flower Pots</div>
								<p>Ksh. 2,024</p>
								<button className={`${styles['primary-button']} ${styles['order-button']}`}><ShoppingCartPlus size={24} />Order</button>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section id={styles['benefits-section']} className={`${styles.spacer} ${styles['wave-pale-aqua']}`}>
				<div>
					<div className={styles['benefit-image']}>Image</div>
					<div className={styles['benefit-title']}>Fast Delivery</div>
					<div className={styles['benefit-text']}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa repellendus earum ipsa iusto! Illum veritatis quos asperiores dignissimos possimus doloribus. Sapiente debitis reprehenderit ipsum quis quasi iusto temporibus sequi? Neque?</div>
				</div>
				<div>
					<div className={styles['benefit-image']}>Image</div>
					<div className={styles['benefit-title']}>Order Tracking</div>
					<div className={styles['benefit-text']}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa repellendus earum ipsa iusto! Illum veritatis quos asperiores dignissimos possimus doloribus. Sapiente debitis reprehenderit ipsum quis quasi iusto temporibus sequi? Neque?</div>
				</div>
				<div>
					<div className={styles['benefit-image']}>Image</div>
					<div className={styles['benefit-title']}>Secure Payment</div>
					<div className={styles['benefit-text']}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa repellendus earum ipsa iusto! Illum veritatis quos asperiores dignissimos possimus doloribus. Sapiente debitis reprehenderit ipsum quis quasi iusto temporibus sequi? Neque?</div>
				</div>
				<div>
					<div className={styles['benefit-image']}>Image</div>
					<div className={styles['benefit-title']}>Big Discounts</div>
					<div className={styles['benefit-text']}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa repellendus earum ipsa iusto! Illum veritatis quos asperiores dignissimos possimus doloribus. Sapiente debitis reprehenderit ipsum quis quasi iusto temporibus sequi? Neque?</div>
				</div>
			</section>
		</>
	);
}

// Custom Products
// Are you looking for a particular custom design or products in non-standard dimensions not found in our inventory? Feel free to inform us, and we’ll collaborate with you to create items tailored to your exact specifications.

// Order Custom Product
// Design Services
// We offer our expertise in both space design and product selection, catering to your specific space, budget, and lifestyle requirements. Our dedicated team is committed to assisting you in crafting the ideal living environment.

// Request Design Help