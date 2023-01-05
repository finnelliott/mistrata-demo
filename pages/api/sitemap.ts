import { NextApiRequest, NextApiResponse } from "next";
import { Blog, Page } from "../../payload-types";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const pages = await fetch(`${process.env.NEXT_PUBLIC_CMS_URL}/api/pages`).then((res) => res.json()).then((res) => res.docs)
    const blog_posts = await fetch(`${process.env.NEXT_PUBLIC_CMS_URL}/api/blog`).then((res) => res.json()).then((res) => res.docs)

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
        </urlset>
    `;

    res.setHeader("Content-Type", "text/xml");
    res.write(sitemap);
    res.end();
}