import styles from './FirstScreen.module.css'
import Header from '@/components/Header/Header'
import CardSymbol from '@/assets/1.svg'
import points from '@/config/textPoints'
import CustomButton from '@/components/CustomButton/CustomButton'

const FirstScreen = () => {

	return (
		<>
			<Header></Header>
			<section className={styles.firstScreen}>
				<h1>
					<span>Соберите рабочий персонал</span>
					<span>на ваш объект на завтра</span>
					<span className={styles.gradientText}>за 10 минут</span>
				</h1>
				<div className={styles.subcontainer}>
					<div className={styles.textpoints}>
						{points.map((label, index) => (
							<div key={index} className={styles.textpoint}>
								{label}
							</div>
						))}
					</div>
					<CustomButton text='Попробовать за 1 ₽ первый месяц' className={styles.button}></CustomButton>
					<div className={styles.bottomInfo}>
						<div className={styles.bottomLeftInfoText}>Самая большая база рабочих рук с рейтингом в городе.</div>
						<div className={styles.bottomRightInfoCard}>
							<div className={styles.bottomRightInfoCardLeft}>
								<span className={styles.whyUs}>Почему мы?</span>
								<span className={styles.showcases}>Показатели</span>
								<span className={styles.clients}>довольных клиентов</span>
							</div>
							<div className={styles.bottomRightInfoCardRight}>
								<img src={CardSymbol} alt="card-symbol" />
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}

export default FirstScreen