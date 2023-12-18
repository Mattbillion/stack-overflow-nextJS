"use client";

import { QuestionProps } from "@/types";
import React from "react";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { RightBarData } from "@/contants";
import { Badge } from "@/components/ui/badge";
import image from "next/image";

const QuestionCard = ({
  title,
  tags,
  imageUrl,
  createdAt,
  author,
  id,
  upvotes,
  views,
  answers,
}: QuestionProps) => {
  console.log(image, "dada");
  return (
    <Card className="mt-4 first:mt-0">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex gap-2">
        {tags.map((tag: any) => (
          <Badge
            className="subtle-medium background-light800_dark300 text-light400_light500 flex rounded-md border-none px-4 py-2 uppercase "
            variant="outline"
            key={tag._id}
          >
            {tag.name}
          </Badge>
        ))}
      </CardContent>
      <CardFooter className="flex justify-between">
        <div className="flex">
          <Image
            src={imageUrl}
            alt="dada"
            width={20}
            height={20}
            className="mr-4 rounded-full"
          />
          <p>Author name</p>
          <span>today</span>
        </div>
      </CardFooter>
    </Card>
  );
};

export default QuestionCard;
