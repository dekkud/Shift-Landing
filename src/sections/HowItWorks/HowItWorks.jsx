import styles from './HowItWorks.module.css'
import howItWorksStepsImage from '@/assets/png/howItWorks.png'
import steps from '@/config/steps'

const HowItWorks = () => {

	return (
		<section className={styles.howItWorks}>
			<div className={styles.container}>

				<div className={styles.header}>
					<h1>Как это работает?</h1>
					<p>Наш сервис помогает быстро и просто собрать людей на завтра на ваш объект</p>
				</div>

				<div className={styles.subStepsContainer}>
					<div className={styles.stepsContainer}>
						{steps.map((step, index) => (
							<div className={styles.stepItems} key={index}>
								<div className={styles.subStepNumber}>
									<div className={styles.stepNumber}>{index + 1}</div>
								</div>
								<div className={styles.stepInfo}>
									<h1>{step.title}</h1>
									<p>{step.text}</p>
								</div>
							</div>
						))}
					</div>
					<div className={styles.imgContainer}>
						<img src={howItWorksStepsImage} alt="steps" className={styles.stepsImg} />
					</div>
				</div>

			</div>
		</section>

	)
}

export default HowItWorks