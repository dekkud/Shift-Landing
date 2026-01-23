import styles from './BenefitCard.module.css'
import CardSymbol from '@/assets/1.svg'
import clsx from 'clsx';

const BenefitCard = ({ cardBenefits = [] }) => {

	const formatText = (text) =>
		text.split('\n').map((line, i) => <span key={i}>{line}<br /></span>);

	return (
		<>
			{cardBenefits.map(({ header, desc, isActive }, index) => (
				<div key={index} className={clsx(styles.benefitsCard, isActive && styles.activeBenefitsCard)}>

					{!isActive && <div className={styles.symbol}>
						<img src={CardSymbol} alt="CardSymbol" /></div>}

					<h1>
						{formatText(header)}
					</h1>

					<p>
						{formatText(desc)}
					</p>
				</div>
			))}
		</>
	)
}

export default BenefitCard