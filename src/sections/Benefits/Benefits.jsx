import Marquee from '../../components/Marquee/Marquee';
import BenefitCard from '../../components/BenefitCard/BenefitCard'
import styles from './Benefits.module.css'

const cardBenefits = [
	{
		header: 'Выгоды\n для бизнеса',
		desc: 'Сервис, который показывает рейтинги, и снижает риски\n назначить ненадежных',
		isActive: true,
	},
	{
		header: 'Минимальные риски',
		desc: 'У нас 100% самая большая база рабочих рук в городе.',
		isActive: false,
	},
	{
		header: 'Открытый рейтинг',
		desc: 'У каждого свой рейтинг.',
		isActive: false,
	},
	{
		header: 'Контроль качества',
		desc: 'Ненадежные удаляются из системы.',
		isActive: false,
	},
	{
		header: 'Закрытие больших объёмов за короткое время',
		desc: 'Закрываем заявки от 1 до 52 исполнителей на обьект.',
		isActive: false,
	},
	{
		header: 'Сокращение времени\n поиска в 12 раз',
		desc: 'Сокращение времени набора исполнителей на завтра в 12 раз.',
		isActive: false,
	},
	{
		header: 'Бесплатная система',
		desc: 'Возможность использования \nсистемы полностью бесплатно.\n\n*Условия уточняйте у менеджера',
		isActive: false,
	},
	{
		header: 'Пробный период',
		desc: 'Демо-период с полным функционалом 1 месяц за 1 рубль.',
		isActive: false,
	},
];


const Benefits = () => {
	return (
		<>
			<div className={styles.benefits}>
				<div className={styles.benefitsSub}>
					<BenefitCard cardBenefits={cardBenefits}></BenefitCard>
				</div>
			</div>
			<Marquee />
		</>
	)
}

export default Benefits