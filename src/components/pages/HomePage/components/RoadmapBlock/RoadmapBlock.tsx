import { Container } from "@/components/UI/atoms/Container";
import styles from "./styles.module.scss";
import { Typography } from "@/components/UI/atoms/Typography";
import { Roadmap } from "@/components/UI/organisms/Roadmap";
import Image from "next/image";
import nextConfig from "../../../../../../next.config";
// import { motion } from "framer-motion";

// const imageContainerVariants = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: {
//       duration: 0.8,
//       ease: "easeInOut",
//     },
//   },
// };

export const RoadmapBlock = () => {
  return (
    <section>
      <Container className={styles.roadmapContainer}>
        <Typography textAlign="center" as="h2">
          ROADMAP
        </Typography>

        <Roadmap />

        <div
          // initial="hidden"
          // whileInView="visible"
          // viewport={{ once: true, margin: "-100px" }}
          className={styles.imageContainer}
          // variants={imageContainerVariants}
        >
          <Image
            fill
            loading={"lazy"}
            style={{
              objectFit: "cover",
            }}
            className={styles.treeImage}
            src={`${nextConfig.basePath}/assets/roadmapTree.png`}
            alt={"Roadmap tree picture"}
          />
        </div>
      </Container>
    </section>
  );
};
