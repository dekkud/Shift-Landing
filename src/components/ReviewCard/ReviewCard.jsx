import styles from './ReviewCard.module.css'
import star from '@/assets/star.svg'

const ReviewCard = ({ data, index }) => {

	const { userpic, name, job, review } = data

	return (
		<div className={styles.reviewCard}>
			<div className={styles.reviewTop}>
				<div className={styles.userPic}>
					<img src={userpic} alt="" srcset="" />
				</div>
				<div className={styles.subUserInfo}>
					<div className={styles.userInfo}>
						<h1 key={index}>{name}</h1>
						<span>{job}</span>
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
				{review.length > 195 ? review.slice(0, 192) + '...' : review}
			</div>
		</div>
	)
}

export default ReviewCard