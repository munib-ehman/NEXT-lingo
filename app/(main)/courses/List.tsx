"use client";
import { courses } from "@/database/schema";
import Card from "./Card";

type Props = {
  courses: (typeof courses.$inferSelect)[];
  activeCourseId: string;
};

const List = ({ courses, activeCourseId }: Props) => {
  return (
    <div className="pt-6 grid grid-cols-2 lg:grid-cols-[repeat(auto-fill,minmax(210px,1fr))] gap-4">
      {courses.map((course) => (
        <Card
          id={course.id}
          key={course.id}
          title={course.title}
          imageSrc={course.imageSrc}
          onClick={() => {}}
          disabled={false}
          isActive={course.id === activeCourseId}
        />
      ))}
    </div>
  );
};

export default List;