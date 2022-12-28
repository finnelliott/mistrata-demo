export default function SecondaryButton({ children }: { children: React.ReactNode }) {
    return (
        <button 
        className="inline-flex text-base items-center justify-center whitespace-nowrap rounded-lg bg-transparent px-5 py-3 font-medium text-gray-700 shadow-sm hover:bg-gray-50 border border-gray-300 leading-6"
        >
            {children}
        </button>
    )
}