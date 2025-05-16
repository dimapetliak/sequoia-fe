import clsx from "clsx";
import styles from "./styles.module.scss";
import Image from "next/image";
import Link from "next/link";
import { Flash, Star } from "../../atoms/Icons";
import { motion, AnimatePresence } from "framer-motion";
import { BackgroundColorVariant } from "@/types";
import { backgroundMapper } from "@/utils";
import { IconWithMask } from "../../atoms/IconWithMask";
import nextConfig from "../../../../../next.config";

type TeamMemberCardProps = {
  imageUrl: string;
  name: string;
  position: string;
  email: string;
  backgroundVariant?: BackgroundColorVariant;
  className?: string;
};

const contentVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.25,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
  exit: {
    opacity: 0,
    transition: {
      duration: 0.2,
    },
  },
};

const backgroundVariants = {
  initial: {
    opacity: 0,
    scale: 2.05,
  },
  animate: {
    opacity: 1,
    scale: 2,
    transition: { duration: 0.6, ease: "easeOut" },
  },
  exit: {
    opacity: 0,
    scale: 2.05,
    transition: { duration: 0.4, ease: "easeIn" },
  },
};

export const TeamMemberCard = ({
  imageUrl,
  name,
  position,
  email,
  backgroundVariant,
  className,
}: TeamMemberCardProps) => {
  return (
    <div className={clsx(styles.teamMemberCardContainer, className)}>
      <div className={styles.cardContainer}>
        <div className={styles.backgroundContainer}>
          <AnimatePresence mode="wait">
            {backgroundVariant && (
              <motion.div
                key={backgroundVariant}
                initial="initial"
                animate="animate"
                exit="exit"
                variants={backgroundVariants}
                className={styles.backgroundImageWrapper}
              >
                <Image
                  key={backgroundVariant} // 👈 FORCE IMAGE REFRESH
                  className={styles.backgroundImage}
                  fill
                  src={`${nextConfig.basePath}${backgroundMapper[backgroundVariant]}`}
                  alt="Card background picture"
                  priority
                  quality={100}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </motion.div>
            )}
          </AnimatePresence>
          <div className={clsx(styles.imageContainer)}>
            <Image
              fill
              objectFit="contain"
              src={imageUrl || `${nextConfig.basePath}/assets/memberImage.png`}
              alt="Team member card picture"
              quality={100}
            />
          </div>
        </div>

        <IconWithMask
          content={<Star />}
          variant="outline"
          shape="oval"
          verticalPosition="bottom"
          horizontalPosition="left"
          customXAxisClassName={styles.starXAxis}
          customYAxisClassName={styles.starYAxis}
        />
      </div>

      <div className={styles.descriptionContainer}>
        <AnimatePresence mode="wait">
          <>
            {name && (
              <motion.span
                key={`name-${name}`}
                className={styles.name}
                variants={contentVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                custom={0}
              >
                {name}
              </motion.span>
            )}
            {position && (
              <motion.p
                key={`position-${position}`}
                className={styles.position}
                variants={contentVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                custom={1}
              >
                {position}
              </motion.p>
            )}
            {email && (
              <motion.div
                key={`email-${email}`}
                variants={contentVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                custom={2}
              >
                <Link href={`mailto:${email}`} className={styles.email}>
                  {email}
                </Link>
              </motion.div>
            )}
          </>
        </AnimatePresence>

        <IconWithMask
          content={<Flash />}
          variant="outline"
          shape="oval"
          verticalPosition="top"
          horizontalPosition="right"
          customXAxisClassName={styles.flashXAxis}
          customYAxisClassName={styles.flashYAxis}
        />
      </div>
    </div>
  );
};
