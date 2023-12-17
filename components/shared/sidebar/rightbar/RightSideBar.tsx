import React from "react";
import { RightBarData } from "@/contants";
import Image from "next/image";
import Link from "next/link";

const RightSideBar = () => {
  return (
    <section className="background-light900_dark200 light-border custom-scrollbar sticky left-0 top-0 flex h-screen flex-col justify-between overflow-y-auto border-r p-6 pt-36 shadow-light-300 dark:shadow-none max-xl:hidden lg:w-[330px]">
      <div className="flex flex-col gap-6">
        <h3 className="h3-bold text-dark500_light700">{RightBarData.title}</h3>
        {RightBarData.articles.map((item) => (
          <Link
            href={item.route}
            key={item.route}
            className="flex items-start gap-4"
          >
            <p className="body-medium text-dark500_light700">{item.subTitle}</p>
            <Image
              src={"/assets/icons/chevron-right.svg"}
              alt="chevron-right"
              width={20}
              height={20}
              className="invert-colors"
            />
          </Link>
        ))}
      </div>

      <div className="flex flex-col gap-6">
        <h3 className="h3-bold text-dark500_light700">{RightBarData.title1}</h3>
        {RightBarData.tags.map((item) => (
          <Link
            href={item.route}
            key={item.route}
            className="flex items-center justify-between"
          >
            <p className="subtle-medium background-light800_dark300 text-dark400_light800 rounded-md px-4 py-2 uppercase">
              {item.subTitle}
            </p>
            <p className="small-medium text-dark500_light700" px-4 py-2>
              {item.total}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default RightSideBar;
