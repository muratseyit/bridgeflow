
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Progress } from "@/components/ui/progress";
import { ArrowLeft, ArrowRight, Building, Users, Globe, FileText } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

interface BusinessData {
  companyName: string;
  industry: string;
  companySize: string;
  yearEstablished: string;
  website: string;
  description: string;
  products: string;
  currentMarkets: string[];
  annualRevenue: string;
  digitalPresence: string[];
  hasOnlineStore: boolean;
  hasEcommercePlatform: boolean;
  hasEnglishWebsite: boolean;
  regulatoryCompliance: string[];
  qualityCertifications: string[];
  targetUKRegions: string[];
  businessGoals: string;
  timeline: string;
  budget: string;
}

const Onboarding = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [businessData, setBusinessData] = useState<BusinessData>({
    companyName: "",
    industry: "",
    companySize: "",
    yearEstablished: "",
    website: "",
    description: "",
    products: "",
    currentMarkets: [],
    annualRevenue: "",
    digitalPresence: [],
    hasOnlineStore: false,
    hasEcommercePlatform: false,
    hasEnglishWebsite: false,
    regulatoryCompliance: [],
    qualityCertifications: [],
    targetUKRegions: [],
    businessGoals: "",
    timeline: "",
    budget: ""
  });

  const { toast } = useToast();
  const navigate = useNavigate();

  const totalSteps = 4;
  const progress = (currentStep / totalSteps) * 100;

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    } else {
      // Submit form and navigate to dashboard
      handleSubmit();
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = () => {
    console.log("Submitting business data:", businessData);
    localStorage.setItem('businessData', JSON.stringify(businessData));
    toast({
      title: "Analysis Complete",
      description: "Your marketability score has been calculated. Redirecting to dashboard...",
    });
    setTimeout(() => {
      navigate('/dashboard');
    }, 2000);
  };

  const updateBusinessData = (field: keyof BusinessData, value: any) => {
    setBusinessData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <Building className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-slate-900">Company Information</h2>
              <p className="text-slate-600">Tell us about your business</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="companyName">Company Name *</Label>
                <Input
                  id="companyName"
                  value={businessData.companyName}
                  onChange={(e) => updateBusinessData('companyName', e.target.value)}
                  placeholder="Enter your company name"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="industry">Industry *</Label>
                <Select value={businessData.industry} onValueChange={(value) => updateBusinessData('industry', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select your industry" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="technology">Technology</SelectItem>
                    <SelectItem value="manufacturing">Manufacturing</SelectItem>
                    <SelectItem value="retail">Retail & E-commerce</SelectItem>
                    <SelectItem value="food-beverage">Food & Beverage</SelectItem>
                    <SelectItem value="textiles">Textiles & Fashion</SelectItem>
                    <SelectItem value="automotive">Automotive</SelectItem>
                    <SelectItem value="healthcare">Healthcare</SelectItem>
                    <SelectItem value="construction">Construction</SelectItem>
                    <SelectItem value="services">Professional Services</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="companySize">Company Size *</Label>
                <Select value={businessData.companySize} onValueChange={(value) => updateBusinessData('companySize', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select company size" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1-10">1-10 employees</SelectItem>
                    <SelectItem value="11-50">11-50 employees</SelectItem>
                    <SelectItem value="51-250">51-250 employees</SelectItem>
                    <SelectItem value="250+">250+ employees</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="yearEstablished">Year Established *</Label>
                <Input
                  id="yearEstablished"
                  type="number"
                  value={businessData.yearEstablished}
                  onChange={(e) => updateBusinessData('yearEstablished', e.target.value)}
                  placeholder="e.g., 2015"
                />
              </div>
              
              <div className="space-y-2 md:col-span-2">
                <Label htmlFor="website">Website URL</Label>
                <Input
                  id="website"
                  value={businessData.website}
                  onChange={(e) => updateBusinessData('website', e.target.value)}
                  placeholder="https://www.yourcompany.com"
                />
              </div>
              
              <div className="space-y-2 md:col-span-2">
                <Label htmlFor="description">Business Description *</Label>
                <Textarea
                  id="description"
                  value={businessData.description}
                  onChange={(e) => updateBusinessData('description', e.target.value)}
                  placeholder="Describe your business, what you do, and your unique value proposition"
                  rows={4}
                />
              </div>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <Users className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-slate-900">Products & Markets</h2>
              <p className="text-slate-600">Tell us about your offerings and current reach</p>
            </div>
            
            <div className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="products">Products/Services *</Label>
                <Textarea
                  id="products"
                  value={businessData.products}
                  onChange={(e) => updateBusinessData('products', e.target.value)}
                  placeholder="Describe your main products or services in detail"
                  rows={4}
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="annualRevenue">Annual Revenue (TL) *</Label>
                <Select value={businessData.annualRevenue} onValueChange={(value) => updateBusinessData('annualRevenue', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select revenue range" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="0-500k">0 - 500,000 TL</SelectItem>
                    <SelectItem value="500k-2m">500,000 - 2,000,000 TL</SelectItem>
                    <SelectItem value="2m-10m">2,000,000 - 10,000,000 TL</SelectItem>
                    <SelectItem value="10m-50m">10,000,000 - 50,000,000 TL</SelectItem>
                    <SelectItem value="50m+">50,000,000+ TL</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-3">
                <Label>Current Markets (Select all that apply)</Label>
                <div className="grid md:grid-cols-3 gap-3">
                  {['Turkey', 'Germany', 'France', 'Netherlands', 'Italy', 'Spain', 'Middle East', 'North Africa', 'Other EU'].map((market) => (
                    <div key={market} className="flex items-center space-x-2">
                      <Checkbox
                        id={market}
                        checked={businessData.currentMarkets.includes(market)}
                        onCheckedChange={(checked) => {
                          if (checked) {
                            updateBusinessData('currentMarkets', [...businessData.currentMarkets, market]);
                          } else {
                            updateBusinessData('currentMarkets', businessData.currentMarkets.filter(m => m !== market));
                          }
                        }}
                      />
                      <Label htmlFor={market} className="text-sm">{market}</Label>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <Globe className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-slate-900">Digital Readiness</h2>
              <p className="text-slate-600">Assess your digital capabilities and compliance</p>
            </div>
            
            <div className="space-y-6">
              <div className="space-y-3">
                <Label>Digital Presence (Select all that apply)</Label>
                <div className="grid md:grid-cols-2 gap-3">
                  {['Website', 'Social Media', 'Online Store', 'Mobile App', 'SEO Optimized', 'Google Ads', 'Email Marketing', 'CRM System'].map((presence) => (
                    <div key={presence} className="flex items-center space-x-2">
                      <Checkbox
                        id={presence}
                        checked={businessData.digitalPresence.includes(presence)}
                        onCheckedChange={(checked) => {
                          if (checked) {
                            updateBusinessData('digitalPresence', [...businessData.digitalPresence, presence]);
                          } else {
                            updateBusinessData('digitalPresence', businessData.digitalPresence.filter(p => p !== presence));
                          }
                        }}
                      />
                      <Label htmlFor={presence} className="text-sm">{presence}</Label>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="space-y-4">
                <Label>Digital Capabilities</Label>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="hasOnlineStore"
                      checked={businessData.hasOnlineStore}
                      onCheckedChange={(checked) => updateBusinessData('hasOnlineStore', checked)}
                    />
                    <Label htmlFor="hasOnlineStore">Do you have an online store?</Label>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="hasEcommercePlatform"
                      checked={businessData.hasEcommercePlatform}
                      onCheckedChange={(checked) => updateBusinessData('hasEcommercePlatform', checked)}
                    />
                    <Label htmlFor="hasEcommercePlatform">Do you use an e-commerce platform? (Shopify, WooCommerce, etc.)</Label>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="hasEnglishWebsite"
                      checked={businessData.hasEnglishWebsite}
                      onCheckedChange={(checked) => updateBusinessData('hasEnglishWebsite', checked)}
                    />
                    <Label htmlFor="hasEnglishWebsite">Is your website available in English?</Label>
                  </div>
                </div>
              </div>
              
              <div className="space-y-3">
                <Label>Regulatory Compliance & Certifications</Label>
                <div className="grid md:grid-cols-2 gap-3">
                  {['ISO 9001', 'ISO 14001', 'CE Marking', 'GDPR Compliant', 'FDA Approved', 'Halal Certified', 'Organic Certified', 'Fair Trade'].map((cert) => (
                    <div key={cert} className="flex items-center space-x-2">
                      <Checkbox
                        id={cert}
                        checked={businessData.qualityCertifications.includes(cert)}
                        onCheckedChange={(checked) => {
                          if (checked) {
                            updateBusinessData('qualityCertifications', [...businessData.qualityCertifications, cert]);
                          } else {
                            updateBusinessData('qualityCertifications', businessData.qualityCertifications.filter(c => c !== cert));
                          }
                        }}
                      />
                      <Label htmlFor={cert} className="text-sm">{cert}</Label>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <FileText className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-slate-900">UK Market Goals</h2>
              <p className="text-slate-600">Define your UK expansion objectives</p>
            </div>
            
            <div className="space-y-6">
              <div className="space-y-3">
                <Label>Target UK Regions (Select all that apply)</Label>
                <div className="grid md:grid-cols-2 gap-3">
                  {['London', 'Manchester', 'Birmingham', 'Leeds', 'Glasgow', 'Edinburgh', 'Bristol', 'Liverpool', 'Newcastle', 'All UK'].map((region) => (
                    <div key={region} className="flex items-center space-x-2">
                      <Checkbox
                        id={region}
                        checked={businessData.targetUKRegions.includes(region)}
                        onCheckedChange={(checked) => {
                          if (checked) {
                            updateBusinessData('targetUKRegions', [...businessData.targetUKRegions, region]);
                          } else {
                            updateBusinessData('targetUKRegions', businessData.targetUKRegions.filter(r => r !== region));
                          }
                        }}
                      />
                      <Label htmlFor={region} className="text-sm">{region}</Label>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="timeline">Expected Timeline for UK Launch *</Label>
                <Select value={businessData.timeline} onValueChange={(value) => updateBusinessData('timeline', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select timeline" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="3-months">Within 3 months</SelectItem>
                    <SelectItem value="6-months">3-6 months</SelectItem>
                    <SelectItem value="12-months">6-12 months</SelectItem>
                    <SelectItem value="12-months+">More than 12 months</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="budget">Initial Investment Budget (GBP) *</Label>
                <Select value={businessData.budget} onValueChange={(value) => updateBusinessData('budget', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select budget range" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="0-10k">£0 - £10,000</SelectItem>
                    <SelectItem value="10k-50k">£10,000 - £50,000</SelectItem>
                    <SelectItem value="50k-100k">£50,000 - £100,000</SelectItem>
                    <SelectItem value="100k-500k">£100,000 - £500,000</SelectItem>
                    <SelectItem value="500k+">£500,000+</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="businessGoals">Business Goals in UK Market *</Label>
                <Textarea
                  id="businessGoals"
                  value={businessData.businessGoals}
                  onChange={(e) => updateBusinessData('businessGoals', e.target.value)}
                  placeholder="Describe your specific goals for the UK market (e.g., revenue targets, customer acquisition, partnerships)"
                  rows={4}
                />
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <Link to="/" className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-4">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Link>
          <h1 className="text-3xl font-bold text-slate-900 mb-2">UK Market Entry Assessment</h1>
          <p className="text-slate-600">Complete this assessment to get your AI-powered marketability score</p>
        </div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between text-sm text-slate-600 mb-2">
            <span>Step {currentStep} of {totalSteps}</span>
            <span>{Math.round(progress)}% Complete</span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>

        {/* Form Card */}
        <Card className="border-slate-200 shadow-lg">
          <CardContent className="p-8">
            {renderStep()}
            
            {/* Navigation Buttons */}
            <div className="flex justify-between mt-8">
              <Button
                variant="outline"
                onClick={handlePrevious}
                disabled={currentStep === 1}
                className="flex items-center"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Previous
              </Button>
              
              <Button
                onClick={handleNext}
                className="bg-blue-600 hover:bg-blue-700 text-white flex items-center"
              >
                {currentStep === totalSteps ? 'Generate Score' : 'Next'}
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Onboarding;
