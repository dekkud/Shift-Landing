import styles from './Header.module.css'
import logo from '@/assets/logo.svg'
import burgerMenuSvg from '@/assets/burgermenu.svg'
import BurgerMenu from '../BurgerMenu/BurgerMenu'
import buttons from '@/config/buttonsMenu'
import { useState, useEffect } from 'react'
import clsx from 'clsx'

const Header = () => {

	const [menuVisible, setMenuVisible] = useState(false)

	useEffect(() => {
		if (menuVisible) {
			document.body.style.overflow = 'hidden'
		} else {
			document.body.style.overflow = ''
		}

		return () => {
			document.body.style.overflow = ''
		}
	}, [menuVisible])

	const toggleMenu = () => (
		setMenuVisible(!menuVisible)
	)

	return (
		<section className={styles.header}>
			<div className={styles.container}>
				<img src={logo} alt="Logo" />
				<div className={styles.buttons}>
					{buttons.map((label, index) => (
						<div
							key={index}
							className={styles.button}
							style={{ color: label === "Кейсы" ? '#2985FF' : undefined }}
						>
							{label}
						</div>
					))}
				</div>
				<img src={burgerMenuSvg} alt="menu" className={styles.burgerMenu} onClick={toggleMenu} />
				{menuVisible && (
					<>
						<div className={clsx(styles.overlay)} onClick={toggleMenu}></div>
						<BurgerMenu />
					</>
				)}
			</div>
		</section>
	)
}

export default Header