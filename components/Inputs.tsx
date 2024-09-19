"use client";
import React from "react";
import { useController, UseControllerProps } from "react-hook-form";
import { FormValues } from "./pages/about/contact-us/Formulario";

interface InputProps extends UseControllerProps<FormValues> {
  placeholder: string;
  type?: string; // opcional, por defecto puede ser "text",
  error: string | undefined;
}

export const Input = (props: InputProps) => {
  const { field } = useController(props);
  return (
    <div className="flex flex-col w-full">
      <input
        placeholder={props.placeholder}
        {...field}
        type={props.type}
        className="rounded-full focus-within:outline-2 border-white border-2 border-transparent focus:outline-none focus:border-accent placeholder-gray-400 transition-all duration-300  bg-[#C5C5C5]/15 py-4 px-8 backdrop-blur-2xl placeholder:text-white placeholder:font-medium"
      />
      <span
        className={`text-red-500 mt-1 transition-all ${props.error ? " opacity-100 translate-x-0" : " opacity-0 -translate-x-2"}`}
      >
        {props.error && props.error}
      </span>
    </div>
  );
};

interface textAreaProps extends UseControllerProps<FormValues> {
  placeholder: string;
  error: string | undefined;
}

export const TextArea = (props: textAreaProps) => {
  const { field } = useController(props);

  return (
    <div className="flex flex-col w-full">
      <textarea
        {...field}
        placeholder={props.placeholder}
        rows={6}
        className="rounded-3xl focus-within:outline-2 border-white border-2 border-transparent focus:outline-none focus:border-accent placeholder-gray-400 transition-all duration-300  bg-[#C5C5C5]/15 py-4 px-8 backdrop-blur-2xl placeholder:text-white placeholder:font-medium"
      />
      <span
        className={`text-red-500 mt-1 transition-all ${props.error ? " opacity-100 translate-x-0" : " opacity-0 -translate-x-2"}`}
      >
        {props.error && props.error}
      </span>
    </div>
  );
};

interface radioButtonProps extends UseControllerProps<FormValues> {
  label: string;
  value: "partner" | "client" | "talent";
}
export const RadioButton = (props: radioButtonProps) => {
  const { field } = useController(props);

  return (
    <label className="w-fit items-center flex gap-[10px] cursor-pointer">
      <input
        {...field}
        type="radio"
        className="hidden peer"
        value={props.value}
      />
      <div className="grid  place-items-center h-5 w-5 rounded-full border-2 border-white border-solid peer-checked:before:scale-100 before:w-3 before:absolute before:h-3 before:rounded-full before:bg-white before:scale-0 before:transition-all"></div>
      <span className="text-white font-light">{props.label}</span>
    </label>
  );
};
