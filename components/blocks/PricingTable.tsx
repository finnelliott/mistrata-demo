import SectionHeader from "../shared/SectionHeader"
import Container from "../shared/Container"

type Treatment = {
    name: string,
    category: string,
    description?: string,
    price?: string,
}

const PricingTable = () => {

    const treatments: Treatment[] = [
        {
            name: 'Teeth Whitening',
            category: 'Cosmetic',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            price: '$99',
        },
        {
            name: 'Veneers',
            category: 'Cosmetic',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            price: '$999',
        },
        {
            name: 'Dental Implants',
            category: 'Restorative',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            price: '$999',
        },
        {
            name: 'Bridge',
            category: 'Restorative',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            price: '$999',
        },
        {
            name: 'Dentures',
            category: 'Restorative',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            price: '$999',
        },
        {
            name: 'Root Canal',
            category: 'Restorative',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            price: '$999',
        },
        {
            name: 'Crown',
            category: 'Restorative',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            price: '$999',
        },
        {
            name: 'Extraction',
            category: 'Restorative',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            price: '$999',
        },
        {
            name: 'Invisalign',
            category: 'Orthodontics',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            price: '$999',
        },
        {
            name: 'Braces',
            category: 'Orthodontics',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            price: '$999',
        },
        {
            name: 'Dental Cleaning',
            category: 'Preventative',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            price: '$99',
        },
        {
            name: 'Dental Exam',
            category: 'Preventative',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            price: '$99',
        },
        {
            name: 'Fluoride Treatment',
            category: 'Preventative',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            price: '$99',
        },
        {
            name: 'Sealants',
            category: 'Preventative',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            price: '$99',
        },
        {
            name: 'Mouth Guard',
            category: 'Preventative',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            price: '$99',
        },
        {
            name: 'Night Guard',
            category: 'Preventative',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            price: '$99',
        },
        {
            name: 'Dental Filling',
            category: 'Restorative',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            price: '$99',
        }
    ]

    const categories: { name: string, treatments: Treatment[] }[] = []

    for (let i = 0; i < treatments.length; i++) {
        if (!categories.map((category) => category.name).includes(treatments[i].category)) {
            categories.push({
                name: treatments[i].category,
                treatments: [treatments[i]]
            })
        } else {
            categories[categories.map((category) => category.name).indexOf(treatments[i].category)].treatments.push(treatments[i])
        }
    }

    return (
        <Container>
            <SectionHeader preheading="Treatment pricing" heading="Quality treatments that don't break the bank" subheading="Simple, transparent pricing that grows with you. Try any plan free for 30 days." />
            <div className="overflow-hidden rounded-lg bg-white shadow-lg border border-gray-200 pb-8 mb-8">
            <table className="min-w-full divide-y divide-gray-300">
            {categories.map((category) => (
                
                
                    
                    <>
                    <thead>
                    <tr>
                        <th
                        scope="col"
                        className="pt-8 pb-4 pl-4 pr-3 text-left text-base font-semibold bg-gray-50 text-primary-700 sm:pl-6 lg:pl-8"
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