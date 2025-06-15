import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { FileText, Download, Clock, CheckCircle, Eye } from "lucide-react";
import { documentTemplates, generateDocument, DocumentTemplate } from "@/utils/documentGenerator";
import { useToast } from "@/hooks/use-toast";
import NDAGenerator from "./NDAGenerator";
import IN01FormGenerator from "./IN01FormGenerator";

interface DocumentGeneratorProps {
  businessData: any;
}

interface GeneratedDocument {
  templateId: string;
  templateName: string;
  generatedAt: string;
  content: string;
  downloadUrl: string;
  metadata: any;
}

const DocumentGenerator = ({ businessData }: DocumentGeneratorProps) => {
  const [generatedDocuments, setGeneratedDocuments] = useState<GeneratedDocument[]>([]);
  const [previewDocument, setPreviewDocument] = useState<GeneratedDocument | null>(null);
  const { toast } = useToast();

  const handleDocumentGenerated = (generatedDoc: GeneratedDocument) => {
    setGeneratedDocuments(prev => [generatedDoc, ...prev]);
    console.log("Document added to list:", generatedDoc);
  };

  const handleDownload = (generatedDoc: GeneratedDocument) => {
    // Create a blob with the document content
    const blob = new Blob([generatedDoc.content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    
    // Create a temporary download link
    const link = document.createElement('a');
    link.href = url;
    link.download = `${generatedDoc.templateName.replace(/\s+/g, '-').toLowerCase()}-${new Date(generatedDoc.generatedAt).getTime()}.txt`;
    document.body.appendChild(link);
    link.click();
    
    // Cleanup
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    
    toast({
      title: "Download Started",
      description: `${generatedDoc.templateName} has been downloaded.`,
    });
  };

  const handlePreview = (generatedDoc: GeneratedDocument) => {
    setPreviewDocument(generatedDoc);
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
              Generated Documents ({generatedDocuments.length})
            </CardTitle>
            <CardDescription>Your recently generated documents are ready for download</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {generatedDocuments.map((doc, index) => (
                <div key={index} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg bg-green-50">
                  <div className="flex items-center space-x-3">
                    <FileText className="h-5 w-5 text-blue-600" />
                    <div>
                      <p className="font-medium text-gray-900">{doc.templateName}</p>
                      <p className="text-sm text-gray-500">
                        Generated {new Date(doc.generatedAt).toLocaleString()}
                      </p>
                      <Badge variant="secondary" className="mt-1">
                        Ready to Download
                      </Badge>
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <Button 
                      size="sm" 
                      variant="outline"
                      onClick={() => handlePreview(doc)}
                    >
                      <Eye className="h-4 w-4 mr-2" />
                      Preview
                    </Button>
                    <Button 
                      size="sm" 
                      onClick={() => handleDownload(doc)}
                      className="bg-green-600 hover:bg-green-700"
                    >
                      <Download className="h-4 w-4 mr-2" />
                      Download
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Document Preview Dialog */}
      <Dialog open={!!previewDocument} onOpenChange={() => setPreviewDocument(null)}>
        <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Document Preview: {previewDocument?.templateName}</DialogTitle>
            <DialogDescription>
              Preview of your generated document
            </DialogDescription>
          </DialogHeader>
          <div className="mt-4">
            <pre className="whitespace-pre-wrap text-sm bg-gray-50 p-4 rounded-lg border">
              {previewDocument?.content}
            </pre>
          </div>
          <div className="flex justify-end space-x-2 mt-4">
            <Button variant="outline" onClick={() => setPreviewDocument(null)}>
              Close
            </Button>
            {previewDocument && (
              <Button onClick={() => handleDownload(previewDocument)}>
                <Download className="h-4 w-4 mr-2" />
                Download
              </Button>
            )}
          </div>
        </DialogContent>
      </Dialog>

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
