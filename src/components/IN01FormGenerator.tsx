
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { FileText, Download, Clock, Plus, Trash2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface IN01FormGeneratorProps {
  businessData: any;
  onGenerated: (document: any) => void;
}

interface Director {
  name: string;
  address: string;
  dateOfBirth: string;
  nationality: string;
  occupation: string;
  isAlsoSecretary: boolean;
}

const IN01FormGenerator = ({ businessData, onGenerated }: IN01FormGeneratorProps) => {
  const [formData, setFormData] = useState({
    companyName: businessData.companyName || "",
    companyType: "private-limited",
    registeredAddress: "",
    shareCapital: "100",
    ordinaryShares: "100",
    shareValue: "1",
    sicCode: "",
    businessActivity: businessData.industry || "",
    hasSecretary: false,
    secretaryName: "",
    secretaryAddress: ""
  });

  const [directors, setDirectors] = useState<Director[]>([
    {
      name: "",
      address: "",
      dateOfBirth: "",
      nationality: "British",
      occupation: "",
      isAlsoSecretary: false
    }
  ]);

  const [generating, setGenerating] = useState(false);
  const { toast } = useToast();

  const addDirector = () => {
    setDirectors([...directors, {
      name: "",
      address: "",
      dateOfBirth: "",
      nationality: "British",
      occupation: "",
      isAlsoSecretary: false
    }]);
  };

  const removeDirector = (index: number) => {
    if (directors.length > 1) {
      setDirectors(directors.filter((_, i) => i !== index));
    }
  };

  const updateDirector = (index: number, field: keyof Director, value: string | boolean) => {
    const updated = directors.map((director, i) => 
      i === index ? { ...director, [field]: value } : director
    );
    setDirectors(updated);
  };

  const handleGenerate = async () => {
    if (!formData.companyName || !formData.registeredAddress || directors.some(d => !d.name)) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    setGenerating(true);

    try {
      await new Promise(resolve => setTimeout(resolve, 3000));

      const document = {
        templateId: 'company-formation',
        templateName: 'Companies House IN01 Form',
        generatedAt: new Date().toISOString(),
        content: generateIN01Content(),
        downloadUrl: `/documents/in01-${Date.now()}.pdf`,
        metadata: { formData, directors }
      };

      onGenerated(document);

      toast({
        title: "IN01 Form Generated",
        description: "Your Companies House registration form has been successfully generated.",
      });
    } catch (error) {
      toast({
        title: "Generation Failed",
        description: "Failed to generate IN01 form. Please try again.",
        variant: "destructive",
      });
    } finally {
      setGenerating(false);
    }
  };

  const generateIN01Content = () => {
    return `
COMPANIES HOUSE - FORM IN01
APPLICATION TO REGISTER A COMPANY

SECTION 1: COMPANY DETAILS
Company Name: ${formData.companyName}
Company Type: ${formData.companyType === 'private-limited' ? 'Private company limited by shares' : formData.companyType}

SECTION 2: REGISTERED OFFICE ADDRESS
${formData.registeredAddress}

SECTION 3: STATEMENT OF CAPITAL
Currency: GBP
Total Number of Shares: ${formData.ordinaryShares}
Aggregate Nominal Value: £${Number(formData.ordinaryShares) * Number(formData.shareValue)}

Share Class: Ordinary
Number of Shares: ${formData.ordinaryShares}
Aggregate Nominal Value: £${Number(formData.ordinaryShares) * Number(formData.shareValue)}
Prescribed Particulars: Each share carries equal voting rights

SECTION 4: STATEMENT OF PROPOSED OFFICERS

DIRECTORS:
${directors.map((director, index) => `
Director ${index + 1}:
Name: ${director.name}
Address: ${director.address}
Date of Birth: ${director.dateOfBirth}
Nationality: ${director.nationality}
Occupation: ${director.occupation}
${director.isAlsoSecretary ? 'Also appointed as Company Secretary' : ''}
`).join('')}

${formData.hasSecretary && !directors.some(d => d.isAlsoSecretary) ? `
COMPANY SECRETARY:
Name: ${formData.secretaryName}
Address: ${formData.secretaryAddress}
` : ''}

SECTION 5: STATEMENT OF COMPLIANCE
The company will comply with all the requirements of the Companies Act 2006.

SECTION 6: BUSINESS ACTIVITY
SIC Code: ${formData.sicCode || '[TO BE COMPLETED]'}
Business Activity: ${formData.businessActivity}

This form must be signed by each director and submitted to Companies House with the appropriate fee.

Generated on: ${new Date().toLocaleDateString('en-GB')}
    `;
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center">
          <FileText className="h-5 w-5 mr-2 text-purple-600" />
          Companies House IN01 Form
        </CardTitle>
        <CardDescription>
          Generate your company registration application for Companies House
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Company Details */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Company Details</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="companyName">Company Name *</Label>
              <Input
                id="companyName"
                value={formData.companyName}
                onChange={(e) => setFormData(prev => ({ ...prev, companyName: e.target.value }))}
                placeholder="Enter company name"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="companyType">Company Type</Label>
              <Select value={formData.companyType} onValueChange={(value) => setFormData(prev => ({ ...prev, companyType: value }))}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="private-limited">Private company limited by shares</SelectItem>
                  <SelectItem value="private-guarantee">Private company limited by guarantee</SelectItem>
                  <SelectItem value="public-limited">Public limited company</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="registeredAddress">Registered Office Address *</Label>
            <Textarea
              id="registeredAddress"
              value={formData.registeredAddress}
              onChange={(e) => setFormData(prev => ({ ...prev, registeredAddress: e.target.value }))}
              placeholder="Enter full registered office address including postcode"
              rows={3}
            />
          </div>
        </div>

        {/* Share Capital */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Share Capital</h3>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="space-y-2">
              <Label htmlFor="ordinaryShares">Number of Shares</Label>
              <Input
                id="ordinaryShares"
                type="number"
                value={formData.ordinaryShares}
                onChange={(e) => setFormData(prev => ({ ...prev, ordinaryShares: e.target.value }))}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="shareValue">Value per Share (£)</Label>
              <Input
                id="shareValue"
                type="number"
                step="0.01"
                value={formData.shareValue}
                onChange={(e) => setFormData(prev => ({ ...prev, shareValue: e.target.value }))}
              />
            </div>
            <div className="space-y-2">
              <Label>Total Value</Label>
              <Input
                value={`£${(Number(formData.ordinaryShares) * Number(formData.shareValue)).toFixed(2)}`}
                disabled
              />
            </div>
          </div>
        </div>

        {/* Directors */}
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-semibold">Directors</h3>
            <Button type="button" variant="outline" size="sm" onClick={addDirector}>
              <Plus className="h-4 w-4 mr-2" />
              Add Director
            </Button>
          </div>
          
          {directors.map((director, index) => (
            <Card key={index} className="p-4">
              <div className="flex justify-between items-start mb-4">
                <h4 className="font-medium">Director {index + 1}</h4>
                {directors.length > 1 && (
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    onClick={() => removeDirector(index)}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                )}
              </div>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Full Name *</Label>
                  <Input
                    value={director.name}
                    onChange={(e) => updateDirector(index, 'name', e.target.value)}
                    placeholder="Enter full name"
                  />
                </div>
                <div className="space-y-2">
                  <Label>Date of Birth</Label>
                  <Input
                    type="date"
                    value={director.dateOfBirth}
                    onChange={(e) => updateDirector(index, 'dateOfBirth', e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label>Nationality</Label>
                  <Input
                    value={director.nationality}
                    onChange={(e) => updateDirector(index, 'nationality', e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label>Occupation</Label>
                  <Input
                    value={director.occupation}
                    onChange={(e) => updateDirector(index, 'occupation', e.target.value)}
                    placeholder="Enter occupation"
                  />
                </div>
              </div>
              
              <div className="mt-4 space-y-2">
                <Label>Address</Label>
                <Textarea
                  value={director.address}
                  onChange={(e) => updateDirector(index, 'address', e.target.value)}
                  placeholder="Enter full address including postcode"
                  rows={2}
                />
              </div>
              
              <div className="mt-4 flex items-center space-x-2">
                <Checkbox
                  id={`secretary-${index}`}
                  checked={director.isAlsoSecretary}
                  onCheckedChange={(checked) => updateDirector(index, 'isAlsoSecretary', checked as boolean)}
                />
                <Label htmlFor={`secretary-${index}`}>Also appoint as Company Secretary</Label>
              </div>
            </Card>
          ))}
        </div>

        {/* Business Activity */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Business Activity</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="sicCode">SIC Code (optional)</Label>
              <Input
                id="sicCode"
                value={formData.sicCode}
                onChange={(e) => setFormData(prev => ({ ...prev, sicCode: e.target.value }))}
                placeholder="e.g., 62020"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="businessActivity">Business Activity</Label>
              <Input
                id="businessActivity"
                value={formData.businessActivity}
                onChange={(e) => setFormData(prev => ({ ...prev, businessActivity: e.target.value }))}
                placeholder="Describe your business activity"
              />
            </div>
          </div>
        </div>

        <Button 
          onClick={handleGenerate}
          disabled={generating}
          className="w-full"
        >
          {generating ? (
            <>
              <Clock className="h-4 w-4 mr-2 animate-spin" />
              Generating IN01 Form...
            </>
          ) : (
            <>
              <FileText className="h-4 w-4 mr-2" />
              Generate IN01 Form
            </>
          )}
        </Button>
      </CardContent>
    </Card>
  );
};

export default IN01FormGenerator;
