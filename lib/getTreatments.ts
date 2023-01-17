import { Treatment } from "../payload-types"

const getTreatments = async () => {
    const data = await fetch(`${process.env.NEXT_PUBLIC_CMS_URL}/api/treatments`).then((res) => res.json())
    return data.docs as Treatment[]
};

export default getTreatments;

