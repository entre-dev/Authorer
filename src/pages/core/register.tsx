import React from "react";
import CoreLayout from "../../layouts/coreLayout";
import * as COMPONENT from "../../components";
import Link from "next/link";

const register = () => {
  return (
    <CoreLayout>
      <div className="w-[90%] max-w-[35rem] rounded-lg border-none bg-white bg-opacity-10 bg-clip-padding px-4 py-8 backdrop-blur-lg backdrop-filter md:max-w-[30rem]">
        <p className="text-1xl text-center text-purple-400">{`Let's Start Endless`}</p>
        <h1 className="text-center text-2xl text-white">WELCOME USER!!</h1>
        <div className="mx-auto mt-8 mb-0 max-w-md space-y-4">
          <COMPONENT.common.InputText
            errorMsg={""}
            rightIcon={
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
            }
            metaData={{
              name: "email",
              text: "Email",
              type: "email",
            }}
          />
          <COMPONENT.common.InputText
            errorMsg={""}
            metaData={{
              name: "password",
              text: "Password",
              type: "password",
            }}
          />
          <COMPONENT.common.InputText
            errorMsg={""}
            metaData={{
              name: "confirmPassword",
              text: "Confirm Password",
              type: "password",
            }}
          />
          <div className="flex cursor-pointer items-center justify-between border-l-2 border-t-0 border-b-0 border-r-0 border-gray-400 pl-4 transition-all hover:rounded hover:bg-purple-500 hover:bg-opacity-5">
            <h2 className="text-md text-gray-400">{`Personal Information (optional)`}</h2>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-caret-down"
                width={44}
                height={44}
                viewBox="0 0 24 24"
                strokeWidth={1}
                stroke="#9ca3af"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M18 15l-6 -6l-6 6h12" transform="rotate(180 12 12)" />
              </svg>
            </span>
          </div>
          <div className="mx-auto mt-8 mb-0 max-w-md space-y-4">
            <COMPONENT.common.InputText
              errorMsg={""}
              metaData={{
                name: "username",
                text: "Username",
                type: "text",
              }}
            />
            <COMPONENT.common.InputText
              errorMsg={""}
              metaData={{
                name: "fullname",
                text: "Full Name",
                type: "text",
              }}
            />
            <COMPONENT.common.InputText
              errorMsg={""}
              metaData={{
                name: "phone",
                text: "Phone Number",
                type: "text",
              }}
            />
          </div>
        </div>
        <div className="mt-3 flex items-center justify-between">
          <p className="text-sm text-gray-500">
            No account?
            <Link
              href="/core/login"
              className="ml-1 cursor-pointer text-purple-400 underline"
            >
              Sign in
            </Link>
          </p>
          <button
            type="submit"
            className="inline-block rounded-lg bg-purple-500 px-5 py-3 text-sm font-medium text-white"
          >
            Sign in
          </button>
        </div>
      </div>
    </CoreLayout>
  );
};

export default register;
