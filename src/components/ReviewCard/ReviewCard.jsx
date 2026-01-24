import styles from './ReviewCard.module.css'
import star from '@/assets/star.svg'

const ReviewCard = () => {
	return (
		<div className={styles.reviewCard}>
			<div className={styles.reviewTop}>
				<div className={styles.userPic}></div>
				<div className={styles.subUserInfo}>
					<div className={styles.userInfo}>
						<h1>Мария Круглова</h1>
						<span>Менеджер по подбору персонала</span>
					</div>
					<div className={styles.review}>
						<div className={styles.fiveStars}>
							<img src={star} alt="-" />
							<img src={star} alt="-" />
							<img src={star} alt="-" />
							<img src={star} alt="-" />
							<img src={star} alt="-" />
						</div>
						<span>Sep 23, 2021</span>
					</div>
				</div>
			</div>
			<div className={styles.reviewBottom}>
				Раньше искали людей кто где. Авито, hh, какие то чаты, постоянно переписка, звонки, куча уточнений. На это уходило слишком много времени и сил. И самое обидное, что до объекта доходили не все. ...
			</div>
		</div>
	)
}

export default ReviewCard