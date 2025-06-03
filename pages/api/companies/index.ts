import type { NextApiRequest, NextApiResponse } from 'next';
import { Company } from '../../../types/company';

const companies: Company[] = [
  {
    id: 'company_1',
    name: 'Acme Inc',
    industry: 'Manufacturing',
    enrichedPosts: null,
  },
  {
    id: 'company_2',
    name: 'Globex Corp',
    industry: 'Finance',
    enrichedPosts: null,
  },
  {
    id: 'company_3',
    name: 'Initech',
    industry: 'Technology',
    enrichedPosts: null,
  },
];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Company[]>
) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', 'GET');
    return res.status(405).end('Method Not Allowed');
  }
  res.status(200).json(companies);
}
