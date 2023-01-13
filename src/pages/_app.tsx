import { type AppType } from "next/dist/shared/lib/utils";
import "../styles/globals.css";
import React from "react";
import { useRouter } from "next/router";

import PageChange from "../components/dashboard/PageChange/PageChange";

const MyApp: AppType = ({ Component, pageProps }) => {
  const router = useRouter();

  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    setLoading(true);
    console.log(`Loading: ${router.pathname}`);
    document.body.classList.add("body-page-transition");
    setLoading(false);
    return () => {
      document.body.classList.remove("body-page-transition");
    };
  }, [router.pathname]);

  if (loading) {
    return <PageChange path={router.pathname} />;
  }

  return <Component {...pageProps} />;
};

export default MyApp;
