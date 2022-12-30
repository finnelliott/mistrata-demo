import Benefits from "../../components/blocks/Benefits";
import CTA from "../../components/blocks/CTA";
import FAQs from "../../components/blocks/FAQs";
import Hero from "../../components/blocks/Hero";
import TeamSlider from "../../components/blocks/TeamSlider";
import Testimonials from "../../components/blocks/Testimonials";
import LatestBlogPosts from "../../components/blocks/LatestBlogPosts";

export default function Page() {
  return (
    <>
    <Hero />
    <Benefits />
    <Testimonials />
    <TeamSlider />
    <CTA />
    <FAQs />
    <LatestBlogPosts />
    </>
  )
}
