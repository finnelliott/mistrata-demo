# Mistrata Demo - Dentist Website Template

This is a high-quality template codebase for developing performant websites for dentists. It is built using [Payload CMS](https://payloadcms.com/) and [Next.js](https://nextjs.org/), providing a powerful and flexible foundation for your project. A deployed demo of this template can be found [here](https://demo.mistrata.com/).

## Features

- Customizable collections for Users, Pages, Team, Treatments, Blog, Media, and Contact Form Submissions
- Global settings for Business, Header Navigation, and Footer Navigation
- SEO optimization using the Payload CMS SEO plugin
- Cloud storage integration with Digital Ocean Spaces or S3 using the Payload CMS Cloud Storage plugin
- Custom Logo and Icon components for branding

## Getting Started

1. Clone this repository:

```bash
git clone https://github.com/finnelliott/mistrata-demo.git
```

2. Install dependencies:

```bash
cd mistrata-demo
npm install
```

3. Update `.env.example` with your own API keys and rename it to `.env.local`.

4. Start the development server:

```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Customization

You can customize the template by modifying the collections, globals, and components in the `payload.config.js` file. For more information on how to work with Payload CMS, please refer to the [official documentation](https://payloadcms.com/docs).

## Deployment

To deploy your website, follow the [Next.js deployment documentation](https://nextjs.org/docs/deployment).

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.