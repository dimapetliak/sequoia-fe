"use client";

import { useRef, useState } from "react";
import { TeamMemberItem } from "../../atoms/TeamMemberItem";
import { TeamMemberCard } from "../../molecules/TeamMemberCard";
import styles from "./styles.module.scss";
import { BackgroundColorVariant } from "@/types";
import Slider from "react-slick";
import nextConfig from "../../../../../next.config";
import { motion, AnimatePresence, useInView } from "framer-motion";

const mockedTeamMembers = [
  {
    id: 1,
    name: "Alice Johnson",
    role: "Developer",
    email: "alice.johnson@example.com",
    imageUrl: "/assets/memberImage.png",
  },
  {
    id: 2,
    name: "Bob Smith",
    role: "Designer",
    email: "bob.smith@example.com",
    backgroundColor: "blue",
  },
  {
    id: 3,
    name: "Charlie Brown",
    role: "Product Manager",
    email: "charlie.brown@example.com",
    backgroundColor: "yellow",
  },
  {
    id: 4,
    name: "Diana Prince",
    role: "QA Engineer",
    email: "diana.prince@example.com",
    backgroundColor: "purple",
  },
  {
    id: 5,
    name: "Ethan Hunt",
    role: "DevOps Engineer",
    email: "ethan.hunt@example.com",
    backgroundColor: "green",
  },
  {
    id: 6,
    name: "Fiona Gallagher",
    role: "Scrum Master",
    email: "fiona.gallagher@example.com",
    backgroundColor: "yellow",
  },
  {
    id: 7,
    name: "George Lucas",
    role: "Backend Developer",
    email: "george.lucas@example.com",
    backgroundColor: "purple",
  },
  {
    id: 8,
    name: "Hannah Montana",
    role: "Frontend Developer",
    email: "hannah.montana@example.com",
    backgroundColor: "blue",
  },
  {
    id: 9,
    name: "Fiona Gallagher",
    role: "Scrum Master",
    email: "fiona.gallagher@example.com",
    backgroundColor: "pink",
  },
  {
    id: 10,
    name: "George Lucas",
    role: "Backend Developer",
    email: "george.lucas@example.com",
    backgroundColor: "blue",
  },
  {
    id: 11,
    name: "Hannah Montana",
    role: "Frontend Developer",
    email: "hannah.montana@example.com",
    backgroundColor: "green",
  },
  {
    id: 12,
    name: "Hannah Montana",
    role: "Frontend Developer",
    email: "hannah.montana@example.com",
    backgroundColor: "yellow",
  },
];

const SLIDER_SETTINGS = {
  dots: false,
  arrows: false,
  infinite: true,
  draggable: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  initialSlide: 0,
  className: styles.carousel,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
  ],
};

export const TeamMembers = () => {
  const teamMemberRef = useRef<HTMLDivElement | null>(null);
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, {
    once: true,
    margin: "0px 0px -100px 0px",
  });

  const [activeMember, setActiveMember] = useState<number | null>(1);

  const selectedUser = mockedTeamMembers.find(
    (member) => member.id === activeMember
  );

  const handleActiveMember = (id: number) => {
    if (id) {
      setActiveMember(id);
    }
  };

  const renderTeamMemberItems = () => {
    return mockedTeamMembers.map((member, index) => (
      <motion.div
        key={member.id}
        style={{ width: "100%", height: "100%" }}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{
          delay: index * 0.05,
          duration: 0.5,
          ease: "easeOut",
        }}
        whileHover={{ scale: 1.05 }}
      >
        <TeamMemberItem
          isActive={activeMember === member.id}
          ref={teamMemberRef}
          onClick={() => handleActiveMember(member.id)}
          backgroundColor={
            (member.backgroundColor as BackgroundColorVariant) || "blue"
          }
          className={styles.sliderItem}
        />
      </motion.div>
    ));
  };

  return (
    <div className={styles.teamMembersContainer} ref={containerRef}>
      <div className={styles.teamMembersList}>{renderTeamMemberItems()}</div>

      <div className={styles.teamMembersSlider}>
        <Slider {...SLIDER_SETTINGS}>{renderTeamMemberItems()}</Slider>
      </div>

      <AnimatePresence mode="wait">
        {selectedUser && (
          <motion.div
            className={styles.teamMemberCardContainer}
            key={selectedUser.id}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <TeamMemberCard
              className={styles.teamMemberCard}
              imageUrl={
                selectedUser?.imageUrl
                  ? `${nextConfig.basePath}${selectedUser?.imageUrl}`
                  : `${nextConfig.basePath}/assets/memberImage.png`
              }
              name={selectedUser?.name}
              position={selectedUser?.role}
              email={selectedUser?.email}
              {...(selectedUser?.backgroundColor && {
                backgroundVariant:
                  selectedUser?.backgroundColor as BackgroundColorVariant,
              })}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
