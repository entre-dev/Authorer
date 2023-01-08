import { useState } from "react";
import type { ReactElement } from "react";
import * as COMPONENT from "../../components";
import * as Layout from "../../layouts";

const Login = () => {
  const handleValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.name, e.target.value);
    setFormData((prev) => {
      return prev.map((item) => {
        if (item.name === e.target.name) {
          return {
            ...item,
            value: e.target.value,
          };
        }
        return item;
      });
    });
  };
  const [formData, setFormData] = useState<
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
  ]);
  return (
    <Layout.CoreLayout>
      <div className="w-[90%] max-w-[30rem] rounded-lg border-none bg-white bg-opacity-10 bg-clip-padding px-4 py-8 backdrop-blur-lg backdrop-filter md:max-w-[25rem]">
        <div className="text-center text-3xl text-white">SIGN IN</div>

        <div className="mx-auto mt-8 mb-0 max-w-md space-y-4">
          {formData.map((item) => {
            return (
              <COMPONENT.common.InputText
                key={item.name}
                value={item.value}
                errorMsg={item.errorMsg}
                rightIcon={item.rightIcon || undefined}
                metaData={{
                  name: item.name,
                  text: item.text,
                  type: item.type,
                }}
                onChange={handleValueChange}
              />
            );
          })}
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
    </Layout.CoreLayout>
  );
};

export default Login;
