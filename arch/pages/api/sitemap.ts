import { NextApiRequest, NextApiResponse } from "next";
import { Blog, Page, Treatment } from "../../payload-types";
import getPayloadClient from "../../payload/payloadClient";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const payload = await getPayloadClient();

  const { docs: pages } = await payload.find({
    collection: 'pages',
    limit: 1000
  });

  const { docs: blog_posts } = await payload.find({
    collection: 'blog',
    limit: 1000
  });

  const { docs: treatments } = await payload.find({
    collection: 'treatments',
    limit: 1000
  });

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
        <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
          <url>
            <loc>${process.env.NEXT_PUBLIC_DOMAIN}</loc>
            <priority>1.00</priority>
          </url>
        ${pages.map((page: Page) => {
              if (page.slug !== "home") return `
                <url>
                  <loc>${process.env.NEXT_PUBLIC_DOMAIN}/${page.slug}</loc>
                  <priority>1.0</priority>
                </url>
              `;
        }).join("")}
        ${blog_posts.length > 0 && blog_posts.map((post: Blog) => {
                return `
                    <url>
                    <loc>${process.env.NEXT_PUBLIC_DOMAIN}/blog/${post.slug}</loc>
                    <priority>1.0</priority>
                    </url>
                `;
        }).join("")}
        ${treatments.length > 0 && treatments.filter((treatment: Treatment) => treatment.layout.length !== 0).map((treatment: Treatment) => {
          return `
              <url>
              <loc>${process.env.NEXT_PUBLIC_DOMAIN}/treatments/${treatment.slug}</loc>
              <priority>1.0</priority>
              </url>
          `;
        }).join("")}
        </urlset>
    `;

    res.setHeader("Content-Type", "text/xml");
    res.write(sitemap);
    res.end();
}