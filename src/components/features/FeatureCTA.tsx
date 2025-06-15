
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const FeatureCTA = () => {
  const [isSchedulingDemo, setIsSchedulingDemo] = useState(false);
  const { toast } = useToast();

  const handleScheduleDemo = () => {
    setIsSchedulingDemo(true);
    
    // Simulate scheduling a demo
    setTimeout(() => {
      setIsSchedulingDemo(false);
      toast({
        title: "Demo Scheduled!",
        description: "We'll contact you within 24 hours to schedule your personalized demo.",
      });
    }, 2000);
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-green-600">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-white mb-6">
          Ready to Experience These Features?
        </h2>
        <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
          Start your free analysis today and see how our features can help your business succeed in the UK market.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/onboarding">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-slate-100 px-8 py-4 text-lg">
              Get Started Free
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
          <Button 
            variant="outline" 
            size="lg" 
            className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg"
            onClick={handleScheduleDemo}
            disabled={isSchedulingDemo}
          >
            {isSchedulingDemo ? "Scheduling..." : "Schedule Demo"}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeatureCTA;
