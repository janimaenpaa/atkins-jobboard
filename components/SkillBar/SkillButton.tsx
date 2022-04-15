import React from "react";

type Props = {
  skill: string;
  bgColor?: string;
  hover?: string;
};

const SkillButton = ({ skill, bgColor = "bg-sky-500" }: Props) => {
  return (
    <div className={`${bgColor} m-1 p-1 px-2 rounded-md text-white`}>
      {skill}
    </div>
  );
};

export default SkillButton;
