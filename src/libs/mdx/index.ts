import { redis } from '../redis';

export const createMdx = async (models: unknown[], themeObj: Record<string, unknown>): Promise<string> => {
  const content = JSON.stringify(models);
  const theme = JSON.stringify(themeObj);

  return redis.save({ json: { content, theme } });
};

export const getMdx = async (
  id: string
): Promise<{
  content: unknown[];
  theme: Record<string, unknown>;
}> => {
  const json = await redis.get(id);

  let content: unknown[];
  let theme: Record<string, unknown>;

  try {
    content = JSON.parse(json.content as string);
    theme = JSON.parse(json.theme as string);
  } catch (error) {
    throw new Error('Error parsing MDX data from Redis.');
  }

  return { content, theme };
};
