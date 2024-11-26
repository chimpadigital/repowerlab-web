"use client";
import { Input, RadioButton, TextArea } from "@/components/Inputs";
import { button } from "@/components/primitives";
import { Select, SelectItem } from "@nextui-org/react";
import { useReCaptcha } from "next-recaptcha-v3";
import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import axios from "axios";
import { IsotipoRepowerlab } from "@/components/icons";
import { useTranslations } from "next-intl";

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
  const t = useTranslations("Contact.form")
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
    <div className="formulario-contacto w-full flex justify-end pb-24 pt-10 md:pt-28 scroll-smooth	">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full flex flex-col gap-3 md:gap-9 scroll-smooth"
        id="contact-us-form"
        style={{
          width: "min(100%, 464px)",
        }}
      >
        <Input
          error={errors.name && errors.name.message}
          placeholder={t.raw("name.placeholder")}
          placeholderMovile={t.raw("name.placeholderM")}
          label={t.raw("name.label")}
          id="contact-name"
          control={control}
          name="name"
          rules={{
            required: t.raw("name.required"),
            minLength: {
              value: 3,
              message: t.raw("name.message"),
            },
            maxLength: {
              value: 30,
              message: t.raw("name.maxLength"),
            },
          }}
        />

        <Input
          error={errors.phone && errors.phone.message}
          placeholder={t.raw("phone.placeholder")}
          placeholderMovile={t.raw("phone.placeholderM")}
          label={t.raw("phone.label")}
          id="contact-phone"
          type="tel"
          control={control}
          name="phone"
          rules={{
            required: t.raw("name.required"),
            minLength: {
              value: 7,
              message: t.raw("phone.message"),
            },
            maxLength: {
              value: 15,
              message: t.raw("phone.maxLength"),
            },
          }}
        />

        <Input
          error={errors.email && errors.email.message}
          placeholder={t.raw("email.placeholder")}
          placeholderMovile={t.raw("email.placeholderMobile")}
          label={t.raw("email.label")}
          id="contact-email"
          type="email"
          control={control}
          name="email"
          rules={{
            required: t.raw("email.required"),
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: t.raw("email.invalidMessage"),
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
              placeholder={t.raw("asunto.placeholder")}
              className="w-full pt-2"
              labelPlacement="outside"
              label={t.raw("asunto.label")}
              scrollShadowProps={{
                isEnabled: false,
              }}
              classNames={{
                trigger:
                  "bg-[#C5C5C5]/15 py-4 px-5 md:px-8 backdrop-blur-2xl border-white transition-all border-2 rounded-full font-sans h-[60px] data-[hover=true]:bg-[#C5C5C5]/15 data-[open=true]:border-accent",
                value:
                  "font-medium text-[16px] text-white group-data-[has-value=true]:text-white",
                popoverContent:
                  "bg-white text-[#777] p-0 rounded-[10px] text-base",
                listbox: "p-0",
                selectorIcon: "text-white h-7 w-7",
                label:
                  "!text-white text-base group[data-filled=true]:text-white pb-3",
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
              <SelectItem key="Product">{t.raw("asunto.options.product")}</SelectItem>
              <SelectItem key="Service">{t.raw("asunto.options.service")}</SelectItem>
              <SelectItem key="Circular-economy">{t.raw("asunto.options.circularEconomy")}</SelectItem>
              <SelectItem key="Other">{t.raw("asunto.options.other")}</SelectItem>
            </Select>
          )}
        />

        <TextArea
          placeholder={t.raw("msg.placeholder")}
          placeholderMovile={t.raw("msg.placeholderMobile")}
          label={t.raw("msg.label")}
          id="contact-msg"
          error={errors.msg && errors.msg.message}
          name="msg"
          control={control}
          rules={{
            required: t.raw("msg.required"),
            minLength: {
              value: 10,
              message: t.raw("msg.minLength.message"),
            },
            maxLength: {
              value: 200,
              message: t.raw("msg.maxLength.message"),
            },
          }}
        />

        <div className="flex  justify-center flex-wrap items-center" style={{
          rowGap: "1rem",
          columnGap: "2.5rem",
        }}>
          <RadioButton
            label={t.raw("tipo.partner")}
            name="tipo"
            control={control}
            value="partner"
          />
          <RadioButton
            label={t.raw("tipo.client")}
            name="tipo"
            control={control}
            value="client"
          />
          <RadioButton
            label={t.raw("tipo.talent")}
            name="tipo"
            control={control}
            value="talent"
          />        </div>

        <p className="text-white font-medium text-sm">
          {t.raw("message.info")}
        </p>
        <div className="mx-auto relative grid place-items-center">
          <button
            className={`${button({
              whiteLine: true,
            })} mx-auto`}
          >
            {!isSubmitting ? (
              t.raw("message.sendButton")
            ) : (
              <span className="flex gap-3 fill-white group-hover:fill-primary">
                {t.raw("message.sendingButton")}
                <span className="animate-spin transition-all">
                  <IsotipoRepowerlab />
                </span>
              </span>
            )}
          </button>
          {messageSent && (
            <span
              className={`absolute w-max -bottom-8 text-center transition-all mt-3 inline-block text-white  ${messageSent ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"}`}
            >
              {t.raw("message.messageSent")}
            </span>
          )}
          {messageFailed && (
            <span
              className={`absolute w-max -bottom-8 text-center transition-all mt-3 inline-block text-red-400  ${messageFailed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"}`}
            >
              {t.raw("message.messageFailed")}
            </span>
          )}
        </div>
      </form>
    </div>
  );
};

export default Formulario;
