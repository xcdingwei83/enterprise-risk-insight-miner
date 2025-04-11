
import React from 'react';
import { Link } from 'react-router-dom';
import { BarChart3, Search, FileText, Home } from 'lucide-react';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-enterprise-primary text-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="flex items-center space-x-3">
            <BarChart3 size={28} className="text-enterprise-accent" />
            <span className="text-xl font-bold">企业风险洞察分析系统</span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="flex items-center space-x-2 hover:text-enterprise-accent transition-colors">
              <Home size={18} />
              <span>首页</span>
            </Link>
            <Link to="/search" className="flex items-center space-x-2 hover:text-enterprise-accent transition-colors">
              <Search size={18} />
              <span>企业查询</span>
            </Link>
            <Link to="/report" className="flex items-center space-x-2 hover:text-enterprise-accent transition-colors">
              <FileText size={18} />
              <span>风险报告</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
