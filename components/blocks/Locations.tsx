import { Locations as LocationsType } from "../../payload-types"
import LocationsLayout from "./LocationsLayout"

type Props = {
    block: LocationsType
}

const Locations: React.FC<Props> = ({ block }) => {
    return (
        <LocationsLayout block={block} />
    )
}

export default Locations