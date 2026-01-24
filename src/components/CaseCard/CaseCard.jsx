import styles from './CaseCard.module.css'

const CaseCard = ({ data, index }) => {
  return (
    <div className={styles.caseCard}>
      <h1>Кейс {index + 1}:</h1>
      <span>{data.title}</span>

      <div className={styles.caseImages}>
        {data.images && data.images.map((img, imgIndex) => (
          <div key={imgIndex} className={styles.caseImage}>
            <img src={typeof img === 'string' ? img : img.src} alt='failed load' />
          </div>
        ))}
      </div>

      <h1>Результат:</h1>
      <span>{data.result}</span>
    </div>
  )
}

export default CaseCard