import styles from './Header.module.css'
import logo from '../../assets/logo.svg'

const Header = () => {

	const buttons = [
		{ id: 1, label: "О нас" },
		{ id: 2, label: "Клиенты" },
		{ id: 3, label: "Кейсы" },
		{ id: 4, label: "Отзывы" },
		{ id: 5, label: "Спецпредложение" },
		{ id: 6, label: "Тарифы" },
	]

	return (
		<div className={styles.header}>
			<div className={styles.container}>
				<img src={logo} alt="Logo" />
				<div className={styles.buttons}>
					{buttons.map((button) => (
						<div
							key={button.id}
							className={styles.button}
							style={{ color: button.id === 3 ? '#2985FF' : undefined }}
						>
							{button.label}
						</div>
					))}

				</div>
			</div>
		</div>
	)
}

export default Header