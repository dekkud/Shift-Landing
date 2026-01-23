import styles from './Marquee.module.css'
import FastMarquee from "react-fast-marquee";
import marqueeItems from '@/config/textMarquee';

const Marquee = () => {

	return (
		<div className={styles.marquee}>
			<FastMarquee speed={50} pauseOnHover={true}>
				{marqueeItems.map((item, index) => (
					<span key={index}>{item}</span>
				))}
			</FastMarquee>
		</div>
	)
}

export default Marquee
