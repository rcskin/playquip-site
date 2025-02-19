// sanity/schemas/product.js
export default {
    name: 'product',
    title: 'Product',
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
        name: 'categories',
        title: 'Categories',
        type: 'array',
        of: [
          { type: 'reference', to: [{ type: 'category' }] }
        ]
      },
      {
        name: 'mainImage',
        title: 'Main Image',
        type: 'image',
        options: { hotspot: true },
      },
      {
        name: 'galleryImages',
        title: 'Gallery Images',
        type: 'array',
        of: [{ type: 'image' }],
        options: { layout: 'grid' },
      },
      {
        name: 'threeDModelUrl',
        title: '3D Model URL (iframe src)',
        type: 'url',
      },
      {
        name: 'description',
        title: 'Description',
        type: 'blockContent',
      },
      {
        name: 'specImage',
        title: 'Specifications Image',
        type: 'image',
        description: 'An image or technical drawing that visually represents product specifications.',
        options: { hotspot: true },
      },
      {
        name: 'specifications',
        title: 'Specifications',
        type: 'array',
        of: [
          {
            type: 'object',
            fields: [
              { name: 'specName', title: 'Spec Name', type: 'string' },
              { name: 'specValue', title: 'Spec Value', type: 'string' }
            ]
          }
        ]
      },
      {
        name: 'downloads',
        title: 'Downloads',
        type: 'array',
        of: [
          {
            type: 'object',
            fields: [
              { name: 'title', title: 'Download Title', type: 'string' },
              { name: 'file', title: 'File', type: 'file' },
            ]
          }
        ]
      },
    ],
  };
  