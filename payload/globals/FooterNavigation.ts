import { GlobalConfig } from "payload/types";
import LinkBlock from "../blocks/Link";

const FooterNavigation: GlobalConfig = {
    slug: "footer-navigation",
    label: "Footer Navigation",
    access: {
        read: () => true
    },
    fields: [
        {
            name: "columns",
            type: "array",
            minRows: 0,
            maxRows: 4,
            labels: {
                singular: "Column",
                plural: "Columns",
            },
            fields: [
                {
                    name: "heading",
                    type: "text",
                    required: true,
                },
                {
                    name: "links",
                    type: "blocks",
                    minRows: 0,
                    maxRows: 5,
                    blocks: [
                        LinkBlock
                    ]
                },
            ]
        }
    ],
    hooks: {
        afterChange: [(args) => {
          if (!process.env.PUSH_DEPLOY_URL) return;
          fetch(process.env.PUSH_DEPLOY_URL)
        }]
    }
}

export default FooterNavigation