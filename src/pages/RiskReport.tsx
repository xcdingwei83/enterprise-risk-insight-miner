
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '@/components/Layout/Navbar';
import RiskChart from '@/components/Reports/RiskChart';
import DataSourceList from '@/components/Reports/DataSourceList';
import RiskSummaryCard from '@/components/Dashboard/RiskSummaryCard';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  companies, alibabaRiskSummaries, 
  alibabaLegalCases, alibabaMediaMentions, 
  alibabaOperationIssues, dataSources,
  legalTypeData, mediaSentimentData
} from '@/utils/mockData';
import { Download, Gavel, Newspaper, AlertCircle, FileText, AlertTriangle, Building2, Calendar, User, CreditCard } from 'lucide-react';

const RiskReport = () => {
  const { companyId } = useParams<{ companyId: string }>();
  const [company, setCompany] = useState<any | null>(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('overview');
  
  useEffect(() => {
    // Simulate API call
    setLoading(true);
    setTimeout(() => {
      const foundCompany = companies.find(c => c.id === companyId);
      setCompany(foundCompany || null);
      setLoading(false);
    }, 600);
  }, [companyId]);

  const handleGeneratePDF = () => {
    alert('风险报告已生成，正在下载...');
    // In a real application, this would generate and download a PDF
  };
  
  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <div className="container mx-auto py-20 px-4 flex justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-enterprise-accent"></div>
        </div>
      </div>
    );
  }
  
  if (!company) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <div className="container mx-auto py-20 px-4 text-center">
          <AlertTriangle className="h-16 w-16 text-amber-500 mx-auto mb-4" />
          <h1 className="text-3xl font-bold mb-2">未找到企业</h1>
          <p className="text-xl text-gray-500">无法获取该企业的风险报告</p>
          <Button className="mt-8" onClick={() => window.history.back()}>返回上一页</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="bg-enterprise-primary text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="text-3xl font-bold">{company.name}</h1>
              <p className="text-xl mt-2 opacity-90">企业风险分析报告</p>
            </div>
            <Button 
              onClick={handleGeneratePDF} 
              variant="outline" 
              className="mt-4 md:mt-0 bg-white text-enterprise-primary hover:bg-gray-100"
            >
              <Download className="mr-2 h-5 w-5" />
              下载完整报告
            </Button>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto py-8 px-4">
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Building2 className="mr-2 h-5 w-5" />
              企业基本信息
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <div className="flex">
                  <span className="font-medium w-32 text-gray-600">统一社会信用代码:</span>
                  <span>{company.creditCode}</span>
                </div>
                <div className="flex">
                  <span className="font-medium w-32 text-gray-600">法定代表人:</span>
                  <span>{company.legalRepresentative}</span>
                </div>
                <div className="flex">
                  <span className="font-medium w-32 text-gray-600">注册状态:</span>
                  <span>{company.status}</span>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex">
                  <span className="font-medium w-32 text-gray-600">注册日期:</span>
                  <span>{company.registrationDate}</span>
                </div>
                <div className="flex">
                  <span className="font-medium w-32 text-gray-600">注册资本:</span>
                  <span>{company.registeredCapital}</span>
                </div>
                <div className="flex">
                  <span className="font-medium w-32 text-gray-600">注册地址:</span>
                  <span>{company.address}</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-6">风险摘要</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {alibabaRiskSummaries.map(risk => (
              <RiskSummaryCard 
                key={risk.type}
                type={risk.type}
                title={risk.title}
                riskLevel={risk.riskLevel}
                count={risk.count}
                description={risk.description}
                companyId={company.id}
              />
            ))}
          </div>
        </div>
        
        <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-10">
          <TabsList className="grid grid-cols-1 md:grid-cols-4 w-full">
            <TabsTrigger value="overview">风险概览</TabsTrigger>
            <TabsTrigger value="legal">法律诉讼</TabsTrigger>
            <TabsTrigger value="media">舆情监控</TabsTrigger>
            <TabsTrigger value="operation">经营异常</TabsTrigger>
          </TabsList>
          
          <TabsContent value="overview" className="mt-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              <RiskChart 
                type="pie" 
                title="法律诉讼类型分布" 
                data={legalTypeData}
              />
              <RiskChart 
                type="pie" 
                title="舆情情感分析" 
                data={mediaSentimentData}
              />
            </div>
            
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <AlertTriangle className="mr-2 h-5 w-5" />
                  主要风险因素
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ol className="list-decimal pl-5 space-y-3">
                  <li className="text-risk-high">
                    <span className="font-medium">监管风险:</span> 因平台垄断行为被处以重罚，需关注后续反垄断监管动向
                  </li>
                  <li>
                    <span className="font-medium">知识产权风险:</span> 多起商标侵权和专利纠纷案件，知识产权保护体系需加强
                  </li>
                  <li>
                    <span className="font-medium">数据合规风险:</span> 因App违法收集个人信息被责令整改，需关注个人信息保护法实施后的合规问题
                  </li>
                  <li>
                    <span className="font-medium">劳动用工风险:</span> 存在劳动合同纠纷，需规范用工管理
                  </li>
                </ol>
              </CardContent>
            </Card>
            
            <DataSourceList sources={dataSources} />
          </TabsContent>
          
          <TabsContent value="legal" className="mt-6">
            <h3 className="text-xl font-bold mb-4 flex items-center">
              <Gavel className="mr-2 h-5 w-5" />
              法律诉讼风险分析
            </h3>
            
            <div className="space-y-6 mb-8">
              {alibabaLegalCases.map(legalCase => (
                <Card key={legalCase.id}>
                  <CardContent className="p-6">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                      <div>
                        <h4 className="text-lg font-bold text-enterprise-primary">{legalCase.title}</h4>
                        <div className="flex flex-wrap gap-2 mt-2">
                          <span className="bg-enterprise-accent/10 text-enterprise-accent px-2 py-1 text-xs rounded-full">{legalCase.type}</span>
                          <span className="bg-gray-100 text-gray-700 px-2 py-1 text-xs rounded-full">{legalCase.status}</span>
                          <span className="bg-gray-100 text-gray-700 px-2 py-1 text-xs rounded-full">{legalCase.date}</span>
                        </div>
                        <p className="mt-3 text-gray-600">{legalCase.summary}</p>
                        <div className="mt-2 text-sm">
                          <span className="text-gray-500">案号: </span>
                          <span>{legalCase.caseNumber}</span>
                          <span className="text-gray-500 ml-4">审理法院: </span>
                          <span>{legalCase.court}</span>
                        </div>
                      </div>
                      <div className="mt-4 lg:mt-0">
                        <a 
                          href={legalCase.url} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-enterprise-accent hover:underline flex items-center text-sm"
                        >
                          查看裁判文书
                          <FileText className="ml-1 h-3 w-3" />
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <DataSourceList sources={dataSources.filter(source => source.type === '司法数据库')} />
          </TabsContent>
          
          <TabsContent value="media" className="mt-6">
            <h3 className="text-xl font-bold mb-4 flex items-center">
              <Newspaper className="mr-2 h-5 w-5" />
              舆情监控分析
            </h3>
            
            <div className="space-y-6 mb-8">
              {alibabaMediaMentions.map(mention => (
                <Card key={mention.id}>
                  <CardContent className="p-6">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                      <div>
                        <h4 className="text-lg font-bold text-enterprise-primary">{mention.title}</h4>
                        <div className="flex flex-wrap gap-2 mt-2">
                          <span className={`px-2 py-1 text-xs rounded-full ${
                            mention.sentiment === 'positive' ? 'bg-risk-low/20 text-risk-low' :
                            mention.sentiment === 'negative' ? 'bg-risk-high/20 text-risk-high' :
                            'bg-gray-100 text-gray-700'
                          }`}>
                            {mention.sentiment === 'positive' ? '正面' : 
                             mention.sentiment === 'negative' ? '负面' : '中性'}
                          </span>
                          <span className="bg-gray-100 text-gray-700 px-2 py-1 text-xs rounded-full">{mention.date}</span>
                          <span className="bg-gray-100 text-gray-700 px-2 py-1 text-xs rounded-full">{mention.source}</span>
                        </div>
                        <p className="mt-3 text-gray-600">{mention.summary}</p>
                      </div>
                      <div className="mt-4 lg:mt-0">
                        <a 
                          href={mention.url} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-enterprise-accent hover:underline flex items-center text-sm"
                        >
                          查看原文
                          <FileText className="ml-1 h-3 w-3" />
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <DataSourceList sources={dataSources.filter(source => !source.type.includes('数据库'))} />
          </TabsContent>
          
          <TabsContent value="operation" className="mt-6">
            <h3 className="text-xl font-bold mb-4 flex items-center">
              <AlertCircle className="mr-2 h-5 w-5" />
              经营异常分析
            </h3>
            
            <div className="space-y-6 mb-8">
              {alibabaOperationIssues.map(issue => (
                <Card key={issue.id}>
                  <CardContent className="p-6">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                      <div>
                        <h4 className="text-lg font-bold text-enterprise-primary">{issue.title}</h4>
                        <div className="flex flex-wrap gap-2 mt-2">
                          <span className={`px-2 py-1 text-xs rounded-full ${
                            issue.severity === 'high' ? 'bg-risk-high/20 text-risk-high' :
                            issue.severity === 'medium' ? 'bg-risk-medium/20 text-risk-medium' :
                            'bg-risk-low/20 text-risk-low'
                          }`}>
                            {issue.severity === 'high' ? '高风险' : 
                             issue.severity === 'medium' ? '中风险' : '低风险'}
                          </span>
                          <span className="bg-gray-100 text-gray-700 px-2 py-1 text-xs rounded-full">{issue.type}</span>
                          <span className="bg-gray-100 text-gray-700 px-2 py-1 text-xs rounded-full">{issue.date}</span>
                        </div>
                        <p className="mt-3 text-gray-600">{issue.description}</p>
                        <p className="mt-2 text-sm">
                          <span className="text-gray-500">数据来源: </span>
                          <span>{issue.source}</span>
                        </p>
                      </div>
                      <div className="mt-4 lg:mt-0">
                        <a 
                          href={issue.url} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-enterprise-accent hover:underline flex items-center text-sm"
                        >
                          查看详情
                          <FileText className="ml-1 h-3 w-3" />
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <DataSourceList sources={dataSources.filter(source => source.type.includes('政府'))} />
          </TabsContent>
        </Tabs>
      </div>
      
      <footer className="bg-enterprise-primary text-white py-8 mt-auto">
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

export default RiskReport;
