import styles from './ReviewCard.module.css'
import star from '@/assets/star.svg'

const ReviewCard = ({ data, index }) => {
	return (
		<div className={styles.reviewCard}>
			<div className={styles.reviewTop}>
				<div className={styles.userPic}></div>
				<div className={styles.subUserInfo}>
					<div className={styles.userInfo}>
						<h1 key={index}>{data.name}</h1>
						<span>{data.job}а</span>
					</div>
					<div className={styles.review}>
						<div className={styles.fiveStars}>
							{[...Array(5)].map((_, index) => (
								<img key={index} src={star} alt="star" />
							))}
						</div>
						<span>Sep 23, 2021</span>
					</div>
				</div>
			</div>
			<div className={styles.reviewBottom}>
				{data.review.length > 195 ? data.review.slice(0, 192) + '...' : data.review}
			</div>
		</div>
	)
}

export default ReviewCard