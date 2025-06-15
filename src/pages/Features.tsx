
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { ArrowRight, BarChart3, FileText, Users, Zap, CheckCircle, Globe, TrendingUp, Shield, Clock, Target, Award, Play, Search, UserPlus, LineChart, Activity, PieChart, Download, Star, MapPin, Building2, Calculator, FileCheck } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Features = () => {
  const [isSchedulingDemo, setIsSchedulingDemo] = useState(false);
  const [isGeneratingScore, setIsGeneratingScore] = useState(false);
  const [isGeneratingDocument, setIsGeneratingDocument] = useState(false);
  const [isSearchingLeads, setIsSearchingLeads] = useState(false);
  const [isMatchingPartners, setIsMatchingPartners] = useState(false);
  const [isGeneratingRoadmap, setIsGeneratingRoadmap] = useState(false);
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

  const handleMarketIntelligenceClick = () => {
    toast({
      title: "Market Intelligence Activated!",
      description: "Real-time data analysis for your business sector is now loading...",
    });
  };

  const handleMarketabilityScoreClick = () => {
    setIsGeneratingScore(true);
    setTimeout(() => {
      setIsGeneratingScore(false);
      toast({
        title: "AI Analysis Complete!",
        description: "Your marketability score has been calculated. View detailed insights in your dashboard.",
      });
    }, 3000);
  };

  const handleDocumentGeneratorClick = () => {
    setIsGeneratingDocument(true);
    setTimeout(() => {
      setIsGeneratingDocument(false);
      toast({
        title: "Documents Ready!",
        description: "Your UK business documents have been generated. Check your downloads folder.",
      });
    }, 2500);
  };

  const handleGenerateLeadsClick = () => {
    setIsSearchingLeads(true);
    setTimeout(() => {
      setIsSearchingLeads(false);
      toast({
        title: "Leads Generated!",
        description: "Found 47 potential customers and 12 distributors in your target market.",
      });
    }, 3000);
  };

  const handlePartnerMatchingClick = () => {
    setIsMatchingPartners(true);
    setTimeout(() => {
      setIsMatchingPartners(false);
      toast({
        title: "Partners Found!",
        description: "5 verified accountants and 3 legal advisors matched to your business needs.",
      });
    }, 2500);
  };

  const handleSmartRoadmapClick = () => {
    setIsGeneratingRoadmap(true);
    setTimeout(() => {
      setIsGeneratingRoadmap(false);
      toast({
        title: "Roadmap Created!",
        description: "Your personalized 6-month market entry plan is ready with 24 action items.",
      });
    }, 2000);
  };

  const handleComplianceClick = () => {
    toast({
      title: "Compliance Monitoring Active!",
      description: "Now monitoring 15 UK regulations relevant to your business sector.",
    });
  };

  const handleSupportClick = () => {
    toast({
      title: "Support Team Notified!",
      description: "A UK market expert will contact you within 2 hours.",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <Link to="/" className="flex items-center space-x-2">
              <Globe className="h-8 w-8 text-blue-600" />
              <span className="text-2xl font-bold text-slate-900">UK Bridge</span>
            </Link>
            <nav className="hidden md:flex space-x-8">
              <Link to="/features" className="text-blue-600 font-medium">Features</Link>
              <Link to="/pricing" className="text-slate-600 hover:text-slate-900 transition-colors">Pricing</Link>
              <Link to="/support" className="text-slate-600 hover:text-slate-900 transition-colors">Support</Link>
            </nav>
            <div className="flex space-x-4">
              <Link to="/login">
                <Button variant="ghost" className="text-slate-600 hover:text-slate-900">
                  Login
                </Button>
              </Link>
              <Link to="/onboarding">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                  Get Started
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
            Powerful Features for 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-600"> UK Market Entry</span>
          </h1>
          <p className="text-xl text-slate-600 mb-10 max-w-3xl mx-auto leading-relaxed">
            Discover all the tools and features that make UK Bridge the perfect platform for Turkish businesses expanding to the UK market.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/onboarding">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg">
                Get Started Free
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline" size="lg" className="px-8 py-4 text-lg border-slate-300">
                  <Play className="mr-2 h-5 w-5" />
                  Watch Demo
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-4xl w-full">
                <DialogHeader>
                  <DialogTitle className="text-2xl font-bold text-center">UK Bridge Platform Demo</DialogTitle>
                </DialogHeader>
                <div className="aspect-video bg-slate-100 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <Play className="h-16 w-16 text-slate-400 mx-auto mb-4" />
                    <p className="text-slate-600 text-lg">Demo video will be embedded here</p>
                    <p className="text-slate-500 text-sm mt-2">
                      This would typically contain an embedded video player showing the platform features
                    </p>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </section>

      {/* Core Features */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Core Features
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Everything you need to successfully enter the UK market
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Dialog>
              <DialogTrigger asChild>
                <Card className="border-slate-200 hover:shadow-lg transition-shadow duration-300 cursor-pointer hover:border-blue-300">
                  <CardHeader className="text-center pb-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <BarChart3 className="h-6 w-6 text-blue-600" />
                    </div>
                    <CardTitle className="text-xl">AI Marketability Score</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-center mb-4">
                      Get instant analysis of your business potential in the UK market with our advanced AI scoring engine
                    </CardDescription>
                    <ul className="text-sm text-slate-600 space-y-2">
                      <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Market demand analysis</li>
                      <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Competition assessment</li>
                      <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Risk evaluation</li>
                    </ul>
                  </CardContent>
                </Card>
              </DialogTrigger>
              <DialogContent className="max-w-4xl w-full">
                <DialogHeader>
                  <DialogTitle className="text-2xl font-bold text-center flex items-center justify-center gap-2">
                    <BarChart3 className="h-6 w-6 text-blue-600" />
                    AI Marketability Analysis
                  </DialogTitle>
                </DialogHeader>
                <div className="grid md:grid-cols-2 gap-6 mt-6">
                  <Card className="border-blue-200">
                    <CardHeader className="pb-3">
                      <CardTitle className="text-lg flex items-center gap-2">
                        <Calculator className="h-5 w-5 text-blue-600" />
                        Your Score: 8.4/10
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div className="bg-green-100 p-3 rounded-md">
                          <div className="flex justify-between items-center mb-2">
                            <span className="text-sm font-medium text-green-800">Market Demand</span>
                            <span className="text-green-600 font-bold">9.2/10</span>
                          </div>
                          <div className="w-full bg-green-200 rounded-full h-2">
                            <div className="bg-green-600 h-2 rounded-full" style={{width: '92%'}}></div>
                          </div>
                        </div>
                        <div className="bg-yellow-100 p-3 rounded-md">
                          <div className="flex justify-between items-center mb-2">
                            <span className="text-sm font-medium text-yellow-800">Competition Level</span>
                            <span className="text-yellow-600 font-bold">6.8/10</span>
                          </div>
                          <div className="w-full bg-yellow-200 rounded-full h-2">
                            <div className="bg-yellow-600 h-2 rounded-full" style={{width: '68%'}}></div>
                          </div>
                        </div>
                        <div className="bg-emerald-100 p-3 rounded-md">
                          <div className="flex justify-between items-center mb-2">
                            <span className="text-sm font-medium text-emerald-800">Entry Barriers</span>
                            <span className="text-emerald-600 font-bold">8.9/10</span>
                          </div>
                          <div className="w-full bg-emerald-200 rounded-full h-2">
                            <div className="bg-emerald-600 h-2 rounded-full" style={{width: '89%'}}></div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-indigo-200">
                    <CardHeader className="pb-3">
                      <CardTitle className="text-lg flex items-center gap-2">
                        <TrendingUp className="h-5 w-5 text-indigo-600" />
                        Key Insights
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                          <div>
                            <p className="text-sm font-medium">High Market Demand</p>
                            <p className="text-xs text-slate-600">Your product category shows 34% growth in UK</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                          <div>
                            <p className="text-sm font-medium">Low Entry Barriers</p>
                            <p className="text-xs text-slate-600">Minimal regulatory requirements for your sector</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <Target className="h-5 w-5 text-orange-500 mt-0.5" />
                          <div>
                            <p className="text-sm font-medium">Opportunity Window</p>
                            <p className="text-xs text-slate-600">Best launch period: March-June 2024</p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
                <div className="mt-6 text-center">
                  <Button 
                    onClick={handleMarketabilityScoreClick}
                    disabled={isGeneratingScore}
                    className="bg-blue-600 hover:bg-blue-700 text-white"
                  >
                    <BarChart3 className="mr-2 h-4 w-4" />
                    {isGeneratingScore ? "Analyzing..." : "Generate Full Report"}
                  </Button>
                </div>
              </DialogContent>
            </Dialog>

            <Dialog>
              <DialogTrigger asChild>
                <Card className="border-slate-200 hover:shadow-lg transition-shadow duration-300 cursor-pointer hover:border-emerald-300">
                  <CardHeader className="text-center pb-4">
                    <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <Search className="h-6 w-6 text-emerald-600" />
                    </div>
                    <CardTitle className="text-xl">Market Research</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-center mb-4">
                      Access comprehensive UK market insights, consumer behavior data, and industry trends for informed decision-making
                    </CardDescription>
                    <ul className="text-sm text-slate-600 space-y-2">
                      <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Consumer insights</li>
                      <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Industry trends</li>
                      <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Competitor analysis</li>
                    </ul>
                  </CardContent>
                </Card>
              </DialogTrigger>
              <DialogContent className="max-w-5xl w-full max-h-[80vh] overflow-y-auto">
                <DialogHeader>
                  <DialogTitle className="text-2xl font-bold text-center flex items-center justify-center gap-2">
                    <Search className="h-6 w-6 text-emerald-600" />
                    UK Market Research Dashboard
                  </DialogTitle>
                </DialogHeader>
                <div className="grid md:grid-cols-3 gap-4 mt-6">
                  <Card className="border-emerald-200">
                    <CardHeader className="pb-3">
                      <CardTitle className="text-base flex items-center gap-2">
                        <Users className="h-4 w-4 text-emerald-600" />
                        Consumer Demographics
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>Age 25-34:</span>
                        <span className="font-semibold">28%</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Age 35-44:</span>
                        <span className="font-semibold">32%</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Income £30-50k:</span>
                        <span className="font-semibold">41%</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Urban areas:</span>
                        <span className="font-semibold">67%</span>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-blue-200">
                    <CardHeader className="pb-3">
                      <CardTitle className="text-base flex items-center gap-2">
                        <TrendingUp className="h-4 w-4 text-blue-600" />
                        Market Trends
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>Online shopping:</span>
                        <span className="text-green-600 font-semibold">↑ 18%</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Sustainable products:</span>
                        <span className="text-green-600 font-semibold">↑ 45%</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Premium products:</span>
                        <span className="text-green-600 font-semibold">↑ 23%</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Local sourcing:</span>
                        <span className="text-green-600 font-semibold">↑ 31%</span>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-purple-200">
                    <CardHeader className="pb-3">
                      <CardTitle className="text-base flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-purple-600" />
                        Regional Insights
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>London:</span>
                        <span className="font-semibold">High demand</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Manchester:</span>
                        <span className="font-semibold">Growing</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Birmingham:</span>
                        <span className="font-semibold">Emerging</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Scotland:</span>
                        <span className="font-semibold">Opportunity</span>
                      </div>
                    </CardContent>
                  </Card>
                </div>
                <div className="mt-4 text-center">
                  <Button className="bg-emerald-600 hover:bg-emerald-700 text-white">
                    <Download className="mr-2 h-4 w-4" />
                    Download Full Report
                  </Button>
                </div>
              </DialogContent>
            </Dialog>

            <Dialog>
              <DialogTrigger asChild>
                <Card className="border-slate-200 hover:shadow-lg transition-shadow duration-300 cursor-pointer hover:border-indigo-300">
                  <CardHeader className="text-center pb-4">
                    <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <UserPlus className="h-6 w-6 text-indigo-600" />
                    </div>
                    <CardTitle className="text-xl">Generate Leads</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-center mb-4">
                      Identify and connect with potential UK customers, partners, and distributors through our advanced lead generation platform
                    </CardDescription>
                    <ul className="text-sm text-slate-600 space-y-2">
                      <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Targeted prospects</li>
                      <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Contact database</li>
                      <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Lead scoring</li>
                    </ul>
                  </CardContent>
                </Card>
              </DialogTrigger>
              <DialogContent className="max-w-4xl w-full">
                <DialogHeader>
                  <DialogTitle className="text-2xl font-bold text-center flex items-center justify-center gap-2">
                    <UserPlus className="h-6 w-6 text-indigo-600" />
                    Lead Generation Results
                  </DialogTitle>
                </DialogHeader>
                <div className="grid md:grid-cols-2 gap-6 mt-6">
                  <Card className="border-green-200">
                    <CardHeader className="pb-3">
                      <CardTitle className="text-lg flex items-center gap-2">
                        <Building2 className="h-5 w-5 text-green-600" />
                        Potential Customers (47)
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div className="border rounded-lg p-3">
                          <div className="flex justify-between items-start mb-2">
                            <div>
                              <p className="font-medium text-sm">Premium Foods Ltd</p>
                              <p className="text-xs text-slate-600">London • Food Retailer</p>
                            </div>
                            <Star className="h-4 w-4 text-yellow-500" />
                          </div>
                          <p className="text-xs text-slate-600">Annual revenue: £2.3M • 45 employees</p>
                        </div>
                        <div className="border rounded-lg p-3">
                          <div className="flex justify-between items-start mb-2">
                            <div>
                              <p className="font-medium text-sm">Urban Market Chain</p>
                              <p className="text-xs text-slate-600">Manchester • Retail Chain</p>
                            </div>
                            <Star className="h-4 w-4 text-yellow-500" />
                          </div>
                          <p className="text-xs text-slate-600">Annual revenue: £8.1M • 120 employees</p>
                        </div>
                        <div className="text-center">
                          <Button variant="outline" size="sm">View All 47 Leads</Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-blue-200">
                    <CardHeader className="pb-3">
                      <CardTitle className="text-lg flex items-center gap-2">
                        <Users className="h-5 w-5 text-blue-600" />
                        Distributors (12)
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div className="border rounded-lg p-3">
                          <div className="flex justify-between items-start mb-2">
                            <div>
                              <p className="font-medium text-sm">UK Specialty Imports</p>
                              <p className="text-xs text-slate-600">Birmingham • Distribution</p>
                            </div>
                            <Star className="h-4 w-4 text-yellow-500" />
                          </div>
                          <p className="text-xs text-slate-600">Network: 500+ stores • Turkish experience</p>
                        </div>
                        <div className="border rounded-lg p-3">
                          <div className="flex justify-between items-start mb-2">
                            <div>
                              <p className="font-medium text-sm">Northern Distributors</p>
                              <p className="text-xs text-slate-600">Leeds • Wholesale</p>
                            </div>
                            <Star className="h-4 w-4 text-yellow-500" />
                          </div>
                          <p className="text-xs text-slate-600">Network: 200+ stores • 15 years experience</p>
                        </div>
                        <div className="text-center">
                          <Button variant="outline" size="sm">View All 12 Distributors</Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
                <div className="mt-6 text-center">
                  <Button 
                    onClick={handleGenerateLeadsClick}
                    disabled={isSearchingLeads}
                    className="bg-indigo-600 hover:bg-indigo-700 text-white"
                  >
                    <UserPlus className="mr-2 h-4 w-4" />
                    {isSearchingLeads ? "Searching..." : "Generate New Leads"}
                  </Button>
                </div>
              </DialogContent>
            </Dialog>

            <Dialog>
              <DialogTrigger asChild>
                <Card className="border-slate-200 hover:shadow-lg transition-shadow duration-300 cursor-pointer hover:border-green-300">
                  <CardHeader className="text-center pb-4">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <FileText className="h-6 w-6 text-green-600" />
                    </div>
                    <CardTitle className="text-xl">Document Generator</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-center mb-4">
                      Automatically generate contracts, NDAs, VAT forms, and other essential UK business documents
                    </CardDescription>
                    <ul className="text-sm text-slate-600 space-y-2">
                      <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Legal contracts</li>
                      <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />VAT registration forms</li>
                      <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Company incorporation</li>
                    </ul>
                  </CardContent>
                </Card>
              </DialogTrigger>
              <DialogContent className="max-w-4xl w-full">
                <DialogHeader>
                  <DialogTitle className="text-2xl font-bold text-center flex items-center justify-center gap-2">
                    <FileText className="h-6 w-6 text-green-600" />
                    Document Generator
                  </DialogTitle>
                </DialogHeader>
                <div className="grid md:grid-cols-3 gap-4 mt-6">
                  <Card className="border-green-200 hover:border-green-400 cursor-pointer transition-colors">
                    <CardHeader className="pb-3">
                      <CardTitle className="text-lg flex items-center gap-2">
                        <FileCheck className="h-5 w-5 text-green-600" />
                        Legal Documents
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-3 w-3 text-green-500" />
                          Distribution Agreement
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-3 w-3 text-green-500" />
                          Non-Disclosure Agreement
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-3 w-3 text-green-500" />
                          Terms & Conditions
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-3 w-3 text-green-500" />
                          Privacy Policy
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="border-blue-200 hover:border-blue-400 cursor-pointer transition-colors">
                    <CardHeader className="pb-3">
                      <CardTitle className="text-lg flex items-center gap-2">
                        <Calculator className="h-5 w-5 text-blue-600" />
                        Tax & VAT Forms
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-3 w-3 text-green-500" />
                          VAT Registration (VAT1)
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-3 w-3 text-green-500" />
                          Corporation Tax Form
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-3 w-3 text-green-500" />
                          PAYE Registration
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-3 w-3 text-green-500" />
                          Import/Export License
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="border-purple-200 hover:border-purple-400 cursor-pointer transition-colors">
                    <CardHeader className="pb-3">
                      <CardTitle className="text-lg flex items-center gap-2">
                        <Building2 className="h-5 w-5 text-purple-600" />
                        Company Setup
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-3 w-3 text-green-500" />
                          IN01 Application
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-3 w-3 text-green-500" />
                          Memorandum of Association
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-3 w-3 text-green-500" />
                          Articles of Association
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-3 w-3 text-green-500" />
                          Director Consent Forms
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
                <div className="mt-6 text-center">
                  <Button 
                    onClick={handleDocumentGeneratorClick}
                    disabled={isGeneratingDocument}
                    className="bg-green-600 hover:bg-green-700 text-white"
                  >
                    <FileText className="mr-2 h-4 w-4" />
                    {isGeneratingDocument ? "Generating..." : "Generate Documents"}
                  </Button>
                </div>
              </DialogContent>
            </Dialog>

            <Dialog>
              <DialogTrigger asChild>
                <Card className="border-slate-200 hover:shadow-lg transition-shadow duration-300 cursor-pointer hover:border-purple-300">
                  <CardHeader className="text-center pb-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <Users className="h-6 w-6 text-purple-600" />
                    </div>
                    <CardTitle className="text-xl">Partner Matching</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-center mb-4">
                      Connect with verified UK accountants, legal advisors, and logistics providers tailored to your needs
                    </CardDescription>
                    <ul className="text-sm text-slate-600 space-y-2">
                      <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Verified professionals</li>
                      <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Industry expertise</li>
                      <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Competitive rates</li>
                    </ul>
                  </CardContent>
                </Card>
              </DialogTrigger>
              <DialogContent className="max-w-5xl w-full">
                <DialogHeader>
                  <DialogTitle className="text-2xl font-bold text-center flex items-center justify-center gap-2">
                    <Users className="h-6 w-6 text-purple-600" />
                    Verified UK Partners
                  </DialogTitle>
                </DialogHeader>
                <div className="grid md:grid-cols-3 gap-4 mt-6">
                  <Card className="border-green-200">
                    <CardHeader className="pb-3">
                      <CardTitle className="text-lg flex items-center gap-2">
                        <Calculator className="h-5 w-5 text-green-600" />
                        Accountants (5 matches)
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div className="border rounded-lg p-3">
                          <div className="flex justify-between items-start mb-1">
                            <p className="font-medium text-sm">Wilson & Associates</p>
                            <div className="flex gap-1">
                              {[1,2,3,4,5].map(i => (
                                <Star key={i} className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                              ))}
                            </div>
                          </div>
                          <p className="text-xs text-slate-600">Turkish business specialist • London</p>
                          <p className="text-xs text-green-600 font-medium">£150/hour</p>
                        </div>
                        <div className="border rounded-lg p-3">
                          <div className="flex justify-between items-start mb-1">
                            <p className="font-medium text-sm">Metro Tax Services</p>
                            <div className="flex gap-1">
                              {[1,2,3,4].map(i => (
                                <Star key={i} className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                              ))}
                              <Star className="h-3 w-3 text-gray-300" />
                            </div>
                          </div>
                          <p className="text-xs text-slate-600">SME expert • Manchester</p>
                          <p className="text-xs text-green-600 font-medium">£120/hour</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-blue-200">
                    <CardHeader className="pb-3">
                      <CardTitle className="text-lg flex items-center gap-2">
                        <Shield className="h-5 w-5 text-blue-600" />
                        Legal Advisors (3 matches)
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div className="border rounded-lg p-3">
                          <div className="flex justify-between items-start mb-1">
                            <p className="font-medium text-sm">Sterling Legal LLP</p>
                            <div className="flex gap-1">
                              {[1,2,3,4,5].map(i => (
                                <Star key={i} className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                              ))}
                            </div>
                          </div>
                          <p className="text-xs text-slate-600">International trade law • London</p>
                          <p className="text-xs text-green-600 font-medium">£300/hour</p>
                        </div>
                        <div className="border rounded-lg p-3">
                          <div className="flex justify-between items-start mb-1">
                            <p className="font-medium text-sm">North Legal Partners</p>
                            <div className="flex gap-1">
                              {[1,2,3,4].map(i => (
                                <Star key={i} className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                              ))}
                              <Star className="h-3 w-3 text-gray-300" />
                            </div>
                          </div>
                          <p className="text-xs text-slate-600">Corporate law • Birmingham</p>
                          <p className="text-xs text-green-600 font-medium">£250/hour</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-orange-200">
                    <CardHeader className="pb-3">
                      <CardTitle className="text-lg flex items-center gap-2">
                        <MapPin className="h-5 w-5 text-orange-600" />
                        Logistics (4 matches)
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div className="border rounded-lg p-3">
                          <div className="flex justify-between items-start mb-1">
                            <p className="font-medium text-sm">UK Freight Solutions</p>
                            <div className="flex gap-1">
                              {[1,2,3,4,5].map(i => (
                                <Star key={i} className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                              ))}
                            </div>
                          </div>
                          <p className="text-xs text-slate-600">Turkey-UK specialist • Dover</p>
                          <p className="text-xs text-green-600 font-medium">From £2.50/kg</p>
                        </div>
                        <div className="border rounded-lg p-3">
                          <div className="flex justify-between items-start mb-1">
                            <p className="font-medium text-sm">Express Cargo UK</p>
                            <div className="flex gap-1">
                              {[1,2,3,4].map(i => (
                                <Star key={i} className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                              ))}
                              <Star className="h-3 w-3 text-gray-300" />
                            </div>
                          </div>
                          <p className="text-xs text-slate-600">Fast delivery • London</p>
                          <p className="text-xs text-green-600 font-medium">From £3.20/kg</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
                <div className="mt-6 text-center">
                  <Button 
                    onClick={handlePartnerMatchingClick}
                    disabled={isMatchingPartners}
                    className="bg-purple-600 hover:bg-purple-700 text-white"
                  >
                    <Users className="mr-2 h-4 w-4" />
                    {isMatchingPartners ? "Matching..." : "Find More Partners"}
                  </Button>
                </div>
              </DialogContent>
            </Dialog>

            <Dialog>
              <DialogTrigger asChild>
                <Card className="border-slate-200 hover:shadow-lg transition-shadow duration-300 cursor-pointer hover:border-orange-300">
                  <CardHeader className="text-center pb-4">
                    <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <TrendingUp className="h-6 w-6 text-orange-600" />
                    </div>
                    <CardTitle className="text-xl">Smart Roadmap</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-center mb-4">
                      Receive a personalized step-by-step roadmap with legal, tax, and operational checklists
                    </CardDescription>
                    <ul className="text-sm text-slate-600 space-y-2">
                      <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Custom timeline</li>
                      <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Progress tracking</li>
                      <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Expert guidance</li>
                    </ul>
                  </CardContent>
                </Card>
              </DialogTrigger>
              <DialogContent className="max-w-4xl w-full max-h-[80vh] overflow-y-auto">
                <DialogHeader>
                  <DialogTitle className="text-2xl font-bold text-center flex items-center justify-center gap-2">
                    <TrendingUp className="h-6 w-6 text-orange-600" />
                    Your UK Market Entry Roadmap
                  </DialogTitle>
                </DialogHeader>
                <div className="mt-6 space-y-4">
                  <div className="border-l-4 border-green-500 pl-4 bg-green-50 p-4 rounded-r">
                    <div className="flex items-center gap-2 mb-2">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                      <h3 className="font-semibold text-green-800">Phase 1: Legal Foundation (Weeks 1-2)</h3>
                    </div>
                    <ul className="text-sm text-green-700 space-y-1 ml-7">
                      <li>✓ Company incorporation (IN01 form)</li>
                      <li>✓ VAT registration</li>
                      <li>✓ Business bank account setup</li>
                      <li>✓ PAYE registration (if hiring)</li>
                    </ul>
                  </div>

                  <div className="border-l-4 border-blue-500 pl-4 bg-blue-50 p-4 rounded-r">
                    <div className="flex items-center gap-2 mb-2">
                      <Clock className="h-5 w-5 text-blue-600" />
                      <h3 className="font-semibold text-blue-800">Phase 2: Market Preparation (Weeks 3-6)</h3>
                    </div>
                    <ul className="text-sm text-blue-700 space-y-1 ml-7">
                      <li>• Product compliance & certification</li>
                      <li>• UK labeling requirements</li>
                      <li>• Insurance policies setup</li>
                      <li>• Distribution agreements</li>
                    </ul>
                  </div>

                  <div className="border-l-4 border-orange-500 pl-4 bg-orange-50 p-4 rounded-r">
                    <div className="flex items-center gap-2 mb-2">
                      <Target className="h-5 w-5 text-orange-600" />
                      <h3 className="font-semibold text-orange-800">Phase 3: Market Launch (Weeks 7-12)</h3>
                    </div>
                    <ul className="text-sm text-orange-700 space-y-1 ml-7">
                      <li>• First shipment & customs clearance</li>
                      <li>• Partner onboarding</li>
                      <li>• Marketing campaign launch</li>
                      <li>• Customer support setup</li>
                    </ul>
                  </div>

                  <div className="border-l-4 border-purple-500 pl-4 bg-purple-50 p-4 rounded-r">
                    <div className="flex items-center gap-2 mb-2">
                      <Award className="h-5 w-5 text-purple-600" />
                      <h3 className="font-semibold text-purple-800">Phase 4: Growth & Optimization (Months 4-6)</h3>
                    </div>
                    <ul className="text-sm text-purple-700 space-y-1 ml-7">
                      <li>• Performance analysis</li>
                      <li>• Market expansion planning</li>
                      <li>• Process optimization</li>
                      <li>• Scale-up strategy</li>
                    </ul>
                  </div>
                </div>
                <div className="mt-6 text-center">
                  <Button 
                    onClick={handleSmartRoadmapClick}
                    disabled={isGeneratingRoadmap}
                    className="bg-orange-600 hover:bg-orange-700 text-white"
                  >
                    <TrendingUp className="mr-2 h-4 w-4" />
                    {isGeneratingRoadmap ? "Creating..." : "Generate Detailed Plan"}
                  </Button>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </section>

      {/* Additional Features */}
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
            <Card className="border-slate-200 hover:shadow-lg transition-shadow duration-300 cursor-pointer hover:border-blue-300" onClick={handleComplianceClick}>
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

            <Card className="border-slate-200 hover:shadow-lg transition-shadow duration-300 cursor-pointer hover:border-green-300" onClick={handleSupportClick}>
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

            <Dialog>
              <DialogTrigger asChild>
                <Card className="border-slate-200 hover:shadow-lg transition-shadow duration-300 cursor-pointer hover:border-purple-300">
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
              </DialogTrigger>
              <DialogContent className="max-w-4xl w-full max-h-[80vh] overflow-y-auto">
                <DialogHeader>
                  <DialogTitle className="text-2xl font-bold text-center flex items-center justify-center gap-2">
                    <Target className="h-6 w-6 text-purple-600" />
                    Market Intelligence Dashboard
                  </DialogTitle>
                </DialogHeader>
                <div className="grid md:grid-cols-2 gap-6 mt-6">
                  <Card className="border-purple-200">
                    <CardHeader className="pb-3">
                      <CardTitle className="text-lg flex items-center gap-2">
                        <LineChart className="h-5 w-5 text-blue-600" />
                        Real-Time Market Data
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-slate-600">UK Food & Beverage Market</span>
                          <span className="text-green-600 font-semibold">↗ +12.3%</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-slate-600">Consumer Spending</span>
                          <span className="text-blue-600 font-semibold">£2.1B monthly</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-slate-600">Market Entry Cost</span>
                          <span className="text-orange-600 font-semibold">↓ -8.2%</span>
                        </div>
                        <div className="bg-blue-50 p-3 rounded-md">
                          <p className="text-xs text-blue-800">
                            <strong>Insight:</strong> Organic food demand increased 23% in London area this quarter
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-emerald-200">
                    <CardHeader className="pb-3">
                      <CardTitle className="text-lg flex items-center gap-2">
                        <Activity className="h-5 w-5 text-emerald-600" />
                        Competitive Intelligence
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-slate-600">Direct Competitors</span>
                          <span className="font-semibold">47 identified</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-slate-600">Avg. Price Point</span>
                          <span className="font-semibold">£15.50</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-slate-600">Market Gap Score</span>
                          <span className="text-green-600 font-semibold">8.4/10</span>
                        </div>
                        <div className="bg-emerald-50 p-3 rounded-md">
                          <p className="text-xs text-emerald-800">
                            <strong>Opportunity:</strong> 73% of competitors lack Turkish product variety
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-indigo-200">
                    <CardHeader className="pb-3">
                      <CardTitle className="text-lg flex items-center gap-2">
                        <PieChart className="h-5 w-5 text-indigo-600" />
                        Consumer Insights
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-slate-600">Target Demographics</span>
                          <span className="font-semibold">25-45 years</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-slate-600">Purchase Intent</span>
                          <span className="text-green-600 font-semibold">High (78%)</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-slate-600">Cultural Acceptance</span>
                          <span className="text-blue-600 font-semibold">Very Positive</span>
                        </div>
                        <div className="bg-indigo-50 p-3 rounded-md">
                          <p className="text-xs text-indigo-800">
                            <strong>Trend:</strong> Turkish cuisine popularity up 45% in major UK cities
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-orange-200">
                    <CardHeader className="pb-3">
                      <CardTitle className="text-lg flex items-center gap-2">
                        <TrendingUp className="h-5 w-5 text-orange-600" />
                        Market Timing
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-slate-600">Best Launch Window</span>
                          <span className="font-semibold">Mar-May 2024</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-slate-600">Seasonal Demand</span>
                          <span className="text-green-600 font-semibold">Peak Spring</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-slate-600">Optimal Regions</span>
                          <span className="font-semibold">London, Manchester</span>
                        </div>
                        <div className="bg-orange-50 p-3 rounded-md">
                          <p className="text-xs text-orange-800">
                            <strong>Recommendation:</strong> Launch in London first, expand to Manchester in Q3
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div className="mt-6 text-center">
                  <Button 
                    onClick={handleMarketIntelligenceClick}
                    className="bg-purple-600 hover:bg-purple-700 text-white"
                  >
                    <Activity className="mr-2 h-4 w-4" />
                    Start Market Analysis
                  </Button>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </section>

      {/* CTA Section */}
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

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <Link to="/" className="flex items-center space-x-2 mb-4">
                <Globe className="h-6 w-6 text-blue-400" />
                <span className="text-xl font-bold text-white">UK Bridge</span>
              </Link>
              <p className="text-slate-400">
                Empowering Turkish SMEs to expand successfully into the UK market through AI-powered insights and expert guidance.
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Platform</h4>
              <ul className="space-y-2">
                <li><Link to="/features" className="hover:text-white transition-colors">Features</Link></li>
                <li><Link to="/pricing" className="hover:text-white transition-colors">Pricing</Link></li>
                <li><Link to="/api" className="hover:text-white transition-colors">API</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Support</h4>
              <ul className="space-y-2">
                <li><Link to="/help" className="hover:text-white transition-colors">Help Center</Link></li>
                <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
                <li><Link to="/community" className="hover:text-white transition-colors">Community</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Legal</h4>
              <ul className="space-y-2">
                <li><Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
                <li><Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link></li>
                <li><Link to="/cookies" className="hover:text-white transition-colors">Cookie Policy</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 mt-8 pt-8 text-center">
            <p>&copy; 2024 UK Bridge. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Features;
