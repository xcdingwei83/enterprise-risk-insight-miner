
import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import Navbar from '@/components/Layout/Navbar';
import SearchBar from '@/components/Dashboard/SearchBar';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { companies } from '@/utils/mockData';
import { Search, FileText, Building2, MapPin, Calendar, User } from 'lucide-react';

const CompanySearch = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') || '';
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const [isSearching, setIsSearching] = useState(false);

  useEffect(() => {
    if (query) {
      setIsSearching(true);
      
      // Simulate API call with timeout
      setTimeout(() => {
        const filteredResults = companies.filter(company => 
          company.name.toLowerCase().includes(query.toLowerCase()) || 
          company.creditCode.includes(query)
        );
        
        setSearchResults(filteredResults);
        setIsSearching(false);
      }, 800);
    }
  }, [query]);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="container mx-auto py-8 px-4">
        <h1 className="text-3xl font-bold mb-8 text-enterprise-primary">企业查询</h1>
        
        <div className="mb-10">
          <SearchBar />
        </div>
        
        {query && (
          <div className="mb-6">
            <h2 className="text-xl font-medium mb-2">
              <Search className="inline mr-2 h-5 w-5 text-enterprise-accent" />
              搜索结果: "{query}"
            </h2>
            <p className="text-gray-500">
              {isSearching ? '正在搜索...' : `找到 ${searchResults.length} 个匹配的企业`}
            </p>
          </div>
        )}
        
        {isSearching ? (
          <div className="flex justify-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-enterprise-accent"></div>
          </div>
        ) : searchResults.length > 0 ? (
          <div className="space-y-6">
            {searchResults.map(company => (
              <Card key={company.id} className="hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div>
                      <h3 className="text-xl font-bold text-enterprise-primary flex items-center">
                        <Building2 className="mr-2 h-5 w-5 text-enterprise-accent" />
                        {company.name}
                      </h3>
                      <div className="mt-3 space-y-2">
                        <p className="text-sm text-gray-600 flex items-center">
                          <span className="font-medium w-24">统一社会信用代码:</span> 
                          {company.creditCode}
                        </p>
                        <p className="text-sm text-gray-600 flex items-center">
                          <User className="mr-2 h-4 w-4" />
                          <span className="font-medium w-24">法定代表人:</span>
                          {company.legalRepresentative}
                        </p>
                        <p className="text-sm text-gray-600 flex items-center">
                          <Calendar className="mr-2 h-4 w-4" />
                          <span className="font-medium w-24">注册日期:</span>
                          {company.registrationDate}
                        </p>
                        <p className="text-sm text-gray-600 flex items-center">
                          <MapPin className="mr-2 h-4 w-4" />
                          <span className="font-medium w-24">注册地址:</span>
                          {company.address}
                        </p>
                      </div>
                    </div>
                    
                    <div className="mt-4 md:mt-0">
                      <Link to={`/report/${company.id}`}>
                        <Button className="bg-enterprise-accent hover:bg-enterprise-primary">
                          <FileText className="mr-2 h-5 w-5" />
                          查看风险报告
                        </Button>
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : query ? (
          <div className="text-center py-16">
            <p className="text-xl text-gray-500">未找到匹配的企业，请尝试其他关键词</p>
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-xl text-gray-500">请输入企业名称或统一社会信用代码进行查询</p>
          </div>
        )}
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

export default CompanySearch;
