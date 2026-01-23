import styles from './ProblemCard.module.css'
import ProblemCardSymbol from '@/assets/2.svg'
import SecondProblemCardSymbol from '@/assets/1.svg'

const ProblemCard = ({ cardProblems = [] }) => {

	const formatText = (text) =>
		text.split('\n').map((line, i) => <span key={i}>{line}<br /></span>);

	return (
		cardProblems.map((label, index) => (
			<div
				key={index}
				className={styles.problemCard}
				style={{
					backgroundColor: index === cardProblems.length - 1 ? '#2985FF' : undefined,
					color: index === cardProblems.length - 1 ? '#FFFFFF' : undefined
				}}
			>
				<div className={styles.problemCardSubBlock}>{formatText(label)}</div>
				<img
					src={index === cardProblems.length - 1 ? SecondProblemCardSymbol : ProblemCardSymbol}
					className={styles.problemCardSymbol}
					alt="symbol"
				/>
			</div>
		))
	)
}

export default ProblemCard