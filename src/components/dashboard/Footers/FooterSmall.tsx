import React from "react";

export default function FooterSmall(props: { absolute: boolean }) {
  return (
    <>
      <footer
        className={
          (props.absolute
            ? "bg-blueGray-800 absolute bottom-0 w-full"
            : "relative") + " pb-6"
        }
      >
        <div className="container mx-auto px-4">
          <hr className="border-b-1 border-blueGray-600 mb-6" />
          <div className="flex flex-wrap items-center justify-center md:justify-between">
            <div className="w-full px-4 md:w-4/12">
              <div className="text-blueGray-500 py-1 text-center text-sm font-semibold md:text-left">
                Copyright © {new Date().getFullYear()}{" "}
                <a
                  href="https://www.creative-tim.com?ref=nnjs-footer-small"
                  className="hover:text-blueGray-300 py-1 text-sm font-semibold text-white"
                >
                  Creative Tim
                </a>
              </div>
            </div>
            <div className="w-full px-4 md:w-8/12">
              <ul className="flex list-none flex-wrap justify-center  md:justify-end">
                <li>
                  <a
                    href="https://www.creative-tim.com?ref=nnjs-footer-small"
                    className="hover:text-blueGray-300 block py-1 px-3 text-sm font-semibold text-white"
                  >
                    Creative Tim
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.creative-tim.com/presentation?ref=nnjs-footer-small"
                    className="hover:text-blueGray-300 block py-1 px-3 text-sm font-semibold text-white"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="http://blog.creative-tim.com?ref=nnjs-footer-small"
                    className="hover:text-blueGray-300 block py-1 px-3 text-sm font-semibold text-white"
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/creativetimofficial/notus-nextjs/blob/main/LICENSE.md?ref=nnjs-footer-small"
                    className="hover:text-blueGray-300 block py-1 px-3 text-sm font-semibold text-white"
                  >
                    MIT License
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
