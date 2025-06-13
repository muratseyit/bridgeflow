
export interface ComplianceRecommendation {
  recommendedCompanyType: string;
  taxObligations: string[];
  complianceCalendar: ComplianceEvent[];
  requiredRegistrations: string[];
  estimatedSetupCost: string;
  reasoning: string;
}

export interface ComplianceEvent {
  title: string;
  description: string;
  deadline: string;
  frequency: 'once' | 'monthly' | 'quarterly' | 'annually';
  priority: 'high' | 'medium' | 'low';
  category: 'tax' | 'filing' | 'registration' | 'compliance';
}

export const generateComplianceRecommendation = (businessData: any): ComplianceRecommendation => {
  const revenue = businessData.annualRevenue;
  const companySize = businessData.companySize;
  const industry = businessData.industry;
  const hasOnlineStore = businessData.hasOnlineStore;
  
  // Determine company type based on business profile
  let recommendedCompanyType = "Private Limited Company";
  let reasoning = "Standard choice for most SMEs entering the UK market";
  
  if (revenue === "0-500k" && companySize === "1-10") {
    recommendedCompanyType = "Private Limited Company";
    reasoning = "Ideal for small businesses with limited liability protection and tax efficiency";
  } else if (revenue === "500k+" || companySize === "250+") {
    recommendedCompanyType = "Public Limited Company (PLC)";
    reasoning = "Suitable for larger businesses planning significant growth and potential public investment";
  }
  
  // Generate tax obligations
  const taxObligations = [
    "Corporation Tax (19% on profits)",
    "PAYE (if employing staff)",
    "National Insurance contributions"
  ];
  
  if (hasOnlineStore || revenue !== "0-500k") {
    taxObligations.push("VAT Registration (if turnover >£85,000)");
  }
  
  if (industry === "manufacturing" || industry === "automotive") {
    taxObligations.push("Import duties and customs declarations");
  }
  
  // Generate compliance calendar
  const complianceCalendar: ComplianceEvent[] = [
    {
      title: "Corporation Tax Return",
      description: "Annual company tax return filing",
      deadline: "12 months after accounting period ends",
      frequency: "annually",
      priority: "high",
      category: "tax"
    },
    {
      title: "Confirmation Statement",
      description: "Annual confirmation of company details",
      deadline: "Within 14 days of anniversary",
      frequency: "annually",
      priority: "high",
      category: "filing"
    },
    {
      title: "VAT Return",
      description: "Quarterly VAT return submission",
      deadline: "1 month and 7 days after quarter end",
      frequency: "quarterly",
      priority: "high",
      category: "tax"
    },
    {
      title: "PAYE Submissions",
      description: "Monthly payroll submissions to HMRC",
      deadline: "19th of following month",
      frequency: "monthly",
      priority: "medium",
      category: "tax"
    }
  ];
  
  // Required registrations
  const requiredRegistrations = [
    "Companies House Registration",
    "HMRC Corporation Tax Registration"
  ];
  
  if (hasOnlineStore) {
    requiredRegistrations.push("VAT Registration");
    requiredRegistrations.push("Data Protection Registration (ICO)");
  }
  
  if (industry === "food-beverage") {
    requiredRegistrations.push("Food Standards Agency Registration");
  }
  
  // Estimated setup cost
  let estimatedSetupCost = "£500 - £1,500";
  if (recommendedCompanyType === "Public Limited Company (PLC)") {
    estimatedSetupCost = "£2,000 - £5,000";
  }
  
  return {
    recommendedCompanyType,
    taxObligations,
    complianceCalendar,
    requiredRegistrations,
    estimatedSetupCost,
    reasoning
  };
};
