
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { FileText, Download, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface NDAGeneratorProps {
  businessData: any;
  onGenerated: (document: any) => void;
}

const NDAGenerator = ({ businessData, onGenerated }: NDAGeneratorProps) => {
  const [ndaData, setNdaData] = useState({
    partnerName: "",
    partnerType: "individual",
    effectiveDate: new Date().toISOString().split('T')[0],
    purpose: "",
    duration: "2",
    governingLaw: "England and Wales",
    returnPeriod: "30"
  });
  const [generating, setGenerating] = useState(false);
  const { toast } = useToast();

  const handleGenerate = async () => {
    if (!ndaData.partnerName || !ndaData.purpose) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    setGenerating(true);

    try {
      await new Promise(resolve => setTimeout(resolve, 2000));

      const document = {
        templateId: 'nda',
        templateName: 'Non-Disclosure Agreement (NDA)',
        generatedAt: new Date().toISOString(),
        content: generateNDAContent(),
        downloadUrl: `/documents/nda-${Date.now()}.pdf`,
        metadata: ndaData
      };

      onGenerated(document);

      toast({
        title: "NDA Generated",
        description: "Your Non-Disclosure Agreement has been successfully generated.",
      });

      // Reset form
      setNdaData({
        partnerName: "",
        partnerType: "individual",
        effectiveDate: new Date().toISOString().split('T')[0],
        purpose: "",
        duration: "2",
        governingLaw: "England and Wales",
        returnPeriod: "30"
      });
    } catch (error) {
      toast({
        title: "Generation Failed",
        description: "Failed to generate NDA. Please try again.",
        variant: "destructive",
      });
    } finally {
      setGenerating(false);
    }
  };

  const generateNDAContent = () => {
    const companyName = businessData.companyName || '[COMPANY NAME]';
    
    return `
NON-DISCLOSURE AGREEMENT

This Non-Disclosure Agreement ("Agreement") is entered into on ${new Date(ndaData.effectiveDate).toLocaleDateString('en-GB')} between:

DISCLOSING PARTY:
${companyName}
[Company Registration Number: [NUMBER]]
[Registered Office Address]

RECEIVING PARTY:
${ndaData.partnerName}
${ndaData.partnerType === 'company' ? '[Company Registration Number: [NUMBER]]' : '[Address]'}

1. PURPOSE
The purpose of this Agreement is to facilitate discussions regarding: ${ndaData.purpose}

2. CONFIDENTIAL INFORMATION
For the purposes of this Agreement, "Confidential Information" means all information disclosed by the Disclosing Party to the Receiving Party, whether orally, in writing, or in any other form.

3. OBLIGATIONS OF RECEIVING PARTY
The Receiving Party agrees to:
a) Hold all Confidential Information in strict confidence
b) Not disclose any Confidential Information to third parties
c) Use Confidential Information solely for the agreed purpose
d) Return or destroy all Confidential Information within ${ndaData.returnPeriod} days of request

4. TERM
This Agreement shall remain in effect for ${ndaData.duration} years from the date of execution.

5. GOVERNING LAW
This Agreement shall be governed by the laws of ${ndaData.governingLaw}.

6. REMEDIES
The Receiving Party acknowledges that breach of this Agreement may cause irreparable harm to the Disclosing Party, and that monetary damages may be inadequate. Therefore, the Disclosing Party shall be entitled to seek injunctive relief and other equitable remedies.

IN WITNESS WHEREOF, the parties have executed this Agreement as of the date first written above.

DISCLOSING PARTY:                    RECEIVING PARTY:

_____________________               _____________________
${companyName}                      ${ndaData.partnerName}
Name: [NAME]                        Name: [NAME]
Title: [TITLE]                      Title: [TITLE]
Date: _______________               Date: _______________
    `;
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center">
          <FileText className="h-5 w-5 mr-2 text-blue-600" />
          NDA Generator
        </CardTitle>
        <CardDescription>
          Generate a customized Non-Disclosure Agreement for your business
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="partnerName">Partner Name *</Label>
            <Input
              id="partnerName"
              value={ndaData.partnerName}
              onChange={(e) => setNdaData(prev => ({ ...prev, partnerName: e.target.value }))}
              placeholder="Enter partner/company name"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="partnerType">Partner Type</Label>
            <Select value={ndaData.partnerType} onValueChange={(value) => setNdaData(prev => ({ ...prev, partnerType: value }))}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="individual">Individual</SelectItem>
                <SelectItem value="company">Company</SelectItem>
                <SelectItem value="partnership">Partnership</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="effectiveDate">Effective Date</Label>
            <Input
              id="effectiveDate"
              type="date"
              value={ndaData.effectiveDate}
              onChange={(e) => setNdaData(prev => ({ ...prev, effectiveDate: e.target.value }))}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="duration">Duration (years)</Label>
            <Select value={ndaData.duration} onValueChange={(value) => setNdaData(prev => ({ ...prev, duration: value }))}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1">1 year</SelectItem>
                <SelectItem value="2">2 years</SelectItem>
                <SelectItem value="3">3 years</SelectItem>
                <SelectItem value="5">5 years</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="purpose">Purpose of Disclosure *</Label>
          <Textarea
            id="purpose"
            value={ndaData.purpose}
            onChange={(e) => setNdaData(prev => ({ ...prev, purpose: e.target.value }))}
            placeholder="Describe the purpose of sharing confidential information..."
            rows={3}
          />
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="governingLaw">Governing Law</Label>
            <Select value={ndaData.governingLaw} onValueChange={(value) => setNdaData(prev => ({ ...prev, governingLaw: value }))}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="England and Wales">England and Wales</SelectItem>
                <SelectItem value="Scotland">Scotland</SelectItem>
                <SelectItem value="Northern Ireland">Northern Ireland</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="returnPeriod">Return Period (days)</Label>
            <Select value={ndaData.returnPeriod} onValueChange={(value) => setNdaData(prev => ({ ...prev, returnPeriod: value }))}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="7">7 days</SelectItem>
                <SelectItem value="14">14 days</SelectItem>
                <SelectItem value="30">30 days</SelectItem>
                <SelectItem value="60">60 days</SelectItem>
              </SelectContent>
            </Select>
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
              Generating NDA...
            </>
          ) : (
            <>
              <FileText className="h-4 w-4 mr-2" />
              Generate NDA
            </>
          )}
        </Button>
      </CardContent>
    </Card>
  );
};

export default NDAGenerator;
