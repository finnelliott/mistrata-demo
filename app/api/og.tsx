import { ImageResponse } from 'next/server';
 
export const runtime = 'edge';
 
export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);

    const hasTitle = searchParams.has('title');
    const hasLogo = searchParams.has('logo');
    const hasBusiness = searchParams.has('business');
    const hasDescription = searchParams.has('description')
    const hasWidth = searchParams.has('width');
    const hasHeight = searchParams.has('height');
      
    const title = hasTitle
    ? searchParams.get('title')?.slice(0, 100)
    : null;
    const logo = hasLogo
    ? searchParams.get('logo')?.slice(0, 100)
    : null;
    const business = hasBusiness
    ? searchParams.get('business')?.slice(0, 100)
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
          <div tw={(parseInt(width as string) > 800 ? "p-32" : "p-16") + " bg-gray-50 flex w-full h-full justify-center items-center"}>
            <div tw="flex flex-col w-full h-full justify-between items-start">
            <div tw="w-full h-auto flex flex-col justify-center items-start">
                {title && <span tw="text-7xl text-left font-normal text-gray-900">{title == "Home" ? business : title}</span>}
                {description && <span tw="text-xl text-left font-normal mt-8 text-gray-700">{description}</span>}
            </div>
            <div tw="flex w-60 h-auto flex-col justify-end">
            {logo && <img
                src={logo}
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
    },
  );
}