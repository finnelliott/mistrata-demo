import { ImageResponse } from '@vercel/og';
import { NextRequest } from 'next/server';

export const config = {
  runtime: 'edge',
};

export default async function handler(req: NextRequest) {
  const business = await fetch(`${process.env.NEXT_PUBLIC_CMS_URL}/api/globals/business`).then((res) => res.json()) 
  const normalFont = fetch(new URL('../../assets/Inter-Regular.ttf', import.meta.url)).then(
    (res) => res.arrayBuffer(),
  );

  try {
    const normalFontData = await normalFont;
    const { searchParams } = new URL(req.url);
    
    const hasTitle = searchParams.has('title');
    const hasDescription = searchParams.has('description')
    const hasWidth = searchParams.has('width');
    const hasHeight = searchParams.has('height');
      
    const title = hasTitle
    ? searchParams.get('title')?.slice(0, 100)
    : null;
    const description = hasDescription
    ? searchParams.get('description')?.slice(0, 100)
    : null;
    const width = hasWidth
    ? searchParams.get('width')
    : 1200;
    const height = hasHeight
    ? searchParams.get('height')
    : 630;
  
    return new ImageResponse(
      (
        <div
          style={{
            backgroundColor: 'white',
            backgroundSize: '150px 150px',
            height: '100%',
            width: '100%',
            display: 'flex',
            textAlign: 'center',
            alignItems: 'center',
            fontSize: 100,
            fontFamily: '"Typewriter"',
            justifyContent: 'center',
            flexDirection: 'column',
            flexWrap: 'nowrap',
          }}
        >
          <div tw={(parseInt(width as string) > 800 ? "p-32" : "p-24") + " bg-gray-50 flex w-full h-full justify-center items-center"}>
            <div tw="flex flex-col w-full h-full justify-between items-start">
            <div tw="w-full h-auto flex flex-col justify-center items-start">
                {title && <span tw="text-7xl text-left font-normal text-gray-900">{title == "Home" ? business.name : title}</span>}
                {description && <span tw="text-xl text-left font-normal mt-8 text-gray-700">{description}</span>}
            </div>
            <div tw="flex w-60 h-auto flex-col justify-end">
            {business.logo.url && <img
                src={process.env.NEXT_PUBLIC_CMS_URL + business.logo.url}
                style={{objectFit:"contain", height: "100%", width: "100%", alignSelf: "flex-end"}}
                tw="flex relative"
            />}
            </div>
            </div>
          </div>
        </div>
      ),
      {
        width: parseInt(width as string) ?? 1200,
        height: parseInt(height as string) ?? 630,
        fonts: [
          {
            name: 'Inter',
            data: normalFontData,
            style: 'normal',
            weight: 400,
          },
        ],
      },
    );
  } catch (e: any) {
    console.log(`${e.message}`);
    return new Response(`Failed to generate the image`, {
      status: 500,
    });
  }
}