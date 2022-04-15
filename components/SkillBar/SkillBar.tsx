import React from "react";
import SkillButton from "./SkillButton";

type Props = {
  required: string[];
  recommended: string[];
};

const SkillBar = ({ required, recommended }: Props) => {
  return (
    <div className="flex flex-wrap mt-2">
      {required.map((skill) => (
        <SkillButton key={skill} skill={skill} bgColor="bg-emerald-500" />
      ))}
      {recommended.map((skill) => (
        <SkillButton key={skill} skill={skill} />
      ))}
    </div>
  );
};

export default SkillBar;
