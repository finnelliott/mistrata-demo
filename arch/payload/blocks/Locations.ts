import { Block } from 'payload/types';

const LocationsBlock: Block = {
  slug: 'locations',
  imageURL: '/components/locations.png',
  imageAltText: 'A thumbnail image showing what this block looks like',
  labels: {
    singular: 'Locations',
    plural: 'Locations',
  },
  fields: [
    {
        name: 'preheading',
        type: 'text',
        required: false,
        defaultValue: "Visit us"
    },
    {
        name: 'heading',
        type: 'text',
        required: true,
        defaultValue: "Well connected to the local area"
    },
    {
        name: 'subheading',
        type: 'text',
        defaultValue: "We are located in the heart of the local community. Our practice is easily accessible by public transport and car."
    },
    {
        name: 'locations',
        type: 'array',
        minRows: 1,
        maxRows: 1,
        labels: {
          singular: 'Location',
          plural: 'Locations'
        },
        admin: {
          description: 'We currently only support one location. Please contact us if you need more than one location.'
        },
        fields: [
          {
            name: 'name',
            type: 'text',
            required: true,
          },
          {
            name: 'opening_hours',
            label: 'Opening Hours',
            type: 'group',
            fields: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"].map((day) =>
            ({
                name: day.toLowerCase(),
                type: 'group',
                label: day,
                fields: [
                    {
                        name: 'closed',
                        type: 'checkbox',
                        label: 'Closed',
                    },
                    {
                        name: 'open',
                        type: 'text',
                        label: 'Open',
                        required: false,
                        admin: {
                            condition: (data, siblingData) => {
                                if (siblingData.closed) {
                                  return false;
                                } else {
                                  return true;
                                }
                            }
                        }
                    },
                    {
                        name: 'close',
                        type: 'text',
                        label: 'Close',
                        required: false,
                        admin: {
                            condition: (data, siblingData) => {
                                if (siblingData.closed) {
                                  return false;
                                } else {
                                  return true;
                                }
                            
                            }
                        }
                    },
                ]
            })
            )
          },
          {
            name: 'address',
            type: 'group',
            fields: [
                {
                    name: 'line1',
                    type: 'text',
                    label: 'Line 1',
                    required: true,
                },
                {
                    name: 'line2',
                    type: 'text',
                    label: 'Line 2',
                    required: false,
                },
                {
                    name: 'line3',
                    type: 'text',
                    label: 'Line 3',
                    required: false,
                },
                {
                    name: 'city',
                    type: 'text',
                    required: true,
                    label: 'City/Town'
                },
                {
                    name: 'state',
                    type: 'text',
                    required: true,
                    label: 'State/County/Province'
                },
                {
                    name: 'postal_code',
                    label: 'Postal code',
                    type: 'text',
                    required: true,
                },
            ]
          }
        ]
    }
  ]
};

export default LocationsBlock;