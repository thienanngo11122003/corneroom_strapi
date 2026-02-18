/**
 * reel router
 */

export default {
  routes: [
    {
      method: 'GET',
      path: '/v1/community/reels',
      handler: 'reel.find',
    },
    {
      method: 'POST',
      path: '/v1/community/reels',
      handler: 'reel.create',
    },
    {
      method: 'GET',
      path: '/v1/community/reels/:id',
      handler: 'reel.findOne',
    },
    {
      method: 'PUT',
      path: '/v1/community/reels/:id',
      handler: 'reel.update',
    },
    {
      method: 'DELETE',
      path: '/v1/community/reels/:id',
      handler: 'reel.delete',
    },
  ],
};
