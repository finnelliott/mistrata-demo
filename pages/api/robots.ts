import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    const robots = `User-agent: *
Sitemap: ${process.env.NEXT_PUBLIC_DOMAIN}/sitemap.xml
`;

    res.send(robots);
}