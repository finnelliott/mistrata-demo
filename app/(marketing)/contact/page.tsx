import ContactForm from "../../../components/blocks/ContactForm";
import ContactOptions from "../../../components/blocks/ContactOptions";
import FAQs from "../../../components/blocks/FAQs";
import Locations from "../../../components/blocks/Locations";
import PageHeader from "../../../components/blocks/PageHeader";

export default function Page() {
  return (
    <>
    <PageHeader preheading="Contact" heading="We’d love to hear from you" subheading="Our friendly team is always here to chat." />
    <ContactOptions />
    <Locations />
    <FAQs showCTA={false} />
    <ContactForm />
    </>
  )
}
