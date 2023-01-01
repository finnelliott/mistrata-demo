import ContactForm from "../../../components/blocks/ContactForm";
import FAQs from "../../../components/blocks/FAQs";
import PageHeader from "../../../components/blocks/PageHeader";

export default function Page() {
  return (
    <>
    <PageHeader heading="Support" subheading="Learn more about the company and the team behind it." />
    <FAQs />
    <ContactForm />
    </>
  )
}
