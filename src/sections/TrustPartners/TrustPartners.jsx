import CompanyCard from '@/components/CompanyCard/CompanyCard'
import styles from './TrustPartners.module.css'
import partners from '@/config/infoPartners';

const TrustPartners = () => {

	return (
		<div className={styles.trustPartners}>
			<div className={styles.subTrustPartners}>
				<h1>Кто нам доверяет?</h1>
				{partners.map((partner, index) => (
					<div className={styles.partnersLine} key={index}>
						<h2>{partner.title}</h2>
						<div className={styles.cImgs}>
							{partner.images.map((img, imgIndex) => (
								<CompanyCard key={imgIndex} image={img} />
							))}
						</div>
					</div>
				))}
			</div>
		</div>
	);
}

export default TrustPartners
