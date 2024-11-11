import classNames from "classnames";
import styles from "./index.module.scss";

interface LoadingSpinnerProps {
  isCenter?: boolean;
  isFixedCenter?: boolean;
}

const LoadingSpinner = ({
  isCenter = false,
  isFixedCenter = false,
}: LoadingSpinnerProps) => {
  return (
    <div
      className={classNames(styles.wrapper, {
        [styles.center]: isCenter,
        [styles.isFixedCenter]: isFixedCenter,
      })}
    >
      <div className={styles.spinner}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default LoadingSpinner;
