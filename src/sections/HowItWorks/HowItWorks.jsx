import styles from './HowItWorks.module.css'
import howItWorksStepsImage from '../../assets/png/howItWorks.png'

const HowItWorks = () => {
	return (
		<section className={styles.howItWorks}>
			<div className={styles.container}>
				<div className={styles.header}>
					<h1 className={styles.text1}>Как это работает?</h1>
					<p className={styles.text2}>
						Наш сервис помогает быстро и просто собрать людей на завтра на ваш объект
					</p>
				</div>

				<div className={styles.subStepsContainer}>
					<div className={styles.stepsContainer}></div>
					<img
						src={howItWorksStepsImage}
						alt="steps"
						className={styles.stepsImg}
					/>
				</div>
			</div>
		</section>

	)
}

export default HowItWorks