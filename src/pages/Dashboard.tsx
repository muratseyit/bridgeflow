
import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BarChart3, FileText, Users, CheckCircle, AlertCircle, TrendingUp, Download, MessageSquare, Star, MapPin, Calendar, DollarSign } from "lucide-react";
import { Link } from "react-router-dom";

interface MarketabilityScore {
  overall: number;
  digitalReadiness: number;
  marketFit: number;
  complianceReadiness: number;
  financialReadiness: number;
}

interface RoadmapItem {
  id: string;
  title: string;
  description: string;
  priority: 'high' | 'medium' | 'low';
  status: 'pending' | 'in-progress' | 'completed';
  category: 'legal' | 'tax' | 'operational' | 'marketing';
  estimatedDays: number;
}

interface Partner {
  id: string;
  name: string;
  type: 'accountant' | 'legal' | 'logistics' | 'marketing';
  rating: number;
  location: string;
  specialties: string[];
  verified: boolean;
  price: string;
}

const Dashboard = () => {
  const [businessData, setBusinessData] = useState<any>(null);
  const [marketabilityScore, setMarketabilityScore] = useState<MarketabilityScore>({
    overall: 0,
    digitalReadiness: 0,
    marketFit: 0,
    complianceReadiness: 0,
    financialReadiness: 0
  });

  const [roadmapItems] = useState<RoadmapItem[]>([
    {
      id: '1',
      title: 'Register UK Company',
      description: 'Set up your UK limited company through Companies House',
      priority: 'high',
      status: 'pending',
      category: 'legal',
      estimatedDays: 7
    },
    {
      id: '2',
      title: 'Open UK Business Bank Account',
      description: 'Establish business banking relationship with UK financial institution',
      priority: 'high',
      status: 'pending',
      category: 'operational',
      estimatedDays: 14
    },
    {
      id: '3',
      title: 'VAT Registration',
      description: 'Register for VAT with HMRC if turnover exceeds threshold',
      priority: 'medium',
      status: 'pending',
      category: 'tax',
      estimatedDays: 10
    },
    {
      id: '4',
      title: 'UK Website Localization',
      description: 'Adapt your website for UK market with local pricing and content',
      priority: 'medium',
      status: 'pending',
      category: 'marketing',
      estimatedDays: 21
    },
    {
      id: '5',
      title: 'GDPR Compliance Setup',
      description: 'Implement GDPR-compliant data protection measures',
      priority: 'high',
      status: 'pending',
      category: 'legal',
      estimatedDays: 14
    }
  ]);

  const [recommendedPartners] = useState<Partner[]>([
    {
      id: '1',
      name: 'London Accounting Partners',
      type: 'accountant',
      rating: 4.8,
      location: 'London',
      specialties: ['VAT Registration', 'International Business', 'Tax Planning'],
      verified: true,
      price: '£150-250/hour'
    },
    {
      id: '2',
      name: 'UK Business Legal Services',
      type: 'legal',
      rating: 4.9,
      location: 'Manchester',
      specialties: ['Company Formation', 'Commercial Law', 'Employment Law'],
      verified: true,
      price: '£200-350/hour'
    },
    {
      id: '3',
      name: 'Express Logistics UK',
      type: 'logistics',
      rating: 4.7,
      location: 'Birmingham',
      specialties: ['Import/Export', 'Warehousing', 'Last Mile Delivery'],
      verified: true,
      price: '£50-100/shipment'
    },
    {
      id: '4',
      name: 'Digital Marketing Pro',
      type: 'marketing',
      rating: 4.6,
      location: 'Leeds',
      specialties: ['SEO', 'Google Ads', 'Content Marketing'],
      verified: true,
      price: '£75-150/hour'
    }
  ]);

  useEffect(() => {
    // Load business data from localStorage
    const savedData = localStorage.getItem('businessData');
    if (savedData) {
      const data = JSON.parse(savedData);
      setBusinessData(data);
      
      // Calculate marketability score based on business data
      const score = calculateMarketabilityScore(data);
      setMarketabilityScore(score);
    }
  }, []);

  const calculateMarketabilityScore = (data: any): MarketabilityScore => {
    // AI-powered scoring algorithm simulation
    let digitalReadiness = 0;
    let marketFit = 0;
    let complianceReadiness = 0;
    let financialReadiness = 0;

    // Digital Readiness Scoring
    if (data.hasEnglishWebsite) digitalReadiness += 25;
    if (data.hasOnlineStore) digitalReadiness += 20;
    if (data.digitalPresence?.includes('Website')) digitalReadiness += 15;
    if (data.digitalPresence?.includes('Social Media')) digitalReadiness += 10;
    if (data.digitalPresence?.includes('SEO Optimized')) digitalReadiness += 15;
    if (data.digitalPresence?.includes('Google Ads')) digitalReadiness += 15;

    // Market Fit Scoring
    const highDemandIndustries = ['technology', 'food-beverage', 'textiles', 'healthcare'];
    if (highDemandIndustries.includes(data.industry)) marketFit += 30;
    if (data.currentMarkets?.length >= 3) marketFit += 25; // International experience
    if (data.companySize !== '1-10') marketFit += 20; // Established company
    if (parseInt(data.yearEstablished) <= 2020) marketFit += 25; // Proven track record

    // Compliance Readiness
    if (data.qualityCertifications?.includes('GDPR Compliant')) complianceReadiness += 30;
    if (data.qualityCertifications?.includes('CE Marking')) complianceReadiness += 25;
    if (data.qualityCertifications?.includes('ISO 9001')) complianceReadiness += 20;
    if (data.qualityCertifications?.length >= 2) complianceReadiness += 25;

    // Financial Readiness
    const revenueScores: { [key: string]: number } = {
      '0-500k': 20,
      '500k-2m': 40,
      '2m-10m': 70,
      '10m-50m': 90,
      '50m+': 100
    };
    financialReadiness = revenueScores[data.annualRevenue] || 0;

    const overall = Math.round((digitalReadiness + marketFit + complianceReadiness + financialReadiness) / 4);

    return {
      overall,
      digitalReadiness: Math.min(digitalReadiness, 100),
      marketFit: Math.min(marketFit, 100),
      complianceReadiness: Math.min(complianceReadiness, 100),
      financialReadiness: Math.min(financialReadiness, 100)
    };
  };

  const getScoreColor = (score: number) => {
    if (score >= 80) return 'text-green-600';
    if (score >= 60) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getScoreBadge = (score: number) => {
    if (score >= 80) return <Badge className="bg-green-100 text-green-800">Excellent</Badge>;
    if (score >= 60) return <Badge className="bg-yellow-100 text-yellow-800">Good</Badge>;
    return <Badge className="bg-red-100 text-red-800">Needs Improvement</Badge>;
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'text-red-600 bg-red-50';
      case 'medium': return 'text-yellow-600 bg-yellow-50';
      case 'low': return 'text-green-600 bg-green-50';
      default: return 'text-gray-600 bg-gray-50';
    }
  };

  const getPartnerTypeIcon = (type: string) => {
    switch (type) {
      case 'accountant': return <DollarSign className="h-5 w-5" />;
      case 'legal': return <FileText className="h-5 w-5" />;
      case 'logistics': return <TrendingUp className="h-5 w-5" />;
      case 'marketing': return <BarChart3 className="h-5 w-5" />;
      default: return <Users className="h-5 w-5" />;
    }
  };

  if (!businessData) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex items-center justify-center">
        <Card className="p-8 text-center">
          <CardHeader>
            <CardTitle>No Assessment Data Found</CardTitle>
            <CardDescription>Please complete the onboarding assessment first.</CardDescription>
          </CardHeader>
          <CardContent>
            <Link to="/onboarding">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                Start Assessment
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold text-slate-900">UK Market Dashboard</h1>
              <p className="text-slate-600">{businessData.companyName}</p>
            </div>
            <div className="flex space-x-4">
              <Link to="/documents">
                <Button variant="outline" className="flex items-center">
                  <FileText className="h-4 w-4 mr-2" />
                  Documents
                </Button>
              </Link>
              <Link to="/partners">
                <Button variant="outline" className="flex items-center">
                  <Users className="h-4 w-4 mr-2" />
                  Partners
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Marketability Score Overview */}
        <div className="mb-8">
          <Card className="border-slate-200 shadow-lg">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">Your UK Marketability Score</CardTitle>
              <CardDescription>AI-powered analysis of your business readiness for the UK market</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center mb-8">
                <div className={`text-6xl font-bold mb-2 ${getScoreColor(marketabilityScore.overall)}`}>
                  {marketabilityScore.overall}
                </div>
                <div className="flex justify-center mb-4">
                  {getScoreBadge(marketabilityScore.overall)}
                </div>
                <Progress value={marketabilityScore.overall} className="h-3 max-w-md mx-auto" />
              </div>
              
              <div className="grid md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-2xl font-semibold text-slate-700 mb-1">{marketabilityScore.digitalReadiness}</div>
                  <div className="text-sm text-slate-600">Digital Readiness</div>
                  <Progress value={marketabilityScore.digitalReadiness} className="h-2 mt-2" />
                </div>
                <div className="text-center">
                  <div className="text-2xl font-semibold text-slate-700 mb-1">{marketabilityScore.marketFit}</div>
                  <div className="text-sm text-slate-600">Market Fit</div>
                  <Progress value={marketabilityScore.marketFit} className="h-2 mt-2" />
                </div>
                <div className="text-center">
                  <div className="text-2xl font-semibold text-slate-700 mb-1">{marketabilityScore.complianceReadiness}</div>
                  <div className="text-sm text-slate-600">Compliance</div>
                  <Progress value={marketabilityScore.complianceReadiness} className="h-2 mt-2" />
                </div>
                <div className="text-center">
                  <div className="text-2xl font-semibold text-slate-700 mb-1">{marketabilityScore.financialReadiness}</div>
                  <div className="text-sm text-slate-600">Financial Readiness</div>
                  <Progress value={marketabilityScore.financialReadiness} className="h-2 mt-2" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content Tabs */}
        <Tabs defaultValue="roadmap" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4 lg:w-auto lg:grid-cols-4">
            <TabsTrigger value="roadmap" className="flex items-center">
              <CheckCircle className="h-4 w-4 mr-2" />
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
            <TabsTrigger value="analytics" className="flex items-center">
              <BarChart3 className="h-4 w-4 mr-2" />
              Analytics
            </TabsTrigger>
          </TabsList>

          {/* Roadmap Tab */}
          <TabsContent value="roadmap" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Your Personalized UK Expansion Roadmap</CardTitle>
                <CardDescription>
                  Follow these steps to successfully enter the UK market
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {roadmapItems.map((item) => (
                    <div key={item.id} className="flex items-start space-x-4 p-4 border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors">
                      <div className="flex-shrink-0">
                        {item.status === 'completed' ? (
                          <CheckCircle className="h-6 w-6 text-green-600" />
                        ) : (
                          <AlertCircle className="h-6 w-6 text-yellow-600" />
                        )}
                      </div>
                      <div className="flex-grow">
                        <div className="flex items-start justify-between">
                          <div>
                            <h3 className="font-semibold text-slate-900 mb-1">{item.title}</h3>
                            <p className="text-slate-600 text-sm mb-2">{item.description}</p>
                            <div className="flex items-center space-x-2">
                              <Badge variant="outline" className={getPriorityColor(item.priority)}>
                                {item.priority} priority
                              </Badge>
                              <span className="text-xs text-slate-500 flex items-center">
                                <Calendar className="h-3 w-3 mr-1" />
                                {item.estimatedDays} days
                              </span>
                            </div>
                          </div>
                          <Button variant="outline" size="sm">
                            Start Task
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Documents Tab */}
          <TabsContent value="documents" className="space-y-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: 'Company Formation Documents', description: 'Articles of Association, Memorandum', icon: FileText, status: 'ready' },
                { title: 'VAT Registration Forms', description: 'VAT1 application form', icon: FileText, status: 'ready' },
                { title: 'Employment Contracts', description: 'UK employment agreement templates', icon: FileText, status: 'ready' },
                { title: 'NDA Templates', description: 'Non-disclosure agreement forms', icon: FileText, status: 'ready' },
                { title: 'Terms & Conditions', description: 'UK-compliant T&C templates', icon: FileText, status: 'ready' },
                { title: 'Privacy Policy', description: 'GDPR-compliant privacy policy', icon: FileText, status: 'ready' }
              ].map((doc, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader className="text-center">
                    <doc.icon className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                    <CardTitle className="text-lg">{doc.title}</CardTitle>
                    <CardDescription>{doc.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="text-center">
                    <Button className="w-full flex items-center justify-center">
                      <Download className="h-4 w-4 mr-2" />
                      Generate Document
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Partners Tab */}
          <TabsContent value="partners" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Recommended UK Partners</CardTitle>
                <CardDescription>
                  Verified professionals matched to your business needs
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  {recommendedPartners.map((partner) => (
                    <Card key={partner.id} className="border border-slate-200">
                      <CardContent className="p-6">
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex items-center space-x-3">
                            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                              {getPartnerTypeIcon(partner.type)}
                            </div>
                            <div>
                              <h3 className="font-semibold text-slate-900">{partner.name}</h3>
                              <div className="flex items-center space-x-2 text-sm text-slate-600">
                                <MapPin className="h-3 w-3" />
                                <span>{partner.location}</span>
                                {partner.verified && (
                                  <Badge variant="outline" className="text-green-700 border-green-200">
                                    Verified
                                  </Badge>
                                )}
                              </div>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="flex items-center text-yellow-500 mb-1">
                              <Star className="h-4 w-4 fill-current" />
                              <span className="text-sm font-medium ml-1">{partner.rating}</span>
                            </div>
                            <div className="text-sm text-slate-600">{partner.price}</div>
                          </div>
                        </div>
                        
                        <div className="mb-4">
                          <div className="flex flex-wrap gap-2">
                            {partner.specialties.map((specialty, idx) => (
                              <Badge key={idx} variant="secondary" className="text-xs">
                                {specialty}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        
                        <div className="flex space-x-2">
                          <Button variant="outline" size="sm" className="flex-1">
                            <MessageSquare className="h-4 w-4 mr-2" />
                            Contact
                          </Button>
                          <Button size="sm" className="flex-1 bg-blue-600 hover:bg-blue-700 text-white">
                            View Profile
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Analytics Tab */}
          <TabsContent value="analytics" className="space-y-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Progress Overview</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Tasks Completed</span>
                        <span>0/5</span>
                      </div>
                      <Progress value={0} className="h-2" />
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Documents Generated</span>
                        <span>0/6</span>
                      </div>
                      <Progress value={0} className="h-2" />
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Partners Connected</span>
                        <span>0/4</span>
                      </div>
                      <Progress value={0} className="h-2" />
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Market Insights</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-slate-600">Industry Growth</span>
                      <span className="text-sm font-medium text-green-600">+12.5%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-slate-600">Market Size</span>
                      <span className="text-sm font-medium">£2.3B</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-slate-600">Competition Level</span>
                      <span className="text-sm font-medium text-yellow-600">Medium</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Next Actions</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <AlertCircle className="h-4 w-4 text-red-500" />
                      <span className="text-sm">Complete company registration</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <AlertCircle className="h-4 w-4 text-yellow-500" />
                      <span className="text-sm">Set up UK bank account</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <AlertCircle className="h-4 w-4 text-blue-500" />
                      <span className="text-sm">Contact recommended partners</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Dashboard;
