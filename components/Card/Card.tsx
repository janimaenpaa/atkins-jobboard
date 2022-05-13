import Link from "next/link";
import React from "react";

type Props = {
  children: React.ReactNode;
  title?: string;
  titleHref?: string;
  subtitle?: string;
  fullWidth?: boolean;
};

const Card = ({ children, title, titleHref, subtitle, fullWidth }: Props) => {
  return (
    <div
      className={
        fullWidth
          ? `max-w-full m-2 p-4 border-gray-500 bg-white rounded-md  overflow-x-auto`
          : `w-full max-w-4xl m-2 p-4 border-gray-500 bg-white rounded-md`
      }
    >
      {title && !titleHref && (
        <h3 className="text-xl font-bold mt-1">{title}</h3>
      )}
      {title && titleHref && (
        <Link href={titleHref} passHref>
          <a>
            <h3 className="text-xl font-bold mt-1">{title}</h3>
          </a>
        </Link>
      )}
      {subtitle && <h4 className="text-stone-600 font-semibold">{subtitle}</h4>}
      {children}
    </div>
  );
};

export default Card;
