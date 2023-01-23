import { NextApiRequest, NextApiResponse } from 'next';
import { staticPaths } from '../../src/staticPaths';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'POST') {
    res.status(405).json({ message: 'Method not allowed' });
    return;
  }
  try {
    const promises = (await staticPaths()).map(async (slug) => await res.revalidate(`/${slug}`));
    await res.revalidate('/');
    await Promise.all(promises);
    return res.json({ revalidated: true });
  } catch (err) {
    console.error(err);
    return res.status(500).send('Error revalidating');
  }
};

export default handler;
