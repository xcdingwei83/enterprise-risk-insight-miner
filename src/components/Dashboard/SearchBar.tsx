
import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/components/ui/use-toast';

const SearchBar: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchTerm)}`);
    } else {
      toast({
        title: "请输入企业名称",
        description: "请输入要查询的企业名称或统一社会信用代码",
        variant: "destructive",
      });
    }
  };

  return (
    <form onSubmit={handleSearch} className="w-full max-w-3xl mx-auto">
      <div className="flex items-center bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200">
        <Input
          type="text"
          placeholder="输入企业名称或统一社会信用代码..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="flex-grow py-6 px-4 text-lg border-none focus-visible:ring-0 focus-visible:ring-offset-0"
        />
        <Button 
          type="submit"
          size="lg"
          className="bg-enterprise-accent hover:bg-enterprise-primary text-white px-8 py-6 h-full rounded-none"
        >
          <Search className="mr-2" size={20} />
          查询
        </Button>
      </div>
    </form>
  );
};

export default SearchBar;
