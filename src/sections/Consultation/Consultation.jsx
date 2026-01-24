import CustomButton from '@/components/CustomButton'
import styles from './Consultation.module.css'

const Consultation = () => {
	return (
		<div className={styles.consultation}>
			<div className={styles.consultationForm}>
				<div className={styles.consultationText}>
					<h1>Нужна консультация?</h1>
					<p>Оставьте заявку — расскажем<br />
						о возможностях для крупных объёмов.</p>
				</div>
				<div className={styles.consultationFormApply}>
					<form>
						<label htmlFor="user-name" className={styles.label}>Электронная почта</label>
						<input
							id="user-name"
							type="text"
							placeholder="Алексей"
							className={styles.input}
							required
						/>

						<label htmlFor="user-number" className={styles.label}>Телефон</label>
						<input
							id="user-number"
							type="tel"
							placeholder="+7 (999) 000-00-00"
							className={styles.input}
							required
						/>
						<label htmlFor="user-text" className={styles.label}>Сообщение</label>
						<textarea
							id="user-text"
							type="text"
							placeholder="Мне нужна помощь"
							className={styles.textarea}
							required
						/>
						<div className={styles.checkboxWrapper}>
							<input
								id="agreement"
								type="checkbox"
								className={styles.checkbox}
								required
							/>
							<label htmlFor="agreement" className={styles.checkboxLabel}>
								Согласен на обработку
							</label>
						</div>
						<CustomButton text="Отправить заявку" className={styles.button} />
					</form>
				</div>
			</div>
		</div>
	)
}

export default Consultation