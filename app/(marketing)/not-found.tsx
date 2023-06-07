import Container from "../../components/shared/Container";

export default function NotFound() {

    return (
        <div className="">
            <Container>
                <div className="flex w-full flex-col pt-24">
                    <div className="flex flex-col place-items-start max-w-3xl mb-8 lg:mb-0">
                        <div className="text-base font-semibold text-primary-700 text-left mb-3">404 Error</div>
                        <h1 className="text-4xl text-gray-900 text-left font-semibold">Sorry, we couldn&apos;t find that page.</h1>
                        <div className="text-lg font-normal text-gray-500 mt-5">Unfortunately, the page you are looking for doesn&apos;t exist or has been moved.</div>
                    </div>
                </div>
            </Container>
        </div>
    )
}