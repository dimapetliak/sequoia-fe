'use client"';

import { AboutBlock } from "./components/AboutBlock";
import { BlogBlock } from "./components/BlogBlock";
import { JoinCommunityBlock } from "./components/JoinCommunityBlock";
import { PortfolioBlock } from "./components/PortfolioBlock";
import { ProudFiguresBlock } from "./components/ProudFiguresBlock";
import { RoadmapBlock } from "./components/RoadmapBlock/";
import { TeamBlock } from "./components/TeamBlock";

export const HomePage = () => {
  return (
    <>
      <AboutBlock />
      <ProudFiguresBlock />
      <PortfolioBlock />
      <TeamBlock />
      <RoadmapBlock />
      <BlogBlock posts={[]} />
      <JoinCommunityBlock />
    </>
  );
};
