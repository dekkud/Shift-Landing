import CustomButton from '@/components/CustomButton/CustomButton'
import styles from './Try.module.css'

const Try = () => {
	return (
		<div className={styles.try}>
			<div className={styles.contentContainer}>
				<div className={styles.textWrapper}>
					<h1>Попробуйте SHIFT за 1 ₽ в первый месяц</h1>
					<p>
						+ Получите инструкцию «Как стабилизировать выход рабочих
						на свой обьект, и на что обратить внимание при их назначении»
					</p>
				</div>

				<CustomButton text='Получить доступ за 1 ₽' className={styles.button} />
			</div>
		</div>
	)
}

export default Try