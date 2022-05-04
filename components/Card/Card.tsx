import React from "react";

type Props = {
  children: React.ReactNode;
  title?: string;
  subtitle?: string;
  fullWidth?: boolean;
};

const Card = ({ children, title, subtitle, fullWidth }: Props) => {
  return (
    <div
      className={
        fullWidth
          ? `w-full m-2 p-4 border-gray-500 bg-white rounded-md  overflow-x-auto min-w-full`
          : `w-full max-w-6xl m-2 p-4 border-gray-500 bg-white rounded-md`
      }
    >
      {title && <h3 className="text-xl font-bold mt-1">{title}</h3>}
      {subtitle && <h4 className="text-stone-600 font-semibold">{subtitle}</h4>}
      {children}
    </div>
  );
};

export default Card;
