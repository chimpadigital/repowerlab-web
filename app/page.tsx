
import ThreeContainer from "@/three/ThreeContainer";
import FeatureProducts from "@/components/pages/home/FeatureProducts";
import SetApart from "@/components/pages/home/SetApart";
import ConnectToday from "@/components/ConnectToday";

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
      <section className="flex justify-center px-6">

        <div className="min-h-screen w-full rounded-[20px]" style={backgroundStyle}>
          <ThreeContainer />
        </div>
      </section>
      <FeatureProducts />
      <ConnectToday />,
    </>
  );
}
