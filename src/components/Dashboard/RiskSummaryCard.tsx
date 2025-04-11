
import React from 'react';
import { AlertTriangle, Gavel, Newspaper, AlertCircle, TrendingDown, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';

interface RiskSummaryCardProps {
  type: 'legal' | 'media' | 'operation' | 'financial';
  title: string;
  riskLevel: 'high' | 'medium' | 'low';
  count: number;
  description: string;
  companyId?: string;
}

const RiskSummaryCard: React.FC<RiskSummaryCardProps> = ({
  type,
  title,
  riskLevel,
  count,
  description,
  companyId = '1'
}) => {
  const getIcon = () => {
    switch (type) {
      case 'legal':
        return <Gavel className="h-5 w-5" />;
      case 'media':
        return <Newspaper className="h-5 w-5" />;
      case 'operation':
        return <AlertCircle className="h-5 w-5" />;
      case 'financial':
        return <TrendingDown className="h-5 w-5" />;
      default:
        return <AlertTriangle className="h-5 w-5" />;
    }
  };

  const getRiskColor = () => {
    switch (riskLevel) {
      case 'high':
        return 'bg-risk-high/20 text-risk-high border-risk-high';
      case 'medium':
        return 'bg-risk-medium/20 text-risk-medium border-risk-medium';
      case 'low':
        return 'bg-risk-low/20 text-risk-low border-risk-low';
      default:
        return 'bg-gray-100 text-gray-500 border-gray-300';
    }
  };

  const getBadgeText = () => {
    switch (riskLevel) {
      case 'high':
        return '高风险';
      case 'medium':
        return '中风险';
      case 'low':
        return '低风险';
      default:
        return '无风险';
    }
  };

  return (
    <Card className="shadow-md border-l-4 hover:shadow-lg transition-shadow duration-300" style={{ borderLeftColor: riskLevel === 'high' ? '#E74C3C' : riskLevel === 'medium' ? '#F39C12' : '#2ECC71' }}>
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <div className="flex items-center gap-2">
            <div className={cn("p-2 rounded-full", getRiskColor())}>
              {getIcon()}
            </div>
            <CardTitle className="text-lg font-semibold">{title}</CardTitle>
          </div>
          <span className={cn("px-2 py-1 text-xs font-medium rounded", getRiskColor())}>
            {getBadgeText()}
          </span>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-3xl font-bold mb-2">{count}</p>
        <p className="text-sm text-gray-500">{description}</p>
      </CardContent>
      <CardFooter>
        <Link 
          to={`/report/${companyId}/${type}`}
          className="text-sm text-enterprise-accent font-medium hover:underline flex items-center"
        >
          查看详情 <ArrowRight className="ml-1 h-4 w-4" />
        </Link>
      </CardFooter>
    </Card>
  );
};

export default RiskSummaryCard;
