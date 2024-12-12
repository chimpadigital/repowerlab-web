"use client";

import * as React from "react";
import { NextUIProvider } from "@nextui-org/system";
import { useRouter } from "next/navigation";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { ThemeProviderProps } from "next-themes/dist/types";
import Lenis from "lenis";
import "lenis/dist/lenis.css";
import { APIProvider, Map } from "@vis.gl/react-google-maps";
import { ReCaptchaProvider } from "next-recaptcha-v3";
import { WindowContextProvider } from "./context/WindowCtxProvider";
import { MenuContext, MenuProvider } from "./context/MenuMobileCtx";

export interface ProvidersProps {
  children: React.ReactNode;
}

export function Providers({ children }: ProvidersProps) {
  const router = useRouter();

  React.useEffect(() => {
    const lenis = new Lenis();

    function raf(time: any) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    const listener = () => {
      lenis.scrollTo(0);
    };
    const backToTopButton = document.getElementById("backToTop");

    if (backToTopButton)
      backToTopButton.addEventListener("click", () => {
        listener();
      });

    requestAnimationFrame(raf);

    return () => {
      removeEventListener("click", listener);
    };
  }, []);

  return (
    // <ReCaptchaProvider reCaptchaKey={process.env.NEXT_PUBLIC_CLAVE_WEB_CAPTCHA}>

    // <APIProvider
    //   apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string}
    // >
    <>
    <MenuProvider>
      <NextUIProvider navigate={router.push}>{children}</NextUIProvider>
      
    </MenuProvider>
    </>
    // </APIProvider>

    // </ReCaptchaProvider>
  );
}
