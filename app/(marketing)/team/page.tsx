import OpenPositions from "../../../components/blocks/OpenPositions";
import PageHeader from "../../../components/blocks/PageHeader";
import TeamGrid from "../../../components/blocks/TeamGrid";

export default function Page() {
  return (
    <>
    <PageHeader preheading="Team" heading="Meet our team" subheading="Our philosophy is simple — hire a team of diverse, passionate people and foster a culture that empowers you to do your best work." ctas={[
      {
        link: {
          label: "About us",
          type: "page",
          page: {
            slug: "about"
          }
        }
      },
      {
        link: {
          label: "Join our team",
          type: "page",
          page: {
            slug: "careers"
          }
        }
      },
    ]} />
    <TeamGrid />
    <OpenPositions />
    </>
  )
}
