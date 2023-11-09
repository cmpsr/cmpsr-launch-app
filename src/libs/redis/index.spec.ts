import { createClient } from 'redis';
import { redis } from '.';

jest.mock('uuid', () => ({
  v4: () => 'uuid',
}));

console.error = jest.fn();

jest.mock('redis', () => ({
  createClient: jest.fn().mockImplementation(function () {
    let isOpen = false;

    return {
      get isOpen() {
        return isOpen;
      },
      get: (...args) => mockGet(...args),
      set: (...args) => mockSet(...args),
      connect: () => {
        isOpen = true;
        return mockConnect();
      },
      quit: () => {
        isOpen = false;
        return mockDisconnect();
      },
    };
  }),
}));

const mockCreateClient = createClient as jest.Mock;
const mockConnect = jest.fn().mockResolvedValue(true);
const mockDisconnect = jest.fn();
const mockSet = jest.fn();
const mockGet = jest.fn().mockReturnValue(JSON.stringify({ stored: 'stored json' }));

describe('redis', () => {
  beforeEach(() => {
    mockConnect.mockClear();
    mockDisconnect.mockClear();
    mockSet.mockClear();
    mockGet.mockClear();
  });

  beforeAll(() => {
    expect(mockCreateClient).toHaveBeenCalledWith({
      url: process.env.REDIS_URL,
    });
  });

  describe('get', () => {
    it('should get the cached data by id', async () => {
      const result = await redis.get('id');

      expect(mockGet).toHaveBeenCalledWith('id');
      expect(mockConnect).toHaveBeenCalledTimes(1);
      expect(mockDisconnect).toHaveBeenCalledTimes(1);

      expect(result).toEqual({ stored: 'stored json' });
    });

    it('should return null if the id is not found', async () => {
      mockGet.mockReturnValueOnce(null);

      const result = await redis.get('id');

      expect(result).toBeNull();
    });
  });

  describe('save', () => {
    const json = { json: 'json' };

    it('should save the data', async () => {
      const result = await redis.save({ json });

      expect(result).toEqual('uuid');
      expect(mockSet).toHaveBeenCalledWith('uuid', JSON.stringify(json), {
        EX: 300,
      });
      expect(mockConnect).toHaveBeenCalledTimes(1);
      expect(mockDisconnect).toHaveBeenCalledTimes(1);
    });

    it('should save the data with a custom id', async () => {
      const result = await redis.save({ json, id: 'custom-id' });

      expect(result).toEqual('custom-id');
      expect(mockSet).toHaveBeenCalledWith('custom-id', JSON.stringify(json), {
        EX: 300,
      });
    });

    it('should save the data with a custom expire ttl value', async () => {
      const expire = 60 * 60 * 24;

      const result = await redis.save({
        json,
        expire,
      });

      expect(result).toEqual('uuid');
      expect(mockSet).toHaveBeenCalledWith('uuid', JSON.stringify(json), {
        EX: expire,
      });
    });
  });

  describe('blows up', () => {
    beforeEach(() => {
      mockConnect.mockRejectedValueOnce(new Error('redis blew up'));
      mockDisconnect.mockRejectedValueOnce(new Error('redis blew up'));
      mockGet.mockRejectedValueOnce(new Error('redis blew up'));
      mockSet.mockRejectedValueOnce(new Error('redis blew up'));
    });

    it('should throw when getting and redis is not available', async () => {
      await expect(redis.get('id')).rejects.toThrow('redis blew up');
    });

    it('should throw when saving and redis is not available', async () => {
      await expect(redis.save({ json: { json: 'json' } })).rejects.toThrow('redis blew up');
    });
  });
});
