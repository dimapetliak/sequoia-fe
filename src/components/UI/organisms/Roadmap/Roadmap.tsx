"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion"; // Add this import
import { Loading } from "../../atoms/Icons";
import { ButtonControls } from "../../molecules/ButtonControls";
import { RoadmapTile } from "../../molecules/RoadmapTile";
import styles from "./styles.module.scss";

export const roadmapData = [
  {
    point: "Q1, 2025",
    title: "Eco Boost",
    descriptionList: [
      "Acquire 50 hectares of land for 1,000",
      "Planed Alpha Generation in April 2023",
      "Acquire land for beta, gamma, delta, epsilon and zeta generations",
    ],
    icon: <Loading />,
  },
  {
    point: "Q2, 2025",
    title: "Green Expansion",
    descriptionList: [
      "Acquire 50 hectares of land for 1,000",
      "Planed Alpha Generation in April 2023",
      "Acquire land for beta, gamma, delta, epsilon and zeta generations",
    ],
    icon: <Loading />,
  },
  {
    point: "Q3, 2025",
    title: "Sustainability Drive",
    descriptionList: [
      "Acquire 50 hectares of land for 1,000",
      "Planed Alpha Generation in April 2023",
      "Acquire land for beta, gamma, delta, epsilon and zeta generations",
    ],
    icon: <Loading />,
  },
  {
    point: "Q3, 2025",
    title: "Sustainability Drive",
    descriptionList: [
      "Acquire 50 hectares of land for 1,000",
      "Planed Alpha Generation in April 2023",
      "Acquire land for beta, gamma, delta, epsilon and zeta generations",
    ],
    icon: <Loading />,
  },
  {
    point: "Q3, 2025",
    title: "Sustainability Drive",
    descriptionList: [
      "Acquire 50 hectares of land for 1,000",
      "Planed Alpha Generation in April 2023",
      "Acquire land for beta, gamma, delta, epsilon and zeta generations",
    ],
    icon: <Loading />,
  },
  {
    point: "Q3, 2025",
    title: "Sustainability Drive",
    descriptionList: ["Launch community awareness programs"],
    icon: <Loading />,
  },
];

export const Roadmap = () => {
  const divRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const container = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.4,
      },
    },
  };

  const handleMoveBackward = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + roadmapData.length) % roadmapData.length
    );
  };

  const handleMoveForward = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % roadmapData.length);
  };

  return (
    <div className={styles.container}>
      <motion.div
        ref={divRef}
        className={styles.roadmapContainer}
        initial="hidden"
        animate="visible"
        variants={container}
      >
        {roadmapData.map((item, index) => (
          <RoadmapTile
            isActive={index === currentIndex}
            className={styles.roadmapTile}
            currentIndex={currentIndex}
            key={index}
            point={item.point}
            title={item.title}
            descriptionList={item.descriptionList}
            icon={item.icon}
            parentRef={divRef}
            // variants={{
            //   hidden: { opacity: 0, y: 20 },
            //   visible: { opacity: 1, y: 0 },
            // }}
          />
        ))}
      </motion.div>

      <ButtonControls
        className={styles.buttonControls}
        onMoveBackward={handleMoveBackward}
        onMoveForward={handleMoveForward}
      />
    </div>
  );
};
