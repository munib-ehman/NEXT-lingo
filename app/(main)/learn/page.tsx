import FeedWrapper from "@/components/FeedWrapper";
import StickyWrapper from "@/components/StickyWrapper";
import React from "react";
import { Header } from "./Header";
import { UserProgress } from "@/components/UserProgress";

const LearnPage = () => {
  return (
    // ! remove flex-row-reverse and arrange it in right sequence
    <div className="flex flex-row-reverse gap-[48px] px-6">
      <StickyWrapper>
        <UserProgress
          activeCourse={{ courseTitle: "Urdu", imageSrc: "./pk.svg" }}
          points={4}
          hearts={10}
          hasActiveSubscription={false}
        />
      </StickyWrapper>
      <FeedWrapper>
        <Header title="Urdu" />
        <div className="space-y-10"></div>
      </FeedWrapper>
    </div>
  );
};
export default LearnPage;
