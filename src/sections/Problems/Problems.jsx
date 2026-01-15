import styles from './Problems.module.css'
import ProblemCardSymbol from '../../assets/2_1.svg'
import SecondProblemCardSymbol from '../../assets/2_2.svg'

const Problems = () => {

	const cardProblems = [
		'Простой в производстве/стройке/на складе из-за нехватки рабочих рук?',
		'Срываете сроки из-за невыходов людей?',
		'Сегодня нужен 1, завтра 5, послезавтра 2?',
		'Каждый раз разбегаются?',
		'Получили деньги, обещали выйти и сегодня не вышли?',
		'Ушли в загул не предупредив?',
		'Обзвонили 20, обещали выйти 10, вышли 2?',
		'Стрессуете по этим всем вопросам каждый день?  ХВАТИТ!',
	]

	return (
		<div className={styles.problems}>
			<div className={styles.container}>
				<div className={styles.problemstext}>Проблемы,</div>
				<div className={styles.solutions}>которые мы поможем решить</div>
				<div className={styles.problemCardsBlock}>
					{cardProblems.map((label, index) => (
						<div key={index} className={styles.problemCard} style={{
							backgroundColor: index === cardProblems.length - 1 ? '#2985FF' : undefined,
							color: index === cardProblems.length - 1 ? '#FFFFFF' : undefined
						}}>
							<div className={styles.problemCardSubBlock}>{label}</div>
							{index === cardProblems.length - 1 ?
								<img src={SecondProblemCardSymbol} className={styles.ProblemCardSymbol} alt="symbol" /> :
								<img src={ProblemCardSymbol} className={styles.ProblemCardSymbol} alt="symbol" />}	
						</div>
					))}
				</div>
			</div>
		</div>
	)
}

export default Problems