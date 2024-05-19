import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";
import logo from "../public/mascot.svg";
import Link from "next/link";
import SidebarItem from "./SidebarItem";
import Learn from "@/public/learn.svg"
import LeaderBoard from '@/public/leaderboard.svg' 
import quest from "@/public/quests.svg"
import shop from "@/public/shop.svg"
import { ClerkLoaded, ClerkLoading, UserButton } from "@clerk/nextjs";
import {Loader} from "lucide-react"
type props = {
  classname?: string;
};
export const Sidebar = ({ classname }: props) => {
  return (
    <div
      className={cn(
        "flex lg:w-[256px] h-full w-full lg:fixed top-0 left-0 px-4 border-r-2 flex-col",
        classname
      )}
    >
      <Link href="/learn">
        <div className="pt-8 pb-7 pl-4 flex items-center gap-x-3">
          <Image src={logo} height={40} width={40} alt="lingo" />
          <h1 className="text-green-600 text-2xl font-extrabold tracking-wide">
            Lingo
          </h1>
        </div>
      </Link>
      <div className="flex flex-col gap-y-2 flex-1">
        <SidebarItem label="Learn" href="/learn" iconSrc={Learn}/>
        <SidebarItem label="LeaderSBoard" href="/leaderboard" iconSrc={LeaderBoard}/>
        <SidebarItem label="quests" href="/quests" iconSrc={quest}/>
        <SidebarItem label="shop" href="/shop" iconSrc={shop}/>
      </div>
      <div className="p-4">
        <ClerkLoading>
          <Loader className="h-5 w-5 text-muted-foreground animate-spin"/>
        </ClerkLoading>
        <ClerkLoaded>
          <UserButton afterSignOutUrl="/"/>
        </ClerkLoaded>
      </div>
    </div>
  );
};
