import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux";
import { IgeneralState } from "../../redux/initialState/general";
import { TabsEnum } from "../../utils/global.enum";
import AboutMe from "../homePage/AboutMe";
import SkillsTab from "../homePage/SkillsTab";
import ProjectAndExperienceTab from "../homePage/ProjectAndExperienceTab";
import AchievementsAndBlogsTab from "../homePage/AchievementsAndBlogsTab";
import ContactMeTab from "../homePage/ContactMeTab";

const TabMenuDetails: React.FC = () => {
  const { activeTab } = useSelector<RootState>(
    (store) => store.generalSlice
  ) as IgeneralState;
  return (
    <div className="bg-primary-l dark:bg-primary-d h-fit laptop:min-h-space-avialable w-full px-4 py-5 flex flex-col justify-center tabView:justify-start gap-2 tabView:gap-0 mb-14 tabView:m-0 rounded-2xl  overflow-hidden">
      {activeTab === TabsEnum.AboutMe && <AboutMe />}
      {activeTab === TabsEnum.SkillsTab && <SkillsTab />}
      {activeTab === TabsEnum.ProjectAndExperienceTab && (
        <ProjectAndExperienceTab />
      )}
      {activeTab === TabsEnum.EducationTab && <ContactMeTab />}
      {activeTab === TabsEnum.ContactMeTab && <ContactMeTab />}
      {activeTab === TabsEnum.AchievementsAndBlogsTab && (
        <AchievementsAndBlogsTab />
      )}
    </div>
  );
};

export default TabMenuDetails;
