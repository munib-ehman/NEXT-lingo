"use server";

import db from "@/database/drizzle";
import { getCourseById, getUserProgress } from "@/database/queries";
import { userProgress } from "@/database/schema";
import { auth, currentUser } from "@clerk/nextjs";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export const upsertUserProgress = async (courseId: string) => {
  const { userId } = await auth();
  const user = await currentUser();

  if (!userId || !user) {
    throw new Error("Unauthorize");
  }

  const course = await getCourseById(courseId);

  if (!course) {
    throw new Error("course not found");
  }

  // Todo: Enable once unit and lesson
  //   if(!course.units.length || !course.unit[0].lesson.length){
  //       throw mew Error("Course is empty")
  //   }

  const existingCourse = await getUserProgress();

  if (existingCourse) {
    await db.update(userProgress).set({
      activeCourseId: courseId,
      userName: user.firstName || "User",
      userImageSrc: user.imageUrl || "/mascot.svg",
    });
    revalidatePath("/courses");
    revalidatePath("/learn");
    redirect("/learn");
  }

  await db.insert(userProgress).values({
    userId,
    activeCourseId: courseId,
    userName: user.firstName || "User",
    userImageSrc: user.imageUrl || "/mascot.svg",
  });

  revalidatePath("/courses");
  revalidatePath("/learn");
  redirect("/learn");
};
