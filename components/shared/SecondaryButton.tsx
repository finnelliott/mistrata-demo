export default function SecondaryButton({ children, className }: { children: React.ReactNode, className?: string }) {
    return (
        <button 
        className={className + " bg-white inline-flex text-base items-center justify-center whitespace-nowrap rounded-lg px-5 py-3 font-medium text-gray-700 shadow-sm hover:bg-gray-50 border border-gray-300 leading-6"}
        >
            {children}
        </button>
    )
}