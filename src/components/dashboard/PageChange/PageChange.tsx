import React from "react";

// reactstrap components
// import { Spinner } from "reactstrap";

// core components

export default function PageChange(props: { path: string }) {
  return (
    <div>
      <div
        className="fixed top-0 left-0 z-40 h-full w-full bg-cover"
        style={{
          backgroundImage: "url('/img/img-1-1000x600.jpg')",
        }}
      ></div>
      <div className="absolute top-0 left-0 z-50 block h-full w-full bg-black bg-opacity-50"></div>
      <div className="relative top-0 z-50 my-32 mx-auto max-w-sm text-center">
        <div className="mb-4 block">
          <i className="fas fa-circle-notch mx-auto animate-spin text-6xl text-white"></i>
        </div>
        <h4 className="text-lg font-medium text-white">
          Loading page contents for: {props.path}
        </h4>
      </div>
    </div>
  );
}
