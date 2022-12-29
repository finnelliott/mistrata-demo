import Image from "next/image"

type Props = {
    index: number,
    member: {
        name: string,
        role: string,
        bio?: string,
        image: {
            url: string,
            alt: string,
            width?: number,
            height?: number
        }
    }
}

const TeamMemberCard:React.FC<Props> = ({ member }) => {
    return (
        <div className="flex flex-col items-start">
            <div className="relative w-full h-full aspect-square overflow-hidden object-cover block">
                <Image
                    src={member.image.url}
                    fill={true}
                    alt={member.image.alt}
                />
            </div>
            <div className="flex flex-col items-start mt-4">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-primary-700 text-lg mb-4">{member.role}</p>
                <p className="text-gray-600 font-normal text-base">{member.bio}</p>
            </div>
        </div>
    )
}

export default TeamMemberCard