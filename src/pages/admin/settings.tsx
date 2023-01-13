import React from "react";

// components

import CardSettings from "../../components/dashboard/Cards/CardSettings";
import CardProfile from "../../components/dashboard/Cards/CardProfile";

// layout for page

import Admin from "../../layouts/dashboard/Admin";

export default function Settings() {
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full px-4 lg:w-8/12">
          <CardSettings />
        </div>
        <div className="w-full px-4 lg:w-4/12">
          <CardProfile />
        </div>
      </div>
    </>
  );
}

Settings.layout = Admin;
