'use client"';

import { GameHeroBlock } from "./components/GameHeroBlock/GameHeroBlock";
import { GameAboutBlock } from "./components/GameAboutBlock";
import { GameBottomBlock } from "./components/GameBottomBlock";

export const GamePage = () => {
  return (
    <>
      <GameHeroBlock />
      <GameAboutBlock />
      <GameBottomBlock />
    </>
  );
};
