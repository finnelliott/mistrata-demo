import { CollectionConfig } from "payload/types";

const Media: CollectionConfig = {
    slug: 'media',
    access: {
      read: () => true
    },
    upload: {
      // imageSizes: [
      //   {
      //     name: 'small_landscape',
      //     width: 640,
      //     height: 480,
      //     position: 'centre',
      //   },
      //   {
      //     name: 'medium_landscape',
      //     width: 768,
      //     height: 576,
      //     position: 'centre',
      //   },
      //   {
      //     name: 'large_landscape',
      //     width: 1280,
      //     height: 960,
      //     position: 'centre',
      //   },
      //   {
      //     name: 'small_square',
      //     width: 640,
      //     height: 640,
      //     position: 'centre',
      //   },
      //   {
      //     name: 'medium_square',
      //     width: 768,
      //     height: 768,
      //     position: 'centre',
      //   },
      //   {
      //     name: 'large_square',
      //     width: 1280,
      //     height: 1280,
      //     position: 'centre',
      //   },
      //   {
      //     name: 'small_portrait',
      //     width: 480,
      //     height: 640,
      //     position: 'centre',
      //   },
      //   {
      //     name: 'medium_portrait',
      //     width: 576,
      //     height: 768,
      //     position: 'centre',
      //   },
      //   {
      //     name: 'large_portrait',
      //     width: 960,
      //     height: 1280,
      //     position: 'centre',
      //   },
      // ]
    },
    fields: [
      {
        name: 'alt',
        type: 'text',
        required: true,
        label: 'Alt text'
      }
    ],
    hooks: {
      afterChange: [(args) => {
        if (!process.env.PUSH_DEPLOY_URL) return;
        fetch(process.env.PUSH_DEPLOY_URL)
      }]
    }
  };
  
  export default Media;