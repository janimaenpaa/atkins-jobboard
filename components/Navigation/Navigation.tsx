import Link from "next/link";
import React from "react";

type Props = {};

const Navigation = (props: Props) => {
  return (
    <div className="flex sticky items-center justify-between bg-black h-16 w-full text-white p-10">
      <Link href="/">
        <a className="text-lg font-bold">Atkins Jobs</a>
      </Link>
      <div>
        <Link href="/admin">
          <a className="font-semibold">Admin</a>
        </Link>
        <Link href="/postjob">
          <a className="font-semibold ml-4">Post A Job</a>
        </Link>
      </div>
    </div>
  );
};

export default Navigation;
