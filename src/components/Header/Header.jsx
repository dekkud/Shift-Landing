import styles from './Header.module.css'
import logo from '../../assets/logo.svg'

const Header = () => {

	const buttons = [
		"О нас",
		"Клиенты",
		"Кейсы",
		"Отзывы",
		"Спецпредложение",
		"Тарифы",
	]

	return (
		<section className={styles.header}>
			<div className={styles.container}>
				<img src={logo} alt="Logo" />
				<div className={styles.buttons}>
					{buttons.map((label) => (
						<div
							key={label}
							className={styles.button}
							style={{ color: label === "Кейсы" ? '#2985FF' : undefined }}
						>
							{label}
						</div>
					))}

				</div>
			</div>
		</section>
	)
}

export default Header