import { factories } from '@strapi/strapi';

export default factories.createCoreController('api::story.story', ({ strapi }) => ({
  async find(ctx) {
    const stories = await strapi.entityService.findMany('api::story.story', {
      sort: { createdAt: 'desc' },
    });

    const feed = stories.map((story: any) => {
      // createdAt is always defined for Strapi entries
      const createdAt = new Date(story.createdAt);
      const expiresAt = new Date(createdAt);
      expiresAt.setDate(expiresAt.getDate() + 7);

      return {
        ...story,
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
