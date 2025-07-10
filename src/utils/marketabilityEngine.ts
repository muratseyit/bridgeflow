// Core types for the marketability scoring system
export interface MarketabilityMetrics {
  productMarketFit: number;
  regulatoryCompatibility: number;
  logisticsViability: number;
  digitalReadiness: number;
  scalabilityPotential: number;
  founderAdvantage: number;
}

export interface MarketabilityResult {
  overallScore: number;
  metrics: MarketabilityMetrics;
  riskFactors: string[];
  opportunities: string[];
  recommendations: string[];
  confidenceLevel: 'High' | 'Medium' | 'Low';
}

// UK market trend keywords (TF-IDF inspired)
const UK_TREND_KEYWORDS = {
  sustainability: ['sustainable', 'eco-friendly', 'green', 'renewable', 'carbon', 'environmental', 'organic', 'ethical'],
  technology: ['AI', 'digital', 'software', 'tech', 'automation', 'IoT', 'blockchain', 'fintech'],
  convenience: ['delivery', 'instant', 'mobile', 'app', 'online', 'quick', 'easy', 'convenient'],
  health: ['health', 'wellness', 'fitness', 'medical', 'healthcare', 'nutrition', 'therapy'],
  luxury: ['premium', 'luxury', 'high-end', 'exclusive', 'artisan', 'handmade', 'bespoke']
};

const HIGH_DEMAND_INDUSTRIES = ['technology', 'healthcare', 'food-beverage', 'retail', 'services'];
const REGULATED_INDUSTRIES = ['healthcare', 'food-beverage', 'automotive', 'construction'];

// TF-IDF inspired keyword scoring
function calculateKeywordRelevance(text: string, keywords: string[]): number {
  const normalizedText = text.toLowerCase();
  const matches = keywords.filter(keyword => normalizedText.includes(keyword));
  return Math.min(matches.length / keywords.length, 1);
}

// Product-Market Fit Potential (0-100)
function calculateProductMarketFit(businessData: any): number {
  let score = 0;
  const description = `${businessData.description} ${businessData.products}`.toLowerCase();
  
  // UK trend alignment (40 points max)
  const sustainabilityScore = calculateKeywordRelevance(description, UK_TREND_KEYWORDS.sustainability) * 10;
  const techScore = calculateKeywordRelevance(description, UK_TREND_KEYWORDS.technology) * 10;
  const convenienceScore = calculateKeywordRelevance(description, UK_TREND_KEYWORDS.convenience) * 10;
  const healthScore = calculateKeywordRelevance(description, UK_TREND_KEYWORDS.health) * 10;
  
  score += Math.max(sustainabilityScore, techScore, convenienceScore, healthScore);
  
  // Industry demand (30 points max)
  if (HIGH_DEMAND_INDUSTRIES.includes(businessData.industry)) {
    score += 30;
  } else {
    score += 15;
  }
  
  // Market differentiation (20 points max)
  const uniqueWords = ['unique', 'innovative', 'first', 'patented', 'exclusive', 'proprietary'];
  score += calculateKeywordRelevance(description, uniqueWords) * 20;
  
  // Current market experience (10 points max)
  const internationalMarkets = businessData.currentMarkets?.filter((m: string) => m !== 'Turkey') || [];
  score += Math.min(internationalMarkets.length * 3, 10);
  
  return Math.min(score, 100);
}

// Regulatory Compatibility (0-100)
function calculateRegulatoryCompatibility(businessData: any): number {
  let score = 50; // Base score
  
  // Industry regulatory burden
  if (REGULATED_INDUSTRIES.includes(businessData.industry)) {
    score -= 20;
  }
  
  // Existing certifications (30 points max)
  const certifications = businessData.qualityCertifications || [];
  const ukRelevantCerts = ['ISO 9001', 'ISO 14001', 'CE Marking', 'GDPR Compliant'];
  const relevantCertCount = certifications.filter((cert: string) => ukRelevantCerts.includes(cert)).length;
  score += relevantCertCount * 7.5;
  
  // Digital compliance readiness (20 points max)
  if (businessData.hasEnglishWebsite) score += 10;
  if (businessData.digitalPresence?.includes('Website')) score += 5;
  if (businessData.digitalPresence?.includes('CRM System')) score += 5;
  
  return Math.min(Math.max(score, 0), 100);
}

// Logistics & Fulfillment Viability (0-100)
function calculateLogisticsViability(businessData: any): number {
  let score = 40; // Base score
  
  // Product type assessment
  const description = businessData.products?.toLowerCase() || '';
  
  // Digital/service advantage (30 points max)
  if (businessData.industry === 'technology' || businessData.industry === 'services') {
    score += 30;
  } else if (description.includes('software') || description.includes('digital')) {
    score += 25;
  }
  
  // E-commerce readiness (20 points max)
  if (businessData.hasOnlineStore) score += 10;
  if (businessData.hasEcommercePlatform) score += 10;
  
  // Current international experience (10 points max)
  const euMarkets = businessData.currentMarkets?.filter((m: string) => 
    ['Germany', 'France', 'Netherlands', 'Italy', 'Spain', 'Other EU'].includes(m)
  ) || [];
  score += Math.min(euMarkets.length * 2, 10);
  
  return Math.min(score, 100);
}

// Digital & Sales Readiness (0-100)
function calculateDigitalReadiness(businessData: any): number {
  let score = 0;
  
  // Digital presence scoring (50 points max)
  const digitalAssets = businessData.digitalPresence || [];
  const digitalScoring = {
    'Website': 10,
    'Social Media': 5,
    'Online Store': 15,
    'Mobile App': 10,
    'SEO Optimized': 5,
    'Google Ads': 5
  };
  
  digitalAssets.forEach((asset: string) => {
    if (digitalScoring[asset as keyof typeof digitalScoring]) {
      score += digitalScoring[asset as keyof typeof digitalScoring];
    }
  });
  
  // E-commerce capabilities (30 points max)
  if (businessData.hasOnlineStore) score += 15;
  if (businessData.hasEcommercePlatform) score += 15;
  
  // English readiness (20 points max)
  if (businessData.hasEnglishWebsite) score += 20;
  
  return Math.min(score, 100);
}

// Scalability & Automation Potential (0-100)
function calculateScalabilityPotential(businessData: any): number {
  let score = 20; // Base score
  
  // Industry scalability
  const highScalabilityIndustries = ['technology', 'services', 'retail'];
  if (highScalabilityIndustries.includes(businessData.industry)) {
    score += 30;
  }
  
  // Revenue size indicator of scalability (25 points max)
  const revenueScoring = {
    '50m+': 25,
    '10m-50m': 20,
    '2m-10m': 15,
    '500k-2m': 10,
    '0-500k': 5
  };
  score += revenueScoring[businessData.annualRevenue as keyof typeof revenueScoring] || 0;
  
  // Digital infrastructure (25 points max)
  if (businessData.digitalPresence?.includes('CRM System')) score += 10;
  if (businessData.digitalPresence?.includes('Mobile App')) score += 10;
  if (businessData.hasEcommercePlatform) score += 5;
  
  return Math.min(score, 100);
}

// Founder & Team Advantage (0-100)
function calculateFounderAdvantage(businessData: any): number {
  let score = 30; // Base score
  
  // International experience (30 points max)
  const internationalMarkets = businessData.currentMarkets?.filter((m: string) => m !== 'Turkey') || [];
  score += Math.min(internationalMarkets.length * 6, 30);
  
  // English readiness (25 points max)
  if (businessData.hasEnglishWebsite) score += 15;
  if (businessData.digitalPresence?.includes('Website')) score += 10;
  
  // Business maturity (15 points max)
  const currentYear = new Date().getFullYear();
  const yearsInBusiness = currentYear - parseInt(businessData.yearEstablished || currentYear.toString());
  score += Math.min(yearsInBusiness * 2, 15);
  
  return Math.min(score, 100);
}

// Calculate revenue factor coefficient
function calculateRevenueFactor(businessData: any): number {
  const revenueString = businessData.annualRevenue || '0-500k';
  
  // Extract numeric value from revenue range strings
  let revenueValue = 0;
  if (revenueString.includes('50m+')) {
    revenueValue = 50000000;
  } else if (revenueString.includes('10m-50m')) {
    revenueValue = 25000000; // midpoint
  } else if (revenueString.includes('2m-10m')) {
    revenueValue = 5000000; // midpoint
  } else if (revenueString.includes('500k-2m')) {
    revenueValue = 1000000; // midpoint
  } else {
    revenueValue = 250000; // midpoint of 0-500k
  }
  
  // Return multiplier directly (0 for 0-500k, 1.05 for 500k+, etc.)
  if (revenueValue >= 50000000) {
    return 1.20; // 120% of base score
  } else if (revenueValue >= 1000000) {
    return 1.10; // 110% of base score
  } else if (revenueValue >= 500000) {
    return 1.05; // 105% of base score
  } else {
    return 0.00; // 0% - score becomes 0
  }
}

// Main scoring engine
export function calculateMarketabilityScore(businessData: any): MarketabilityResult {
  const metrics: MarketabilityMetrics = {
    productMarketFit: calculateProductMarketFit(businessData),
    regulatoryCompatibility: calculateRegulatoryCompatibility(businessData),
    logisticsViability: calculateLogisticsViability(businessData),
    digitalReadiness: calculateDigitalReadiness(businessData),
    scalabilityPotential: calculateScalabilityPotential(businessData),
    founderAdvantage: calculateFounderAdvantage(businessData)
  };
  
  // Weighted overall score
  const weights = {
    productMarketFit: 0.25,
    regulatoryCompatibility: 0.15,
    logisticsViability: 0.15,
    digitalReadiness: 0.20,
    scalabilityPotential: 0.15,
    founderAdvantage: 0.10
  };
  
  const baseScore = Math.round(
    metrics.productMarketFit * weights.productMarketFit +
    metrics.regulatoryCompatibility * weights.regulatoryCompatibility +
    metrics.logisticsViability * weights.logisticsViability +
    metrics.digitalReadiness * weights.digitalReadiness +
    metrics.scalabilityPotential * weights.scalabilityPotential +
    metrics.founderAdvantage * weights.founderAdvantage
  );
  
  // Apply revenue factor coefficient
  const revenueFactor = calculateRevenueFactor(businessData);
  const overallScore = Math.min(Math.round(baseScore * revenueFactor), 100);
  
  // Generate insights
  const riskFactors = generateRiskFactors(metrics, businessData);
  const opportunities = generateOpportunities(metrics, businessData);
  const recommendations = generateRecommendations(metrics, businessData);
  
  // Confidence level based on data completeness
  const confidenceLevel = calculateConfidenceLevel(businessData);
  
  return {
    overallScore,
    metrics,
    riskFactors,
    opportunities,
    recommendations,
    confidenceLevel
  };
}

function generateRiskFactors(metrics: MarketabilityMetrics, businessData: any): string[] {
  const risks: string[] = [];
  
  if (metrics.regulatoryCompatibility < 60) {
    risks.push(`Regulatory compliance gap - ${businessData.industry} sector requires UK certifications`);
  }
  
  if (metrics.digitalReadiness < 50) {
    risks.push("Limited digital infrastructure may hinder UK market penetration");
  }
  
  if (metrics.logisticsViability < 40) {
    risks.push("Complex logistics setup required for physical product fulfillment");
  }
  
  if (!businessData.hasEnglishWebsite) {
    risks.push("No English website limits B2B and customer communication");
  }
  
  return risks;
}

function generateOpportunities(metrics: MarketabilityMetrics, businessData: any): string[] {
  const opportunities: string[] = [];
  
  if (metrics.productMarketFit > 70) {
    opportunities.push("Strong product-market alignment with UK consumer trends");
  }
  
  if (businessData.qualityCertifications?.includes('ISO 9001')) {
    opportunities.push("ISO 9001 certification provides competitive advantage in UK B2B markets");
  }
  
  if (metrics.scalabilityPotential > 60) {
    opportunities.push("High scalability potential allows for rapid UK market expansion");
  }
  
  if (businessData.currentMarkets?.includes('Other EU')) {
    opportunities.push("EU market experience translates well to UK post-Brexit landscape");
  }
  
  return opportunities;
}

function generateRecommendations(metrics: MarketabilityMetrics, businessData: any): string[] {
  const recommendations: string[] = [];
  
  if (metrics.digitalReadiness < 70) {
    recommendations.push("Enhance digital presence with UK-focused SEO and social media strategy");
  }
  
  if (!businessData.hasEnglishWebsite) {
    recommendations.push("Develop professional English website as immediate priority");
  }
  
  if (metrics.regulatoryCompatibility < 70) {
    recommendations.push("Obtain relevant UK certifications before market entry");
  }
  
  if (businessData.timeline === '3-months' && metrics.logisticsViability < 60) {
    recommendations.push("Consider longer timeline to establish proper UK logistics infrastructure");
  }
  
  return recommendations;
}

function calculateConfidenceLevel(businessData: any): 'High' | 'Medium' | 'Low' {
  let completeness = 0;
  const requiredFields = ['companyName', 'industry', 'description', 'products', 'annualRevenue'];
  
  requiredFields.forEach(field => {
    if (businessData[field] && businessData[field].trim() !== '') {
      completeness += 20;
    }
  });
  
  if (completeness >= 80) return 'High';
  if (completeness >= 60) return 'Medium';
  return 'Low';
}
