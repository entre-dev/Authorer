import React from "react";

// components

import CardLineChart from "../../components/dashboard/Cards/CardLineChart";
import CardBarChart from "../../components/dashboard/Cards/CardBarChart";
import CardPageVisits from "../../components/dashboard/Cards/CardPageVisits";
import CardSocialTraffic from "../../components/dashboard/Cards/CardSocialTraffic";

// layout for page

import Admin from "../../layouts/dashboard/Admin";

export default function Dashboard() {
  return (
    <>
      <div className="flex flex-wrap">
        <div className="mb-12 w-full px-4 xl:mb-0 xl:w-8/12">
          <CardLineChart />
        </div>
        <div className="w-full px-4 xl:w-4/12">
          <CardBarChart />
        </div>
      </div>
      <div className="mt-4 flex flex-wrap">
        <div className="mb-12 w-full px-4 xl:mb-0 xl:w-8/12">
          <CardPageVisits />
        </div>
        <div className="w-full px-4 xl:w-4/12">
          <CardSocialTraffic />
        </div>
      </div>
    </>
  );
}

Dashboard.layout = Admin;
