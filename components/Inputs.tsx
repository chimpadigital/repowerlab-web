import React from "react";

interface inputProps {
  type?: "text" | "number" | "tel" | "email";
  placeholder: string;
}

export const Input = ({ type = "text", placeholder }: inputProps) => {
  return (
    <input
      placeholder={placeholder}
      type={type}
      className="rounded-full focus-within:outline-2 border-white border-2 border-transparent focus:outline-none focus:border-accent placeholder-gray-400 transition-all duration-300  bg-[#C5C5C5]/15 py-4 px-8 backdrop-blur-2xl placeholder:text-white placeholder:font-medium"
    />
  );
};

interface textAreaProps {
  placeholder: string;
}

export const TextArea = ({ placeholder }: textAreaProps) => {
  return (
    <textarea
      placeholder={placeholder}
      rows={6}
      className="rounded-3xl focus-within:outline-2 border-white border-2 border-transparent focus:outline-none focus:border-accent placeholder-gray-400 transition-all duration-300  bg-[#C5C5C5]/15 py-4 px-8 backdrop-blur-2xl placeholder:text-white placeholder:font-medium"
    />
  );
};

interface radioButtonProps {
  label: string;
}
export const RadioButton = ({ label }: radioButtonProps) => {
  return (
    <label className="w-fit items-center flex gap-[10px] cursor-pointer">
      <input type="radio" className="hidden peer" />
      <div className="grid  place-items-center h-5 w-5 rounded-full border-2 border-white border-solid peer-checked:before:scale-100 before:w-3 before:absolute before:h-3 before:rounded-full before:bg-white before:scale-0 before:transition-all"></div>
      <span className="text-white font-light">{label}</span>
    </label>
  );
};
