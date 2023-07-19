import { buildConfig } from 'payload/config';
import seo from '@payloadcms/plugin-seo';
import { cloudStorage } from '@payloadcms/plugin-cloud-storage';
import { s3Adapter } from '@payloadcms/plugin-cloud-storage/s3';

import path from 'path';
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
    forcePathStyle: true,
    credentials: {
      accessKeyId: process.env.SPACES_KEY as string,
      secretAccessKey: process.env.SPACES_SECRET as string,
    },
  },
  bucket: process.env.NEXT_PUBLIC_SPACES_NAME as string,
});

export default buildConfig({
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
  plugins: [
    cloudStorage({
      collections: {
        'media': {
          prefix: process.env.INTERNAL_CLIENT_ID,
          disablePayloadAccessControl: true,
          adapter,
        }
      },
    }),
    seo({
      collections: [
        'pages',
        'blog',
        'treatments'
      ],
      tabbedUI: true,
    }),
  ]
});
