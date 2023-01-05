import BlockSerializer from "../../../components/shared/BlockSerializer";

export default async function Page() {
  const page = await fetch(`${process.env.NEXT_PUBLIC_CMS_URL}/api/pages?where[slug][equals]=${"home"}`).then((res) => res.json()).then((res) => res.docs[0])

  return (
    <>
      <BlockSerializer page={page as any} />
    </>
  )
}

