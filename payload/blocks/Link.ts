import { Block } from "payload/types";

const LinkBlock: Block = {
    slug: 'link',
    labels: {
        singular: 'Link',
        plural: 'Links',
    },
    fields: [
        {
            name: 'label',
            type: 'text',
            required: true,
            defaultValue: 'Get in touch',
        },
        {
            name: 'icon',
            type: 'select',
            hasMany: false,
            required: false,
            admin: {
              isClearable: true,
            },
            options: [
              // Label value options for "Thumbs Up" | "Plus" | "Chat Bubble" | "Star" | "Phone" | "Person" | "Map Pin" | "Smiley Face" | "Sad Face" | "Arrow Right" | "Arrow Left" | "Arrow Up" | "Arrow Down" | "Chevron Right" | "Chevron Left" | "Chevron Up" | "Chevron Down" | "Building" | "Calendar" | "Credit Card" | "Envelope" | "Document" | "Globe" | "Fire" | "Heart" | "Link";
              {
                label: 'Thumbs Up',
                value: 'Thumbs Up',
              },
              {
                label: 'Plus',
                value: 'Plus',
              },
              {
                label: 'Star',
                value: 'Star',
              },
              {
                label: 'Chat Bubble',
                value: "Chat Bubble",
              },
              {
                label: 'Phone',
                value: 'Phone',
              },
              {
                label: 'Person',
                value: 'Person',
              },
              {
                label: 'Map Pin',
                value: 'Map Pin',
              },
              {
                label: 'Smiley Face',
                value: 'Smiley Face',
              },
              {
                label: 'Sad Face',
                value: 'Sad Face',
              },
              {
                label: 'Arrow Right',
                value: 'Arrow Right',
              },
              {
                label: 'Arrow Left',
                value: 'Arrow Left',
              },
              {
                label: 'Arrow Up',
                value: 'Arrow Up',
              },
              {
                label: 'Arrow Down',
                value: 'Arrow Down',
              },
              {
                label: 'Chevron Right',
                value: 'Chevron Right', 
              },
              {
                label: 'Chevron Left',
                value: 'Chevron Left',
              },
              {
                label: 'Chevron Up',
                value: 'Chevron Up',
              },
              {
                label: 'Chevron Down',
                value: 'Chevron Down',
              },
              {
                label: 'Building',
                value: 'Building',
              },
              {
                label: 'Calendar',
                value: 'Calendar',
              },
              {
                label: 'Credit Card',
                value: 'Credit Card',
              },
              {
                label: 'Envelope',
                value: 'Envelope',
              },
              {
                label: 'Document',
                value: 'Document',
              },
              {
                label: 'Globe',
                value: 'Globe',
              },
              {
                label: 'Fire',
                value: 'Fire',
              },
              {
                label: 'Heart',
                value: 'Heart',
              },
              {
                label: 'Link',
                value: 'Link',
              },
            ],
        },
        {
            name: 'type',
            type: 'radio',
            defaultValue: 'page',
            options: [
              {
                label: 'Page',
                value: 'page',
              },
              {
                label: 'URL',
                value: 'url',
              },
              {
                label: 'Phone number',
                value: 'phone_number',
              },
              {
                label: 'Email',
                value: 'email',
              },
            ],
            admin: {
              layout: 'horizontal',
            },
        },
        {
            name: 'page',
            type: 'relationship',
            relationTo: 'pages',
            hasMany: false,
            admin: {
                condition: (data, siblingData) => {
                  if (siblingData.type  === "page") {
                    return true;
                  } else {
                    return false;
                  }
                }
              }
        },
        {
            name: 'url',
            type: 'text',
            label: 'URL',
            admin: {
                condition: (data, siblingData) => {
                  if (siblingData.type  === "url") {
                    return true;
                  } else {
                    return false;
                  }
                }
              }
        },
        {
            name: 'open_in_new_tab',
            type: 'checkbox',
            label: 'Open in new tab',
            admin: {
                condition: (data, siblingData) => {
                  if (siblingData.type  === "url") {
                    return true;
                  } else {
                    return false;
                  }
                }
              }
        },
        {
            name: 'phone_number',
            type: 'text',
            label: 'Phone number',
            admin: {
                condition: (data, siblingData) => {
                  if (siblingData.type  === "phone_number") {
                    return true;
                  } else {
                    return false;
                  }
                }
              }
        },
        {
            name: 'email',
            type: 'text',
            label: 'Email',
            admin: {
                condition: (data, siblingData) => {
                  if (siblingData.type  === "email") {
                    return true;
                  } else {
                    return false;
                  }
                }
              }
        },
    ]
  };

export default LinkBlock