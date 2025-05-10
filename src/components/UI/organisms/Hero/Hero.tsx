import { ProgressBar } from "@/components/UI/molecules/ProgressBar";
import styles from "./styles.module.scss";
import { Typography } from "../../atoms/Typography";
import Image from "next/image";

export const Hero = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textWrapper}>
        <div className={styles.textContainer}>
          <Typography as={"h4"}>A breath of fresh air with</Typography>
          <Image
            className={styles.heroImage}
            alt={`sequoia game`}
            width={1100}
            height={272}
            src={"/assets/largeLogo.svg"}
          />
          <Typography as={"p"}>
            Environmentally oriented eco-system built using WEB3 technology
          </Typography>
        </div>
      </div>
      <div className={styles.trees}></div>
      <div className={styles.progressBarWrapper}>
        <ProgressBar
          className={styles.progressBar}
          titleClassName={styles.progressBarTitle}
          currentPercent={60}
          minValue={0}
          maxValue={1000}
          subtitle={"sequoias planted"}
        />
      </div>
    </div>
  );
};
