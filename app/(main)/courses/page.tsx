import { getCourses } from "@/database/queries";
import React from "react";
import List from "./List";

const Courses = async () => {
  const courses = await getCourses();

  return (
    <div className="mx-auto px-3 max-w-[900px] h-full">
      <h1 className="font-bold text-2xl text-neutral-500">Language Course</h1>
      <List courses={courses} activeCourseId={courses[0].id} />
    </div>
  );
};

export default Courses;
