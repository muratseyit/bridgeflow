
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Clock, Target } from "lucide-react";

const AdditionalFeatures = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Additional Features
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            More tools to ensure your success in the UK market
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="border-slate-200 hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mb-2">
                <Shield className="h-5 w-5 text-blue-600" />
              </div>
              <CardTitle className="text-lg">Compliance Monitoring</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Stay up-to-date with UK regulations and compliance requirements with automatic monitoring and alerts.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="border-slate-200 hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mb-2">
                <Clock className="h-5 w-5 text-green-600" />
              </div>
              <CardTitle className="text-lg">24/7 Support</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Get round-the-clock support from our team of UK market experts whenever you need assistance.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="border-slate-200 hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center mb-2">
                <Target className="h-5 w-5 text-purple-600" />
              </div>
              <CardTitle className="text-lg">Market Intelligence</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Access real-time market data, trends, and insights to make informed business decisions.
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AdditionalFeatures;
