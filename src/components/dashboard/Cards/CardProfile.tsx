import React from "react";

// components

export default function CardProfile() {
  return (
    <>
      <div className="relative mb-6 mt-16 flex w-full min-w-0 flex-col break-words rounded-lg bg-white shadow-xl">
        <div className="px-6">
          <div className="flex flex-wrap justify-center">
            <div className="flex w-full justify-center px-4">
              <div className="relative">
                <img
                  alt="..."
                  src="/img/team-2-800x800.jpg"
                  className="max-w-150-px absolute -m-16 -ml-20 h-auto rounded-full border-none align-middle shadow-xl lg:-ml-16"
                />
              </div>
            </div>
            <div className="mt-20 w-full px-4 text-center">
              <div className="flex justify-center py-4 pt-8 lg:pt-4">
                <div className="mr-4 p-3 text-center">
                  <span className="text-blueGray-600 block text-xl font-bold uppercase tracking-wide">
                    22
                  </span>
                  <span className="text-blueGray-400 text-sm">Friends</span>
                </div>
                <div className="mr-4 p-3 text-center">
                  <span className="text-blueGray-600 block text-xl font-bold uppercase tracking-wide">
                    10
                  </span>
                  <span className="text-blueGray-400 text-sm">Photos</span>
                </div>
                <div className="p-3 text-center lg:mr-4">
                  <span className="text-blueGray-600 block text-xl font-bold uppercase tracking-wide">
                    89
                  </span>
                  <span className="text-blueGray-400 text-sm">Comments</span>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 text-center">
            <h3 className="text-blueGray-700 mb-2 text-xl font-semibold leading-normal">
              Jenna Stones
            </h3>
            <div className="text-blueGray-400 mt-0 mb-2 text-sm font-bold uppercase leading-normal">
              <i className="fas fa-map-marker-alt text-blueGray-400 mr-2 text-lg"></i>{" "}
              Los Angeles, California
            </div>
            <div className="text-blueGray-600 mb-2 mt-10">
              <i className="fas fa-briefcase text-blueGray-400 mr-2 text-lg"></i>
              Solution Manager - Creative Tim Officer
            </div>
            <div className="text-blueGray-600 mb-2">
              <i className="fas fa-university text-blueGray-400 mr-2 text-lg"></i>
              University of Computer Science
            </div>
          </div>
          <div className="border-blueGray-200 mt-10 border-t py-10 text-center">
            <div className="flex flex-wrap justify-center">
              <div className="w-full px-4 lg:w-9/12">
                <p className="text-blueGray-700 mb-4 text-lg leading-relaxed">
                  An artist of considerable range, Jenna the name taken by
                  Melbourne-raised, Brooklyn-based Nick Murphy writes, performs
                  and records all of his own music, giving it a warm, intimate
                  feel with a solid groove structure. An artist of considerable
                  range.
                </p>
                <a
                  href="#pablo"
                  className="text-lightBlue-500 font-normal"
                  onClick={(e) => e.preventDefault()}
                >
                  Show more
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
