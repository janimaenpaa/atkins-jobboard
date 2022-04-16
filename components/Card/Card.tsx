import React from "react";

type Props = {
  children: React.ReactNode;
  title?: string;
  subtitle?: string;
  margin?: string;
  padding?: string;
};

const Card = ({
  children,
  title,
  subtitle,
  margin = "4",
  padding = "4",
}: Props) => {
  const p = `p-${padding}`;
  const m = `m-${margin}`;
  return (
    <div className={`w-full max-w-6xl ${m} ${p} border-gray-500 bg-white rounded-md`}>
      {title && <h3 className="text-xl font-bold mt-1">{title}</h3>}
      {subtitle && (
        <h4 className="text-stone-600 font-semibold ">{subtitle}</h4>
      )}
      {children}
    </div>
  );
};

export default Card;
