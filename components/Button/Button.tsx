import React from "react";

type Props = {
  children?: React.ReactNode;
  className?: string;
  fullWidth?: boolean;
  type?: "submit" | "reset" | "button";
};

const getClassName = (
  className: string | undefined,
  fullWidth: boolean | undefined
) => {
  if (className) return className;
  if (fullWidth) {
    return "bg-sky-500 my-1 p-2 rounded-md text-white w-full";
  }
  return `bg-sky-500 my-1 p-2 rounded-md text-white`;
};

const Button = ({ children, className, fullWidth, type }: Props) => {
  return (
    <button className={getClassName(className, fullWidth)} type={type}>
      {children}
    </button>
  );
};

export default Button;
