import SectionHeader from "../shared/SectionHeader"
import Container from "../shared/Container"
import { PricingTable, Treatment } from "../../payload-types"

type Props = {
    block: PricingTable
}

const PricingTable: React.FC<Props> = ({ block }) => {

    const categories: { name: string, treatments: Treatment[] }[] = []

    for (let i = 0; i < block.treatments.length; i++) {
        if (!categories.map((category) => category.name).includes(block.treatments[i].category)) {
            categories.push({
                name: block.treatments[i].category,
                treatments: [block.treatments[i]]
            })
        } else {
            categories[categories.map((category) => category.name).indexOf(block.treatments[i].category)].treatments.push(block.treatments[i])
        }
    }

    return (
        <Container>
            <SectionHeader preheading={block.preheading} heading={block.heading} subheading={block.subheading} />
            <div className="overflow-hidden rounded-lg bg-white shadow-lg border border-gray-200 pb-8 mb-8">
            <table className="min-w-full divide-y divide-gray-300">
            {categories.map((category) => (
                    <>
                    <thead>
                    <tr>
                        <th
                        scope="col"
                        className="pt-8 pb-4 pl-4 pr-3 text-left text-base font-semibold bg-gray-50 text-primary-700 sm:pl-6 lg:pl-8 capitalize"
                        >
                        {category.name}
                        </th>
                        <th scope="col" className="px-3 py-3.5 text-right text-sm font-normal text-gray-900 bg-gray-50">
                        
                        </th>
                    </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {category.treatments.map((treatment, index) => (
                            <tr key={index} className={index % 2 == 0 ? "" : ""}>
                            <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 lg:pl-8">
                                {treatment.name}
                            </td>
                            <td className="whitespace-nowrap px-3 py-4 pr-4 text-sm text-gray-500 text-right sm:pr-6 lg:pr-8">{treatment.price}</td>
                            </tr>
                        ))}
                    </tbody>
                    </>
                    ))}
                </table>
            </div>
        </Container>
    )
}

export default PricingTable