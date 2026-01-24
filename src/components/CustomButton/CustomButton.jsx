import styles from './CustomButton.module.css'
import clsx from 'clsx';

const CustomButton = ({ text, className }) => {
  return (
    <button className={clsx(styles.customButton, className)}>
      {text}
    </button>
  );
}

export default CustomButton