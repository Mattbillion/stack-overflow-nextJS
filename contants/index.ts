import { SidebarLink } from "@/types";

export const themes = [
  { value: "light", label: "Light", icon: "/assets/icons/sun.svg" },
  { value: "dark", label: "Dark", icon: "/assets/icons/moon.svg" },
  { value: "system", label: "System", icon: "/assets/icons/computer.svg" },
];

export const sidebarLinks: SidebarLink[] = [
  {
    imgURL: "/assets/icons/home.svg",
    route: "/",
    label: "Home",
  },
  {
    imgURL: "/assets/icons/users.svg",
    route: "/community",
    label: "Community",
  },
  {
    imgURL: "/assets/icons/star.svg",
    route: "/collection",
    label: "Collections",
  },
  {
    imgURL: "/assets/icons/suitcase.svg",
    route: "/jobs",
    label: "Find Jobs",
  },
  {
    imgURL: "/assets/icons/tag.svg",
    route: "/tags",
    label: "Tags",
  },
  {
    imgURL: "/assets/icons/user.svg",
    route: "/profile",
    label: "Profile",
  },
  {
    imgURL: "/assets/icons/question.svg",
    route: "/ask-question",
    label: "Ask a question",
  },
];

export const BADGE_CRITERIA = {
  QUESTION_COUNT: {
    BRONZE: 10,
    SILVER: 50,
    GOLD: 100,
  },
  ANSWER_COUNT: {
    BRONZE: 10,
    SILVER: 50,
    GOLD: 100,
  },
  QUESTION_UPVOTES: {
    BRONZE: 10,
    SILVER: 50,
    GOLD: 100,
  },
  ANSWER_UPVOTES: {
    BRONZE: 10,
    SILVER: 50,
    GOLD: 100,
  },
  TOTAL_VIEWS: {
    BRONZE: 1000,
    SILVER: 10000,
    GOLD: 100000,
  },
};

export const RightBarData = {
  title: "Hot Network",
  articles: [
    {
      subTitle:
        "Would it be appropriate to point out an error in another paper during a referee report?",
      route: "/",
    },
    {
      subTitle: "How can an airconditioning machine exist?",
      route: "/",
    },
    {
      subTitle: "Interrogated every time crossing UK Border as citizen",
      route: "/",
    },
    {
      subTitle: "Low digit addition generator",
      route: "/",
    },
    {
      subTitle: "What is an example of 3 numbers that do not make up a vector?",
      route: "/",
    },
  ],
  title1: "Popular Tags",
  tags: [
    {
      subTitle: "javascript",
      route: "/",
      total: "20152+",
    },
    {
      subTitle: "next.js",
      route: "/",
      total: "18493+",
    },
    {
      subTitle: "react.js",
      route: "/",
      total: "16269+",
    },
    {
      subTitle: "node.js",
      route: "/",
      total: "15121+",
    },
    {
      subTitle: "python",
      route: "/",
      total: "14431+",
    },
    {
      subTitle: "microsoft azure",
      route: "/",
      total: "9429+",
    },
    {
      subTitle: "postgresql",
      route: "/",
      total: "9429+",
    },
    {
      subTitle: "machine learning",
      route: "/",
      total: "9429+",
    },
  ],
};

export const FilterOptions = [
  { label: "Newest" },
  { label: "Recommended Questions" },
  { label: "Frequent" },
  { label: "Unanswered" },
];
