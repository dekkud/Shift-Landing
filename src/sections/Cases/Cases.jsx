import CaseCard from '@/components/CaseCard'
import styles from './Cases.module.css'
import cardCase from '@/config/cardCase'

const Cases = () => {
	return (
		<div className={styles.cases}>
			<div className={styles.subCases}>
				<h1>Кейсы</h1>
				<div className={styles.caseList}>
					{cardCase.map((item, index) => (
						<CaseCard
							key={index}
							data={item}
							index={index}
						/>
					))}
				</div>
			</div>
		</div>
	)
}

export default Cases