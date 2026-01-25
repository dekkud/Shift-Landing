import styles from './CustomButton.module.css'
import clsx from 'clsx';

const CustomButton = ({ children, className }) => {
  return (
    <button className={clsx(styles.customButton, className)}>
      {children}
    </button>
  );
}

export default CustomButton