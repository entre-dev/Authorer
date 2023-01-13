import React from "react";
import Link from "next/link";

// components

import Footer from "../components/dashboard/Footers/Footer";
import Navbar from "../components/dashboard/Navbars/AuthNavbar";

export default function Landing() {
  return (
    <>
      <Navbar />
      <main>
        <div className="min-h-screen-75 relative flex content-center items-center justify-center pt-16 pb-32">
          <div
            className="absolute top-0 h-full w-full bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80')",
            }}
          >
            <span
              id="blackOverlay"
              className="absolute h-full w-full bg-black opacity-75"
            ></span>
          </div>
          <div className="container relative mx-auto">
            <div className="flex flex-wrap items-center">
              <div className="ml-auto mr-auto w-full px-4 text-center lg:w-6/12">
                <div className="pr-12">
                  <h1 className="text-5xl font-semibold text-white">
                    Your story starts with us.
                  </h1>
                  <p className="text-blueGray-200 mt-4 text-lg">
                    This is a simple example of a Landing Page you can build
                    using Notus NextJS. It features multiple CSS components
                    based on the Tailwind CSS design system.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            className="pointer-events-none absolute top-auto bottom-0 left-0 right-0 h-16 w-full overflow-hidden"
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
        </div>

        <section className="bg-blueGray-200 -mt-24 pb-20">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap">
              <div className="w-full px-4 pt-6 text-center md:w-4/12 lg:pt-12">
                <div className="relative mb-8 flex w-full min-w-0 flex-col break-words rounded-lg bg-white shadow-lg">
                  <div className="flex-auto px-4 py-5">
                    <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-full bg-red-400 p-3 text-center text-white shadow-lg">
                      <i className="fas fa-award"></i>
                    </div>
                    <h6 className="text-xl font-semibold">Awarded Agency</h6>
                    <p className="text-blueGray-500 mt-2 mb-4">
                      Divide details about your product or agency work into
                      parts. A paragraph describing a feature will be enough.
                    </p>
                  </div>
                </div>
              </div>

              <div className="w-full px-4 text-center md:w-4/12">
                <div className="relative mb-8 flex w-full min-w-0 flex-col break-words rounded-lg bg-white shadow-lg">
                  <div className="flex-auto px-4 py-5">
                    <div className="bg-lightBlue-400 mb-5 inline-flex h-12 w-12 items-center justify-center rounded-full p-3 text-center text-white shadow-lg">
                      <i className="fas fa-retweet"></i>
                    </div>
                    <h6 className="text-xl font-semibold">Free Revisions</h6>
                    <p className="text-blueGray-500 mt-2 mb-4">
                      Keep you user engaged by providing meaningful information.
                      Remember that by this time, the user is curious.
                    </p>
                  </div>
                </div>
              </div>

              <div className="w-full px-4 pt-6 text-center md:w-4/12">
                <div className="relative mb-8 flex w-full min-w-0 flex-col break-words rounded-lg bg-white shadow-lg">
                  <div className="flex-auto px-4 py-5">
                    <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-full bg-emerald-400 p-3 text-center text-white shadow-lg">
                      <i className="fas fa-fingerprint"></i>
                    </div>
                    <h6 className="text-xl font-semibold">Verified Company</h6>
                    <p className="text-blueGray-500 mt-2 mb-4">
                      Write a few lines about each one. A paragraph describing a
                      feature will be enough. Keep you user engaged!
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-32 flex flex-wrap items-center">
              <div className="mr-auto ml-auto w-full px-4 md:w-5/12">
                <div className="text-blueGray-500 mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-white p-3 text-center shadow-lg">
                  <i className="fas fa-user-friends text-xl"></i>
                </div>
                <h3 className="mb-2 text-3xl font-semibold leading-normal">
                  Working with us is a pleasure
                </h3>
                <p className="text-blueGray-600 mt-4 mb-4 text-lg font-light leading-relaxed">
                  {` Don't let your uses guess by attaching tooltips and popoves to
                  any element. Just make sure you enable them first via
                  JavaScript.`}
                </p>
                <p className="text-blueGray-600 mt-0 mb-4 text-lg font-light leading-relaxed">
                  {`The kit comes with three pre-built pages to help you get
                  started faster. You can change the text and images and you're
                  good to go. Just make sure you enable them first via
                  JavaScript.`}
                </p>
                <Link href="/" className="text-blueGray-700 mt-8 font-bold">
                  Check Notus NextJS!
                </Link>
              </div>

              <div className="mr-auto ml-auto w-full px-4 md:w-4/12">
                <div className="bg-blueGray-700 relative mb-6 flex w-full min-w-0 flex-col break-words rounded-lg bg-white shadow-lg">
                  <img
                    alt="..."
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80"
                    className="w-full rounded-t-lg align-middle"
                  />
                  <blockquote className="relative mb-4 p-8">
                    <svg
                      preserveAspectRatio="none"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 583 95"
                      className="h-95-px -top-94-px absolute left-0 block w-full"
                    >
                      <polygon
                        points="-30,95 583,95 583,65"
                        className="text-blueGray-700 fill-current"
                      ></polygon>
                    </svg>
                    <h4 className="text-xl font-bold text-white">
                      Top Notch Services
                    </h4>
                    <p className="text-md mt-2 font-light text-white">
                      The Arctic Ocean freezes every winter and much of the
                      sea-ice then thaws every summer, and that process will
                      continue whatever happens.
                    </p>
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="relative py-20">
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
                className="fill-current text-white"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>

          <div className="container mx-auto px-4">
            <div className="flex flex-wrap items-center">
              <div className="ml-auto mr-auto w-full px-4 md:w-4/12">
                <img
                  alt="..."
                  className="max-w-full rounded-lg shadow-lg"
                  src="https://images.unsplash.com/photo-1555212697-194d092e3b8f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
                />
              </div>
              <div className="ml-auto mr-auto w-full px-4 md:w-5/12">
                <div className="md:pr-12">
                  <div className="text-blueGray-500 bg-blueGray-200 mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full p-3 text-center shadow-lg">
                    <i className="fas fa-rocket text-xl"></i>
                  </div>
                  <h3 className="text-3xl font-semibold">A growing company</h3>
                  <p className="text-blueGray-500 mt-4 text-lg leading-relaxed">
                    {`The extension comes with three pre-built pages to help you
                    get started faster. You can change the text and images and
                    you're good to go.`}
                  </p>
                  <ul className="mt-6 list-none">
                    <li className="py-2">
                      <div className="flex items-center">
                        <div>
                          <span className="text-blueGray-500 bg-blueGray-100 mr-3 inline-block rounded-full py-1 px-2 text-xs font-semibold uppercase">
                            <i className="fas fa-fingerprint"></i>
                          </span>
                        </div>
                        <div>
                          <h4 className="text-blueGray-500">
                            Carefully crafted components
                          </h4>
                        </div>
                      </div>
                    </li>
                    <li className="py-2">
                      <div className="flex items-center">
                        <div>
                          <span className="text-blueGray-500 bg-blueGray-100 mr-3 inline-block rounded-full py-1 px-2 text-xs font-semibold uppercase">
                            <i className="fab fa-html5"></i>
                          </span>
                        </div>
                        <div>
                          <h4 className="text-blueGray-500">
                            Amazing page examples
                          </h4>
                        </div>
                      </div>
                    </li>
                    <li className="py-2">
                      <div className="flex items-center">
                        <div>
                          <span className="text-blueGray-500 bg-blueGray-100 mr-3 inline-block rounded-full py-1 px-2 text-xs font-semibold uppercase">
                            <i className="far fa-paper-plane"></i>
                          </span>
                        </div>
                        <div>
                          <h4 className="text-blueGray-500">
                            Dynamic components
                          </h4>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="pt-20 pb-48">
          <div className="container mx-auto px-4">
            <div className="mb-24 flex flex-wrap justify-center text-center">
              <div className="w-full px-4 lg:w-6/12">
                <h2 className="text-4xl font-semibold">Here are our heroes</h2>
                <p className="text-blueGray-500 m-4 text-lg leading-relaxed">
                  According to the National Oceanic and Atmospheric
                  Administration, Ted, Scambos, NSIDClead scentist, puts the
                  potentially record maximum.
                </p>
              </div>
            </div>
            <div className="flex flex-wrap">
              <div className="mb-12 w-full px-4 md:w-6/12 lg:mb-0 lg:w-3/12">
                <div className="px-6">
                  <img
                    alt="..."
                    src="/img/team-1-800x800.jpg"
                    className="max-w-120-px mx-auto rounded-full shadow-lg"
                  />
                  <div className="pt-6 text-center">
                    <h5 className="text-xl font-bold">Ryan Tompson</h5>
                    <p className="text-blueGray-400 mt-1 text-sm font-semibold uppercase">
                      Web Developer
                    </p>
                    <div className="mt-6">
                      <button
                        className="bg-lightBlue-400 mr-1 mb-1 h-8 w-8 rounded-full text-white outline-none focus:outline-none"
                        type="button"
                      >
                        <i className="fab fa-twitter"></i>
                      </button>
                      <button
                        className="bg-lightBlue-600 mr-1 mb-1 h-8 w-8 rounded-full text-white outline-none focus:outline-none"
                        type="button"
                      >
                        <i className="fab fa-facebook-f"></i>
                      </button>
                      <button
                        className="mr-1 mb-1 h-8 w-8 rounded-full bg-pink-500 text-white outline-none focus:outline-none"
                        type="button"
                      >
                        <i className="fab fa-dribbble"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mb-12 w-full px-4 md:w-6/12 lg:mb-0 lg:w-3/12">
                <div className="px-6">
                  <img
                    alt="..."
                    src="/img/team-2-800x800.jpg"
                    className="max-w-120-px mx-auto rounded-full shadow-lg"
                  />
                  <div className="pt-6 text-center">
                    <h5 className="text-xl font-bold">Romina Hadid</h5>
                    <p className="text-blueGray-400 mt-1 text-sm font-semibold uppercase">
                      Marketing Specialist
                    </p>
                    <div className="mt-6">
                      <button
                        className="mr-1 mb-1 h-8 w-8 rounded-full bg-red-600 text-white outline-none focus:outline-none"
                        type="button"
                      >
                        <i className="fab fa-google"></i>
                      </button>
                      <button
                        className="bg-lightBlue-600 mr-1 mb-1 h-8 w-8 rounded-full text-white outline-none focus:outline-none"
                        type="button"
                      >
                        <i className="fab fa-facebook-f"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mb-12 w-full px-4 md:w-6/12 lg:mb-0 lg:w-3/12">
                <div className="px-6">
                  <img
                    alt="..."
                    src="/img/team-3-800x800.jpg"
                    className="max-w-120-px mx-auto rounded-full shadow-lg"
                  />
                  <div className="pt-6 text-center">
                    <h5 className="text-xl font-bold">Alexa Smith</h5>
                    <p className="text-blueGray-400 mt-1 text-sm font-semibold uppercase">
                      UI/UX Designer
                    </p>
                    <div className="mt-6">
                      <button
                        className="mr-1 mb-1 h-8 w-8 rounded-full bg-red-600 text-white outline-none focus:outline-none"
                        type="button"
                      >
                        <i className="fab fa-google"></i>
                      </button>
                      <button
                        className="bg-lightBlue-400 mr-1 mb-1 h-8 w-8 rounded-full text-white outline-none focus:outline-none"
                        type="button"
                      >
                        <i className="fab fa-twitter"></i>
                      </button>
                      <button
                        className="bg-blueGray-700 mr-1 mb-1 h-8 w-8 rounded-full text-white outline-none focus:outline-none"
                        type="button"
                      >
                        <i className="fab fa-instagram"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mb-12 w-full px-4 md:w-6/12 lg:mb-0 lg:w-3/12">
                <div className="px-6">
                  <img
                    alt="..."
                    src="/img/team-4-470x470.png"
                    className="max-w-120-px mx-auto rounded-full shadow-lg"
                  />
                  <div className="pt-6 text-center">
                    <h5 className="text-xl font-bold">Jenna Kardi</h5>
                    <p className="text-blueGray-400 mt-1 text-sm font-semibold uppercase">
                      Founder and CEO
                    </p>
                    <div className="mt-6">
                      <button
                        className="mr-1 mb-1 h-8 w-8 rounded-full bg-pink-500 text-white outline-none focus:outline-none"
                        type="button"
                      >
                        <i className="fab fa-dribbble"></i>
                      </button>
                      <button
                        className="mr-1 mb-1 h-8 w-8 rounded-full bg-red-600 text-white outline-none focus:outline-none"
                        type="button"
                      >
                        <i className="fab fa-google"></i>
                      </button>
                      <button
                        className="bg-lightBlue-400 mr-1 mb-1 h-8 w-8 rounded-full text-white outline-none focus:outline-none"
                        type="button"
                      >
                        <i className="fab fa-twitter"></i>
                      </button>
                      <button
                        className="bg-blueGray-700 mr-1 mb-1 h-8 w-8 rounded-full text-white outline-none focus:outline-none"
                        type="button"
                      >
                        <i className="fab fa-instagram"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-blueGray-800 relative block pb-20">
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
                className="text-blueGray-800 fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>

          <div className="container mx-auto px-4 lg:pt-24 lg:pb-64">
            <div className="flex flex-wrap justify-center text-center">
              <div className="w-full px-4 lg:w-6/12">
                <h2 className="text-4xl font-semibold text-white">
                  Build something
                </h2>
                <p className="text-blueGray-400 mt-4 mb-4 text-lg leading-relaxed">
                  Put the potentially record low maximum sea ice extent tihs
                  year down to low ice. According to the National Oceanic and
                  Atmospheric Administration, Ted, Scambos.
                </p>
              </div>
            </div>
            <div className="mt-12 flex flex-wrap justify-center">
              <div className="w-full px-4 text-center lg:w-3/12">
                <div className="text-blueGray-800 inline-flex h-12 w-12 items-center justify-center rounded-full bg-white p-3 shadow-lg">
                  <i className="fas fa-medal text-xl"></i>
                </div>
                <h6 className="mt-5 text-xl font-semibold text-white">
                  Excelent Services
                </h6>
                <p className="text-blueGray-400 mt-2 mb-4">
                  {`Some quick example text to build on the card title and make up
                  the bulk of the card's content.`}
                </p>
              </div>
              <div className="w-full px-4 text-center lg:w-3/12">
                <div className="text-blueGray-800 inline-flex h-12 w-12 items-center justify-center rounded-full bg-white p-3 shadow-lg">
                  <i className="fas fa-poll text-xl"></i>
                </div>
                <h5 className="mt-5 text-xl font-semibold text-white">
                  Grow your market
                </h5>
                <p className="text-blueGray-400 mt-2 mb-4">
                  {`Some quick example text to build on the card title and make up
                  the bulk of the card's content.`}
                </p>
              </div>
              <div className="w-full px-4 text-center lg:w-3/12">
                <div className="text-blueGray-800 inline-flex h-12 w-12 items-center justify-center rounded-full bg-white p-3 shadow-lg">
                  <i className="fas fa-lightbulb text-xl"></i>
                </div>
                <h5 className="mt-5 text-xl font-semibold text-white">
                  Launch time
                </h5>
                <p className="text-blueGray-400 mt-2 mb-4">
                  {`Some quick example text to build on the card title and make up
                  the bulk of the card's content.`}
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-blueGray-800 relative block py-24 lg:pt-0">
          <div className="container mx-auto px-4">
            <div className="-mt-48 flex flex-wrap justify-center lg:-mt-64">
              <div className="w-full px-4 lg:w-6/12">
                <div className="bg-blueGray-200 relative mb-6 flex w-full min-w-0 flex-col break-words rounded-lg shadow-lg">
                  <div className="flex-auto p-5 lg:p-10">
                    <h4 className="text-2xl font-semibold">
                      Want to work with us?
                    </h4>
                    <p className="text-blueGray-500 mt-1 mb-4 leading-relaxed">
                      Complete this form and we will get back to you in 24
                      hours.
                    </p>
                    <div className="relative mb-3 mt-8 w-full">
                      <label
                        className="text-blueGray-600 mb-2 block text-xs font-bold uppercase"
                        htmlFor="full-name"
                      >
                        Full Name
                      </label>
                      <input
                        type="text"
                        className="placeholder-blueGray-300 text-blueGray-600 w-full rounded border-0 bg-white px-3 py-3 text-sm shadow transition-all duration-150 ease-linear focus:outline-none focus:ring"
                        placeholder="Full Name"
                      />
                    </div>

                    <div className="relative mb-3 w-full">
                      <label
                        className="text-blueGray-600 mb-2 block text-xs font-bold uppercase"
                        htmlFor="email"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        className="placeholder-blueGray-300 text-blueGray-600 w-full rounded border-0 bg-white px-3 py-3 text-sm shadow transition-all duration-150 ease-linear focus:outline-none focus:ring"
                        placeholder="Email"
                      />
                    </div>

                    <div className="relative mb-3 w-full">
                      <label
                        className="text-blueGray-600 mb-2 block text-xs font-bold uppercase"
                        htmlFor="message"
                      >
                        Message
                      </label>
                      <textarea
                        rows={4}
                        cols={80}
                        className="placeholder-blueGray-300 text-blueGray-600 w-full rounded border-0 bg-white px-3 py-3 text-sm shadow focus:outline-none focus:ring"
                        placeholder="Type a message..."
                      />
                    </div>
                    <div className="mt-6 text-center">
                      <button
                        className="bg-blueGray-800 active:bg-blueGray-600 mr-1 mb-1 rounded px-6 py-3 text-sm font-bold uppercase text-white shadow outline-none transition-all duration-150 ease-linear hover:shadow-lg focus:outline-none"
                        type="button"
                      >
                        Send Message
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
