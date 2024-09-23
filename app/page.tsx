
import ThreeContainer from "@/three/ThreeContainer";
import FeatureProducts from "@/components/pages/home/FeatureProducts";

export default function Home() {
  const backgroundStyle = {
    backgroundImage: "url('./images/home/bg.png')",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    width: '100%',

  };
  return (
    <>
      <div className="h-screen"></div>
      <FeatureProducts />
      <div className="min-h-screen w-full" style={backgroundStyle}>
        <ThreeContainer />
      </div>
    </>
  );
}
