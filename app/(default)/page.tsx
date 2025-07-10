export const metadata = {
  title: "LowerLift® Experience - Deep Neck Academy",
  description: "Domine a Arte do Rejuvenescimento Cervical Profundo com Mentoria Exclusiva dos Criadores do Método LowerLift®",
};

import PageIllustration from "@/components/page-illustration";
import Hero from "@/components/hero-home";
import Problems from "@/components/problems";
import Features from "@/components/features";
import Pricing from "@/components/pricing";
import Testimonials from "@/components/testimonials";
import FAQ from "@/components/faq";
import Founders from "@/components/founders";
import Cta from "@/components/cta";

export default function Home() {
  return (
    <>
      <Hero />
      <Problems />
      <Features />
      <Pricing />
      <Testimonials />
      <FAQ />
      <Founders />
      <Cta />
    </>
  );
}
