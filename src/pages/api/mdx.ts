import Cors from 'cors';
import type { NextApiRequest, NextApiResponse } from 'next';
import { generateMdx } from '@cmpsr/nextjs-contentful-renderer';
import { mdxRepository } from '../../repositories/mdx';

const cors = Cors({
  methods: ['POST', 'GET', 'HEAD'],
});

type Data = {
  id: string;
};

type ErrorResponse = {
  message: string;
};

function runMiddleware<T = null>(
  req: NextApiRequest,
  res: NextApiResponse,
  fn: (req: NextApiRequest, res: NextApiResponse, next: (result: T) => void) => void
) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result: T) => {
      if (result instanceof Error) {
        return reject(result);
      }

      return resolve(result);
    });
  });
}

const handler = async (req: NextApiRequest, res: NextApiResponse<Data | ErrorResponse>) => {
  await runMiddleware(req, res, cors);

  if (req.method === 'OPTIONS') {
    res.setHeader('Allow', 'POST');
    return res.status(202).json({ message: 'ok' });
  }

  if (req.method !== 'POST') {
    res.status(405).json({ message: 'Method not allowed' });
    return;
  }
  if (req.headers['X-Composer-Api'] !== 'X-Composer-Api' && req.headers['x-composer-api'] !== 'X-Composer-Api') {
    res.status(403).json({ message: 'Request not allowed' });
    return;
  }
  const body = JSON.parse(req.body);
  const mdx = await generateMdx([body]);
  const id = await mdxRepository.createMdx(mdx, body.theme);

  res.status(200).json({ id });
};

export default handler;
