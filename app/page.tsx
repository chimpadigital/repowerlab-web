
import ThreeContainer from "@/three/ThreeContainer";
import FeatureProducts from "@/components/pages/home/FeatureProducts";
import SetApart from "@/components/pages/home/SetApart";
import ConnectToday from "@/components/ConnectToday";
import RepowerlabImpact from "@/components/pages/home/RepowerlabImpact";
import Services from "@/components/pages/home/Services";

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
      <ConnectToday />
    </>
  );
}
