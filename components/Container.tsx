type Props = {
    children: React.ReactNode
}

const Container:React.FC<Props> = ({children}) => {
    return (
        <div className="w-full max-w-7xl mx-auto pb-24 px-4 sm:px-8">{children}</div>
    )
}

export default Container