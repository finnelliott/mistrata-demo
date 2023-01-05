import PageHead from "../../../components/shared/PageHead"

export default async function Head({ params }: { params: { slug: string } }) {
    const page = await fetch(`${process.env.NEXT_PUBLIC_CMS_URL}/api/pages?where[slug][equals]=${params.slug.toString()}`).then((res) => res.json()).then((res) => res.docs[0])
    return (
      <>
      <PageHead page={page} />
      </>
    )
}