import { GlobalConfig } from "payload/types";
import LinkBlock from "../blocks/Link";

const HeaderNavigation: GlobalConfig = {
    slug: "header-navigation",
    label: "Header Navigation",
    access: {
        read: () => true
    },
    fields: [
        {
            name: "links",
            type: "blocks",
            minRows: 0,
            maxRows: 5,
            blocks: [
                LinkBlock
            ]
        },
        {
            name: "ctas",
            type: "blocks",
            minRows: 0,
            maxRows: 2,
            blocks: [
                LinkBlock
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

export default HeaderNavigation