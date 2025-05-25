"use client";

import { Container } from "@/components/UI/atoms/Container";
import styles from "./styles.module.scss";
import { ElementWrapper } from "@/components/UI/atoms/ElementWrapper";
import { Typography } from "@/components/UI/atoms/Typography";
import { Button } from "@/components/UI/molecules/Button";
import { ArrowUpRight } from "@/components/UI/atoms/Icons";
import nextConfig from "../../../../../../next.config";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export const JoinCommunityBlock = () => {
  const blockRef = useRef(null);
  const isInView = useInView(blockRef, { once: true, amount: 0.2 });

  const childVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };
  return (
    <section ref={blockRef}>
      <Container className={styles.container}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className={styles.motionWrapper}
        >
          <ElementWrapper
            innerShadow
            variants="transparent"
            className={styles.elementWrapper}
            backgroundImageUrl={`${nextConfig.basePath}/assets/waterTile.png`}
            borderRadius="large"
          >
            <motion.div
              variants={childVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              transition={{ delay: 0.3 }}
            >
              <Typography font="rattani" textAlign="center" as={"h2"}>
                {`JOIN OUR \n COMMUNITY`}
              </Typography>
            </motion.div>

            <motion.div
              className={styles.description}
              variants={childVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              transition={{ delay: 0.5 }}
            >
              <Typography textAlign="center" as={"h4"}>
                {`Connect us to collaborate, share ideas and stay up to date with our news`}
              </Typography>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={
                isInView ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }
              }
              transition={{ delay: 0.7, duration: 0.6 }}
            >
              <Button
                className={styles.button}
                variant={"filled"}
                label={"JOIN COMMUNITY"}
                rightIcon={<ArrowUpRight />}
              />
            </motion.div>
          </ElementWrapper>
        </motion.div>
      </Container>
    </section>
  );
};
