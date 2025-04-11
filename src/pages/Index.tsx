
import React from 'react';
import Navbar from '@/components/Layout/Navbar';
import SearchBar from '@/components/Dashboard/SearchBar';
import RiskSummaryCard from '@/components/Dashboard/RiskSummaryCard';
import RiskChart from '@/components/Reports/RiskChart';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { riskComparisonData, monthlyRiskTrendData } from '@/utils/mockData';
import { Building, TrendingUp } from 'lucide-react';

const Index = () => {
  const popularCompanies = [
    { id: '1', name: '阿里巴巴（中国）有限公司' },
    { id: '2', name: '腾讯科技（深圳）有限公司' },
    { id: '3', name: '百度在线网络技术（北京）有限公司' },
    { id: '4', name: '京东科技控股股份有限公司' },
    { id: '5', name: '美团' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <section className="bg-enterprise-primary py-16 px-4">
        <div className="container mx-auto text-center text-white">
          <h1 className="text-4xl font-bold mb-4">企业风险洞察分析系统</h1>
          <p className="text-xl opacity-80 max-w-3xl mx-auto mb-12">
            全面挖掘企业风险信息，多维度分析法律诉讼、舆情监控、经营异常等风险指标
          </p>
          
          <SearchBar />
        </div>
      </section>
      
      <section className="container mx-auto py-12 px-4">
        <h2 className="text-2xl font-bold mb-8">热门企业风险概览</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <RiskSummaryCard 
            type="legal"
            title="法律诉讼风险"
            riskLevel="medium"
            count={24}
            description="存在多起知识产权纠纷和竞业限制诉讼"
          />
          <RiskSummaryCard 
            type="media"
            title="负面舆情风险"
            riskLevel="low"
            count={8}
            description="少量负面新闻，主要涉及平台治理问题"
          />
          <RiskSummaryCard 
            type="operation"
            title="经营异常风险"
            riskLevel="low"
            count={3}
            description="历史上存在少量行政处罚记录"
          />
          <RiskSummaryCard 
            type="financial"
            title="财务风险"
            riskLevel="high"
            count={12}
            description="税务处罚与金融监管问题需注意"
          />
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <RiskChart 
            type="bar"
            title="企业风险月度趋势"
            data={monthlyRiskTrendData}
          />
          <RiskChart 
            type="pie"
            title="企业风险对比分析"
            data={riskComparisonData}
          />
        </div>
      </section>
      
      <section className="container mx-auto py-8 px-4 mb-12">
        <Card>
          <CardHeader>
            <div className="flex items-center">
              <Building className="mr-2 h-5 w-5 text-enterprise-accent" />
              <CardTitle>热门查询企业</CardTitle>
            </div>
            <CardDescription>点击直接查看企业风险报告</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {popularCompanies.map(company => (
                <a 
                  key={company.id}
                  href={`/report/${company.id}`}
                  className="block p-4 border rounded-md hover:bg-gray-50 hover:border-enterprise-accent transition-colors"
                >
                  <p className="font-medium truncate">{company.name}</p>
                </a>
              ))}
            </div>
          </CardContent>
        </Card>
      </section>
      
      <footer className="bg-enterprise-primary text-white py-8">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <p>© 2025 企业风险洞察分析系统 - 数据来源于公开互联网信息</p>
            <p className="text-sm opacity-70 mt-2">
              本系统数据仅供参考，不构成任何投资或决策建议
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
