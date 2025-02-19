// sanity/schemas/category.js
export default {
    name: 'category',
    title: 'Category',
    type: 'document',
    fields: [
      { name: 'title', title: 'Title', type: 'string' },
      {
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        options: {
          source: 'title',
          maxLength: 96,
        },
      },
      {
        name: 'description',
        title: 'Description',
        type: 'blockContent',
      },
      {
        name: 'image',
        title: 'Category Image',
        type: 'image',
        options: { hotspot: true },
      },
      {
        name: 'products',
        title: 'Products',
        type: 'array',
        of: [
          {
            type: 'reference',
            to: [{ type: 'product' }]
          }
        ]
      },
      {
        name: 'umbrellaCategory',
        title: 'Umbrella Category',
        type: 'reference',
        to: [{ type: 'umbrellaCategory' }],
      },
    ],
  };
  