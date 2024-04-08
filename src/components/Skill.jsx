import React from "react";
import SkillsItem from "./SkillsItem";

const data = [
  {
    year: 2021,
    title: "Backend Developer",
    duration: "3 Years Experience",
    details:
      "As a Backend Developer, I've accumulated 2 years of valuable experience, crafting robust and scalable server-side solutions. My role involved implementing efficient APIs, optimizing database queries, and ensuring the seamless functioning of web applications.",
  },
  {
    year: 2021,
    title: "Software Engineer",
    duration: "3 Years Experience",
    details:
      "With 3 years as a Software Engineer, I've been deeply involved in the development life cycle, from conceptualization to deployment. My expertise includes designing and implementing software solutions, collaborating with cross-functional teams, and continuously enhancing code quality.",
  },
  {
    year: 2022,
    title: "FrontEnd Developer",
    duration: "2 Years Experience",
    details:
      "As a FrontEnd Developer for 2 years, I specialized in crafting visually appealing and user-friendly interfaces. My role involved translating design concepts into code, optimizing website performance, and staying updated with the latest front-end technologies.",
  },
  {
    year: 2023,
    title: "YouTube Content Creator",
    duration: "1.5 Years Experience",
    details:
      "During my 1.5-year stint as a Content Creator, I honed my skills in creating engaging and informative content. Whether it was producing videos, or managing social media platforms, I successfully communicated complex concepts in an accessible manner.",
  },
];

const Skill = () => {
  return (
    <div id="skills" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16 ">
      <h1 className="text-4xl font-bold text-center text-[#001b5e]">Skill</h1>
      {data.map((item, idx) => (
        <SkillsItem
          key={idx}
          year={item.year}
          title={item.title}
          duration={item.duration}
          details={item.details}
        />
      ))}
    </div>
  );
};

export default Skill;
