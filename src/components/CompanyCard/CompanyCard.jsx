import styles from './CompanyCard.module.css'

const CompanyCard = ({ image, ...data }) => {
	return (
		<div className={styles.companyCard} {...data}>
			<img src={image} alt="companyCard" />
		</div>
	)
}

export default CompanyCard