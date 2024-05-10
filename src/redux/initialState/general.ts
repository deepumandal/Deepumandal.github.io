import { TabsEnum } from "../../utils/global.enum";

export interface ITabLists {
  title: TabsEnum;
  icon: string;
}

export interface IgeneralState {
  activeTheme: "dark" | "light";
  activeTab: TabsEnum;
  TabLists: ITabLists[];
}
const TabLists: ITabLists[] = [
  {
    title: TabsEnum.AboutMe,
    icon: "about-me.png",
  },
  {
    title: TabsEnum.SkillsTab,
    icon: "skills.png",
  },
  {
    title: TabsEnum.ProjectAndExperienceTab,
    icon: "Projects.png",
  },
  {
    title: TabsEnum.EducationTab,
    icon: "education.png",
  },
  {
    title: TabsEnum.AchievementsAndBlogsTab,
    icon: "Achievements.png",
  },
  {
    title: TabsEnum.ContactMeTab,
    icon: "contact.png",
  },
];

export const generalState: IgeneralState = {
  activeTheme: window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light",
  activeTab: TabsEnum.AboutMe,
  TabLists: TabLists,
};
