import styles from './FirstScreen.module.css'
import Header from '../../components/Header/Header'
import CardSymbol from '../../assets/1.svg'

const FirstScreen = () => {

	const points = [
		'без публикации вакансий, модерации и платы за нее и усиления на сайтах объявлений;',
		'без надежды на «выйдут - не выйдут» в разных чатах;',
		'без собеседований 100 человек чтобы вышли 5;',
		'без боли - сказали выйдут 10, а вышли 3.',
	]

	return (
		<>
			<Header></Header>
			<div className={styles.FirstScreen}>
				<h1>
					<span>Соберите рабочий персонал</span>
				</h1>
				<h1>
					<span>на ваш объект на завтра</span>
				</h1>
				<h1>
					<span className={styles.gradientText}>за 10 минут</span>
				</h1>
				<div className={styles.textpoints}>
					{points.map((label) => (
						<div key={label} className={styles.textpoint}>
							{label}
						</div>
					))}
				</div>
				<button className={styles.trybutton}>Попробовать за 1 ₽ первый месяц</button>
				<div className={styles.bottomInfo}>
					<div className={styles.bottomLeftInfoText}>Самая большая база рабочих рук с рейтингом в городе.</div>
					<div className={styles.bottomRightInfoCard}>
						<div className={styles.bottomRightInfoCardLeft}>
								<span className={styles.whyUs}>Почему мы?</span>
								<span className={styles.showcases}>Показатели</span>
								<span className={styles.clients}>довольных клиентов</span>
						</div>
						<div className={styles.bottomRightInfoCardRight}>
							<img src={CardSymbol} alt="" srcset="" />
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default FirstScreen