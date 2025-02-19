// sanity/schemas/blockContent.js
export default {
    title: 'Block Content',
    name: 'blockContent',
    type: 'array',
    of: [
      { type: 'block' },
      { type: 'image' },
    ],
  };
  