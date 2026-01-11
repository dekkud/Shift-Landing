import styles from './Footer.module.css'

const Footer = () => {
	return (
		<div className={styles.footer}>
			<div className={styles.container}>
				<div className={styles.copyright}>Copyright © 2025 Shift All rights reserved.</div>
				<div className={styles.copyright}>Privacy & Policy</div>
			</div>
		</div>
	)
}

export default Footer