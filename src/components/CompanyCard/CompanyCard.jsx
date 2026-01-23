import styles from './CompanyCard.module.css'

const CompanyCard = ({ image }) => {
	return (
		<div className={styles.companyCard}>
			<img src={image} alt="companyCard"/>
		</div>
	)
}

export default CompanyCard