import { createClient } from 'redis';
import { v4 as uuid } from 'uuid';

/** Default TTL for cached data */
const FIVE_MINUTES = 300;
export const TTL_IN_SECONDS = FIVE_MINUTES;

const handleError = (error: Error) => {
  console.error(error);
  throw error; // Propagate the error
};

if (!process.env.REDIS_URL) {
  throw new Error('REDIS_URL environment variable is missing.');
}

const client = createClient({ url: process.env.REDIS_URL });

const connect = async () => {
  if (!client.isOpen) {
    await client.connect();
  }
};

const disconnect = async () => {
  if (client.isOpen) {
    await client.quit();
  }
};

const save = async ({
  id,
  json,
  expire = TTL_IN_SECONDS,
}: {
  id?: string;
  expire?: number;
  json: Record<string, unknown>;
}): Promise<string> => {
  try {
    const key = id || uuid();
    const value = JSON.stringify(json);

    await connect();
    await client.set(key, value, { EX: expire });
    await disconnect();

    return key;
  } catch (error) {
    handleError(error);
  }
};

const get = async (id: string): Promise<Record<string, unknown> | null> => {
  try {
    await connect();
    const stored = await client.get(id);
    await disconnect();

    return stored ? JSON.parse(stored) : null;
  } catch (error) {
    handleError(error);
  }
};

export const redis = { get, save };
