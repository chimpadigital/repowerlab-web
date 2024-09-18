import Link from "next/link";
import React from "react";

interface ButtonProps {
  label: string;
  buttonType?: "submit" | "button" | "reset";
  onClick?: () => void;
  as?: "link" | "button";
  href?: string;
}

const Button = ({
  label,
  buttonType = "button",
  onClick,
  as = "button",
  href,
}: ButtonProps) => {
  if (as === "button") {
    return (
      <button
        type={buttonType}
        className="bg-transparent hover:border-secondary text-white transition-all hover:text-primary rounded-full border-2 border-white py-[10px] px-5 w-fit before:w-[160%] before:h-[190%] flex justify-center before:rounded-[50%] before: before:bg-secondary z-[1] before:absolute relative before:top-[180%] hover:before:-scale-y-150 before:transition-all before:z-[-1] hover:before:top-[-35%] overflow-hidden"
        onClick={onClick}
      >
        {label}
      </button>
    );
  } else {
    <Link
      href={href ? href : ""}
      className="bg-transparent hover:bg-secondary text-white transition-all hover:text-primary rounded-full border-2 border-white py-[10px] px-5 w-fit"
    >
      {label}
    </Link>;
  }
};

export default Button;
