export default function PrimaryButton({ children }: { children: React.ReactNode }) {
    return (
        <button 
        className="inline-flex text-base items-center justify-center whitespace-nowrap rounded-lg bg-primary-600 px-5 py-3 font-medium text-white shadow-sm hover:bg-primary-700 leading-6"
        >
            {children}
        </button>
    )
}