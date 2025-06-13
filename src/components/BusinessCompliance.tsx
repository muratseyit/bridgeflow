
import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Calendar, Building, AlertTriangle, CheckCircle, ExternalLink } from "lucide-react";
import { generateComplianceRecommendation, ComplianceRecommendation, ComplianceEvent } from "@/utils/complianceEngine";
import { checkCompanyHouseAvailability, getComplianceUpdates } from "@/utils/apiIntegrations";

interface BusinessComplianceProps {
  businessData: any;
}

const BusinessCompliance = ({ businessData }: BusinessComplianceProps) => {
  const [complianceData, setComplianceData] = useState<ComplianceRecommendation | null>(null);
  const [complianceUpdates, setComplianceUpdates] = useState<any[]>([]);
  const [checkingAvailability, setCheckingAvailability] = useState(false);
  const [nameAvailable, setNameAvailable] = useState<boolean | null>(null);

  useEffect(() => {
    if (businessData) {
      const recommendation = generateComplianceRecommendation(businessData);
      setComplianceData(recommendation);
      
      // Load compliance updates
      getComplianceUpdates('mock-company-number').then(setComplianceUpdates);
    }
  }, [businessData]);

  const handleCheckCompanyName = async () => {
    if (!businessData.companyName) return;
    
    setCheckingAvailability(true);
    try {
      const available = await checkCompanyHouseAvailability(businessData.companyName);
      setNameAvailable(available);
    } catch (error) {
      console.error('Error checking company name:', error);
    } finally {
      setCheckingAvailability(false);
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'bg-red-100 text-red-800';
      case 'medium': return 'bg-yellow-100 text-yellow-800';
      case 'low': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  if (!complianceData) {
    return <div>Loading compliance recommendations...</div>;
  }

  return (
    <div className="space-y-6">
      {/* AI Recommendation */}
      <Card className="border-blue-200 bg-blue-50">
        <CardHeader>
          <CardTitle className="flex items-center text-blue-700">
            <Building className="h-5 w-5 mr-2" />
            AI-Powered Company Structure Recommendation
          </CardTitle>
          <CardDescription>Based on your business profile and UK market analysis</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-lg text-blue-900">
                Recommended: {complianceData.recommendedCompanyType}
              </h3>
              <p className="text-blue-700 mt-1">{complianceData.reasoning}</p>
            </div>
            
            <div>
              <h4 className="font-medium text-blue-900 mb-2">Estimated Setup Cost</h4>
              <Badge variant="outline" className="text-blue-800 border-blue-300">
                {complianceData.estimatedSetupCost}
              </Badge>
            </div>

            <div className="flex items-center space-x-4">
              <Button onClick={handleCheckCompanyName} disabled={checkingAvailability}>
                {checkingAvailability ? 'Checking...' : 'Check Company Name Availability'}
              </Button>
              
              {nameAvailable !== null && (
                <div className="flex items-center">
                  {nameAvailable ? (
                    <div className="flex items-center text-green-600">
                      <CheckCircle className="h-4 w-4 mr-1" />
                      Available
                    </div>
                  ) : (
                    <div className="flex items-center text-red-600">
                      <AlertTriangle className="h-4 w-4 mr-1" />
                      Not Available
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Tax Obligations */}
      <Card>
        <CardHeader>
          <CardTitle>Tax Obligations & Registrations</CardTitle>
          <CardDescription>Required registrations and ongoing tax responsibilities</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-medium mb-3">Required Registrations</h4>
              <div className="space-y-2">
                {complianceData.requiredRegistrations.map((registration, index) => (
                  <div key={index} className="flex items-center justify-between p-2 border border-gray-200 rounded">
                    <span className="text-sm">{registration}</span>
                    <Button size="sm" variant="outline">
                      <ExternalLink className="h-3 w-3 mr-1" />
                      Apply
                    </Button>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="font-medium mb-3">Tax Obligations</h4>
              <div className="space-y-2">
                {complianceData.taxObligations.map((obligation, index) => (
                  <div key={index} className="p-2 bg-gray-50 rounded text-sm">
                    {obligation}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Compliance Calendar */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Calendar className="h-5 w-5 mr-2 text-blue-600" />
            Compliance Calendar
          </CardTitle>
          <CardDescription>Important deadlines and recurring obligations</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {complianceData.complianceCalendar.map((event, index) => (
              <div key={index} className="p-4 border border-gray-200 rounded-lg">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-medium">{event.title}</h4>
                  <Badge className={getPriorityColor(event.priority)}>
                    {event.priority}
                  </Badge>
                </div>
                <p className="text-sm text-gray-600 mb-2">{event.description}</p>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-500">Due: {event.deadline}</span>
                  <span className="text-gray-500">Frequency: {event.frequency}</span>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Live Compliance Updates */}
      {complianceUpdates.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <AlertTriangle className="h-5 w-5 mr-2 text-orange-600" />
              Live Compliance Updates
            </CardTitle>
            <CardDescription>Real-time updates from Companies House & HMRC</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {complianceUpdates.map((update, index) => (
                <div key={index} className="p-3 border-l-4 border-orange-400 bg-orange-50">
                  <h4 className="font-medium text-orange-900">{update.title}</h4>
                  <p className="text-sm text-orange-700 mt-1">{update.description}</p>
                  <p className="text-xs text-orange-600 mt-2">Due: {update.dueDate}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default BusinessCompliance;
