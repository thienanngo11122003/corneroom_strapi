export default {
  routes: [
    {
      method: 'GET',
      path: '/v1/community/public/feed',
      handler: 'community.feed',
      config: {
        auth: false,
      },
    },
  ],
};
