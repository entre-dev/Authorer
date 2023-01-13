import React from "react";

export default function Footer() {
  return (
    <>
      <footer className="bg-blueGray-200 relative pt-8 pb-6">
        <div
          className="pointer-events-none absolute bottom-auto top-0 left-0 right-0 -mt-20 h-20 w-full overflow-hidden"
          style={{ transform: "translateZ(0)" }}
        >
          <svg
            className="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              className="text-blueGray-200 fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap text-center lg:text-left">
            <div className="w-full px-4 lg:w-6/12">
              <h4 className="text-3xl font-semibold">{`Let's keep in touch!`}</h4>
              <h5 className="text-blueGray-600 mt-0 mb-2 text-lg">
                Find us on any of these platforms, we respond 1-2 business days.
              </h5>
              <div className="mt-6 mb-6 lg:mb-0">
                <button
                  className="text-lightBlue-400 align-center mr-2 h-10 w-10 items-center justify-center rounded-full bg-white font-normal shadow-lg outline-none focus:outline-none"
                  type="button"
                >
                  <i className="fab fa-twitter"></i>
                </button>
                <button
                  className="text-lightBlue-600 align-center mr-2 h-10 w-10 items-center justify-center rounded-full bg-white font-normal shadow-lg outline-none focus:outline-none"
                  type="button"
                >
                  <i className="fab fa-facebook-square"></i>
                </button>
                <button
                  className="align-center mr-2 h-10 w-10 items-center justify-center rounded-full bg-white font-normal text-pink-400 shadow-lg outline-none focus:outline-none"
                  type="button"
                >
                  <i className="fab fa-dribbble"></i>
                </button>
                <button
                  className="text-blueGray-800 align-center mr-2 h-10 w-10 items-center justify-center rounded-full bg-white font-normal shadow-lg outline-none focus:outline-none"
                  type="button"
                >
                  <i className="fab fa-github"></i>
                </button>
              </div>
            </div>
            <div className="w-full px-4 lg:w-6/12">
              <div className="items-top mb-6 flex flex-wrap">
                <div className="ml-auto w-full px-4 lg:w-4/12">
                  <span className="text-blueGray-500 mb-2 block text-sm font-semibold uppercase">
                    Useful Links
                  </span>
                  <ul className="list-unstyled">
                    <li>
                      <a
                        className="text-blueGray-600 hover:text-blueGray-800 block pb-2 text-sm font-semibold"
                        href="https://www.creative-tim.com/presentation?ref=nnjs-footer"
                      >
                        About Us
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-blueGray-600 hover:text-blueGray-800 block pb-2 text-sm font-semibold"
                        href="https://blog.creative-tim.com?ref=nnjs-footer"
                      >
                        Blog
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-blueGray-600 hover:text-blueGray-800 block pb-2 text-sm font-semibold"
                        href="https://www.github.com/creativetimofficial?ref=nnjs-footer"
                      >
                        Github
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-blueGray-600 hover:text-blueGray-800 block pb-2 text-sm font-semibold"
                        href="https://www.creative-tim.com/bootstrap-themes/free?ref=nnjs-footer"
                      >
                        Free Products
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="w-full px-4 lg:w-4/12">
                  <span className="text-blueGray-500 mb-2 block text-sm font-semibold uppercase">
                    Other Resources
                  </span>
                  <ul className="list-unstyled">
                    <li>
                      <a
                        className="text-blueGray-600 hover:text-blueGray-800 block pb-2 text-sm font-semibold"
                        href="https://github.com/creativetimofficial/notus-nextjs/blob/main/LICENSE.md?ref=nnjs-footer"
                      >
                        MIT License
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-blueGray-600 hover:text-blueGray-800 block pb-2 text-sm font-semibold"
                        href="https://creative-tim.com/terms?ref=nnjs-footer"
                      >
                        Terms & Conditions
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-blueGray-600 hover:text-blueGray-800 block pb-2 text-sm font-semibold"
                        href="https://creative-tim.com/privacy?ref=nnjs-footer"
                      >
                        Privacy Policy
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-blueGray-600 hover:text-blueGray-800 block pb-2 text-sm font-semibold"
                        href="https://creative-tim.com/contact-us?ref=nnjs-footer"
                      >
                        Contact Us
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <hr className="border-blueGray-300 my-6" />
          <div className="flex flex-wrap items-center justify-center md:justify-between">
            <div className="mx-auto w-full px-4 text-center md:w-4/12">
              <div className="text-blueGray-500 py-1 text-sm font-semibold">
                Copyright © {new Date().getFullYear()} Notus NextJS by{" "}
                <a
                  href="https://www.creative-tim.com?ref=nnjs-footer"
                  className="text-blueGray-500 hover:text-blueGray-800"
                >
                  Creative Tim
                </a>
                .
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
