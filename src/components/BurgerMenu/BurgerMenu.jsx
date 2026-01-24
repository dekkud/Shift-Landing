import styles from './BurgerMenu.module.css'
import logo from '@/assets/logo.svg'
import buttons from '@/config/buttonsMenu'

const BurgerMenu = () => {
	return (
		<div className={styles.burgerMenu}>
			<img src={logo} alt="logo" className={styles.logo} />
			<div className={styles.buttons}>
				{buttons.map((button, index) => (
					<div className={styles.button} key={index} style={{ color: button === "Кейсы" ? '#2985FF' : undefined }}>{button}</div>
				))}
			</div>

		</div>
	)
}

export default BurgerMenu