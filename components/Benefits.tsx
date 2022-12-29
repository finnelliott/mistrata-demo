import Container from "./Container"

const Benefits: React.FC = () => {
    const features = [
        {
            name: 'Feature 1',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            icon: (props: any) => (
                <svg
                    className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                    />
                </svg>
            ),
        },
        {
            name: 'Feature 1',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            icon: (props: any) => (
                <svg
                    className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                    />
                </svg>
            ),
        },
        {
            name: 'Feature 1',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            icon: (props: any) => (
                <svg
                    className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                    />
                </svg>
            ),
        }
    ]
    return (
        <Container>
            <div className="max-w-lg md:max-w-none">
                <div className="flex flex-col md:flex-row space-y-12 md:space-x-12 md:space-y-0">
                    {features.map((feature) => (
                    <div key={feature.name} className="relative flex flex-col gap-6">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-100 text-primary-600 sm:shrink-0 border-4 border-primary-50">
                        <feature.icon className="h-8 w-8" aria-hidden="true" />
                        </div>
                        <div className="sm:min-w-0 sm:flex-1">
                        <p className="text-xl font-medium leading-8 text-gray-900">{feature.name}</p>
                        <p className="mt-2 text-base leading-6 text-gray-600">{feature.description}</p>
                        </div>
                    </div>
                    ))}
                </div>
            </div>
        </Container>
    )
}

export default Benefits