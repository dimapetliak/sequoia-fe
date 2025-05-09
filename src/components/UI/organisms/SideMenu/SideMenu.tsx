import { SocialLinks } from "../../molecules/SocialLinks";
import styles from "./styles.module.scss";

export const SideMenu = () => {
  return (
    <div className={styles.sideMenuContainer}>
      <SocialLinks
        excludedLinks={["linkedin"]}
        className={styles.linkContainer}
        linkClassName={styles.link}
      />
    </div>
  );
};
