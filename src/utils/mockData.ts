
// Mock data for the enterprise risk analysis system

export interface Company {
  id: string;
  name: string;
  creditCode: string;
  registrationDate: string;
  registeredCapital: string;
  legalRepresentative: string;
  status: string;
  address: string;
}

export interface RiskSummary {
  type: 'legal' | 'media' | 'operation' | 'financial';
  title: string;
  riskLevel: 'high' | 'medium' | 'low';
  count: number;
  description: string;
}

export interface LegalCase {
  id: string;
  title: string;
  court: string;
  caseNumber: string;
  date: string;
  type: string;
  status: string;
  summary: string;
  url: string;
}

export interface MediaMention {
  id: string;
  title: string;
  source: string;
  date: string;
  sentiment: 'positive' | 'negative' | 'neutral';
  summary: string;
  url: string;
}

export interface OperationIssue {
  id: string;
  title: string;
  type: string;
  date: string;
  severity: 'high' | 'medium' | 'low';
  description: string;
  source: string;
  url: string;
}

export interface DataSource {
  id: string;
  title: string;
  url: string;
  type: string;
  date: string;
}

// Sample companies
export const companies: Company[] = [
  {
    id: '1',
    name: '阿里巴巴（中国）有限公司',
    creditCode: '91330100799655058B',
    registrationDate: '2007-04-23',
    registeredCapital: '1000000万人民币',
    legalRepresentative: '张勇',
    status: '存续',
    address: '浙江省杭州市余杭区五常街道荆丰路7号'
  },
  {
    id: '2',
    name: '腾讯科技（深圳）有限公司',
    creditCode: '91440300708461136T',
    registrationDate: '2000-02-24',
    registeredCapital: '200万美元',
    legalRepresentative: '马化腾',
    status: '存续',
    address: '深圳市南山区粤海街道科技中一路腾讯大厦35层'
  },
  {
    id: '3',
    name: '百度在线网络技术（北京）有限公司',
    creditCode: '91110000802115335P',
    registrationDate: '2000-01-18',
    registeredCapital: '342814万人民币',
    legalRepresentative: '梁志祥',
    status: '存续',
    address: '北京市海淀区上地十街10号百度大厦2层'
  }
];

// Risk summaries for Alibaba
export const alibabaRiskSummaries: RiskSummary[] = [
  {
    type: 'legal',
    title: '法律诉讼风险',
    riskLevel: 'medium',
    count: 24,
    description: '存在多起知识产权纠纷和竞业限制诉讼'
  },
  {
    type: 'media',
    title: '负面舆情风险',
    riskLevel: 'low',
    count: 8,
    description: '少量负面新闻，主要涉及平台治理问题'
  },
  {
    type: 'operation',
    title: '经营异常风险',
    riskLevel: 'low',
    count: 3,
    description: '历史上存在少量行政处罚记录'
  },
  {
    type: 'financial',
    title: '财务风险',
    riskLevel: 'high',
    count: 12,
    description: '税务处罚与金融监管问题需注意'
  }
];

// Legal cases for Alibaba
export const alibabaLegalCases: LegalCase[] = [
  {
    id: 'l1',
    title: '商标侵权纠纷案',
    court: '北京知识产权法院',
    caseNumber: '(2022)京73民初1234号',
    date: '2022-06-15',
    type: '知识产权',
    status: '已结案',
    summary: '因商标使用纠纷被诉侵权，最终法院判决阿里巴巴胜诉',
    url: 'https://wenshu.court.gov.cn/website/wenshu/181107ANFZ0BXSK4/index.html'
  },
  {
    id: 'l2',
    title: '不正当竞争纠纷',
    court: '杭州互联网法院',
    caseNumber: '(2023)浙0192民初567号',
    date: '2023-03-22',
    type: '竞争法',
    status: '审理中',
    summary: '因平台规则设置被指控构成滥用市场支配地位',
    url: 'https://wenshu.court.gov.cn/website/wenshu/181107ANFZ0BXSK4/index.html'
  },
  {
    id: 'l3',
    title: '劳动合同纠纷',
    court: '杭州市余杭区人民法院',
    caseNumber: '(2023)浙0110民初789号',
    date: '2023-01-10',
    type: '劳动纠纷',
    status: '已结案',
    summary: '前员工起诉违法解除劳动合同，最终达成调解',
    url: 'https://wenshu.court.gov.cn/website/wenshu/181107ANFZ0BXSK4/index.html'
  }
];

// Media mentions for Alibaba
export const alibabaMediaMentions: MediaMention[] = [
  {
    id: 'm1',
    title: '阿里巴巴因反垄断被处罚182亿元',
    source: '人民网',
    date: '2021-04-10',
    sentiment: 'negative',
    summary: '市场监管总局对阿里巴巴集团处以182.28亿元罚款，认定其滥用市场支配地位',
    url: 'https://finance.people.com.cn/n1/2021/0410/c1004-32074708.html'
  },
  {
    id: 'm2',
    title: '阿里巴巴公布碳中和计划',
    source: '新华网',
    date: '2022-12-05',
    sentiment: 'positive',
    summary: '阿里巴巴宣布2030年前实现自身运营碳中和，并推出环保公益计划',
    url: 'http://www.xinhuanet.com/tech/20221205/index.html'
  },
  {
    id: 'm3',
    title: '阿里巴巴调整组织架构',
    source: '财新网',
    date: '2023-03-28',
    sentiment: 'neutral',
    summary: '阿里巴巴宣布拆分为六大业务集团，并计划各自独立上市融资',
    url: 'https://www.caixin.com/2023-03-28/101920483.html'
  }
];

// Operation issues for Alibaba
export const alibabaOperationIssues: OperationIssue[] = [
  {
    id: 'o1',
    title: '电商平台商品虚假宣传行政处罚',
    type: '市场监管',
    date: '2022-09-15',
    severity: 'medium',
    description: '因平台商品存在虚假宣传问题，被市场监管部门罚款50万元',
    source: '国家市场监督管理总局',
    url: 'http://www.samr.gov.cn/fldys/tzgg/xzcf/202209/t20220915_351244.html'
  },
  {
    id: 'o2',
    title: '未依法履行个人信息保护义务',
    type: '数据合规',
    date: '2022-07-21',
    severity: 'high',
    description: '因App违法收集用户个人信息，被网信办责令整改并处罚',
    source: '国家互联网信息办公室',
    url: 'http://www.cac.gov.cn/2022-07/21/c_1660021534306352.htm'
  }
];

// Data sources
export const dataSources: DataSource[] = [
  {
    id: 'ds1',
    title: '国家企业信用信息公示系统',
    url: 'https://www.gsxt.gov.cn/',
    type: '政府数据库',
    date: '2023-12-01'
  },
  {
    id: 'ds2',
    title: '中国裁判文书网',
    url: 'https://wenshu.court.gov.cn/',
    type: '司法数据库',
    date: '2023-11-28'
  },
  {
    id: 'ds3',
    title: '国家知识产权局官网',
    url: 'https://www.cnipa.gov.cn/',
    type: '政府数据库',
    date: '2023-12-05'
  },
  {
    id: 'ds4',
    title: '企查查',
    url: 'https://www.qcc.com/',
    type: '商业数据库',
    date: '2023-12-10'
  },
  {
    id: 'ds5',
    title: '天眼查',
    url: 'https://www.tianyancha.com/',
    type: '商业数据库',
    date: '2023-12-10'
  }
];

// Chart data
export const legalTypeData = [
  { name: '知识产权', value: 8 },
  { name: '劳动纠纷', value: 6 },
  { name: '合同纠纷', value: 5 },
  { name: '竞争法', value: 3 },
  { name: '消费者权益', value: 2 }
];

export const mediaSentimentData = [
  { name: '正面', value: 12 },
  { name: '中性', value: 27 },
  { name: '负面', value: 8 }
];

export const monthlyRiskTrendData = [
  { name: '1月', value: 5 },
  { name: '2月', value: 7 },
  { name: '3月', value: 3 },
  { name: '4月', value: 9 },
  { name: '5月', value: 12 },
  { name: '6月', value: 8 },
  { name: '7月', value: 5 },
  { name: '8月', value: 4 },
  { name: '9月', value: 6 },
  { name: '10月', value: 8 },
  { name: '11月', value: 11 },
  { name: '12月', value: 15 }
];

export const riskComparisonData = [
  { name: '阿里巴巴', value: 47 },
  { name: '腾讯', value: 32 },
  { name: '百度', value: 29 },
  { name: '京东', value: 38 },
  { name: '美团', value: 25 }
];
