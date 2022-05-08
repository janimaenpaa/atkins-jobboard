import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Fragment } from "react";
import Navigation from "../components/Navigation";
import { useRouter } from "next/router";
import AdminNavigation from "../components/AdminNavigation";

function MyApp({ Component, pageProps }: AppProps) {
  const { pathname } = useRouter();

  if (pathname.includes("/admin"))
    return (
      <Fragment>
        <AdminNavigation />
        <Component {...pageProps} />
      </Fragment>
    );

  return (
    <Fragment>
      <Navigation />
      <Component {...pageProps} />
    </Fragment>
  );
}

export default MyApp;
