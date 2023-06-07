import Image from "next/image"
import Link from "next/link"
import SectionHeader from "../shared/SectionHeader"
import Container from "../shared/Container"
import { use } from "react"
import { Blog, FeaturedTreatments } from "../../payload-types"

type Props = {
  block: FeaturedTreatments
}

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

const FeaturedTreatments: React.FC<Props> = ({ block }) => {
  return (
      <Container>
          <SectionHeader preheading={block.preheading} heading={block.heading} subheading={block.subheading} ctas={block.ctas} />
          <div className={classNames(`sm:grid-cols-${block.featured_treatments.length}`,"grid grid-cols-1 gap-8")}>
              {block.featured_treatments.map((item) => (
                  <Link href={`/treatments/${item.treatment.slug}`} key={item.treatment.title} className="h-full flex flex-col justify-between hover:scale-[99%] transform duration-200">
                      <div>
                      <div className="relative mb-8 aspect-video">
                          <Image
                              src={(item.image.url as string)}
                              alt={item.image.alt}
                              fill={true}
                              className="object-cover"
                              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          />
                      </div>
                      <h3 className="text-2xl font-semibold mb-2 line-clamp-2 text-ellipsis">{item.treatment.title}</h3>
                      <p className="text-gray-500 mb-6 line-clamp-3 text-ellipsis">{item.treatment.description}</p>
                      </div>
                  </Link>
              ))}
          </div>
      </Container>
  )
}

export default FeaturedTreatments