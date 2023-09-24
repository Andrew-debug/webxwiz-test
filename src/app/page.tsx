import GetIPhone from "@/components/getIPhone/GetIPhone";
import HeroLeft from "@/components/hero/HeroLeft";
import HeroRight from "@/components/hero/HeroRight";

export default function Home() {
  return (
    <>
      <div className="flex mx-auto w-full max-w-[1440px] relative min-h-[750px]">
        <HeroLeft />
        <HeroRight />
      </div>
      <GetIPhone />
    </>
  );
}
