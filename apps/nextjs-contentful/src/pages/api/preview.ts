import { NextApiRequest, NextApiResponse } from 'next';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const isPreview = req.query.preview !== 'false';
  if (isPreview) {
    res.setPreviewData({});
  } else {
    res.clearPreviewData();
  }
  res.json({ previewModeEnabled: isPreview });
};

export default handler;
