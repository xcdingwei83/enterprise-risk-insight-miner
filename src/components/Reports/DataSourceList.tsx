
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Link2, ExternalLink, Calendar, Database } from 'lucide-react';

interface DataSource {
  id: string;
  title: string;
  url: string;
  type: string;
  date: string;
}

interface DataSourceListProps {
  sources: DataSource[];
}

const DataSourceList: React.FC<DataSourceListProps> = ({ sources }) => {
  return (
    <Card className="shadow-md">
      <CardHeader>
        <CardTitle className="flex items-center">
          <Link2 className="mr-2" />
          数据来源与引用
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {sources.map((source) => (
            <div key={source.id} className="border-b border-gray-200 pb-3">
              <div className="flex justify-between items-start">
                <h3 className="font-medium text-enterprise-primary">{source.title}</h3>
                <span className="text-xs bg-gray-100 px-2 py-1 rounded-full">{source.type}</span>
              </div>
              <div className="flex items-center text-sm text-gray-500 mt-1">
                <Calendar className="h-4 w-4 mr-1" />
                <span>{source.date}</span>
              </div>
              <div className="flex items-center mt-2">
                <Database className="h-4 w-4 mr-1 text-enterprise-accent" />
                <a 
                  href={source.url} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-enterprise-accent hover:underline flex items-center"
                >
                  查看原始数据 
                  <ExternalLink className="ml-1 h-3 w-3" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default DataSourceList;
