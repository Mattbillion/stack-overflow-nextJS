import LocalSearchBar from "@/components/shared/search/LocalSearchBar";
import { Button } from "@/components/ui/button";
import Filter from "@/components/shared/filter/filter";
import Link from "next/link";
import { HomePageFilters } from "@/contants/filters";
import HomeFilters from "@/components/HomeFilters";
import QuestionCard from "@/components/shared/card/QuestionCard";

const questions = [
  {
    _id: 1,
    title:
      "The Lightning Component c:LWC_PizzaTracker generated invalid output for field status. Error How to solve this",
    tags: [
      {
        _id: 1,
        name: "Javascript",
      },
      {
        _id: 2,
        name: "ReactJS",
      },
    ],
    imageUrl: "/assets/images/profile.png",
    author: "John Doe",
    upvotes: 10,
    views: 100,
    answers: 43,
    createdAt: "2023-09-01T12:00:00.000Z",
  },
  {
    _id: 2,
    title:
      "An HTML table where specific cells come from values in a Google Sheet identified by their neighboring cell",
    tags: [
      {
        _id: 1,
        name: "Javascript",
      },
      {
        _id: 2,
        name: "ReactJS",
      },
    ],
    imageUrl: "/assets/images/profile.png",
    author: "John Doe",
    upvotes: 10,
    views: 100,
    answers: 43,
    createdAt: "2023-09-01T12:00:00.000Z",
  },
];

export default function Home() {
  return (
    <>
      <div className="flex flex-col-reverse justify-between gap-4 sm:flex-row sm:items-center">
        <h1 className="h1-bold text-dark100_light900">All Questions</h1>
        <Link href="/ask-question" className="flex justify-end max-sm:w-full">
          <Button className="paragraph-medium primary-gradient min-h-[46px] px-4 py-3 !text-light-900 ">
            Ask a Question
          </Button>
        </Link>
      </div>

      <div className="mt-11 flex justify-between gap-5 max-sm:flex-col sm:items-center">
        <LocalSearchBar
          route="/"
          iconPosition="left"
          imgSrc="assets/icons/search.svg"
          placeholder="Search for questions..."
          otherClasses="flex1"
        />
        <Filter
          filters={HomePageFilters}
          otherClasses="min-h-[56px] sm:min-w-[170px]"
          containerClasses="hidden max-md:flex"
        />
      </div>
      <HomeFilters />

      <div className="mt-11 flex flex-1 flex-col">
        {questions.map((item) => (
          <QuestionCard
            id={item._id}
            title={item.title}
            tags={item.tags}
            author={item.author}
            createdAt={item.createdAt}
            upvotes={item.upvotes}
            views={item.views}
            key={item._id}
            answers={item.answers}
            imageUrl={item.imageUrl}
          />
        ))}
      </div>
    </>
  );
}
