import Image from "next/image";
import { Diamond, Feather, Moon, Stars, Wigwam } from "../../atoms/Icons";
import { IconWithMask } from "../../atoms/IconWithMask";
import { ParallaxWrapper } from "../../atoms/ParallaxWrapper";
import styles from "./styles.module.scss";
import clsx from "clsx";
import { Typography } from "../../atoms/Typography";
import nextConfig from "../../../../../next.config";

export const AboutUs = () => {
  const renderMainTile = () => {
    return (
      <>
        <ParallaxWrapper
          intensity={8}
          initialBackgroundPosition={"50% 50%"}
          className={styles.tileMain}
        >
          <div className={styles.textContainer}>
            <Typography as={"h4"} textAlign={"left"}>
              Mighty keepers
            </Typography>
            <Typography as={"p"}>
              Storyline and gameplay mechanics are both inspired by the mighty
              Sequoias intertwined with mysterious yet engaging ancient tribal
              Shamanic practices and beliefs.
            </Typography>
            <br />
            <Typography as={"p"}>
              Storyline and gameplay mechanics are both inspired by the mighty
              Sequoias intertwined with mysterious yet engaging ancient tribal
              Shamanic practices and beliefs.
            </Typography>
          </div>
        </ParallaxWrapper>
      </>
    );
  };

  return (
    <div className={styles.gridContainer}>
      <div className={styles.tileMainWrapper}>
        {renderMainTile()}
        <IconWithMask
          content={<Stars />}
          variant="filled"
          verticalPosition="top"
          horizontalPosition="center"
          decorationClassName={styles.starsDecoration}
          customXAxisClassName={styles.starsDecorationXAxis}
          customYAxisClassName={styles.starsDecorationYAxis}
        />

        <IconWithMask
          content={<Wigwam />}
          variant="outline"
          shape={"oval"}
          verticalPosition="middle"
          horizontalPosition="left"
          decorationClassName={styles.wigwamDecoration}
          customXAxisClassName={styles.wigwamDecorationXAxis}
          customYAxisClassName={styles.wigwamDecorationYAxis}
        />
      </div>

      <div className={styles.tileSecondaryWrapper}>
        <ParallaxWrapper
          intensity={8}
          initialBackgroundPosition={"center top"}
          className={styles.tileSecondary}
        >
          <div />
        </ParallaxWrapper>

        <IconWithMask
          content={<Moon />}
          variant="outline"
          shape="oval"
          horizontalPosition="left"
          verticalPosition="top"
          decorationClassName={styles.moonDecoration}
          customXAxisClassName={styles.moonDecorationXAxis}
          customYAxisClassName={styles.moonDecorationYAxis}
        />

        <IconWithMask
          content={
            <div className={styles.imageContainer}>
              <Image
                fill
                loading={"lazy"}
                style={{
                  objectFit: "cover",
                }}
                src={`${nextConfig.basePath}/assets/logo.svg`}
                alt={"Sequoia tile logo picture"}
              />
            </div>
          }
          variant="outline"
          shape="oval"
          horizontalPosition="right"
          verticalPosition="bottom"
          decorationWrapperClassName={styles.logoDecorationWrapper}
          decorationClassName={styles.logoDecoration}
          customXAxisClassName={styles.logoDecorationXAxis}
          customYAxisClassName={styles.logoDecorationYAxis}
        />
      </div>

      <div className={clsx(styles.mobileMainTile)}>
        {renderMainTile()}
        <IconWithMask
          content={<Stars />}
          variant="filled"
          verticalPosition="top"
          horizontalPosition="right"
        />

        <IconWithMask
          content={<Wigwam />}
          variant="outline"
          shape={"oval"}
          verticalPosition="bottom"
          horizontalPosition="left"
          decorationClassName={styles.wigwamDecoration}
          customXAxisClassName={styles.wigwamDecorationXAxis}
          customYAxisClassName={styles.wigwamDecorationYAxis}
        />
      </div>

      <div className={styles.tileTertiaryWrapper}>
        <ParallaxWrapper
          intensity={8}
          initialBackgroundPosition={"center top"}
          className={styles.tileTertiary}
        >
          <div />
        </ParallaxWrapper>
        <IconWithMask
          content={<Diamond />}
          variant="filled"
          horizontalPosition="right"
          verticalPosition="top"
        />
        <IconWithMask
          content={<Feather />}
          variant="outline"
          shape="oval"
          horizontalPosition="left"
          verticalPosition="bottom"
          decorationClassName={styles.featherDecoration}
          customXAxisClassName={styles.featherDecorationXAxis}
          customYAxisClassName={styles.featherDecorationYAxis}
        />
      </div>
    </div>
  );
};
