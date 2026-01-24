import CustomButton from '../CustomButton/CustomButton'
import styles from './TariffCard.module.css'
import clsx from 'clsx'

const TariffCard = ({ data }) => {

	const { title, desc, permissions, isActive } = data

	return (
		<div className={clsx(styles.tariffCard, isActive && styles.active)}>
			<h1>Тариф {title}</h1>
			<p>{desc}</p>
			<div className={styles.permissions}>
				{permissions.map((perm, index) => (
					<div className={clsx(styles.permission, isActive && styles.active)} key={index}>{perm}</div>
				))}
			</div>
			<CustomButton text='Приобрести тариф' className={clsx(styles.button, isActive && styles.active)} />
		</div>
	)
}

export default TariffCard