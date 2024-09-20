import { tv } from "tailwind-variants";

export const title = tv({
  base: "tracking-tight inline font-semibold",
  variants: {
    color: {
      violet: "from-[#FF1CF7] to-[#b249f8]",
      yellow: "from-[#FF705B] to-[#FFB457]",
      blue: "from-[#5EA2EF] to-[#0072F5]",
      cyan: "from-[#00b7fa] to-[#01cfea]",
      green: "from-[#6FEE8D] to-[#17c964]",
      pink: "from-[#FF72E1] to-[#F54C7A]",
      foreground: "dark:from-[#FFFFFF] dark:to-[#4B4B4B]",
    },
    size: {
      sm: "text-3xl lg:text-4xl",
      md: "text-[2.3rem] lg:text-[36px] leading-9",
      lg: "text-4xl lg:text-6xl",
    },
    fullWidth: {
      true: "w-full block",
    },
  },
  defaultVariants: {
    size: "md",
  },
  compoundVariants: [
    {
      color: [
        "violet",
        "yellow",
        "blue",
        "cyan",
        "green",
        "pink",
        "foreground",
      ],
      class: "bg-clip-text text-transparent bg-gradient-to-b",
    },
  ],
});

export const subtitle = tv({
  base: "w-full md:w-1/2 my-2 text-lg lg:text-xl text-default-600 block max-w-full",
  variants: {
    fullWidth: {
      true: "!w-full",
    },
  },
  defaultVariants: {
    fullWidth: true,
  },
});


export const button = tv({
  base: "transition-all border-2 py-[10px] px-5 w-fit before:w-[160%] before:h-[190%] flex justify-center before:rounded-[50%] z-[1] before:z-[-1] hover:before:top-[-35%] overflow-hidden before:absolute relative before:top-[180%] hover:before:-scale-y-150 before:transition-all rounded-full",
  variants: {
    greenLine: {
      true: "hover:border-primary text-primary hover:text-white border-primary before:bg-primary",
    },
    whiteLine: {
      true: "hover:border-secondary bg-transparent text-white hover:text-primary border-white before:bg-secondary",
    },
  },
  defaultVariants: {
    greenLine: true,
  },
});