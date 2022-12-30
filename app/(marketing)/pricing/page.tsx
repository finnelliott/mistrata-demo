import PageHeader from "../../../components/blocks/PageHeader";
import PlanPricing from "../../../components/blocks/PlanPricing";
import PricingTable from "../../../components/blocks/PricingTable";

export default function Page() {
  return (
    <>
    <PageHeader heading="Pricing" subheading="Learn more about the company and the team behind it." />
    <PlanPricing />
    <PricingTable />
    </>
  )
}
