import { ProgressBar } from '@/components/UI/molecules/ProgressBar';
import styles from "./styles.module.scss";

export const Hero = () => {

  return (
    <div className={styles.container}>
      <div className={styles.trees}></div>
      <div className={styles.progressBarWrapper}>
        <ProgressBar
          currentPercent={60}
          minValue={0}
          maxValue={1000}
          subtitle={"sequoias planted"}
        />
      </div>
    </div>
  );
};