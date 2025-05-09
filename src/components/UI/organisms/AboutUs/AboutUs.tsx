import { Diamond, Stars, Wigwam } from "../../atoms/Icons";
import { IconWithMask } from "../../atoms/IconWithMask";
import { ParallaxWrapper } from "../../atoms/ParallaxWrapper";
import styles from "./styles.module.scss";

export const AboutUs = () => {
  return (
    <div className={styles.gridContainer}>
      <div className={styles.tileMainWrapper}>
        <ParallaxWrapper
          intensity={8}
          initialBackgroundPosition={"50% 50% "}
          className={styles.tileMain}
        >
          <div className={styles.textContainer}>
            <h4>Mighty keepers</h4>
            <p>
              Storyline and gameplay mechanics are both inspired by the mighty
              Sequoias intertwined with mysterious yet engaging ancient tribal
              Shamanic practices and beliefs.
            </p>
            <br />
            <p>
              Storyline and gameplay mechanics are both inspired by the mighty
              Sequoias intertwined with mysterious yet engaging ancient tribal
              Shamanic practices and beliefs.
            </p>
          </div>
        </ParallaxWrapper>
        <IconWithMask
          emoji="✨"
          icon={<Stars />}
          variant="filled"
          verticalPosition="top"
          horizontalPosition="center"
          decorationClassName={styles.starsDecoration}
          customXAxisClassName={styles.starsDecorationXAxis}
          customYAxisClassName={styles.starsDecorationYAxis}
        />

        <IconWithMask
          icon={<Wigwam />}
          variant="outline"
          shape={"oval"}
          verticalPosition="middle"
          horizontalPosition="left"
          decorationClassName={styles.wigwamDecoration}
          customXAxisClassName={styles.wigwamDecorationXAxis}
          customYAxisClassName={styles.wigwamDecorationYAxis}
        />
      </div>

      <ParallaxWrapper
        initialBackgroundPosition={"50% 50%"}
        className={styles.tileSecondary}
      >
        <div />
      </ParallaxWrapper>

      <ParallaxWrapper
        initialBackgroundPosition={"50% 50%"}
        className={styles.tileTertiary}
      >
        <IconWithMask
          icon={<Diamond />}
          variant="filled"
          horizontalPosition="right"
          verticalPosition="top"
        />
        <div />
      </ParallaxWrapper>
    </div>
  );
};
