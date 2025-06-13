import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { 
  BarChart3, 
  FileText, 
  Users, 
  CheckCircle, 
  Download, 
  ExternalLink,
  Globe,
  ArrowRight,
  Target,
  TrendingUp
} from "lucide-react";
import { Link } from "react-router-dom";
import { calculateMarketabilityScore, MarketabilityResult } from "@/utils/marketabilityEngine";
import MarketabilityScoreCard from "@/components/MarketabilityScoreCard";
import DocumentGenerator from "@/components/DocumentGenerator";
import BusinessCompliance from "@/components/BusinessCompliance";

const Dashboard = () => {
  const [businessData, setBusinessData] = useState<any>(null);
  const [marketabilityResult, setMarketabilityResult] = useState<MarketabilityResult | null>(null);

  useEffect(() => {
    // Load business data from localStorage
    const storedData = localStorage.getItem('businessData');
    if (storedData) {
      const data = JSON.parse(storedData);
      setBusinessData(data);
      
      // Calculate marketability score
      const result = calculateMarketabilityScore(data);
      setMarketabilityResult(result);
      console.log("Marketability Score Result:", result);
    }
  }, []);

  const roadmapSteps = [
    { id: 1, title: "Legal Structure Setup", status: "pending", description: "Register UK company and establish legal presence" },
    { id: 2, title: "Tax Registration", status: "pending", description: "Register for VAT and corporation tax" },
    { id: 3, title: "Banking Setup", status: "pending", description: "Open UK business bank account" },
    { id: 4, title: "Regulatory Compliance", status: "pending", description: "Obtain necessary certifications and licenses" },
    { id: 5, title: "Digital Presence", status: "pending", description: "Establish UK-focused online presence" },
    { id: 6, title: "Partner Network", status: "pending", description: "Connect with UK service providers" }
  ];

  const documents = [
    { name: "Company Registration Forms", type: "Companies House", status: "available" },
    { name: "VAT Registration Application", type: "HMRC", status: "available" },
    { name: "UK Business Bank Account Application", type: "Banking", status: "available" },
    { name: "Standard UK Service Agreement", type: "Legal", status: "available" },
    { name: "UK Employment Contract Template", type: "HR", status: "available" },
    { name: "UK Privacy Policy Template", type: "GDPR", status: "available" }
  ];

  const partners = [
    {
      name: "BritishTurk Accounting",
      type: "Accountant",
      speciality: "Turkish SME UK Setup",
      rating: 4.8,
      location: "London",
      verified: true
    },
    {
      name: "CrossBorder Legal Solutions",
      type: "Legal Advisor",
      speciality: "International Business Law",
      rating: 4.9,
      location: "Manchester",
      verified: true
    },
    {
      name: "UK Fulfillment Pro",
      type: "Logistics",
      speciality: "E-commerce Fulfillment",
      rating: 4.7,
      location: "Birmingham",
      verified: true
    },
    {
      name: "Digital Bridge Marketing",
      type: "Marketing Agency",
      speciality: "Turkish-UK Market Entry",
      rating: 4.6,
      location: "Edinburgh",
      verified: true
    }
  ];

  if (!businessData) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex items-center justify-center">
        <Card className="max-w-md">
          <CardHeader className="text-center">
            <CardTitle>No Business Data Found</CardTitle>
            <CardDescription>Please complete the onboarding process first</CardDescription>
          </CardHeader>
          <CardContent className="text-center">
            <Link to="/onboarding">
              <Button className="bg-blue-600 hover:bg-blue-700">Start Assessment</Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <Globe className="h-8 w-8 text-blue-600" />
              <span className="text-2xl font-bold text-slate-900">UK Bridge</span>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-slate-600">Welcome, {businessData.companyName}</span>
              <Link to="/">
                <Button variant="outline">Exit Dashboard</Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-900 mb-2">UK Market Entry Dashboard</h1>
          <p className="text-slate-600">Track your progress and access tools for UK market expansion</p>
        </div>

        <Tabs defaultValue="score" className="space-y-6">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="score" className="flex items-center">
              <BarChart3 className="h-4 w-4 mr-2" />
              AI Score
            </TabsTrigger>
            <TabsTrigger value="compliance" className="flex items-center">
              <CheckCircle className="h-4 w-4 mr-2" />
              Compliance
            </TabsTrigger>
            <TabsTrigger value="roadmap" className="flex items-center">
              <Target className="h-4 w-4 mr-2" />
              Roadmap
            </TabsTrigger>
            <TabsTrigger value="documents" className="flex items-center">
              <FileText className="h-4 w-4 mr-2" />
              Documents
            </TabsTrigger>
            <TabsTrigger value="partners" className="flex items-center">
              <Users className="h-4 w-4 mr-2" />
              Partners
            </TabsTrigger>
          </TabsList>

          {/* AI Marketability Score Tab */}
          <TabsContent value="score" className="space-y-6">
            {marketabilityResult ? (
              <MarketabilityScoreCard result={marketabilityResult} />
            ) : (
              <Card>
                <CardContent className="flex items-center justify-center py-8">
                  <p>Calculating your marketability score...</p>
                </CardContent>
              </Card>
            )}
          </TabsContent>

          {/* New Business Compliance Tab */}
          <TabsContent value="compliance" className="space-y-6">
            {businessData ? (
              <BusinessCompliance businessData={businessData} />
            ) : (
              <Card>
                <CardContent className="flex items-center justify-center py-8">
                  <p>Loading compliance recommendations...</p>
                </CardContent>
              </Card>
            )}
          </TabsContent>

          {/* Roadmap Tab */}
          <TabsContent value="roadmap" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <TrendingUp className="h-5 w-5 mr-2 text-blue-600" />
                  Your UK Market Entry Roadmap
                </CardTitle>
                <CardDescription>
                  Customized step-by-step plan based on your business profile and AI score
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {roadmapSteps.map((step, index) => (
                    <div key={step.id} className="flex items-start space-x-4 p-4 border border-slate-200 rounded-lg">
                      <div className="flex-shrink-0">
                        <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                          <span className="text-sm font-semibold text-blue-600">{step.id}</span>
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-slate-900">{step.title}</h3>
                        <p className="text-sm text-slate-600 mt-1">{step.description}</p>
                        <Badge variant="secondary" className="mt-2">
                          {step.status === 'completed' ? 'Completed' : 'Pending'}
                        </Badge>
                      </div>
                      <Button variant="outline" size="sm">
                        Start Step
                        <ArrowRight className="h-4 w-4 ml-2" />
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Enhanced Documents Tab */}
          <TabsContent value="documents" className="space-y-6">
            {businessData ? (
              <DocumentGenerator businessData={businessData} />
            ) : (
              <Card>
                <CardContent className="flex items-center justify-center py-8">
                  <p>Loading document generator...</p>
                </CardContent>
              </Card>
            )}
          </TabsContent>

          {/* Partners Tab */}
          <TabsContent value="partners" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Users className="h-5 w-5 mr-2 text-blue-600" />
                  Verified UK Partners
                </CardTitle>
                <CardDescription>
                  Connect with trusted professionals who specialize in helping Turkish businesses
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  {partners.map((partner, index) => (
                    <div key={index} className="p-6 border border-slate-200 rounded-lg hover:shadow-md transition-shadow">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="font-semibold text-slate-900">{partner.name}</h3>
                          <p className="text-sm text-slate-600">{partner.type}</p>
                        </div>
                        {partner.verified && (
                          <Badge variant="default" className="bg-green-100 text-green-800">
                            <CheckCircle className="h-3 w-3 mr-1" />
                            Verified
                          </Badge>
                        )}
                      </div>
                      <p className="text-sm text-slate-600 mb-2">{partner.speciality}</p>
                      <p className="text-sm text-slate-500 mb-4">{partner.location}</p>
                      <div className="flex justify-between items-center">
                        <div className="flex items-center">
                          <span className="text-sm font-medium">⭐ {partner.rating}</span>
                        </div>
                        <Button size="sm">
                          Connect
                          <ExternalLink className="h-4 w-4 ml-2" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Dashboard;
