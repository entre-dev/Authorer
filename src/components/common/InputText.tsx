import React from "react";
import clsx from "clsx";

type Props = {
  errorMsg?: string;
  rightIcon?: React.ReactElement;
  metaData: {
    name: string;
    type: "email" | "text" | "password";
    text: string;
  };
};

function InputText({ errorMsg, rightIcon, metaData }: Props) {
  return (
    <>
      <div className="bg-none">
        <label htmlFor={metaData.name} className="sr-only">
          {metaData.text}
        </label>
        <div className="relative">
          <input
            type={metaData.type}
            className={clsx(
              `w-full rounded-lg border border-l-2 border-t-0 border-r-0 border-b-0 bg-gray-200
                bg-opacity-10 p-4 pr-12 text-sm text-gray-200 focus:outline-0`,
              { "border-red-600": errorMsg }
            )}
            placeholder={`Enter ${metaData.text}`}
          />
          {rightIcon && (
            <span className="absolute inset-y-0 right-4 inline-flex items-center">
              {rightIcon}
            </span>
          )}
        </div>
      </div>
      {errorMsg && <small className="text-red-500">{errorMsg}</small>}
    </>
  );
}

export default InputText;
