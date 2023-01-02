import { Page } from "../../payload-types";
import Benefits from "../blocks/Benefits"
import CTA from "../blocks/CTA";
import FAQs from "../blocks/FAQs";
import Hero from "../blocks/Hero";
import Locations from "../blocks/Locations";
import PageHeader from "../blocks/PageHeader";
import RichText from "../blocks/RichText";
import TeamSlider from "../blocks/TeamSlider";
import Testimonial from "../blocks/Testimonial";
import Testimonials from "../blocks/Testimonials";
import TeamGrid from "../blocks/TeamGrid";
import OpenPositions from "../blocks/OpenPositions";
import PlanPricing from "../blocks/PlanPricing";
import PricingTable from "../blocks/PricingTable";
import ContactOptions from "../blocks/ContactOptions";
import ContactForm from "../blocks/ContactForm";
import LatestBlogPosts from "../blocks/LatestBlogPosts";
import BlogPosts from "../blocks/BlogPosts";

type Props = {
    page: Page
}

const BlockSerializer:React.FC<Props> = ({ page }) => {
    return <>
        {
            page.layout.map((block) => {
                switch (block.blockType) {
                    case 'benefits':
                        return <Benefits block={block} />
                    case 'hero':
                        return <Hero block={block} />
                    case 'testimonial-slider':
                        return <Testimonials block={block} />
                    case 'team-slider':
                        return <TeamSlider block={block} />
                    case 'cta':
                        return <CTA block={block} />
                    case 'faqs':
                        return <FAQs block={block} />
                    case 'page-header':
                        return <PageHeader block={block} />
                    case 'rich-text':
                        return <RichText block={block} />
                    case 'testimonial':
                        return <Testimonial block={block} />
                    case 'locations':
                        return <Locations block={block} />
                    case 'team-grid':
                        return <TeamGrid block={block} />
                    case 'open-positions':
                        return <OpenPositions block={block} />
                    case 'plan-pricing':
                        return <PlanPricing block={block} />
                    case 'pricing-table':
                        return <PricingTable block={block} />
                    case 'contact-options':
                        return <ContactOptions block={block} />
                    case 'contact-form':
                        return <ContactForm block={block} />
                    case 'latest-blog-posts':
                        return <LatestBlogPosts block={block} />
                    case 'blog-posts':
                        return <BlogPosts block={block} />
                    default:
                        return <></>
                }
            })
        }
    </>   
}

export default BlockSerializer