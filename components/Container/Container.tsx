import React from "react";

type Props = {
  children: React.ReactNode;
};

const Container = ({ children }: Props) => {
  return (
    <div
      className={`min-h-full py-8 px-4 flex flex-col justify-center items-center`}
    >
      {children}
    </div>
  );
};

export default Container;
