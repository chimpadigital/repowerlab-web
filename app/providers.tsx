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

export interface ProvidersProps {
  children: React.ReactNode;
  themeProps?: ThemeProviderProps;
}

export function Providers({ children, themeProps }: ProvidersProps) {
  const router = useRouter();

  React.useEffect(() => {
    const lenis = new Lenis();

    function raf(time: any) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    const listener = () => { lenis.scrollTo(0); }
    const backToTopButton = document.getElementById('backToTop');

    if (backToTopButton)
      backToTopButton.addEventListener('click', () => {
        listener()
      });

    requestAnimationFrame(raf);

    return (() => {
      removeEventListener('click', listener)
    })
  }, []);

  return (
    <ReCaptchaProvider reCaptchaKey={process.env.NEXT_PUBLIC_CLAVE_WEB_CAPTCHA}>
      <APIProvider
        apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string}
      >
        <NextUIProvider navigate={router.push}>
          <NextThemesProvider {...themeProps}>{children}</NextThemesProvider>
        </NextUIProvider>
        <button className="fixed bottom-4 right-4 bg-accent z-20 rounded-full shadow-xl text-white w-12 h-12 flex items-center justify-center" id="backToTop">
        <span>
          <svg width="13" height="8" viewBox="0 0 13 8" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.5192 7.18652C12.4598 7.3216 12.4087 7.45863 12.2874 7.55604C12.0612 7.73724 11.7489 7.74503 11.5215 7.56319C11.471 7.52292 11.425 7.47746 11.3797 7.43135C9.74064 5.76556 8.10159 4.09976 6.4651 2.43137C6.39101 2.35604 6.35332 2.34759 6.27348 2.42877C4.62868 4.10626 2.98133 5.78114 1.33398 7.45603C1.08551 7.70866 0.807647 7.76581 0.542564 7.61969C0.209772 7.4372 0.115874 6.98974 0.347104 6.6858C0.383514 6.63775 0.42631 6.59358 0.468468 6.55072C2.26529 4.72257 4.06211 2.89507 5.85956 1.06756C6.19683 0.724663 6.54239 0.725312 6.88157 1.07081C8.60302 2.82103 10.3238 4.5706 12.044 6.32082C12.2228 6.50266 12.4215 6.66892 12.5192 6.91765L12.5192 7.18652Z" fill="#1C4741" />
          </svg>
        </span>
      </button>
      </APIProvider>
    </ReCaptchaProvider>
  );
}
