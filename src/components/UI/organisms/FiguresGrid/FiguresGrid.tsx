import clsx from "clsx";
import styles from "./styles.module.scss";
import { ProgressBar } from "../../molecules/ProgressBar";
import { FigureItem } from "../../molecules/FigureItem";
import { Bitcoin, Stars, Sun } from "../../atoms/Icons";
import { ParallaxWrapper } from "../../atoms/ParallaxWrapper";
import { IconWithMask } from "../../atoms/IconWithMask";

export const FiguresGrid = () => {
  return (
    <div className={styles.container}>
      <div className={styles.leftGrid}>
        <FigureItem className={styles.firstFigure}>
          <ProgressBar
            titleClassName={styles.progressBarTitle}
            className={styles.progressBar}
            currentPercent={60}
            minValue={0}
            maxValue={1000}
            subtitle={"sequoias planted"}
          />
        </FigureItem>

        <FigureItem
          className={styles.secondFigure}
          value={5}
          description={"years of experience"}
        />
        <ParallaxWrapper
          initialBackgroundPosition={"-80px -625px"}
          className={styles.thirdFigure}
          intensity={8}
        >
          <IconWithMask
            icon={<Bitcoin />}
            variant="filled"
            horizontalPosition="left"
            verticalPosition="top"
          />

          <FigureItem
            value={">$190k"}
            description={"earned\n in carbon credits"}
          />
        </ParallaxWrapper>

        <FigureItem
          className={clsx(styles.secondFigure, styles.mobileFigure)}
          value={5}
          description={"years of experience"}
          isMobile
        />
      </div>

      <div className={styles.rightGrid}>
        <ParallaxWrapper
          initialBackgroundPosition={"-1502px -90px"}
          className={styles.firstFigure}
          intensity={8}
        >
          <IconWithMask
            icon={<Sun />}
            variant="filled"
            horizontalPosition="left"
            verticalPosition="top"
          />

          {/* TODO: Add Sprout decoration */}
          {/* <IconWithMask
            icon={<Sprout />}
            variant="outline"
            shape="oval"
            horizontalPosition="right"
            verticalPosition="middle"
          /> */}
          <FigureItem value={">50k"} description={"trees\nplanted"} />
        </ParallaxWrapper>

        <div className={styles.column}>
          <ParallaxWrapper
            initialBackgroundPosition={"-360px -20px"}
            className={styles.secondFigure}
            intensity={8}
          >
            <IconWithMask
              icon={<Stars />}
              variant="filled"
              horizontalPosition="right"
              verticalPosition="top"
            />

            <FigureItem value={"20k"} description={"NFTs\ncreated"} />
          </ParallaxWrapper>

          <FigureItem
            className={styles.thirdFigure}
            value={3}
            description={"countries"}
          />

          <ParallaxWrapper
            initialBackgroundPosition={"-360px -20px"}
            className={clsx(styles.secondFigure, styles.mobileFigure)}
            intensity={8}
          >
            <IconWithMask
              icon={<Stars />}
              variant="filled"
              horizontalPosition="right"
              verticalPosition="top"
            />
            <FigureItem value={"20k"} description={"NFTs\ncreated"} />
          </ParallaxWrapper>
        </div>
      </div>
    </div>
  );
};
