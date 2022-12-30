"use client";

import { Transition } from '@headlessui/react';
import { SparklesIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { useState } from 'react'

const DemoBanner = () => {
    const [ isShowing, setIsShowing ] = useState(true)
    return (
        <div className="bg-primary-50 border-b border-primary-300 sticky top-0 left-0 right-0 z-50">
            <div className="mx-auto max-w-7xl py-3 px-3 sm:px-8 lg:px-8">
            <div className="flex items-center justify-between flex-col sm:flex-row">
                <div className="flex flex-1 items-center py-2">
                <span className="flex rounded-lg">
                    <SparklesIcon className="h-6 w-6 text-primary-600" aria-hidden="true" />
                </span>
                <p className="flex-1 ml-3 text-sm">
                    <span className="text-primary-700 font-medium">Does your website look this good?{` `}</span>
                    <span className="text-primary-600 font-normal">Mistrata provides performance dental websites for just £40/mth.</span>
                </p>
                </div>
                <div className="order-3 mt-2 w-full flex-shrink-0 sm:order-2 sm:mt-0 sm:w-auto">
                <a
                    href="https://www.mistrata.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center rounded-md border border-transparent bg-primary-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-primary-700"
                >
                    Learn more
                </a>
                </div>
            </div>
            </div>
        </div>
    )
}

export default DemoBanner