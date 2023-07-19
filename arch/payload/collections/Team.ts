import { CollectionConfig } from 'payload/types';

// Example Collection - For reference only, this must be added to payload.config.ts to be used.
const Team: CollectionConfig = {
  slug: 'team',
  labels: {
    singular: 'Team member',
    plural: 'Team'
  },
  access: {
    read: () => true
  },
  admin: {
    useAsTitle: 'name',
  },
  fields: [
    {
        name: 'name',
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
              return siblingData.name.toLowerCase().replace(/ /g, '-')
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
        name: 'role',
        type: 'text',
        required: true,
    },
    {
        name: 'short_bio',
        label: 'Short bio',
        type: 'textarea',
        required: false,
    },
    {
        name: 'long_bio',
        label: 'Long bio',
        type: 'richText',
        required: false,
    },
    {
      name: 'index',
      type: 'number',
      required: false,
      admin: {
        description: "Team members with a lower index will appear first on your website. Those without an index will appear last and will be sorted alphabetically."
      }
    },
    {
        name: 'twitter_url',
        label: 'Twitter profile URL',
        type: 'text',
        required: false,
        hooks: {
          beforeValidate: [
            ({ data }) => {
              if (data?.twitter_url) {
                return "https://twitter.com/" + data.twitter_url.split("/")[data.twitter_url.split("/").length - 1]
              } else {
                return null
              }
            }
          ],
        },
    },
    {
        name: 'linkedin_url',
        label: 'LinkedIn profile URL',
        type: 'text',
        required: false,
        hooks: {
          beforeValidate: [
            ({ data }) => {
              if (data?.linkedin_url) {
                return "https://linkedin.com/" + data.linkedin_url.split("/")[data.linkedin_url.split("/").length - 1]
              } else {
                return null
              }
            }
          ],
        },
    },
    {
        name: 'website_url',
        label: 'Website URL',
        type: 'text',
        required: false,
        hooks: {
          beforeValidate: [
            ({ data }) => {
              if (data?.website_url) {
                return "https://" + data.website_url.split("//")[data.website_url.split("//").length - 1]
              } else {
                return null
              }
            }
          ]
        }
    },
  ],
  hooks: {
    afterChange: [(args) => {
      if (!process.env.PUSH_DEPLOY_URL) return;
      fetch(process.env.PUSH_DEPLOY_URL)
    }]
  }
}

export default Team;