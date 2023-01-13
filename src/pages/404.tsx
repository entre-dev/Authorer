import React, { useEffect } from "react";
import Router from "next/router";
const Error404 = () => {
  useEffect(() => {
    void Router.push("/");
  });

  return <div />;
};

export default Error404;
