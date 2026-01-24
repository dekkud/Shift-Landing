import ReviewCard from '@/components/ReviewCard/ReviewCard'
import styles from './Reviews.module.css'

const Reviews = () => {
	return (
		<div className={styles.reviews}>
			<div className={styles.subReviews}>
				<h1>Отзывы</h1>
				<div className={styles.reviewCards}>
					<ReviewCard />
					<ReviewCard />
					<ReviewCard />
				</div>
			</div>
		</div>
	)
}

export default Reviews