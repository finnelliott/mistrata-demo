import { Business } from "../payload-types";

const getBusiness = async () => {
    try {
        const data = await fetch(`${process.env.NEXT_PUBLIC_CMS_URL}/api/globals/business`).then((res) => {console.log(res); return res}).then((res) => res.json())
        return data as Business;
    } catch (err: any) {
        console.log(err.message)
        return undefined;
    }
}

export default getBusiness;