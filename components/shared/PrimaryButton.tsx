export default function PrimaryButton({children, className, type} : { children: React.ReactNode, className?: string, type?: "button" | "submit" | "reset" }) {
    return (
        <button 
            type={type || "button"}
            className={className + " inline-flex text-base items-center justify-center whitespace-nowrap rounded-lg bg-primary-600 px-5 py-3 font-medium text-white shadow-sm hover:bg-primary-700 leading-6"}
        >
            {children}
        </button>
    )
}