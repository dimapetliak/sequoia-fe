import { Typography } from '@/components/UI/atoms/Typography';
import styles from "./styles.module.scss";

export const PortfolioGrid = () => {
  return (
    <div className={styles.container}>
      <div className={styles.child1}>
        <Typography textAlign="left" as={"h3"} font="rattani" className={styles.title} >
          PARK
        </Typography>
      </div>
      <div className={styles.child2} >
        <Typography textAlign="left" as={"h3"} font="rattani" className={styles.title} >
          NFT
        </Typography>
        <div className={styles.cutoutRightTop}></div>
        <div className={styles.cutoutRightBottom}></div>
        <div className={styles.cutoutLeftTop}></div>
        <div className={styles.cutoutLeftTopMob}></div>
        <div className={styles.cutoutLeftBottom}></div>
        <div className={styles.cutoutLeftBottomMob}></div>
      </div>
      <div className={styles.child3}>
        <Typography textAlign="left" as={"h3"} font="rattani" className={styles.title} >
          GAME
        </Typography>
        <div className={styles.cutoutLeftBottom}></div>
      </div>
    </div>
  );
};
