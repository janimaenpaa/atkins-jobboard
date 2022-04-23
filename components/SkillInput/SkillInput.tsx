import React, {
  ChangeEvent,
  Dispatch,
  KeyboardEvent,
  SetStateAction,
  useState,
} from "react";

type Props = {
  skills: string[];
  setSkills: Dispatch<SetStateAction<string[]>>;
  label?: string;
  bgColor?: string;
};

const SkillInput = ({
  skills,
  setSkills,
  bgColor = "bg-sky-500",
  label,
}: Props) => {
  const [skill, setSkill] = useState<string>("");
  console.log(skill);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSkill(event.target.value);
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();

    if (!skills.includes(skill) && skill.length !== 0) {
      setSkills([...skills, skill]);
      setSkill("");
    }
  };

  const handleDelete = (item: string) => {
    const filteredSkills = skills.filter((s) => s !== item);
    setSkills(filteredSkills);
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLElement>) => {
    if (event.key === "Enter") {
      event.preventDefault();
      handleSubmit(event);
    }
  };

  return (
    <div className="flex flex-col my-2 mb-4">
      <label>{label}</label>
      <div className="flex border border-slate-500 rounded">
        <input
          className={"p-2 my-1 w-full focus:outline-none"}
          value={skill}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
        />
        <button className="bg-emerald-500 w-32" onClick={handleSubmit}>
          Add
        </button>
      </div>
      <div className="flex flex-wrap">
        {skills.map((s) => (
          <button
            key={s}
            className={`${bgColor} m-1 mt-2 p-1 px-2 rounded-md text-white`}
            onClick={() => handleDelete(s)}
          >
            {s}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SkillInput;
