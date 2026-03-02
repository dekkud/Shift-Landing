import styles from './BurgerMenu.module.css'
import logo from '@/assets/logo.svg'
import buttons from '@/config/buttonsMenu'
import { usePortal } from '@/hooks/usePortal'
import { createPortal } from 'react-dom'

const BurgerMenu = ({ closeMenu }) => {

	const target = usePortal();

	return createPortal(
		<div className={styles.wrapp} onClick={closeMenu}>
			<div className={styles.burgerMenu}>
				<img src={logo} alt="logo" className={styles.logo} />
				<div className={styles.buttons}>
					{buttons.map((button, index) => (
						<div className={styles.button} key={index} style={{ color: button === "Кейсы" ? '#2985FF' : undefined }}>{button}</div>
					))}
				</div>
			</div>
		</div>,
		target
	)
}

export default BurgerMenu