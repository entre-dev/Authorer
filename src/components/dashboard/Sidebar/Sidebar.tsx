import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

// import NotificationDropdown from "components/Dropdowns/NotificationDropdown.js";
// import UserDropdown from "components/Dropdowns/UserDropdown.js";

export default function Sidebar() {
  const [collapseShow, setCollapseShow] = React.useState("hidden");
  const router = useRouter();
  return (
    <>
      <nav className="relative z-10 flex flex-wrap items-center justify-between bg-white py-4 px-6 shadow-xl md:fixed md:left-0 md:top-0 md:bottom-0 md:block md:w-64 md:flex-row md:flex-nowrap md:overflow-hidden md:overflow-y-auto">
        <div className="mx-auto flex w-full flex-wrap items-center justify-between px-0 md:min-h-full md:flex-col md:flex-nowrap md:items-stretch">
          {/* Toggler */}
          <button
            className="cursor-pointer rounded border border-solid border-transparent bg-transparent px-3 py-1 text-xl leading-none text-black opacity-50 md:hidden"
            type="button"
            onClick={() => setCollapseShow("bg-white m-2 py-3 px-6")}
          >
            <i className="fas fa-bars"></i>
          </button>
          {/* Brand */}
          <Link href="/">
            <a
              href="#pablo"
              className="text-blueGray-600 mr-0 inline-block whitespace-nowrap p-4 px-0 text-left text-sm font-bold uppercase md:block md:pb-2"
            >
              Notus NextJS
            </a>
          </Link>
          {/* User */}
          <ul className="flex list-none flex-wrap items-center md:hidden">
            <li className="relative inline-block">
              {/* <NotificationDropdown /> */}
            </li>
            <li className="relative inline-block">{/* <UserDropdown /> */}</li>
          </ul>
          {/* Collapse */}
          <div
            className={
              "absolute top-0 left-0 right-0 z-40 h-auto flex-1 items-center overflow-y-auto overflow-x-hidden rounded shadow md:relative md:mt-4 md:flex md:flex-col md:items-stretch md:opacity-100 md:shadow-none " +
              collapseShow
            }
          >
            {/* Collapse header */}
            <div className="border-blueGray-200 mb-4 block border-b border-solid pb-4 md:hidden md:min-w-full">
              <div className="flex flex-wrap">
                <div className="w-6/12">
                  <Link href="/">
                    <a
                      href="#pablo"
                      className="text-blueGray-600 mr-0 inline-block whitespace-nowrap p-4 px-0 text-left text-sm font-bold uppercase md:block md:pb-2"
                    >
                      Notus NextJS
                    </a>
                  </Link>
                </div>
                <div className="flex w-6/12 justify-end">
                  <button
                    type="button"
                    className="cursor-pointer rounded border border-solid border-transparent bg-transparent px-3 py-1 text-xl leading-none text-black opacity-50 md:hidden"
                    onClick={() => setCollapseShow("hidden")}
                  >
                    <i className="fas fa-times"></i>
                  </button>
                </div>
              </div>
            </div>
            {/* Form */}
            <form className="mt-6 mb-4 md:hidden">
              <div className="mb-3 pt-0">
                <input
                  type="text"
                  placeholder="Search"
                  className="border-blueGray-500 placeholder-blueGray-300 text-blueGray-600 h-12 w-full rounded  border-0 border-solid bg-white px-3 py-2 text-base font-normal leading-snug shadow-none outline-none focus:outline-none"
                />
              </div>
            </form>

            {/* Divider */}
            <hr className="my-4 md:min-w-full" />
            {/* Heading */}
            <h6 className="text-blueGray-500 block pt-1 pb-4 text-xs font-bold uppercase no-underline md:min-w-full">
              Admin Layout Pages
            </h6>
            {/* Navigation */}

            <ul className="flex list-none flex-col md:min-w-full md:flex-col">
              <li className="items-center">
                <Link href="/admin/dashboard">
                  <a
                    href="#pablo"
                    className={
                      "block py-3 text-xs font-bold uppercase " +
                      (router.pathname.indexOf("/admin/dashboard") !== -1
                        ? "text-lightBlue-500 hover:text-lightBlue-600"
                        : "text-blueGray-700 hover:text-blueGray-500")
                    }
                  >
                    <i
                      className={
                        "fas fa-tv mr-2 text-sm " +
                        (router.pathname.indexOf("/admin/dashboard") !== -1
                          ? "opacity-75"
                          : "text-blueGray-300")
                      }
                    ></i>{" "}
                    Dashboard
                  </a>
                </Link>
              </li>

              <li className="items-center">
                <Link href="/admin/settings">
                  <a
                    href="#pablo"
                    className={
                      "block py-3 text-xs font-bold uppercase " +
                      (router.pathname.indexOf("/admin/settings") !== -1
                        ? "text-lightBlue-500 hover:text-lightBlue-600"
                        : "text-blueGray-700 hover:text-blueGray-500")
                    }
                  >
                    <i
                      className={
                        "fas fa-tools mr-2 text-sm " +
                        (router.pathname.indexOf("/admin/settings") !== -1
                          ? "opacity-75"
                          : "text-blueGray-300")
                      }
                    ></i>{" "}
                    Settings
                  </a>
                </Link>
              </li>

              <li className="items-center">
                <Link href="/admin/tables">
                  <a
                    href="#pablo"
                    className={
                      "block py-3 text-xs font-bold uppercase " +
                      (router.pathname.indexOf("/admin/tables") !== -1
                        ? "text-lightBlue-500 hover:text-lightBlue-600"
                        : "text-blueGray-700 hover:text-blueGray-500")
                    }
                  >
                    <i
                      className={
                        "fas fa-table mr-2 text-sm " +
                        (router.pathname.indexOf("/admin/tables") !== -1
                          ? "opacity-75"
                          : "text-blueGray-300")
                      }
                    ></i>{" "}
                    Tables
                  </a>
                </Link>
              </li>

              <li className="items-center">
                <Link href="/admin/maps">
                  <a
                    href="#pablo"
                    className={
                      "block py-3 text-xs font-bold uppercase " +
                      (router.pathname.indexOf("/admin/maps") !== -1
                        ? "text-lightBlue-500 hover:text-lightBlue-600"
                        : "text-blueGray-700 hover:text-blueGray-500")
                    }
                  >
                    <i
                      className={
                        "fas fa-map-marked mr-2 text-sm " +
                        (router.pathname.indexOf("/admin/maps") !== -1
                          ? "opacity-75"
                          : "text-blueGray-300")
                      }
                    ></i>{" "}
                    Maps
                  </a>
                </Link>
              </li>
            </ul>

            {/* Divider */}
            <hr className="my-4 md:min-w-full" />
            {/* Heading */}
            <h6 className="text-blueGray-500 block pt-1 pb-4 text-xs font-bold uppercase no-underline md:min-w-full">
              Auth Layout Pages
            </h6>
            {/* Navigation */}

            <ul className="flex list-none flex-col md:mb-4 md:min-w-full md:flex-col">
              <li className="items-center">
                <Link href="/auth/login">
                  <a
                    href="#pablo"
                    className="text-blueGray-700 hover:text-blueGray-500 block py-3 text-xs font-bold uppercase"
                  >
                    <i className="fas fa-fingerprint text-blueGray-400 mr-2 text-sm"></i>{" "}
                    Login
                  </a>
                </Link>
              </li>

              <li className="items-center">
                <Link href="/auth/register">
                  <a
                    href="#pablo"
                    className="text-blueGray-700 hover:text-blueGray-500 block py-3 text-xs font-bold uppercase"
                  >
                    <i className="fas fa-clipboard-list text-blueGray-300 mr-2 text-sm"></i>{" "}
                    Register
                  </a>
                </Link>
              </li>
            </ul>

            {/* Divider */}
            <hr className="my-4 md:min-w-full" />
            {/* Heading */}
            <h6 className="text-blueGray-500 block pt-1 pb-4 text-xs font-bold uppercase no-underline md:min-w-full">
              No Layout Pages
            </h6>
            {/* Navigation */}

            <ul className="flex list-none flex-col md:mb-4 md:min-w-full md:flex-col">
              <li className="items-center">
                <Link href="/landing">
                  <a
                    href="#pablo"
                    className="text-blueGray-700 hover:text-blueGray-500 block py-3 text-xs font-bold uppercase"
                  >
                    <i className="fas fa-newspaper text-blueGray-400 mr-2 text-sm"></i>{" "}
                    Landing Page
                  </a>
                </Link>
              </li>

              <li className="items-center">
                <Link href="/profile">
                  <a
                    href="#pablo"
                    className="text-blueGray-700 hover:text-blueGray-500 block py-3 text-xs font-bold uppercase"
                  >
                    <i className="fas fa-user-circle text-blueGray-400 mr-2 text-sm"></i>{" "}
                    Profile Page
                  </a>
                </Link>
              </li>
            </ul>

            {/* Divider */}
            <hr className="my-4 md:min-w-full" />
            {/* Heading */}
            <h6 className="text-blueGray-500 block pt-1 pb-4 text-xs font-bold uppercase no-underline md:min-w-full">
              Documentation
            </h6>
            {/* Navigation */}
            <ul className="flex list-none flex-col md:mb-4 md:min-w-full md:flex-col">
              <li className="inline-flex">
                <a
                  href="https://www.creative-tim.com/learning-lab/tailwind/nextjs/colors/notus"
                  target="_blank"
                  rel="noreferrer"
                  className="text-blueGray-700 hover:text-blueGray-500 mb-4 block text-sm font-semibold no-underline"
                >
                  <i className="fas fa-paint-brush text-blueGray-300 mr-2 text-base"></i>
                  Styles
                </a>
              </li>

              <li className="inline-flex">
                <a
                  href="https://www.creative-tim.com/learning-lab/tailwind/nextjs/alerts/notus"
                  target="_blank"
                  rel="noreferrer"
                  className="text-blueGray-700 hover:text-blueGray-500 mb-4 block text-sm font-semibold no-underline"
                >
                  <i className="fab fa-css3-alt text-blueGray-300 mr-2 text-base"></i>
                  CSS Components
                </a>
              </li>

              <li className="inline-flex">
                <a
                  href="https://www.creative-tim.com/learning-lab/tailwind/angular/overview/notus"
                  target="_blank"
                  rel="noreferrer"
                  className="text-blueGray-700 hover:text-blueGray-500 mb-4 block text-sm font-semibold no-underline"
                >
                  <i className="fab fa-angular text-blueGray-300 mr-2 text-base"></i>
                  Angular
                </a>
              </li>

              <li className="inline-flex">
                <a
                  href="https://www.creative-tim.com/learning-lab/tailwind/js/overview/notus"
                  target="_blank"
                  rel="noreferrer"
                  className="text-blueGray-700 hover:text-blueGray-500 mb-4 block text-sm font-semibold no-underline"
                >
                  <i className="fab fa-js-square text-blueGray-300 mr-2 text-base"></i>
                  Javascript
                </a>
              </li>

              <li className="inline-flex">
                <a
                  href="https://www.creative-tim.com/learning-lab/tailwind/nextjs/overview/notus"
                  target="_blank"
                  rel="noreferrer"
                  className="text-blueGray-700 hover:text-blueGray-500 mb-4 block text-sm font-semibold no-underline"
                >
                  <i className="fab fa-react text-blueGray-300 mr-2 text-base"></i>
                  NextJS
                </a>
              </li>

              <li className="inline-flex">
                <a
                  href="https://www.creative-tim.com/learning-lab/tailwind/react/overview/notus"
                  target="_blank"
                  rel="noreferrer"
                  className="text-blueGray-700 hover:text-blueGray-500 mb-4 block text-sm font-semibold no-underline"
                >
                  <i className="fab fa-react text-blueGray-300 mr-2 text-base"></i>
                  React
                </a>
              </li>

              <li className="inline-flex">
                <a
                  href="https://www.creative-tim.com/learning-lab/tailwind/svelte/overview/notus"
                  target="_blank"
                  rel="noreferrer"
                  className="text-blueGray-700 hover:text-blueGray-500 mb-4 block text-sm font-semibold no-underline"
                >
                  <i className="fas fa-link text-blueGray-300 mr-2 text-base"></i>
                  Svelte
                </a>
              </li>

              <li className="inline-flex">
                <a
                  href="https://www.creative-tim.com/learning-lab/tailwind/vue/overview/notus"
                  target="_blank"
                  rel="noreferrer"
                  className="text-blueGray-700 hover:text-blueGray-500 mb-4 block text-sm font-semibold no-underline"
                >
                  <i className="fab fa-vuejs text-blueGray-300 mr-2 text-base"></i>
                  VueJS
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
