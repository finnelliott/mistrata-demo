import { RichText } from "../../payload-types"
import Container from "../shared/Container"
import serialize from "../shared/RichTextSerializer"

type Props = {
    block: RichText
}

const RichText: React.FC<Props> = ({ block }) => {
    return (
        <Container>
            <div className="min-w-full prose columns-1 lg:columns-2 prose-gray">{serialize(block.content)}</div>
        </Container>
    )
}

export default RichText