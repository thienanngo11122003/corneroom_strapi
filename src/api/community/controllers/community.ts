export default {
  async feed(ctx) {
    const { type } = ctx.query;

    if (type === 'story') {
      return await strapi.entityService.findMany('api::story.story', {
        populate: '*',
        sort: { createdAt: 'desc' },
      });
    }

    if (type === 'reel') {
      return await strapi.entityService.findMany('api::reel.reel', {
        populate: '*',
        sort: { createdAt: 'desc' },
      });
    }

    const [stories, reels] = await Promise.all([
      strapi.entityService.findMany('api::story.story', {
        populate: '*',
        sort: { createdAt: 'desc' },
      }),
      strapi.entityService.findMany('api::reel.reel', {
        populate: '*',
        sort: { createdAt: 'desc' },
      }),
    ]);

    ctx.body = [
      ...stories.map((s) => ({ ...s, type: 'story' })),
      ...reels.map((r) => ({ ...r, type: 'reel' })),
    ];
  },
};
