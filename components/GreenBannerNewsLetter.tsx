"use client";
import React, { FormEvent, useState } from "react";
import GreenBanner from "./GreenBanner";
import { button, title } from "./primitives";
import { useReCaptcha } from "next-recaptcha-v3";
import axios from "axios";
import { IsotipoRepowerlab } from "./icons";

const GreenBannerNewsLetter = () => {
  const [errorSubstribe, setErrorSubscribe] = useState("");
  const [subscriptionSuccess, setSubscriptionSuccess] = useState(false);
  const [isSending, setIsSending] = useState(false);

  const { executeRecaptcha } = useReCaptcha();

  const handleOnSubmitSubscribe = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSending(true);
    const formData = new FormData(e.currentTarget);
    const email = formData.get("email");

    if (!email) {
      return setErrorSubscribe("Please enter a valid email.");
    }

    const token = await executeRecaptcha("form_submit");

    if (token) {
      try {
        const response = await axios.post(
          "https://api.repowerlab.chimpance.digital/api/form/subscribe",
          {
            email,
            "g-recaptcha-response": token,
          }
        );

        if (response?.status === 200) {
          setSubscriptionSuccess(true);
          setErrorSubscribe("");
        } else {
          setErrorSubscribe("Error, try again later.");
        }
      } catch (error) {
        console.error(error);
      }
    } else {
      console.log("no hay token");
    }
    setIsSending(false);
  };

  return (
    <GreenBanner>
      <div className="flex w-full flex-col md:flex-row md:items-center gap-10">
        <div className="flex-1 text-start flex items-center justify-between">
          <div className="flex-1">
            <h4 className={`${title()} !block mb-3`}>Subscribe to</h4>
            <h4 className={`${title()} text-secondary !block mb-4 md:mb-10`}>
              Our Newsletter
            </h4>
            <p className="max-w-[52ch] font-light">
              Subscribe to our newsletter for the latest in circular economy
              solutions for the energy sector and stay ahead with our projects,
              services, and industry trends.
            </p>
          </div>
        </div>
        <form
          onSubmit={handleOnSubmitSubscribe}
          className="flex gap-4 flex-1 flex-col md:items-end xl:flex-row xl:gap-10"
        >
          <div className="w-[80%] relative">
            <input
              type="email"
              name="email"
              required
              placeholder="Your mail address here"
              className="md:ml-auto rounded-full focus-within:outline-2 border-white border-2  focus:outline-none focus:border-accent  placeholder-gray-400 transition-all duration-300  bg-[#C5C5C5]/15 py-[10px] px-8 backdrop-blur-sm placeholder:text-white placeholder:font-light w-full"
            />
            {errorSubstribe && (
              <span className="absolute text-red-400 -bottom-8 left-8">
                {errorSubstribe}
              </span>
            )}

            {subscriptionSuccess && (
              <span className="absolute text-green-400 -bottom-8 left-8">
                Successful subscription
              </span>
            )}
          </div>
          <button
            type="submit"
            className={`scroll-smooth ${button({
              whiteLine: true,
            })}`}
          >
            {isSending ? (
              <span className="flex gap-3  fill-white group-hover:fill-primary">
                Sending...
                <span className="animate-spin transition-all h-[21px]">
                  <IsotipoRepowerlab />
                </span>
              </span>
            ) : (
              "Subscribe"
            )}
          </button>
        </form>
      </div>
    </GreenBanner>
  );
};

export default GreenBannerNewsLetter;
