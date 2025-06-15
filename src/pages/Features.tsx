
import FeatureHeader from "@/components/features/FeatureHeader";
import FeatureHero from "@/components/features/FeatureHero";
import CoreFeatures from "@/components/features/CoreFeatures";
import AdditionalFeatures from "@/components/features/AdditionalFeatures";
import FeatureCTA from "@/components/features/FeatureCTA";
import FeatureFooter from "@/components/features/FeatureFooter";

const Features = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <FeatureHeader />
      <FeatureHero />
      <CoreFeatures />
      <AdditionalFeatures />
      <FeatureCTA />
      <FeatureFooter />
    </div>
  );
};

export default Features;
