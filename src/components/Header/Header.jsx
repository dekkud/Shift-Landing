import styles from './Header.module.css'
import logo from '@/assets/logo.svg'
import burgerMenu from '@/assets/burgermenu.svg'

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
				<img src={burgerMenu} alt="menu" className={styles.burgerMenu} />
			</div>
		</section>
	)
}

export default Header