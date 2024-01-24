import FeatureOne from "@/components/home/feature-one";
import FeatureTwo from "@/components/home/feature-two";
import Hero from "@/components/home/hero";
import Image from "next/image";

export default async function Home() {
  return (
    <>
      <Hero />
      <FeatureOne />
    </>
  );
}
