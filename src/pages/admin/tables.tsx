import React from "react";

// components

import CardTable from "../../components/dashboard/Cards/CardTable";

// layout for page

import Admin from "../../layouts/dashboard/Admin";

export default function Tables() {
  return (
    <>
      <div className="mt-4 flex flex-wrap">
        <div className="mb-12 w-full px-4">
          <CardTable />
        </div>
        <div className="mb-12 w-full px-4">
          <CardTable color="dark" />
        </div>
      </div>
    </>
  );
}

Tables.layout = Admin;
