import { CollectionBeforeChangeHook, CollectionConfig } from 'payload/types';

const Blog: CollectionConfig = {
  slug: 'blog',
  labels: {
    singular: 'Blog post',
    plural: 'Blog posts'
  },
  access: {
    read: () => true
  },
  admin: {
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'slug',
      type: 'text',
      required: false,
      admin: {
        hidden: true
      },
      hooks: {
        beforeValidate: [
          ({ data, siblingData }) => {
            return siblingData.title.toLowerCase().replace(/ /g, '-')
          }
        ],
      },
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      label: 'Image',
      required: true,
    },
    {
        name: 'author',
        type: 'relationship',
        relationTo: 'team',
        hasMany: false,
        required: true,
    },
    {
        name: 'excerpt',
        type: 'text',
        required: true,
    },
    {
        name: 'content',
        type: 'richText',
        required: true,
        admin: {
          elements: [
            'h2',
            'h3',
            'h4',
            'ul',
            'ol',
            'link',
            'upload'
          ],
          leaves: [
            'bold',
            'italic',
          ],
          upload: {
            collections: {
              media: {
                fields: [
                  {
                    name: 'alt',
                    type: 'text',
                    required: true
                  }
                ],
              },
            },
          },
          link: {
            
          }
        }
    },
    {
        name: 'reading_time',
        label: 'Reading time',
        type: 'number',
        required: false,
        admin: {
            hidden: true
        },
        hooks: {
            beforeValidate: [
                ({ data, siblingData }) => {
                    const wordCount = JSON.stringify(siblingData.content).split(' ').length;
                    return Math.ceil(wordCount / 200);
                }
            ]
        }
    }
  ],
  hooks: {
    afterChange: [(args) => {
      if (!process.env.PUSH_DEPLOY_URL) {
        return;
      };
      fetch(new URL(process.env.PUSH_DEPLOY_URL))
    }],
    beforeChange: [
      async ({ data }) => {
        if (!data.meta.title && typeof data.title === 'string' && data.title.length > 0) {
          console.log("Fetching business name from public server")
          const business = await fetch(`${process.env.PAYLOAD_PUBLIC_SERVER_URL}/api/globals/business`).then((res) => res.json())
          if (business.name) {
            return {...data, meta: { title: `${data.title} | ${business.name}` }};
          } else {
            return {...data, meta: { title: `${data.title}` }};
          }
        }
        return data;
      }
    ] as CollectionBeforeChangeHook[]
  }
}

export default Blog;