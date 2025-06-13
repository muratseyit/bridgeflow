
export interface CompanyHouseData {
  companyNumber: string;
  companyName: string;
  companyStatus: string;
  incorporationDate: string;
  companyType: string;
  registeredOfficeAddress: any;
}

export interface HMRCStatus {
  vatNumber?: string;
  corporationTaxUTR?: string;
  payeReference?: string;
  registrationStatus: 'active' | 'pending' | 'not_registered';
}

// Mock API functions - in production these would call actual APIs
export const checkCompanyHouseAvailability = async (companyName: string): Promise<boolean> => {
  // Mock delay to simulate API call
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  // Mock logic - in reality this would call Companies House API
  const unavailableNames = ['Test Ltd', 'Example Limited', 'Demo Company'];
  return !unavailableNames.includes(companyName);
};

export const registerCompanyWithCompaniesHouse = async (companyData: any): Promise<CompanyHouseData> => {
  // Mock delay to simulate API call
  await new Promise(resolve => setTimeout(resolve, 2000));
  
  // Mock response - in reality this would call Companies House API
  return {
    companyNumber: `${Math.floor(Math.random() * 10000000).toString().padStart(8, '0')}`,
    companyName: companyData.companyName,
    companyStatus: 'Active',
    incorporationDate: new Date().toISOString().split('T')[0],
    companyType: 'Private limited company',
    registeredOfficeAddress: companyData.registeredAddress
  };
};

export const checkHMRCRegistrationStatus = async (companyNumber: string): Promise<HMRCStatus> => {
  // Mock delay to simulate API call
  await new Promise(resolve => setTimeout(resolve, 1500));
  
  // Mock response - in reality this would call HMRC API
  return {
    registrationStatus: 'pending',
    corporationTaxUTR: undefined,
    vatNumber: undefined,
    payeReference: undefined
  };
};

export const submitVATRegistration = async (vatData: any): Promise<{ applicationReference: string; status: string }> => {
  // Mock delay to simulate API call
  await new Promise(resolve => setTimeout(resolve, 3000));
  
  // Mock response - in reality this would call HMRC VAT registration API
  return {
    applicationReference: `VAT${Math.floor(Math.random() * 1000000)}`,
    status: 'submitted'
  };
};

export const getComplianceUpdates = async (companyNumber: string): Promise<any[]> => {
  // Mock delay to simulate API call
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  // Mock compliance updates
  return [
    {
      type: 'filing_due',
      title: 'Confirmation Statement Due',
      description: 'Your annual confirmation statement is due within 14 days',
      dueDate: new Date(Date.now() + 14 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
      priority: 'high'
    },
    {
      type: 'tax_reminder',
      title: 'Corporation Tax Payment Due',
      description: 'Corporation tax payment is due in 30 days',
      dueDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
      priority: 'medium'
    }
  ];
};
