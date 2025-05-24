"use client";

import { useState } from "react";
import styles from "./styles.module.scss";
import clsx from "clsx";
import { Typography } from "../../atoms/Typography";
import Image from "next/image";
import { ElementWrapper } from "../../atoms/ElementWrapper";
import { MarkdownRenderer } from "../../atoms/MarkdownRenderer";

const TILES = [
  {
    id: 1,
    title: "Playing Part",
    content: `Storyline and gameplay mechanics are both inspired by the mighty Sequoias intertwined with mysterious yet engaging ancient tribal Shamanic practices and beliefs. Storyline and gameplay mechanics are both inspired by the mighty Sequoias intertwined with mysterious yet engaging ancient tribal Shamanic practices and beliefs. \n Storyline and gameplay mechanics are both inspired by the mighty Sequoias intertwined with mysterious yet engaging ancient tribal Shamanic practices and beliefs.`,
    backgroundImage: "/sequoia-fe/assets/game/cave-tile.png",
    backgroundPosition: "center left",
    foregroundImagePosition: "left center",
  },
  {
    id: 2,
    title: "Playing Part",
    content: `Storyline and gameplay mechanics are both inspired by the mighty Sequoias intertwined with mysterious yet engaging ancient tribal Shamanic practices and beliefs. Storyline and gameplay mechanics are both inspired by the mighty Sequoias intertwined with mysterious yet engaging ancient tribal Shamanic practices and beliefs. \n Storyline and gameplay mechanics are both inspired by the mighty Sequoias intertwined with mysterious yet engaging ancient tribal Shamanic practices and beliefs.`,
    backgroundImage: "/sequoia-fe/assets/game/freeze-tile.png",
    backgroundPosition: "center",
    foregroundImagePosition: "right center",
  },
  {
    id: 3,
    title: "Playing Part",
    content: `Storyline and gameplay mechanics are both inspired by the mighty Sequoias intertwined with mysterious yet engaging ancient tribal Shamanic practices and beliefs. Storyline and gameplay mechanics are both inspired by the mighty Sequoias intertwined with mysterious yet engaging ancient tribal Shamanic practices and beliefs. \n Storyline and gameplay mechanics are both inspired by the mighty Sequoias intertwined with mysterious yet engaging ancient tribal Shamanic practices and beliefs.`,
    backgroundImage: "/sequoia-fe/assets/game/forest-tile.png",
    backgroundPosition: "center",
    foregroundImagePosition: "right center",
  },
  {
    id: 4,
    title: "Playing Part",
    content: `Storyline and gameplay mechanics are both inspired by the mighty Sequoias intertwined with mysterious yet engaging ancient tribal Shamanic practices and beliefs. Storyline and gameplay mechanics are both inspired by the mighty Sequoias intertwined with mysterious yet engaging ancient tribal Shamanic practices and beliefs. \n Storyline and gameplay mechanics are both inspired by the mighty Sequoias intertwined with mysterious yet engaging ancient tribal Shamanic practices and beliefs.`,
    backgroundImage: "/sequoia-fe/assets/game/camp-tile.png",
    backgroundPosition: "70%",
    foregroundImagePosition: "right center",
  },
  {
    id: 5,
    title: "Playing Part",
    content: `Storyline and gameplay mechanics are both inspired by the mighty Sequoias intertwined with mysterious yet engaging ancient tribal Shamanic practices and beliefs. Storyline and gameplay mechanics are both inspired by the mighty Sequoias intertwined with mysterious yet engaging ancient tribal Shamanic practices and beliefs. \n Storyline and gameplay mechanics are both inspired by the mighty Sequoias intertwined with mysterious yet engaging ancient tribal Shamanic practices and beliefs.`,
    backgroundImage: "/sequoia-fe/assets/game/swamp-tile.png",
    backgroundPosition: "center",
    foregroundImagePosition: "left center",
  },
];

export const GameAbout = () => {
  const [activeTile, setActiveTile] = useState<number | null>(null);

  const handleActiveTile = (index: number) => setActiveTile(index);
  const handleMouseLeave = () => setActiveTile(null);

  return (
    <div className={styles.container}>
      <Header />
      {TILES.map((tile, index) => (
        <HoverTile
          key={tile.id}
          tile={tile}
          isActive={activeTile === index}
          isInactive={activeTile !== null && activeTile !== index}
          onActivate={() => handleActiveTile(index)}
          onDeactivate={handleMouseLeave}
        />
      ))}
    </div>
  );
};

const Header = () => (
  <div className={styles.titleContainer}>
    <Typography font="rattani" className={styles.title} as="h3">
      GAME
    </Typography>
    <Typography font="rattani" className={styles.title} as="h3">
      LORE
    </Typography>
  </div>
);

type HoverTileProps = {
  tile: {
    title: string;
    content: string;
    backgroundImage: string;
    backgroundPosition: string;
    foregroundImagePosition: string;
  };
  isActive: boolean;
  isInactive: boolean;
  onActivate: () => void;
  onDeactivate: () => void;
};

const HoverTile = ({
  tile,
  isActive,
  isInactive,
  onActivate,
  onDeactivate,
}: HoverTileProps) => {
  // Determine layout direction based on foregroundImagePosition
  const isImageLeft = tile.foregroundImagePosition === "left center";

  return (
    <div
      className={clsx(
        styles.hoverTileContainer,
        isActive && styles.active,
        isInactive && styles.inactive
      )}
      onMouseEnter={onActivate}
      onMouseLeave={onDeactivate}
      onClick={onActivate}
    >
      <div
        style={{
          alignItems: isImageLeft ? "flex-end" : "flex-start",
        }}
        className={styles.hoverTileContentWrapper}
      >
        <Typography as={"h4"} font="rattani" className={styles.hoverTileTitle}>
          {tile.title}
        </Typography>
        <ElementWrapper className={styles.hoverTileContent} variants="glass">
          <MarkdownRenderer content={tile.content} />
        </ElementWrapper>
      </div>
      <Image
        fill
        src={tile.backgroundImage}
        alt="image"
        className={styles.hoverTileImage}
        style={{
          objectPosition: tile.backgroundPosition,
        }}
      />
      <div className={styles.hoverTileBackdrop}></div>
      {isActive && (
        <Image
          fill
          src={tile.backgroundImage}
          alt=""
          className={styles.hoverTileForegroundImage}
          style={{
            objectPosition: tile.foregroundImagePosition,
          }}
        />
      )}
    </div>
  );
};
