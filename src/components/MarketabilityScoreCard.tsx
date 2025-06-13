
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, AlertTriangle, Lightbulb, Target } from "lucide-react";
import { MarketabilityResult } from "@/utils/marketabilityEngine";

interface MarketabilityScoreCardProps {
  result: MarketabilityResult;
}

const MarketabilityScoreCard = ({ result }: MarketabilityScoreCardProps) => {
  const getScoreColor = (score: number) => {
    if (score >= 75) return "text-green-600";
    if (score >= 50) return "text-yellow-600";
    return "text-red-600";
  };

  const getScoreGradient = (score: number) => {
    if (score >= 75) return "from-green-500 to-emerald-600";
    if (score >= 50) return "from-yellow-500 to-orange-500";
    return "from-red-500 to-rose-600";
  };

  const metricLabels = {
    productMarketFit: "Product-Market Fit",
    regulatoryCompatibility: "Regulatory Compatibility",
    logisticsViability: "Logistics Viability",
    digitalReadiness: "Digital Readiness",
    scalabilityPotential: "Scalability Potential",
    founderAdvantage: "Founder Advantage"
  };

  return (
    <div className="space-y-6">
      {/* Overall Score */}
      <Card className="border-slate-200">
        <CardHeader className="text-center pb-4">
          <CardTitle className="text-2xl mb-2">UK Market Readiness Score</CardTitle>
          <div className={`text-6xl font-bold bg-gradient-to-r ${getScoreGradient(result.overallScore)} bg-clip-text text-transparent`}>
            {result.overallScore}
          </div>
          <div className="flex items-center justify-center mt-2">
            <Badge variant={result.confidenceLevel === 'High' ? 'default' : result.confidenceLevel === 'Medium' ? 'secondary' : 'destructive'}>
              {result.confidenceLevel} Confidence
            </Badge>
          </div>
        </CardHeader>
        <CardContent>
          <Progress value={result.overallScore} className="h-3 mb-4" />
          <p className="text-center text-slate-600">
            {result.overallScore >= 75 ? "Excellent readiness for UK market entry" :
             result.overallScore >= 50 ? "Good potential with some improvements needed" :
             "Significant preparation required before UK expansion"}
          </p>
        </CardContent>
      </Card>

      {/* Detailed Metrics */}
      <Card className="border-slate-200">
        <CardHeader>
          <CardTitle className="flex items-center">
            <Target className="h-5 w-5 mr-2 text-blue-600" />
            Detailed Metrics
          </CardTitle>
          <CardDescription>Breakdown of your UK market readiness across key areas</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {Object.entries(result.metrics).map(([key, value]) => (
              <div key={key} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">{metricLabels[key as keyof typeof metricLabels]}</span>
                  <span className={`text-sm font-semibold ${getScoreColor(value)}`}>{value}/100</span>
                </div>
                <Progress value={value} className="h-2" />
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Risk Factors */}
      {result.riskFactors.length > 0 && (
        <Card className="border-red-200 bg-red-50">
          <CardHeader>
            <CardTitle className="flex items-center text-red-700">
              <AlertTriangle className="h-5 w-5 mr-2" />
              Risk Factors
            </CardTitle>
            <CardDescription>Areas that may challenge your UK market entry</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {result.riskFactors.map((risk, index) => (
                <li key={index} className="flex items-start">
                  <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span className="text-sm text-red-700">{risk}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      )}

      {/* Opportunities */}
      {result.opportunities.length > 0 && (
        <Card className="border-green-200 bg-green-50">
          <CardHeader>
            <CardTitle className="flex items-center text-green-700">
              <TrendingUp className="h-5 w-5 mr-2" />
              Opportunities
            </CardTitle>
            <CardDescription>Strengths that will help your UK expansion</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {result.opportunities.map((opportunity, index) => (
                <li key={index} className="flex items-start">
                  <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span className="text-sm text-green-700">{opportunity}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      )}

      {/* Recommendations */}
      {result.recommendations.length > 0 && (
        <Card className="border-blue-200 bg-blue-50">
          <CardHeader>
            <CardTitle className="flex items-center text-blue-700">
              <Lightbulb className="h-5 w-5 mr-2" />
              Recommendations
            </CardTitle>
            <CardDescription>Action items to improve your UK market readiness</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {result.recommendations.map((recommendation, index) => (
                <li key={index} className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span className="text-sm text-blue-700">{recommendation}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default MarketabilityScoreCard;
