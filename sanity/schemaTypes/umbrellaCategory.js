// sanity/schemas/umbrellaCategory.js
export default {
    name: 'umbrellaCategory',
    title: 'Umbrella Category',
    type: 'document',
    fields: [
      { name: 'title', title: 'Title', type: 'string' },
      {
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        options: { source: 'title', maxLength: 96 },
      },
      {
        name: 'description',
        title: 'Description',
        type: 'blockContent',
      },
      {
        name: 'image',
        title: 'Umbrella Category Image',
        type: 'image',
        options: { hotspot: true },
      },
      {
        name: 'categories',
        title: 'Categories',
        type: 'array',
        of: [
          {
            type: 'reference',
            to: [{ type: 'category' }],
          },
        ],
      },
    ],
  }
  