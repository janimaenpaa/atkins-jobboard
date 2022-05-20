import Link from "next/link";
import { useRouter } from "next/router";
import { POST } from "../../lib/api";

type Props = {};

const Navigation = (props: Props) => {
  const router = useRouter();

  const handleLogout = async () => {
    await POST("/logout", {});
    router.push("/admin/login")
  };

  return (
    <div className="flex sticky items-center justify-between bg-black h-16 w-full text-white p-10">
      <Link href="/admin">
        <a className="text-lg font-bold">Dashboard</a>
      </Link>
      <div className="flex">
        <Link href="/">
          <a className="font-semibold ml-4">Go Home</a>
        </Link>
        <button className="font-semibold ml-4" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default Navigation;
