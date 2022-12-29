import Locations from "../../../components/blocks/Locations";
import PageHeader from "../../../components/blocks/PageHeader";
import RichText from "../../../components/blocks/RichText";
import Testimonial from "../../../components/blocks/Testimonial";

export default function Page() {
  return (
    <>
    <PageHeader heading="About South Avenue Dental" subheading="Learn more about the company and the team behind it." />
    <RichText />
    <Testimonial />
    <Locations />
    </>
  )
}
