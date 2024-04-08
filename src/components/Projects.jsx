import React from "react";
import ProjectItems from "./ProjectItems";
import what1 from "../assets/pms1.png";
import what2 from "../assets/dd2.png";
import school from "../assets/school.png";
import sms from "../assets/sms.png";
import drive_dairy from "../assets/drive_dairy.png";

const Projects = () => {
  return (
    <div id="project" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold text-center text-[#001b5e]">
        Projects
      </h1>
      <p className="text-center py-8">
        Explore a showcase of my recent projects, each crafted with passion and
        creativity. From web applications simplifying school management to
        innovative WhatsApp reply automation tools, these projects reflect my
        dedication to building impactful solutions. Scroll down to get a glimpse
        of my work.
      </p>
      <div className="grid sm:grid-cols-3 gap-12">
        
        <ProjectItems
          img={drive_dairy}
          title={"drive_dairy"}
          url={
            "https://github.com/peter-evance/demo-efarm"
          }
        />
        <ProjectItems
          img={sms}
          title={"School Management"}
          url={"https://school-management-system-ui.vercel.app/"}
        />
        <ProjectItems img={what1} title={"Poultry Management System"} />
        <ProjectItems img={what2} title={"Poultry Management System"} />
        <ProjectItems img={school} title={"School Application"} />
      </div>
    </div>
  );
};

export default Projects;
