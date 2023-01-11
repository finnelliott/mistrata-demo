import { ArrowTopRightOnSquareIcon } from '@heroicons/react/20/solid';
import { SparklesIcon } from '@heroicons/react/24/outline'
import SecondaryButton from '../shared/SecondaryButton';

const DemoBanner = () => {
    return (
        <div className="bg-primary-50 border-b border-primary-200">
            {/* sticky top-0 left-0 right-0 z-50 */}
            <div className="mx-auto max-w-7xl py-3 px-3 sm:px-8 lg:px-8">
            <div className="flex items-center justify-between flex-col sm:flex-row">
                <div className="flex flex-1 items-center py-2">
                <span className="flex rounded-lg">
                    <SparklesIcon className="h-6 w-6 text-primary-700" aria-hidden="true" />
                </span>
                <p className="flex-1 ml-3 text-sm">
                    <span className="text-primary-800 font-medium">Does your website look this good?{` `}</span>
                    <span className="text-primary-800 font-normal">Mistrata provides performance dental websites for just £40/mth.</span>
                </p>
                </div>
                <div className="order-3 mt-2 w-full flex-shrink-0 sm:order-2 sm:mt-0 ml-0 sm:ml-3 sm:w-auto">
                <a
                    href="https://www.mistrata.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full"
                >
                    <SecondaryButton className='w-full -py-2'>mistrata.com<ArrowTopRightOnSquareIcon className="w-5 h-5 ml-2" /></SecondaryButton>
                </a>
                </div>
            </div>
            </div>
        </div>
    )
}

export default DemoBanner