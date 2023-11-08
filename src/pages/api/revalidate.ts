import { NextApiRequest, NextApiResponse } from 'next';
import { staticPaths } from '../../staticPaths';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'POST') {
    res.status(405).json({ message: 'Method not allowed' });
    return;
  }
  try {
    const allPaths = await staticPaths();
    if (!allPaths.includes('/')) {
      allPaths.push('/');
    }

    const promises = allPaths.map((slug) => res.revalidate(slug));
    await Promise.all(promises);

    return res.json({ revalidated: true });
  } catch (err) {
    console.error(err);
    return res.status(500).send('Error revalidating');
  }
};

export default handler;
