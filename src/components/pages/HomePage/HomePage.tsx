'use client"';

import { AboutBlock } from "./components/AboutBlock";
import { BlogBlock } from "./components/BlogBlock";
import { JoinCommunityBlock } from "./components/JoinCommunityBlock";
import { ProudFiguresBlock } from "./components/ProudFiguresBlock";
import { RoadmapBlock } from "./components/RoadmapBlock/";
import { TeamBlock } from "./components/TeamBlock";
import { HeroBlock } from '@/components/pages/HomePage/components/HeroBlock';

export const HomePage = () => {
  return (
    <>
      <HeroBlock />
      <AboutBlock />
      <ProudFiguresBlock />
      <TeamBlock />
      <RoadmapBlock />
      <BlogBlock posts={[]} />
      <JoinCommunityBlock />
    </>
  );
};
