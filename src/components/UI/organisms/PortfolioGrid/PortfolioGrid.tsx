'use client';

import { Typography } from '@/components/UI/atoms/Typography';
import styles from "./styles.module.scss";
import { useState } from 'react';

export const PortfolioGrid = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const dynamicClass = hoveredIndex !== null ? styles[`hoveredBlock${hoveredIndex + 1}`] : '';

  return (
    <div className={`${styles.container} ${dynamicClass}`}>

      <div className={styles.child1} onMouseEnter={() => setHoveredIndex(0)}
        onMouseLeave={() => setHoveredIndex(null)}>
        <div className={styles.backgroundHover}>
          <Typography textAlign="left" as={"h3"} font="rattani" className={styles.title} >
            PARK
          </Typography>
          <div className={styles.hoverBlockText}>
            <Typography textAlign="left" as={"p"} >
              Beyond the game we are growing a park with 1,000 Sequoiadendron giganteum trees. Beyond the game we are growing a park with 1,000 Sequoiadendron giganteum trees.
            </Typography>
            <Typography textAlign="left" as={"p"} >
              Beyond the game we are growing a park with 1,000 Sequoiadendron giganteum trees. Beyond the game we are growing a park with 1,000 Sequoiadendron giganteum trees. Beyond the game we are growing a park with 1,000 Sequoiadendron giganteum trees.
            </Typography>
            <Typography textAlign="left" as={"p"} >
              Beyond the game we are growing a park with 1,000 Sequoiadendron giganteum trees.
            </Typography>
          </div>
        </div>
      </div>

      <div className={styles.child2} onMouseEnter={() => setHoveredIndex(1)}
        onMouseLeave={() => setHoveredIndex(null)}>
        <div className={styles.backgroundHover}>
          <Typography textAlign="left" as={"h3"} font="rattani" className={styles.title} >
            NFT
          </Typography>
          <div className={styles.hoverBlockText}>
            <Typography textAlign="left" as={"p"} >
              Beyond the game we are growing a park with 1,000 Sequoiadendron giganteum trees. Beyond the game we are growing a park with 1,000 Sequoiadendron giganteum trees.
            </Typography>
            <Typography textAlign="left" as={"p"} >
              Beyond the game we are growing a park with 1,000 Sequoiadendron giganteum trees. Beyond the game we are growing a park with 1,000 Sequoiadendron giganteum trees. Beyond the game we are growing a park with 1,000 Sequoiadendron giganteum trees.
            </Typography>
            <Typography textAlign="left" as={"p"} >
              Beyond the game we are growing a park with 1,000 Sequoiadendron giganteum trees.
            </Typography>
          </div>
        </div>
        <div className={styles.cutoutsWrapper}>
          <div className={styles.cutoutRightTop}></div>
          <div className={styles.cutoutRightBottom}></div>
          <div className={styles.cutoutLeftTop}></div>
          <div className={styles.cutoutLeftTopMob}></div>
          <div className={styles.cutoutLeftBottom}></div>
          <div className={styles.cutoutLeftBottomMob}></div>
        </div>
      </div>
      <div className={styles.child3} onMouseEnter={() => setHoveredIndex(2)}
        onMouseLeave={() => setHoveredIndex(null)}>
        <div className={styles.backgroundHover}>
          <Typography textAlign="left" as={"h3"} font="rattani" className={styles.title} >
            GAME
          </Typography>
          <div className={styles.hoverBlockText}>
            <Typography textAlign="left" as={"p"} >
              Beyond the game we are growing a park with 1,000 Sequoiadendron giganteum trees. Beyond the game we are growing a park with 1,000 Sequoiadendron giganteum trees.
            </Typography>
            <Typography textAlign="left" as={"p"} >
              Beyond the game we are growing a park with 1,000 Sequoiadendron giganteum trees. Beyond the game we are growing a park with 1,000 Sequoiadendron giganteum trees. Beyond the game we are growing a park with 1,000 Sequoiadendron giganteum trees.
            </Typography>
            <Typography textAlign="left" as={"p"} >
              Beyond the game we are growing a park with 1,000 Sequoiadendron giganteum trees.
            </Typography>
          </div>
        </div>
        <div className={styles.cutoutLeftBottom}></div>
      </div>

    </div>
  );
};
