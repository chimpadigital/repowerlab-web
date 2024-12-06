import FeatureProducts from "@/components/pages/home/FeatureProducts";
import SetApart from "@/components/pages/home/SetApart";
import ConnectToday from "@/components/ConnectToday";
import RepowerlabImpact from "@/components/pages/home/RepowerlabImpact";
import Services from "@/components/pages/home/Services";
import SuccesCases from "@/components/pages/home/SuccesCases";
import GreenBannerNewsLetter from "@/components/GreenBannerNewsLetter";
import Products from "@/components/pages/home/Products";
import Hero from "@/components/pages/home/Hero";
import RepowerLabFocus from "@/components/pages/home/RepowerLabFocus";
import MapHome from "@/components/pages/home/MapHome";
import { ReCaptchaProvider } from "next-recaptcha-v3";

export default function Home() {
  return (
    <ReCaptchaProvider reCaptchaKey={process.env.NEXT_PUBLIC_CLAVE_WEB_CAPTCHA}>
      <>
        <Hero />
        <RepowerLabFocus />
        <SetApart />
        <RepowerlabImpact />
        <Services />
        <Products />
        <FeatureProducts paragraph={"pHome"} />
        <SuccesCases />
        <MapHome />
        <div className="px-5">
          <ConnectToday />
        </div>
        <div className="flex w-full justify-center pt-4 px-4">
          <GreenBannerNewsLetter />
        </div>
      </>
    </ReCaptchaProvider>
  );
}
