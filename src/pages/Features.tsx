
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { ArrowRight, BarChart3, FileText, Users, Zap, CheckCircle, Globe, TrendingUp, Shield, Clock, Target, Award, Play, Search } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Features = () => {
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
            <Card className="border-slate-200 hover:shadow-lg transition-shadow duration-300">
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

            <Card className="border-slate-200 hover:shadow-lg transition-shadow duration-300">
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

            <Card className="border-slate-200 hover:shadow-lg transition-shadow duration-300">
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

            <Card className="border-slate-200 hover:shadow-lg transition-shadow duration-300">
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

            <Card className="border-slate-200 hover:shadow-lg transition-shadow duration-300">
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
