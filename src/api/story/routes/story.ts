/**
 * story router
 */

export default {
  routes: [
    {
      method: 'GET',
      path: '/v1/community/stories',
      handler: 'story.find',
      config: {
        auth: false,
      },
    },
    {
      method: 'POST',
      path: '/v1/community/stories',
      handler: 'story.create',
      config: {
        auth: false,
      },
    },
    {
      method: 'GET',
      path: '/v1/community/stories/:id',
      handler: 'story.findOne',
    },
    {
      method: 'PUT',
      path: '/v1/community/stories/:id',
      handler: 'story.update',
    },
    {
      method: 'DELETE',
      path: '/v1/community/stories/:id',
      handler: 'story.delete',
    },
  ],
};
