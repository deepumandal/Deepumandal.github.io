import React from "react";
import ProfileImage from "./ProfileImage";
import SocialIconContainer from "./SocialIconContainer";
import Name from "./Name";
import JobRole from "./JobRole";
import Contacts from "./Contacts";
import DownloadCV from "./DownloadCV";

const ProfileCard: React.FC = () => {
  return (
    <div className="pt-14 pb-7 tabView:py-8 h-fit">
      <div className=" max-w-[85%] tabView:max-w-[85%] rounded-2xl m-auto relative">
        <ProfileImage />
        <div className=" bg-transparent relative z-10 flex items-center p-2 gap-2 flex-col tabView:p-0">
          <Name />
          <JobRole />
          <SocialIconContainer />
          <Contacts />
          <DownloadCV />
        </div>
        <div className=" bg-white absolute left-0 right-0 bottom-0 rounded-xl h-[80%] tabView:h-[85%] z-0"></div>
      </div>
    </div>
  );
};

export default ProfileCard;
