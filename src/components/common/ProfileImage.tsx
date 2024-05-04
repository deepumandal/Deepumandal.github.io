import React from "react";

const ProfileImage: React.FC = () => {
  return (
    <div className=" bg-transparent relative z-10">
      <img
        src="./ProfilePhoto.jpg"
        className="rounded-xl max-w-[80%] mx-auto aspect-square -top-[50%]"
        alt=""
      />
    </div>
  );
};

export default ProfileImage;
