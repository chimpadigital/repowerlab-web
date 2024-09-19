"use client";
import Button from "@/atoms/Button";
import HeroBreadcrumb from "@/components/HeroBreadcrumb";
import { Input, RadioButton, TextArea } from "@/components/Inputs";
import { Select, SelectItem } from "@nextui-org/react";
import React from "react";
import { Controller, useForm } from "react-hook-form";

export type FormValues = {
  name: string;
  phone: string;
  email: string;
  subject: "Product" | "Service" | "Circular-economy" | "Other" | "";
  message: string;
  userType: "Partner" | "Client" | "Talen" | "";
};

const ContactUs = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      email: "",
      name: "",
      phone: "",
      subject: "",
      message: "",
      userType: "",
    },
  });

  const onSubmit = (data: FormValues) => console.log("data", data);

  return (
    <section className="contact-us w-full">
      <HeroBreadcrumb
        breadcrumbs={["Home", "About Us", " Contact us"]}
        img="/images/contact-us/wind-fans.webp"
      >
        <div className="w-full flex justify-end pb-24 pt-28">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-full flex flex-col gap-9 py-"
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
              name="subject"
              render={({ field: { onChange, onBlur, value, ref } }) => (
                <Select
                selectedKeys={[value]}
                  onChange={onChange}
                  onBlur={onBlur}
                  ref={ref}
                  aria-label="subject"
                  placeholder="Select subject"
                  className="w-full"
                  scrollShadowProps={{
                    isEnabled: false,
                  }}
                  classNames={{
                    trigger:
                      "bg-[#C5C5C5]/15 py-4 px-8 backdrop-blur-2xl border-white  transition-all border-2 rounded-full px-8 font-sans h-[60px] data-[hover=true]:bg-[#C5C5C5]/15 data-[open=true]:border-accent",
                    value: "text-white font-medium text-[16px]",
                    popoverContent: "bg-white text-[#777] p-0 rounded-[10px] text-base",
                    listbox: "p-0",
                  }}
                  listboxProps={{
                    itemClasses: {
                      base: [
                        "data-[hover=true]:bg-primary",
                        "data-[selectable=true]:focus:bg-primary",
                        "data-[selectable=true]:py-5",
                        "data-[selectable=true]:px-8",
                        "data-[selectable=true]:!text-base",
                      ],
                    },
                  }}
                >
                  <SelectItem key="Product">Product</SelectItem>
                  <SelectItem key="Service">Service</SelectItem>
                  <SelectItem key="Circular-economy">
                    Circular economy
                  </SelectItem>
                  <SelectItem key="Other">Other</SelectItem>
                </Select>
              )}
            />

            <TextArea
              placeholder="Message"
              error={errors.message && errors.message.message}
              name="message"
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

            <div className="flex gap-10 justify-center">
              <RadioButton
                label="Partner"
                name="userType"
                control={control}
                value="partner"
              />
              <RadioButton
                label="Client"
                name="userType"
                control={control}
                value="client"
              />
              <RadioButton
                label="Talent"
                name="userType"
                control={control}
                value="talent"
              />
            </div>

            <p className="text-white font-medium text-sm">
              We will get back to you within 2 business days.
            </p>
            <div className="mx-auto">
              <Button label="Send Message" buttonType="submit" />
            </div>
          </form>
        </div>
      </HeroBreadcrumb>
    </section>
  );
};

export default ContactUs;
