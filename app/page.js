import HeroSection from '@/components/sections/HeroSection';
import TrustLogos from '@/components/sections/TrustLogos';
import HowItWorks from '@/components/sections/HowItWorks';
import TransformSection from '@/components/sections/TransformSection';
import WhyRawbin from '@/components/sections/WhyRawbin';
import ComparisonSection from '@/components/sections/ComparisonSection';
import EverythingYouNeedToKnow from '@/components/sections/EverythingYouNeedToKnow';
import CompostOutput from '@/components/sections/CompostOutput';
import FAQSection from '@/components/sections/FAQSection';
import SocialProof from '@/components/sections/SocialProof';
import FinalCTA from '@/components/sections/FinalCTA';

export default function Home() {
  return (
    <>
      <HeroSection />
      <TrustLogos />
      <HowItWorks />
      <TransformSection />
      <WhyRawbin />
      <ComparisonSection />
      <EverythingYouNeedToKnow />
      <CompostOutput />
      <FAQSection />
      <SocialProof />
      <FinalCTA />
    </>
  );
}
