import { pathsRepository } from './paths';

const mockGetStaticRoutes = jest
  .fn()
  .mockResolvedValue([{ slug: '/slug1' }, { slug: '/slug2' }]);
jest.mock('@cmpsr/nextjs-contentful-renderer', () => ({
  getStaticRoutes: () => mockGetStaticRoutes(),
}));

describe('pathsRepository', () => {
  describe('getStaticPaths', () => {
    it('should returns an array with the slugs', async () => {
      const paths = await pathsRepository.getStaticSlugs();
      expect(paths).toEqual(['/slug1', '/slug2']);
    });
  });
});
