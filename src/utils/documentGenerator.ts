
export interface DocumentTemplate {
  id: string;
  name: string;
  type: 'legal' | 'tax' | 'business' | 'compliance';
  description: string;
  requiredFields: string[];
}

export const documentTemplates: DocumentTemplate[] = [
  {
    id: 'nda',
    name: 'Non-Disclosure Agreement (NDA)',
    type: 'legal',
    description: 'Standard NDA for protecting confidential business information',
    requiredFields: ['companyName', 'partnerName', 'effectiveDate']
  },
  {
    id: 'ip-agreement',
    name: 'Intellectual Property Agreement',
    type: 'legal',
    description: 'Agreement for IP licensing and protection in the UK',
    requiredFields: ['companyName', 'ipDescription', 'licenseTerm']
  },
  {
    id: 'invoice-template',
    name: 'UK VAT Invoice Template',
    type: 'business',
    description: 'HMRC compliant invoice template with VAT calculations',
    requiredFields: ['companyName', 'vatNumber', 'customerDetails']
  },
  {
    id: 'vat-registration',
    name: 'VAT Registration Form (VAT1)',
    type: 'tax',
    description: 'HMRC VAT registration application form',
    requiredFields: ['companyName', 'businessAddress', 'expectedTurnover']
  },
  {
    id: 'company-formation',
    name: 'Companies House IN01 Form',
    type: 'compliance',
    description: 'Application to register a company with Companies House',
    requiredFields: ['companyName', 'directors', 'shareCapital']
  },
  {
    id: 'service-agreement',
    name: 'UK Service Agreement',
    type: 'business',
    description: 'Standard service agreement template for UK clients',
    requiredFields: ['companyName', 'serviceDescription', 'paymentTerms']
  }
];

export const generateDocument = (templateId: string, businessData: any, customFields: any = {}) => {
  const template = documentTemplates.find(t => t.id === templateId);
  if (!template) {
    throw new Error('Template not found');
  }
  
  // This would integrate with actual document generation service
  // For now, return a mock document structure
  return {
    templateId,
    templateName: template.name,
    generatedAt: new Date().toISOString(),
    content: generateDocumentContent(templateId, businessData, customFields),
    downloadUrl: `/documents/${templateId}-${Date.now()}.pdf`
  };
};

const generateDocumentContent = (templateId: string, businessData: any, customFields: any) => {
  const companyName = businessData.companyName || '[COMPANY NAME]';
  const currentDate = new Date().toLocaleDateString('en-GB');
  
  switch (templateId) {
    case 'nda':
      return `
NON-DISCLOSURE AGREEMENT

This Non-Disclosure Agreement ("Agreement") is entered into on ${currentDate} between:

${companyName} ("Disclosing Party")
[Registered office address]

AND

${customFields.partnerName || '[PARTNER NAME]'} ("Receiving Party")
[Partner address]

1. CONFIDENTIAL INFORMATION
The Receiving Party agrees to maintain in confidence all information disclosed by the Disclosing Party...

[Standard NDA clauses continue...]
      `;
      
    case 'vat-registration':
      return `
VAT REGISTRATION APPLICATION (VAT1)

Company Details:
- Company Name: ${companyName}
- Business Address: ${businessData.businessAddress || '[BUSINESS ADDRESS]'}
- Expected Annual Turnover: ${businessData.annualRevenue || '[TURNOVER]'}
- Business Type: ${businessData.industry || '[INDUSTRY]'}

[VAT registration form fields continue...]
      `;
      
    default:
      return `Document template for ${templateId} - Content would be generated based on business data and custom fields.`;
  }
};
