import { BackgroundColorVariant } from "@/types";

export const isDesktopScreen = () => {
  return window.innerWidth > 1024;
};

export const backgroundMapper: Record<BackgroundColorVariant, string> = {
  blue: "/assets/teamMemberBlue.png",
  green: "/assets/teamMemberGreen.png",
  purple: "/assets/teamMemberPurple.png",
  pink: "/assets/teamMemberPink.png",
  yellow: "/assets/teamMemberYellow.png",
};
