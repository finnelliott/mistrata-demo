import Script from "next/script"
import { Business } from "../../payload-types"

export default function StructuredData({ business }: { business: Business }) {
    return (
        <Script id="local-business-structured-data" async type="application/json+ld" dangerouslySetInnerHTML={{  __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Dentist",
            "address": {
                "@type": "PostalAddress",
                "addressLocality": business.address.city,
                "addressRegion": business.address.state,
                "streetAddress": [business.address.line1, business.address.line2, business.address.line3].filter(Boolean).join(", "),
            },
            "description": business.description,
            "name": business.name,
            "telephone": business.phone
        })}}/>
    )
}