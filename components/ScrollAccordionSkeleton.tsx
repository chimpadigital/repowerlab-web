import { Skeleton } from "@nextui-org/react";
import React from "react";

const ScrollAccordionSkeleton = () => {
  return (
    <div className="w-ful h-96 bg-primary/10 mb-4 rounded-[20px] flex gap-6 p-6">
      <Skeleton
        className="rounded-[20px] h-full flex-1"
        classNames={{
          base: "!bg-primary/10",
        }}
      >
        <div className="bg-primary/80 h-full"></div>
      </Skeleton>
      <div className="flex-[2]">
        <Skeleton
          className="rounded-[20px] h-14 w-full mb-6"
          classNames={{
            base: "!bg-primary/10",
          }}
        >
          <div className="bg-primary/80 h-5 "></div>
        </Skeleton>

        <Skeleton
          className="rounded-[20px] h-14 w-full mb-6"
          classNames={{
            base: "!bg-primary/10",
          }}
        >
          <div className="bg-primary/80 h-5 "></div>
        </Skeleton>

        <Skeleton
          className="rounded-[20px] h-14 w-full mb-6"
          classNames={{
            base: "!bg-primary/10",
          }}
        >
          <div className="bg-primary/80 h-5 "></div>
        </Skeleton>
      </div>
    </div>
  );
};

export default ScrollAccordionSkeleton;
