import { ChatBubbleBottomCenterTextIcon, HandThumbUpIcon, PhoneIcon, PlusIcon, StarIcon } from "@heroicons/react/24/outline"

const IconOptions = {
    "HandThumbUp": <HandThumbUpIcon />,
    "Plus": <PlusIcon />,
    "ChatBubbleBottomCenterText": <ChatBubbleBottomCenterTextIcon />,
    "Star": <StarIcon />,
    "Phone": <PhoneIcon />
}

type IconString = "HandThumbUp" | "Plus" | "ChatBubbleBottomCenterText" | "Star" | "Phone"

type Props = {
    icon: IconString
}

const Icon: React.FC<Props> = (props) => IconOptions[props.icon as IconString ] ?? <></>

export default Icon