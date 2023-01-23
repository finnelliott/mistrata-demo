const getBusiness = async () => {
    const data = await fetch(`${process.env.NEXT_PUBLIC_CMS_URL}/api/globals/business`).then((res) => res.json());
    return data;
}

export default getBusiness;