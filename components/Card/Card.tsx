import React from "react";

type Props = {
  children: React.ReactNode;
  title?: string;
  margin?: string;
  padding?: string;
};

const Card = ({ children, title, margin = "4", padding = "4" }: Props) => {
  return (
    <div
      className={`w-full m-${margin} p-${padding} border-gray-500 bg-white rounded-md`}
    >
      {title && <h3 className="text-xl font-bold my-1">{title}</h3>}
      {children}
    </div>
  );
};

export default Card;
