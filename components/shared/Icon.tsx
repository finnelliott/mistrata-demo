import { ArrowRightIcon, ChatBubbleBottomCenterTextIcon, FaceSmileIcon, HandThumbUpIcon, MapPinIcon, PhoneIcon, PlusIcon, StarIcon, UserIcon, ArrowLeftIcon, ArrowUpIcon, ArrowDownIcon, ChevronRightIcon, ChevronLeftIcon, ChevronUpIcon, ChevronDownIcon, BuildingStorefrontIcon, CalendarDaysIcon, CreditCardIcon, EnvelopeIcon, DocumentTextIcon, FaceFrownIcon, GlobeAltIcon, FireIcon, HeartIcon, LinkIcon } from "@heroicons/react/24/outline"

const IconOptions = {
    "Thumbs Up": <HandThumbUpIcon />,
    "Plus": <PlusIcon />,
    "Chat Bubble": <ChatBubbleBottomCenterTextIcon />,
    "Star": <StarIcon />,
    "Phone": <PhoneIcon />,
    "Person": <UserIcon />,
    "Map Pin": <MapPinIcon />,
    "Smiley Face": <FaceSmileIcon />,
    "Sad Face": <FaceFrownIcon />,
    "Arrow Right": <ArrowRightIcon />,
    "Arrow Left": <ArrowLeftIcon />,
    "Arrow Up": <ArrowUpIcon />,
    "Arrow Down": <ArrowDownIcon />,
    "Chevron Right": <ChevronRightIcon />,
    "Chevron Left": <ChevronLeftIcon />,
    "Chevron Up": <ChevronUpIcon />,
    "Chevron Down": <ChevronDownIcon />,
    "Building": <BuildingStorefrontIcon />,
    "Calendar": <CalendarDaysIcon />,
    "Credit Card": <CreditCardIcon />,
    "Envelope": <EnvelopeIcon />,
    "Document": <DocumentTextIcon />,
    "Globe": <GlobeAltIcon />,
    "Fire": <FireIcon />,
    "Heart": <HeartIcon />,
    "Link": <LinkIcon />
}

type IconString = "Thumbs Up" | "Plus" | "Chat Bubble" | "Star" | "Phone" | "Person" | "Map Pin" | "Smiley Face" | "Sad Face" | "Arrow Right" | "Arrow Left" | "Arrow Up" | "Arrow Down" | "Chevron Right" | "Chevron Left" | "Chevron Up" | "Chevron Down" | "Building" | "Calendar" | "Credit Card" | "Envelope" | "Document" | "Globe" | "Fire" | "Heart" | "Link"

type Props = {
    icon: IconString
}

const Icon: React.FC<Props> = (props) => IconOptions[props.icon as IconString ] ?? <></>

export default Icon