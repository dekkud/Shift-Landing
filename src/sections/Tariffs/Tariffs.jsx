import Footer from '@/components/Footer/Footer'
import styles from './Tariffs.module.css'
import TariffCard from '@/components/TariffCard'
import tarrifs from '@/config/cardTariff'

const Tariffs = () => {
	return (
		<>
			<div className={styles.subTarrifs}>
				<div className={styles.tariffs}>
					<h1>Тарифы</h1>
					<div className={styles.tarrifsCards}>
						{tarrifs.map((data, index) => (
							<TariffCard
								data={data}
								key={index}
							/>
						))}
					</div>
				</div>
			</div>
			<Footer />
		</>

	)
}

export default Tariffs