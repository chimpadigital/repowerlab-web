
import ThreeContainer from "@/three/ThreeContainer";
import FeatureProducts from "@/components/pages/home/FeatureProducts";
import SetApart from "@/components/pages/home/SetApart";
import ConnectToday from "@/components/ConnectToday";
import RepowerlabImpact from "@/components/pages/home/RepowerlabImpact";
import Services from "@/components/pages/home/Services";
import SuccesCases from "@/components/pages/home/SuccesCases";
import GreenBannerNewsLetter from "@/components/GreenBannerNewsLetter";

export default function Home() {
  const backgroundStyle = {
    backgroundImage: "url('./images/home/bg.png')",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    width: '100%',

  };
  return (
    <>
      <SetApart />
      <RepowerlabImpact />
      <Services />
      <FeatureProducts />
      <SuccesCases />
      <ConnectToday />
      <div className="flex w-full justify-center py-4 px-6">
          <GreenBannerNewsLetter />
      </div>
    </>
  );
}
