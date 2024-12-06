"use client"
import React from "react";
import { Skeleton } from "@nextui-org/skeleton";

const SkeletonHero = () => {
  return (
    <div className="px-7">
      <Skeleton
        className="rounded-[20px] bg-primary/80"
        classNames={{
          base: "!bg-primary/70",
        }}
      >
        <div className="h-screen rounded-3xl bg-primary/80"></div>
      </Skeleton>
    </div>
  );
};

export default SkeletonHero;
