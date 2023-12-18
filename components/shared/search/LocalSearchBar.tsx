"use client";

import { Input } from "@/components/ui/input";
import Image from "next/image";
import React from "react";

export interface CustomInputProps {
  route: string;
  imgSrc: string;
  placeholder: string;
  iconPosition: string;
  otherClasses?: string;
}

const LocalSearchBar = ({
  route,
  iconPosition,
  imgSrc,
  placeholder,
  otherClasses,
}: CustomInputProps) => {
  return (
    <div
      className={`background-light800_darkgradient relative flex min-h-[56px] w-full max-w-[766px] grow items-center gap-4 rounded-lg border border-light-700 px-4 ${otherClasses}`}
    >
      {iconPosition === "left" && (
        <Image
          src={imgSrc}
          alt="localSearch"
          width={24}
          height={24}
          className="cursor-pointer"
        />
      )}
      <Input
        type="text"
        placeholder={placeholder}
        value=""
        onChange={() => {}}
        className={`paragraph-regular no-focus placeholder background-light800_darkgradient block h-fit border-none shadow-none outline-none ${otherClasses}`}
      />
      {iconPosition === "right" && (
        <Image
          src={imgSrc}
          alt="localSearch"
          width={24}
          height={24}
          className="cursor-pointer"
        />
      )}
    </div>
  );
};

export default LocalSearchBar;
