import ReviewCard from '@/components/ReviewCard/ReviewCard'
import styles from './Reviews.module.css'
import cardReview from '@/config/cardReview'

const Reviews = () => {
	return (
		<div className={styles.reviews}>
			<div className={styles.subReviews}>
				<h1>Отзывы</h1>
				<div className={styles.reviewCards}>
					{cardReview.map((data, index) => (
						<ReviewCard
							data={data}
							key={index}
						/>
					))}
				</div>
			</div>
		</div>
	)
}

export default Reviews