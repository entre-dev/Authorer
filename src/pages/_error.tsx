import React, { useEffect } from "react";
import Router from "next/router";

const Error = () => {
  useEffect(() => {
    void Router.push("/");
  });

  return <div />;
};

export default Error;
