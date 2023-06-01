import { buildConfig } from 'payload/config';
import seo from '@payloadcms/plugin-seo';
import { cloudStorage } from '@payloadcms/plugin-cloud-storage';
import { s3Adapter } from '@payloadcms/plugin-cloud-storage/s3';

import path from 'path';
// import Examples from './collections/Examples';
import Users from './collections/Users';
import Pages from './collections/Pages';
import Team from './collections/Team';
import Treatments from './collections/Treatments';
import HeaderNavigation from './globals/HeaderNavigation';
import FooterNavigation from './globals/FooterNavigation';
import Blog from './collections/Blog';
import Media from './collections/Media';

import Icon from './custom/Icon'
import Logo from './custom/Logo'
import Business from './globals/Business';
import ContactFormSubmissions from './collections/ContactFormSubmittions';

const adapter = s3Adapter({
  config: {
    endpoint: process.env.NEXT_PUBLIC_S3_ENDPOINT as string,
    region: process.env.SPACES_REGION,
    credentials: {
      accessKeyId: process.env.SPACES_KEY as string,
      secretAccessKey: process.env.SPACES_SECRET as string,
    },
  },
  bucket: process.env.NEXT_PUBLIC_SPACES_NAME as string,
})

export default buildConfig({
  // serverURL: process.env.SERVER_URL,
  admin: {
    user: Users.slug,
    components: {
      graphics: {
        Logo,
        Icon,
      }
    },
    meta: {
      favicon: '/favicon.png',
      titleSuffix: "- Mistrata",
      ogImage: '/og-image.png',
    }
  },
  collections: [
    Users,
    Pages,
    Team,
    Treatments,
    Blog,
    Media,
    ContactFormSubmissions
  ],
  globals: [
    Business,
    HeaderNavigation,
    FooterNavigation
  ],
  typescript: {
    outputFile: path.resolve(__dirname, 'payload-types.ts'),
  },
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, 'generated-schema.graphql'),
  },
  plugins: [
    cloudStorage({
      collections: {
        'media': {
          prefix: process.env.INTERNAL_CLIENT_ID,
          disableLocalStorage: true,
          generateFileURL: ({ filename }: any) => "/media/" + filename,
          adapter,
        },
      },
    }),
    // seo({
    //   collections: [
    //     'pages',
    //     'blog',
    //     'treatments'
    //   ],
    //   tabbedUI: true,
    //   // Add back in once media collection added
    //   // uploadsCollection: 'media',
    //   generateTitle: async ({ doc }: any) => {
    //     if (typeof doc.title.value === 'string' && doc.title.value.length > 0) {
    //       const business = await fetch(`${process.env.PAYLOAD_PUBLIC_SERVER_URL}/api/globals/business`).then((res) => res.json())
    //       if (business.address.city && business.name) {
    //         return `${doc.title.value} | ${business.name} | ${business.address.city}`;
    //       } else if (business.name) {
    //         return `${doc.title.value} | ${business.name}`;
    //       } else {
    //         alert("Please add a business name under the global 'business' in order to generate a meta title.");
    //       }
    //     } else {
    //       alert("Please give your page a title in order to generate a meta title.");
    //     }
    //     return doc.meta.title || null;
    //   },
    //   generateDescription: async ({ doc }: any) => {
    //     const business = await fetch(`${process.env.PAYLOAD_PUBLIC_SERVER_URL}/api/globals/business`).then((res) => res.json());
    //     const { name, address: { city } } = business;
    //     if (name && city) {
    //       // no-cors fetch to avoid CORS error
    //       const { meta_description } = await fetch(`https://ai.mistrata.com/api/meta-description?practice_name=${name}&practice_location=${city}&page_title=${doc.title.value}`).then((res) => res.json());
    //       return meta_description.replaceAll("\n", "").replaceAll(`"`, "") || null;
    //     }
    //     return doc.meta.description || null;
    //   }
    // }),
  ]
});
