import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { InfinityIcon } from "lucide-react";

type Props = {
  activeCourse: {
    // todo: replace it with DB Schema type
    courseTitle: string;
    imageSrc: string;
  };
  points: number;
  hearts: number;
  hasActiveSubscription: boolean;
};
export const UserProgress = ({
  activeCourse,
  points,
  hearts,
  hasActiveSubscription,
}: Props) => {
  return (
    <div className="flex items-center justify-between gap-x-3 w-full">
      <Link href="/courses">
        <Button variant={"ghost"}>
          <Image
            src={activeCourse.imageSrc}
            alt={activeCourse.courseTitle}
            width={32}
            height={32}
            className="rounded-md border"
          />
        </Button>
      </Link>
      <Link href="/shop">
        <Button variant={"ghost"} className="text-orange-400">
          <Image
            src="./points.svg"
            alt="points"
            width={22}
            height={22}
            className="mr-2"
          />
          {points}
        </Button>
      </Link>
      <Link href="/shop">
        <Button variant={"ghost"} className="text-rose-400">
          <Image
            src="./heart.svg"
            alt="hearts"
            width={22}
            height={22}
            className="mr-2"
          />
          {hasActiveSubscription ? (
            <InfinityIcon className="w-4 h-4 stroke-[3]" />
          ) : (
            hearts
          )}
        </Button>
      </Link>
    </div>
  );
};
