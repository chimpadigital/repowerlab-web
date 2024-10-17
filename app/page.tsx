
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

export default function Home() {
  return (
    <>
      <Hero />
      <RepowerLabFocus />
      <SetApart />
      <RepowerlabImpact />
      <Services />
      <Products />
      <FeatureProducts />
      <SuccesCases />
      <MapHome />
      <ConnectToday />
      <div className="flex w-full justify-center py-4 px-6">
        <GreenBannerNewsLetter />
      </div>
    </>
  );
}
