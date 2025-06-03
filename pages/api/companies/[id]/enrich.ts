import type { NextApiRequest, NextApiResponse } from 'next';
import { EnrichedPost } from '../../../../types/company';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<{ posts: EnrichedPost[] } | { error: string }>
) {
    // Documentation: https://jsonplaceholder.typicode.com/guide/
}
