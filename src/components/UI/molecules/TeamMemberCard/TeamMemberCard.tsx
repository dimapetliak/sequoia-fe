import clsx from "clsx";
import styles from "./styles.module.scss";
import Image from "next/image";
import Link from "next/link";
import { Decoration } from "../../atoms/Decoration";
import { Flash, Star } from "../../atoms/Icons";
import { motion, AnimatePresence } from "framer-motion";
import { BackgroundColorVariant } from "@/types";
import { backgroundMapper } from "@/utils";

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
    scale: 2.05,
  },
  animate: {
    scale: 2,
    transition: { duration: 0.6, ease: "easeOut" },
  },
  exit: {
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
        <div className={styles.clipperBackgroundFigure}>
          <div
            className={styles.backgroundFiller}
            style={
              backgroundVariant
                ? {
                    backgroundColor: "transparent",
                  }
                : undefined
            }
          >
            {backgroundVariant && (
              <motion.div
                variants={backgroundVariants}
                className={styles.backgroundImageWrapper}
              >
                <Image
                  className={styles.backgroundImage}
                  fill
                  src={`${backgroundMapper[backgroundVariant]}`}
                  alt={"Card background picture"}
                  priority
                />
              </motion.div>
            )}
          </div>
          <div className={clsx(styles.imageContainer)}>
            <Image
              fill
              objectFit="contain"
              src={imageUrl || "/assets/memberImage.png"}
              alt={"Team member card picture"}
              quality={100}
            />
          </div>
        </div>
        <Decoration variant={"oval"} className={styles.decoration}>
          <Star />
        </Decoration>
      </div>

      <div className={styles.descriptionContainer}>
        <div className={styles.clippedBlob}>
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
        </div>
        <Decoration variant={"oval"} className={styles.decoration}>
          <Flash />
        </Decoration>
      </div>
    </div>
  );
};
