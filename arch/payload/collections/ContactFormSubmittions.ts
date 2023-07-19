import { CollectionConfig } from 'payload/types';

const ContactFormSubmissions: CollectionConfig = {
  slug: 'contact-form-submissions',
  labels: {
    singular: 'Contact Form Submission',
    plural: 'Contact Form Submissions',
  },
  access: {
    create: () => true,
  },
  fields: [
    {
      name: 'first_name',
      type: 'text',
      required: true,
    },
    {
      name: 'last_name',
      type: 'text',
      required: true,
    },
    {
      name: 'email',
      type: 'text',
      required: true,
    },
    {
      name: 'phone',
      type: 'text',
      required: false,
    },
    {
      name: 'message',
      type: 'text',
      required: true,
    },
  ],
};

export default ContactFormSubmissions;