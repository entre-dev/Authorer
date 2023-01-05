import { useState } from "react";
import * as COMPONENT from "../../components";
import CoreLayout from "../../layouts/coreLayout";

const Login = () => {
  const [errorMsg, setErrorMsg] = useState<{
    email: string;
    password: string;
  }>({
    email: "",
    password: "",
  });
  return (
    <CoreLayout>
      <div className="w-[90%] max-w-[30rem] rounded-lg border-none bg-white bg-opacity-10 bg-clip-padding px-4 py-8 backdrop-blur-lg backdrop-filter md:max-w-[25rem]">
        <div className="text-center text-3xl text-white">SIGN IN</div>

        <div className="mx-auto mt-8 mb-0 max-w-md space-y-4">
          <COMPONENT.common.InputText
            errorMsg={errorMsg.email}
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
            errorMsg={errorMsg.password}
            metaData={{
              name: "password",
              text: "Password",
              type: "password",
            }}
          />
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
    </CoreLayout>
  );
};

export default Login;
