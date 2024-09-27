"use client";
import { Input, RadioButton, TextArea } from "@/components/Inputs";
import { button } from "@/components/primitives";
import { Select, SelectItem } from "@nextui-org/react";
import { useReCaptcha } from "next-recaptcha-v3";
import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import axios from "axios";
import { IsotipoRepowerlab } from "@/components/icons";

export type FormValues = {
  name: string;
  phone: string;
  email: string;
  asunto: "Product" | "Service" | "Circular-economy" | "Other" | "";
  msg: string;
  tipo: "Partner" | "Client" | "Talen" | "";
};

const Formulario = () => {
  const { executeRecaptcha } = useReCaptcha();

  const {
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormValues>({
    defaultValues: {
      email: "",
      name: "",
      phone: "",
      asunto: "",
      msg: "",
      tipo: "",
    },
  });

  const [messageSent, setMessageSent] = useState(false);
  const [messageFailed, setMessageFailed] = useState(false);

  const onSubmit = async (data: FormValues) => {
    const token = await executeRecaptcha("form_submit");

    if (token) {
      try {
        const response = await axios.post(
          "https://api.repowerlab.chimpance.digital/api/form/contact",
          {
            ...data,
            "g-recaptcha-response": token,
          }
        );
        console.log(response);

        if (response?.status === 200) {
          reset();
          setMessageSent(true);
        } else {
          setMessageFailed(true);
        }
      } catch (error) {
        console.error(error);
        setMessageFailed(true);
      }
    } else {
      console.log("no hay token");
    }
  };

  return (
    <div className="w-full flex justify-end pb-24 pt-28 scroll-smooth	">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full flex flex-col gap-9 scroll-smooth"
        id="contact-us-form"
        style={{
          width: "min(100%, 464px)",
        }}
      >
        <Input
          error={errors.name && errors.name.message}
          placeholder="Your Name"
          control={control}
          name="name"
          rules={{
            required: "Name is required",
            minLength: {
              value: 3,
              message: "Name must be at least 3 characters",
            },
            maxLength: {
              value: 30,
              message: "Name must be at most 30 characters",
            },
          }}
        />

        <Input
          error={errors.phone && errors.phone.message}
          placeholder="Phone"
          type="tel"
          control={control}
          name="phone"
          rules={{
            required: "Phone number is required",
            minLength: {
              value: 7,
              message: "Phone number must be at least 7 characters",
            },
            maxLength: {
              value: 15,
              message: "Phone number must be at most 15 characters",
            },
          }}
        />

        <Input
          error={errors.email && errors.email.message}
          placeholder="Your Email Adress"
          type="email"
          control={control}
          name="email"
          rules={{
            required: "Email is required",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Invalid email address",
            },
          }}
        />

        <Controller
          control={control}
          name="asunto"
          render={({ field: { onChange, onBlur, value, ref } }) => (
            <Select
              selectedKeys={[value]}
              onChange={onChange}
              onBlur={onBlur}
              ref={ref}
              aria-label="asunto"
              placeholder="Select subject"
              className="w-full"
              scrollShadowProps={{
                isEnabled: false,
              }}
              classNames={{
                trigger:
                  "bg-[#C5C5C5]/15 py-4 px-8 backdrop-blur-2xl border-white  transition-all border-2 rounded-full px-8 font-sans h-[60px] data-[hover=true]:bg-[#C5C5C5]/15 data-[open=true]:border-accent",
                value:
                  "font-medium text-[16px] text-white group-data-[has-value=true]:text-white",
                popoverContent:
                  "bg-white text-[#777] p-0 rounded-[10px] text-base",
                listbox: "p-0",
                selectorIcon: "text-white h-7 w-7",
              }}
              listboxProps={{
                itemClasses: {
                  base: [
                    "data-[hover=true]:bg-primary",
                    "data-[selectable=true]:hover:text-white",
                    "data-[selectable=true]:focus:bg-primary",
                    "data-[selectable=true]:focus:text-white",
                    "data-[selectable=true]:py-5",
                    "data-[selectable=true]:px-8",
                    "data-[selectable=true]:!text-base",
                  ],
                },
              }}
            >
              <SelectItem key="Product">Product</SelectItem>
              <SelectItem key="Service">Service</SelectItem>
              <SelectItem key="Circular-economy">Circular economy</SelectItem>
              <SelectItem key="Other">Other</SelectItem>
            </Select>
          )}
        />

        <TextArea
          placeholder="Message"
          error={errors.msg && errors.msg.message}
          name="msg"
          control={control}
          rules={{
            required: "Message is required",
            minLength: {
              value: 10,
              message: "Message must be at least 10 characters",
            },
            maxLength: {
              value: 200,
              message: "Message must be at most 200 characters",
            },
          }}
        />

        <div className="flex gap-10 justify-center flex-wrap">
          <RadioButton
            label="Partner"
            name="tipo"
            control={control}
            value="partner"
          />
          <RadioButton
            label="Client"
            name="tipo"
            control={control}
            value="client"
          />
          <RadioButton
            label="Talent"
            name="tipo"
            control={control}
            value="talent"
          />
        </div>

        <p className="text-white font-medium text-sm">
          We will get back to you within 2 business days.
        </p>
        <div className="mx-auto relative grid place-items-center">
          <button
            className={`${button({
              whiteLine: true,
            })} mx-auto`}
          >
            {!isSubmitting ? (
              "Send message"
            ) : (
              <span className="flex gap-3  fill-white group-hover:fill-primary">
                Sending...
                <span className="animate-spin transition-all">
                  <IsotipoRepowerlab />
                </span>
              </span>
            )}
          </button>
          {messageSent && (
            <span
              className={`absolute w-max -bottom-8 text-center transition-all mt-3 inline-block text-white  ${messageSent ? "opacity-100  translate-y-0" : "opacity-0  translate-y-3"}`}
            >
              Message sent successfully
            </span>
          )}
          {messageFailed && (
            <span
              className={`absolute w-max -bottom-8 text-center transition-all mt-3 inline-block text-red-400  ${messageFailed ? "opacity-100  translate-y-0" : "opacity-0  translate-y-3"}`}
            >
              An error occurred, please try again later.
            </span>
          )}
        </div>
      </form>
    </div>
  );
};

export default Formulario;
