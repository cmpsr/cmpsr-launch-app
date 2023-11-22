import { mdxRepository } from './mdx';

jest.mock('../libs/redis', () => ({
  redis: {
    save: (...args) => mockSave(...args),
    get: (...args) => mockGet(...args),
  },
}));

const mockSave = jest.fn().mockReturnValue('id');
const mockGet = jest.fn().mockResolvedValue({
  content: JSON.stringify(['models']),
  theme: JSON.stringify({ theme: 'theme' }),
});

describe('createMdx', () => {
  it('should create the mdx', async () => {
    const content = ['models'];
    const theme = { theme: 'theme' };

    const result = await mdxRepository.createMdx(content, theme);

    expect(result).toEqual('id');
    expect(mockSave).toHaveBeenCalledWith({
      json: { content: JSON.stringify(content), theme: JSON.stringify(theme) },
    });
  });

  it('should throw an error if the save fails', async () => {
    mockSave.mockRejectedValue(new Error('error'));

    const content = ['models'];
    const theme = { theme: 'theme' };

    await expect(mdxRepository.createMdx(content, theme)).rejects.toThrow('error');
  });
});

describe('getMdx', () => {
  it('should get the mdx', async () => {
    const result = await mdxRepository.getMdx('id');

    expect(result).toEqual({
      content: ['models'],
      theme: { theme: 'theme' },
    });

    expect(mockGet).toHaveBeenCalledWith('id');
  });

  it('should throw an error if the fetch fails', async () => {
    mockGet.mockRejectedValue(new Error('error'));

    await expect(mdxRepository.getMdx('id')).rejects.toThrow('error');
  });
});
