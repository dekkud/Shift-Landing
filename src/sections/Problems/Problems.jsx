import styles from './Problems.module.css'
import ProblemCard from '../../components/ProblemCard/ProblemCard'

const Problems = () => {

	const cardProblems = [
		'Простой в производстве/стройке/\nна складе из-за нехватки рабочих \nрук?',
		'Срываете сроки из-за невыходов людей?',
		'Сегодня нужен 1, завтра 5, послезавтра 2?',
		'Каждый раз разбегаются?',
		'Получили деньги, обещали выйти и сегодня не вышли?',
		'Ушли в загул не предупредив?',
		'Обзвонили 20, обещали выйти 10, вышли 2?',
		'Стрессуете по этим всем вопросам каждый день? ХВАТИТ!',
	]

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