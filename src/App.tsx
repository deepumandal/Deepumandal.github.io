import React from "react";
import ProfileCard from "./components/common/ProfileCard";
import TabMenu from "./components/common/TabMenu";
import TabMenuDetails from "./components/common/TabMenuDetails";

const App: React.FC = () => {
  return (
    <div className="w-sreen min-h-screen tabView:min-h-screen h-fit bg-background-l dark:bg-background-d  ">
      <div className="tabView:flex tabView:max-w-[800px] laptop:max-w-[1400px] min-h-full h-fit w-space-avialable m-auto">
        {/* <---------- profile card ----------> */}
        <div className="tabView:max-w-64 laptop:max-w-80 ">
          <ProfileCard />
        </div>
        {/* <---------- profile card ----------> */}
        {/* <---------- Profile Details  ---------- > */}
        <div className="min-h-full  laptop:flex laptop:flex-row-reverse justify-center gap-3  rounded-lg  w-[90%] mx-auto tabView:m-0 tabView:pt-10  tabView:pr-10 ">
          <TabMenu />
          <TabMenuDetails />
        </div>
        {/* <---------- Profile Details  ---------- > */}
      </div>
    </div>
  );
};

export default App;
