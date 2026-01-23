import styles from './Benefits.module.css'
import Marquee from '@/components/Marquee/Marquee';
import BenefitCard from '@/components/BenefitCard/BenefitCard'
import cardBenefits from '@/config/cardBenefits'

const Benefits = () => {
	return (
		<>
			<div className={styles.benefits}>
				<div className={styles.benefitsSub}>
					<BenefitCard cardBenefits={cardBenefits}></BenefitCard>
				</div>
			</div>
			<Marquee />
		</>
	)
}

export default Benefits