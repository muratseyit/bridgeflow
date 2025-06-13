
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { FileText, Download, Clock, CheckCircle } from "lucide-react";
import { documentTemplates, generateDocument, DocumentTemplate } from "@/utils/documentGenerator";
import { useToast } from "@/hooks/use-toast";

interface DocumentGeneratorProps {
  businessData: any;
}

const DocumentGenerator = ({ businessData }: DocumentGeneratorProps) => {
  const [selectedTemplate, setSelectedTemplate] = useState<DocumentTemplate | null>(null);
  const [customFields, setCustomFields] = useState<{ [key: string]: string }>({});
  const [generatingDocument, setGeneratingDocument] = useState(false);
  const [generatedDocuments, setGeneratedDocuments] = useState<any[]>([]);
  const { toast } = useToast();

  const handleGenerateDocument = async () => {
    if (!selectedTemplate) return;
    
    setGeneratingDocument(true);
    
    try {
      // Simulate document generation
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      const document = generateDocument(selectedTemplate.id, businessData, customFields);
      setGeneratedDocuments(prev => [...prev, document]);
      
      toast({
        title: "Document Generated",
        description: `${selectedTemplate.name} has been successfully generated.`,
      });
      
      setSelectedTemplate(null);
      setCustomFields({});
    } catch (error) {
      toast({
        title: "Generation Failed",
        description: "Failed to generate document. Please try again.",
        variant: "destructive",
      });
    } finally {
      setGeneratingDocument(false);
    }
  };

  const updateCustomField = (field: string, value: string) => {
    setCustomFields(prev => ({ ...prev, [field]: value }));
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

      {/* Document Templates */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <FileText className="h-5 w-5 mr-2 text-blue-600" />
            Document Templates
          </CardTitle>
          <CardDescription>Generate essential UK business documents</CardDescription>
        </CardHeader>
        <CardContent>
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
                
                <Dialog>
                  <DialogTrigger asChild>
                    <Button 
                      size="sm" 
                      className="w-full"
                      onClick={() => setSelectedTemplate(template)}
                    >
                      Generate Document
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-md">
                    <DialogHeader>
                      <DialogTitle>Generate {template.name}</DialogTitle>
                      <DialogDescription>
                        Fill in the required information to generate your document
                      </DialogDescription>
                    </DialogHeader>
                    
                    {selectedTemplate?.id === template.id && (
                      <div className="space-y-4">
                        {template.requiredFields.map((field) => (
                          <div key={field} className="space-y-2">
                            <Label htmlFor={field}>
                              {field.charAt(0).toUpperCase() + field.slice(1).replace(/([A-Z])/g, ' $1')}
                            </Label>
                            {field.includes('Description') ? (
                              <Textarea
                                id={field}
                                value={customFields[field] || ''}
                                onChange={(e) => updateCustomField(field, e.target.value)}
                                placeholder={`Enter ${field}`}
                              />
                            ) : (
                              <Input
                                id={field}
                                value={customFields[field] || ''}
                                onChange={(e) => updateCustomField(field, e.target.value)}
                                placeholder={`Enter ${field}`}
                              />
                            )}
                          </div>
                        ))}
                        
                        <Button 
                          onClick={handleGenerateDocument}
                          disabled={generatingDocument}
                          className="w-full"
                        >
                          {generatingDocument ? (
                            <>
                              <Clock className="h-4 w-4 mr-2 animate-spin" />
                              Generating...
                            </>
                          ) : (
                            <>
                              <FileText className="h-4 w-4 mr-2" />
                              Generate Document
                            </>
                          )}
                        </Button>
                      </div>
                    )}
                  </DialogContent>
                </Dialog>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default DocumentGenerator;
