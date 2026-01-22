import styles from './Marquee.module.css'
import FastMarquee from "react-fast-marquee";

const Marquee = () => {
	return (
		<div className={styles.marquee}>
			<FastMarquee speed={50} pauseOnHover={true}>
				<span>Подсобники</span>
				<span>Разнорабочие</span>
				<span>Грузчики</span>
				<span>Уборщики</span>
				<span>Дворники</span>
				<span>Фасовщики</span>
				<span>Комплектовщики</span>
				<span>Стикеровщики</span>
				<span>Сортировщики</span>
				<span>Линейный персонал</span>
				<span>Складской персонал</span>
				<span>Производственный персонал</span>
				<span>Неквалифицированные рабочие</span>
			</FastMarquee>

		</div>
	)
}

export default Marquee
