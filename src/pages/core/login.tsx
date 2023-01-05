import Image from "next/image";
import { useState } from "react";
import clsx from "clsx";

const Login = () => {
  const [errorMsg, setErrorMsg] = useState<{
    email: string;
    password: string;
  }>({
    email: "Error",
    password: "",
  });
  return (
    <div className="flex h-[100vh] w-[100vw] items-center justify-center bg-[#1e0d30]">
      <Image
        src="/svg/bg.svg"
        alt="svg bg"
        className="absolute top-0 left-0 h-[100vh] w-[100vw]"
        priority={true}
        width={1920}
        height={1080}
        style={{
          objectFit: "cover",
        }}
      />
      <div className="w-[90%] max-w-[30rem] rounded-lg border-none bg-white bg-opacity-10 bg-clip-padding px-4 py-8 backdrop-blur-lg backdrop-filter md:max-w-[25rem]">
        <div className="text-center text-3xl text-white">SIGN IN</div>

        <div className="mx-auto mt-8 mb-0 max-w-md space-y-4">
          <div className="bg-none">
            <label htmlFor="email" className="sr-only">
              Email
            </label>
            <div className="relative">
              <input
                type="email"
                className={clsx(
                  `w-full rounded-lg border border-l-2 border-t-0 border-r-0 border-b-0 bg-gray-200
                bg-opacity-10 p-4 pr-12 text-sm text-gray-200 focus:outline-0`,
                  { "border-red-600": errorMsg.email }
                )}
                placeholder="Enter email"
              />
              <span className="absolute inset-y-0 right-4 inline-flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                  />
                </svg>
              </span>
            </div>
          </div>
          {errorMsg.email && (
            <small className="text-red-500">{errorMsg.email}</small>
          )}
          <div>
            <label htmlFor="password" className="sr-only">
              Password
            </label>
            <div className="relative">
              <input
                type="password"
                className="w-full rounded-lg border border-l-2 border-t-0 border-r-0 border-b-0 bg-gray-200
                bg-opacity-10 p-4 pr-12 text-sm text-gray-200 focus:outline-0"
                placeholder="Enter password"
              />
            </div>
          </div>
          <div className="flex items-center justify-between">
            <p className="text-sm text-gray-500">
              No account?
              <a href="#" className="ml-1 text-purple-400 underline">
                Sign up
              </a>
            </p>
            <button
              type="submit"
              className="ml-3 inline-block rounded-lg bg-purple-500 px-5 py-3 text-sm font-medium text-white"
            >
              Sign in
            </button>
          </div>
        </div>
      </div>
      <div className="absolute bottom-3 right-3 text-gray-400">
        <p className="m-0">Power by Authorer ©</p>
      </div>
    </div>
  );
};

export default Login;
