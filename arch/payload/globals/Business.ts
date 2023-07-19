import { GlobalConfig } from "payload/types";

const Business: GlobalConfig = {
    slug: "business",
    label: "Business",
    access: {
        read: () => true
    },
    fields: [
        {
            name: "name",
            type: "text",
            required: true,
        },
        {
            name: "tagline",
            type: "text",
            admin: {
                description: "A 25-40 character phrase that describes your business. Including locational information is beneficial."
            },
            defaultValue: "Family friendly dentist in X",
            required: true,
        },
        {
            name: "description",
            type: "textarea",
            admin: {
                description: "A longer description of your business and the services it offers."
            },
            required: true,
        },
        {
            name: "logo",
            type: "upload",
            relationTo: 'media',
            label: 'Logo',
            required: true,
        },
        {
            name: "favicon",
            type: "upload",
            relationTo: 'media',
            label: 'Favicon',
            admin: {
                description: "Must be a 16x16 pixel PNG file."
            },
            required: true,
        },
        {
            name: 'email',
            type: 'text',
            required: true,
        },
        {
            name: "address",
            type: "group",
            fields: [
                {
                    name: 'line1',
                    type: 'text',
                    label: 'Line 1',
                    required: true,
                },
                {
                    name: 'line2',
                    type: 'text',
                    label: 'Line 2',
                    required: false,
                },
                {
                    name: 'line3',
                    type: 'text',
                    label: 'Line 3',
                    required: false,
                },
                {
                    name: 'city',
                    type: 'text',
                    required: true,
                    label: 'City/Town'
                },
                {
                    name: 'state',
                    type: 'text',
                    required: true,
                    label: 'State/County/Province'
                },
                {
                    name: 'postal_code',
                    label: 'Postal code',
                    type: 'text',
                    required: true,
                },
            ]
        },
        {
            name: "phone",
            type: "text",
            required: true,
        }
    ],
    hooks: {
        afterChange: [(args) => {
            if (!process.env.PUSH_DEPLOY_URL) return;
          fetch(process.env.PUSH_DEPLOY_URL)
        }]
    }
}

export default Business