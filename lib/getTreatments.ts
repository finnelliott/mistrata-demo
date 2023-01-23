import { Treatment } from "../payload-types"

const getTreatments = async () => {
    try {
        const data = await fetch(`${process.env.NEXT_PUBLIC_CMS_URL}/api/treatments?limit=100`).then((res) => {console.log(res); return res}).then((res) => res.json())
        return data.docs as Treatment[]
    } catch (err: any) {
        console.log(err.message)
        return undefined;
    }
};

export default getTreatments;

