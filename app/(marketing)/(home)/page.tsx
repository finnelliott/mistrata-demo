import BlockSerializer from "../../../components/shared/BlockSerializer";
import StructuredData from "../../../components/shared/StructuredData";
import { Business } from "../../../payload-types";

export default async function Page() {
  const page = await fetch(`${process.env.NEXT_PUBLIC_CMS_URL}/api/pages?where[slug][equals]=${"home"}`).then((res) => res.json()).then((res) => res.docs[0])
  const business = await fetch(`${process.env.NEXT_PUBLIC_CMS_URL}/api/globals/business`).then((res) => res.json()) as Business
  return (
    <>
      <BlockSerializer page={page as any} />
      <StructuredData business={business} />
    </>
  )
}

