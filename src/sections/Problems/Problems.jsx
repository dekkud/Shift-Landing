import styles from './Problems.module.css'
import ProblemCard from '@/components/ProblemCard/ProblemCard'
import cardProblems from '@/config/cardProblems'

const Problems = () => {

	return (
		<div className={styles.problems}>
			<div className={styles.container}>
				<div className={styles.problemstext}>Проблемы,</div>
				<div className={styles.solutions}>которые мы поможем решить</div>
				<div className={styles.problemCardsBlock}>
					<ProblemCard cardProblems={cardProblems}></ProblemCard>
				</div>
			</div>
		</div>
	)
}

export default Problems