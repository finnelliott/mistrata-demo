import BlogPosts from "../../../components/blocks/BlogPosts";
import CTA from "../../../components/blocks/CTA";
import PageHeader from "../../../components/blocks/PageHeader";

export default function Page() {
  return (
    <>
    <PageHeader preheading="Our blog" heading="Resources and insights" subheading="The latest industry news, interviews, technologies, and resources." />
    <BlogPosts />
    <CTA />
    </>
  )
}
