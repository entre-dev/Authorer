import React from "react";
import Image from "next/image";

type Props = {
  children: React.ReactNode;
};

const CoreLayout = ({ children }: Props) => {
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
      {children}
      <div className="absolute bottom-3 right-3 text-gray-400">
        <p className="m-0">Power by Authorer ©</p>
      </div>
    </div>
  );
};

export default CoreLayout;
