import React from "react";
import type { ReactElement } from "react";
import * as Layout from "../../layouts";
import * as COMPONENT from "../../components";
import Link from "next/link";
import z from "zod";

const Register = () => {
  const [dropdown, setDropdown] = React.useState<boolean>(false);
  const handleValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.name, e.target.value);

    setFormData((prev) => {
      return prev.map((item) => {
        if (item.name === e.target.name) {
          return {
            ...item,
            errorMsg: "",
            value: e.target.value,
          };
        }
        return item;
      });
    });
  };

  const submitForm = () => {
    console.log("submit");
    // validate form using zod library.

    const ZodCheckFrom = z.object({
      email: z.string().email(),
      password: z.string().min(8),
      confirmPassword: z.string().min(8),
      fullName: z.string().optional(),
      username: z.string().optional(),
      phone: z.string().optional(),
    });

    const result = ZodCheckFrom.safeParse(
      Object.assign(
        {},
        {
          email: formData[0]?.value,
          password: formData[1]?.value,
          confirmPassword: formData[2]?.value,
          fullName: formData[3]?.value,
          username: formData[4]?.value,
          phone: formData[5]?.value,
        }
      )
    );
    if (!result.success) {
      setFormData((prev) => {
        const newFormData = prev.map((item) => {
          console.log(item.name, result.error.issues);
          const error = result.error.issues.find(
            (v) => v.path[0] === item.name
          );
          if (!error) return item;

          return {
            ...item,
            errorMsg: error.message,
          };
        });

        return newFormData;
      });
    }
  };

  const [formData, setFormData] = React.useState<
    {
      name: string;
      text: string;
      type: "email" | "text" | "password";
      value: string;
      errorMsg: string;
      rightIcon?: ReactElement;
    }[]
  >([
    {
      name: "email",
      text: "Email",
      type: "email",
      value: "",
      errorMsg: "",
      rightIcon: <COMPONENT.icon.Email />,
    },
    {
      name: "password",
      text: "Password",
      type: "password",
      value: "",
      errorMsg: "",
    },
    {
      name: "confirmPassword",
      text: "Confirm Password",
      type: "password",
      value: "",
      errorMsg: "",
    },
    {
      name: "fullName",
      text: "Full name",
      type: "text",
      value: "",
      errorMsg: "",
    },
    {
      name: "username",
      text: "Username",
      type: "text",
      value: "",
      errorMsg: "",
    },
    {
      name: "phone",
      text: "Phone",
      type: "text",
      value: "",
      errorMsg: "",
    },
  ]);
  return (
    <Layout.CoreLayout>
      <div className="w-[90%] max-w-[35rem] rounded-lg border-none bg-white bg-opacity-10 bg-clip-padding px-4 py-8 backdrop-blur-lg backdrop-filter md:max-w-[30rem]">
        <p className="text-1xl text-center text-purple-400">{`Let's Start Endless`}</p>
        <h1 className="text-center text-2xl text-white">WELCOME USER!!</h1>
        <div className="mx-auto mt-8 mb-0 max-w-md space-y-4">
          {formData.slice(0, 3).map((item) => {
            return (
              <COMPONENT.common.InputText
                key={item.name}
                value={item.value}
                errorMsg={item.errorMsg}
                rightIcon={item.rightIcon}
                metaData={{
                  name: item.name,
                  text: item.text,
                  type: item.type,
                }}
                onChange={handleValueChange}
              />
            );
          })}

          <div
            onClick={() => setDropdown(!dropdown)}
            className="flex cursor-pointer items-center justify-between border-l-2 border-t-0 border-b-0 border-r-0 border-gray-400 pl-4 transition-all hover:rounded hover:bg-purple-500 hover:bg-opacity-5"
          >
            <h2 className="text-md text-gray-400">{`Personal Information (optional)`}</h2>
            <span>
              {dropdown ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-caret-up"
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
                  <path d="M18 15l-6 -6l-6 6h12" />
                </svg>
              ) : (
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
                  <path
                    d="M18 15l-6 -6l-6 6h12"
                    transform="rotate(180 12 12)"
                  />
                </svg>
              )}
            </span>
          </div>
          {dropdown && (
            <div className="mx-auto mt-8 mb-0 max-w-md space-y-4">
              {formData.slice(3, 6).map((item) => {
                return (
                  <COMPONENT.common.InputText
                    key={item.name}
                    value={item.value}
                    errorMsg={item.errorMsg}
                    rightIcon={item.rightIcon}
                    metaData={{
                      name: item.name,
                      text: item.text,
                      type: item.type,
                    }}
                    onChange={handleValueChange}
                  />
                );
              })}
            </div>
          )}
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
            onClick={submitForm}
            type="button"
            className="inline-block cursor-pointer rounded-lg bg-purple-500 px-5 py-3 text-sm font-medium text-white"
          >
            Sign Up
          </button>
        </div>
      </div>
    </Layout.CoreLayout>
  );
};

export default Register;
