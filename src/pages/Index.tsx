
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, BarChart3, FileText, Users, Zap, CheckCircle, Globe, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <Globe className="h-8 w-8 text-blue-600" />
              <span className="text-2xl font-bold text-slate-900">UK Bridge</span>
            </div>
            <nav className="hidden md:flex space-x-8">
              <Link to="/features" className="text-slate-600 hover:text-slate-900 transition-colors">Features</Link>
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
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-blue-100 text-blue-800 mb-6">
              <Zap className="h-4 w-4 mr-2" />
              AI-Powered UK Market Entry
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
            Expand Your Turkish Business to the 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-600"> UK Market</span>
          </h1>
          <p className="text-xl text-slate-600 mb-10 max-w-3xl mx-auto leading-relaxed">
            Get your AI-powered Marketability Score, receive a custom UK-readiness roadmap, and access verified partners 
            to seamlessly launch your business in the United Kingdom.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/onboarding">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg">
                Start Your UK Journey
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Button variant="outline" size="lg" className="px-8 py-4 text-lg border-slate-300">
              Watch Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Everything You Need for UK Market Entry
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Our AI-powered platform guides you through every step of expanding to the UK market
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
                <CardDescription className="text-center">
                  Get instant analysis of your business potential in the UK market with our advanced AI scoring engine
                </CardDescription>
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
                <CardDescription className="text-center">
                  Automatically generate contracts, NDAs, VAT forms, and other essential UK business documents
                </CardDescription>
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
                <CardDescription className="text-center">
                  Connect with verified UK accountants, legal advisors, and logistics providers tailored to your needs
                </CardDescription>
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
                <CardDescription className="text-center">
                  Receive a personalized step-by-step roadmap with legal, tax, and operational checklists
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              How It Works
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Simple steps to get your business UK-ready
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Enter Business Details</h3>
              <p className="text-slate-600">
                Complete our comprehensive onboarding form with your business information, products, and goals
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Get AI Analysis</h3>
              <p className="text-slate-600">
                Our AI engine analyzes your marketability and generates your UK readiness score instantly
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Execute Your Plan</h3>
              <p className="text-slate-600">
                Follow your personalized roadmap, generate documents, and connect with UK partners
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-green-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Expand to the UK?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join hundreds of Turkish businesses successfully entering the UK market with our AI-powered platform
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/onboarding">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-slate-100 px-8 py-4 text-lg">
                Start Free Analysis
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg">
              Schedule Consultation
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Globe className="h-6 w-6 text-blue-400" />
                <span className="text-xl font-bold text-white">UK Bridge</span>
              </div>
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

export default Index;
