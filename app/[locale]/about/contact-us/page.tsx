import React from "react";

import { Metadata } from "next";
import { metadataConnect } from "@/app/getMetaData";
import ContactUs from "./ContactUs";
import { ReCaptchaProvider } from "next-recaptcha-v3";

export async function generateMetadata({
  params: { locale },
}: any): Promise<Metadata> {
  return metadataConnect(locale);
}

export default function page() {
  return (
    <ReCaptchaProvider reCaptchaKey={process.env.NEXT_PUBLIC_CLAVE_WEB_CAPTCHA}>
      <ContactUs />
    </ReCaptchaProvider>
  );
}
