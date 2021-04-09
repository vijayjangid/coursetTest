import React from "react";
import { CourseSandbox } from "../components/course-sandbox";
import { Courses } from "../modules/courses";

const courses = [
  {
    id: 1,
    title: "Fibb Series",
    author: "Vijay Jangid"
  },
  {
    id: 2,
    title: "Binary Tree Search",
    author: "Abhinav"
  },
  {
    id: 3,
    title: "Sorting Algo",
    author: "Serge"
  }
];
export const HomePage = () => (
  <div>
    <CourseSandbox />
    <Courses list={courses} />
  </div>
);
