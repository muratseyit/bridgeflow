
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { FileText, Download, Clock, CheckCircle } from "lucide-react";
import { documentTemplates, generateDocument, DocumentTemplate } from "@/utils/documentGenerator";
import { useToast } from "@/hooks/use-toast";
import NDAGenerator from "./NDAGenerator";
import IN01FormGenerator from "./IN01FormGenerator";

interface DocumentGeneratorProps {
  businessData: any;
}

const DocumentGenerator = ({ businessData }: DocumentGeneratorProps) => {
  const [generatedDocuments, setGeneratedDocuments] = useState<any[]>([]);
  const { toast } = useToast();

  const handleDocumentGenerated = (document: any) => {
    setGeneratedDocuments(prev => [...prev, document]);
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'legal': return 'bg-blue-100 text-blue-800';
      case 'tax': return 'bg-red-100 text-red-800';
      case 'business': return 'bg-green-100 text-green-800';
      case 'compliance': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6">
      {/* Generated Documents */}
      {generatedDocuments.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <CheckCircle className="h-5 w-5 mr-2 text-green-600" />
              Generated Documents
            </CardTitle>
            <CardDescription>Your recently generated documents</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {generatedDocuments.map((doc, index) => (
                <div key={index} className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <FileText className="h-5 w-5 text-blue-600" />
                    <div>
                      <p className="font-medium">{doc.templateName}</p>
                      <p className="text-sm text-gray-500">Generated {new Date(doc.generatedAt).toLocaleString()}</p>
                    </div>
                  </div>
                  <Button size="sm" variant="outline">
                    <Download className="h-4 w-4 mr-2" />
                    Download PDF
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Document Generation Tabs */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <FileText className="h-5 w-5 mr-2 text-blue-600" />
            Document Generator
          </CardTitle>
          <CardDescription>Generate essential UK business documents with enhanced functionality</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="featured" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="featured">Featured</TabsTrigger>
              <TabsTrigger value="all">All Templates</TabsTrigger>
              <TabsTrigger value="custom">Custom Forms</TabsTrigger>
            </TabsList>

            <TabsContent value="featured" className="space-y-6">
              <div className="grid gap-6">
                <NDAGenerator 
                  businessData={businessData} 
                  onGenerated={handleDocumentGenerated}
                />
                <IN01FormGenerator 
                  businessData={businessData} 
                  onGenerated={handleDocumentGenerated}
                />
              </div>
            </TabsContent>

            <TabsContent value="all" className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                {documentTemplates.map((template) => (
                  <div key={template.id} className="p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="font-semibold text-gray-900">{template.name}</h3>
                      <Badge className={getTypeColor(template.type)}>
                        {template.type}
                      </Badge>
                    </div>
                    <p className="text-sm text-gray-600 mb-4">{template.description}</p>
                    
                    <Button size="sm" className="w-full" variant="outline">
                      Quick Generate
                    </Button>
                  </div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="custom" className="space-y-4">
              <div className="text-center py-8">
                <FileText className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Custom Document Builder</h3>
                <p className="text-gray-600 mb-4">Create custom documents tailored to your specific needs</p>
                <Button>
                  Start Custom Builder
                </Button>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};

export default DocumentGenerator;
