import Link from "next/link";

type Props = {};

const Navigation = (props: Props) => {
  return (
    <div className="flex sticky items-center justify-between bg-black h-16 w-full text-white p-10">
      <Link href="/admin">
        <a className="text-lg font-bold">Dashboard</a>
      </Link>
      <div>
        <Link href="/">
          <a className="font-semibold ml-4">Go Home</a>
        </Link>
      </div>
    </div>
  );
};

export default Navigation;
