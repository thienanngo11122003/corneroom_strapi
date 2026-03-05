export default {
  async feed(ctx) {
    const { type } = ctx.query;

    const baseOptions: any = {
      sort: ['createdAt:desc'],
      publicationState: 'live',
      filters: {
        public: true,
      },
    };

    try {
      let data: any[] = [];

      if (type === 'story') {
        data = await strapi.entityService.findMany(
          'api::story.story',
          baseOptions
        );
      } else if (type === 'reel') {
        data = await strapi.entityService.findMany(
          'api::reel.reel',
          baseOptions
        );
      } else {
        const [stories, reels] = await Promise.all([
          strapi.entityService.findMany('api::story.story', baseOptions),
          strapi.entityService.findMany('api::reel.reel', baseOptions),
        ]);

        data = [...stories, ...reels].sort(
          (a: any, b: any) =>
            new Date(b.createdAt).getTime() -
            new Date(a.createdAt).getTime()
        );
      }

      return {
        data,
        meta: { total: data.length },
      };
    } catch (error) {
      ctx.throw(500, error);
    }
  },
};
