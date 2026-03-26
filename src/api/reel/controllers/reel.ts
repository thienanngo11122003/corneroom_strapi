import { factories } from '@strapi/strapi';

export default factories.createCoreController('api::reel.reel', ({ strapi }) => ({
  async find(ctx) {
    const reels = await strapi.entityService.findMany('api::reel.reel', {
      sort: { createdAt: 'desc' },
    });

    const feed = reels.map((reel: any) => {
      const createdAt = new Date(reel.createdAt);
      const expiresAt = new Date(createdAt);
      
      // Reels: 90 days out for curated content
      expiresAt.setDate(expiresAt.getDate() + 90);

      return {
        ...reel,
        expires_at: expiresAt.toISOString(),
      };
    });

    return {
      data: feed,
      meta: {
        pagination: {
          page: 1,
          pageSize: feed.length,
          pageCount: 1,
          total: feed.length,
        },
      },
    };
  },
}));