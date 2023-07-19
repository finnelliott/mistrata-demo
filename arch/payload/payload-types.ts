/* tslint:disable */
/**
 * This file was automatically generated by Payload CMS.
 * DO NOT MODIFY IT BY HAND. Instead, modify your source Payload config,
 * and re-run `payload generate:types` to regenerate this file.
 */

export interface Config {}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "business".
 */
export interface Business {
  id: string;
  name: string;
  tagline: string;
  description: string;
  logo: string | Media;
  favicon: string | Media;
  email: string;
  address: {
    line1: string;
    line2?: string;
    line3?: string;
    city: string;
    state: string;
    postal_code: string;
  };
  phone: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "media".
 */
export interface Media {
  id: string;
  alt: string;
  url?: string;
  filename?: string;
  mimeType?: string;
  filesize?: number;
  width?: number;
  height?: number;
  sizes: {
    small_landscape: {
      url?: string;
      width?: number;
      height?: number;
      mimeType?: string;
      filesize?: number;
      filename?: string;
    };
    medium_landscape: {
      url?: string;
      width?: number;
      height?: number;
      mimeType?: string;
      filesize?: number;
      filename?: string;
    };
    large_landscape: {
      url?: string;
      width?: number;
      height?: number;
      mimeType?: string;
      filesize?: number;
      filename?: string;
    };
    small_square: {
      url?: string;
      width?: number;
      height?: number;
      mimeType?: string;
      filesize?: number;
      filename?: string;
    };
    medium_square: {
      url?: string;
      width?: number;
      height?: number;
      mimeType?: string;
      filesize?: number;
      filename?: string;
    };
    large_square: {
      url?: string;
      width?: number;
      height?: number;
      mimeType?: string;
      filesize?: number;
      filename?: string;
    };
    small_portrait: {
      url?: string;
      width?: number;
      height?: number;
      mimeType?: string;
      filesize?: number;
      filename?: string;
    };
    medium_portrait: {
      url?: string;
      width?: number;
      height?: number;
      mimeType?: string;
      filesize?: number;
      filename?: string;
    };
    large_portrait: {
      url?: string;
      width?: number;
      height?: number;
      mimeType?: string;
      filesize?: number;
      filename?: string;
    };
  };
  createdAt: string;
  updatedAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "header-navigation".
 */
export interface HeaderNavigation {
  id: string;
  links: {
    label: string;
    icon?:
      | 'Thumbs Up'
      | 'Plus'
      | 'Star'
      | 'Chat Bubble'
      | 'Phone'
      | 'Person'
      | 'Map Pin'
      | 'Smiley Face'
      | 'Sad Face'
      | 'Arrow Right'
      | 'Arrow Left'
      | 'Arrow Up'
      | 'Arrow Down'
      | 'Chevron Right'
      | 'Chevron Left'
      | 'Chevron Up'
      | 'Chevron Down'
      | 'Building'
      | 'Calendar'
      | 'Credit Card'
      | 'Envelope'
      | 'Document'
      | 'Globe'
      | 'Fire'
      | 'Heart'
      | 'Link';
    type?: 'page' | 'url' | 'phone_number' | 'email';
    page?: string | Page;
    url?: string;
    open_in_new_tab?: boolean;
    phone_number?: string;
    email?: string;
    id?: string;
    blockName?: string;
    blockType: 'link';
  }[];
  ctas: {
    label: string;
    icon?:
      | 'Thumbs Up'
      | 'Plus'
      | 'Star'
      | 'Chat Bubble'
      | 'Phone'
      | 'Person'
      | 'Map Pin'
      | 'Smiley Face'
      | 'Sad Face'
      | 'Arrow Right'
      | 'Arrow Left'
      | 'Arrow Up'
      | 'Arrow Down'
      | 'Chevron Right'
      | 'Chevron Left'
      | 'Chevron Up'
      | 'Chevron Down'
      | 'Building'
      | 'Calendar'
      | 'Credit Card'
      | 'Envelope'
      | 'Document'
      | 'Globe'
      | 'Fire'
      | 'Heart'
      | 'Link';
    type?: 'page' | 'url' | 'phone_number' | 'email';
    page?: string | Page;
    url?: string;
    open_in_new_tab?: boolean;
    phone_number?: string;
    email?: string;
    id?: string;
    blockName?: string;
    blockType: 'link';
  }[];
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "pages".
 */
export interface Page {
  id: string;
  title: string;
  slug?: string;
  layout: (
    | {
        heading: string;
        subheading?: string;
        ctas: {
          label: string;
          icon?:
            | 'Thumbs Up'
            | 'Plus'
            | 'Star'
            | 'Chat Bubble'
            | 'Phone'
            | 'Person'
            | 'Map Pin'
            | 'Smiley Face'
            | 'Sad Face'
            | 'Arrow Right'
            | 'Arrow Left'
            | 'Arrow Up'
            | 'Arrow Down'
            | 'Chevron Right'
            | 'Chevron Left'
            | 'Chevron Up'
            | 'Chevron Down'
            | 'Building'
            | 'Calendar'
            | 'Credit Card'
            | 'Envelope'
            | 'Document'
            | 'Globe'
            | 'Fire'
            | 'Heart'
            | 'Link';
          type?: 'page' | 'url' | 'phone_number' | 'email';
          page?: string | Page;
          url?: string;
          open_in_new_tab?: boolean;
          phone_number?: string;
          email?: string;
          id?: string;
          blockName?: string;
          blockType: 'link';
        }[];
        image: string | Media;
        id?: string;
        blockName?: string;
        blockType: 'hero';
      }
    | {
        benefits: {
          icon:
            | 'Thumbs Up'
            | 'Plus'
            | 'Star'
            | 'Chat Bubble'
            | 'Phone'
            | 'Person'
            | 'Map Pin'
            | 'Smiley Face'
            | 'Sad Face'
            | 'Arrow Right'
            | 'Arrow Left'
            | 'Arrow Up'
            | 'Arrow Down'
            | 'Chevron Right'
            | 'Chevron Left'
            | 'Chevron Up'
            | 'Chevron Down'
            | 'Building'
            | 'Calendar'
            | 'Credit Card'
            | 'Envelope'
            | 'Document'
            | 'Globe'
            | 'Fire'
            | 'Heart'
            | 'Link';
          benefit: string;
          description?: string;
          id?: string;
        }[];
        id?: string;
        blockName?: string;
        blockType: 'benefits';
      }
    | {
        image: string | Media;
        testimonials: {
          rating: number;
          quote: string;
          name: string;
          caption: string;
          id?: string;
        }[];
        id?: string;
        blockName?: string;
        blockType: 'testimonial-slider';
      }
    | {
        preheading?: string;
        heading: string;
        subheading?: string;
        ctas: {
          label: string;
          icon?:
            | 'Thumbs Up'
            | 'Plus'
            | 'Star'
            | 'Chat Bubble'
            | 'Phone'
            | 'Person'
            | 'Map Pin'
            | 'Smiley Face'
            | 'Sad Face'
            | 'Arrow Right'
            | 'Arrow Left'
            | 'Arrow Up'
            | 'Arrow Down'
            | 'Chevron Right'
            | 'Chevron Left'
            | 'Chevron Up'
            | 'Chevron Down'
            | 'Building'
            | 'Calendar'
            | 'Credit Card'
            | 'Envelope'
            | 'Document'
            | 'Globe'
            | 'Fire'
            | 'Heart'
            | 'Link';
          type?: 'page' | 'url' | 'phone_number' | 'email';
          page?: string | Page;
          url?: string;
          open_in_new_tab?: boolean;
          phone_number?: string;
          email?: string;
          id?: string;
          blockName?: string;
          blockType: 'link';
        }[];
        id?: string;
        blockName?: string;
        blockType: 'team-slider';
      }
    | {
        preheading?: string;
        heading: string;
        subheading?: string;
        ctas: {
          label: string;
          icon?:
            | 'Thumbs Up'
            | 'Plus'
            | 'Star'
            | 'Chat Bubble'
            | 'Phone'
            | 'Person'
            | 'Map Pin'
            | 'Smiley Face'
            | 'Sad Face'
            | 'Arrow Right'
            | 'Arrow Left'
            | 'Arrow Up'
            | 'Arrow Down'
            | 'Chevron Right'
            | 'Chevron Left'
            | 'Chevron Up'
            | 'Chevron Down'
            | 'Building'
            | 'Calendar'
            | 'Credit Card'
            | 'Envelope'
            | 'Document'
            | 'Globe'
            | 'Fire'
            | 'Heart'
            | 'Link';
          type?: 'page' | 'url' | 'phone_number' | 'email';
          page?: string | Page;
          url?: string;
          open_in_new_tab?: boolean;
          phone_number?: string;
          email?: string;
          id?: string;
          blockName?: string;
          blockType: 'link';
        }[];
        image: string | Media;
        testimonials: {
          rating: number;
          quote: string;
          name: string;
          caption: string;
          id?: string;
        }[];
        id?: string;
        blockName?: string;
        blockType: 'cta';
      }
    | {
        preheading?: string;
        heading?: string;
        subheading?: string;
        faqs: {
          question: string;
          answer: {
            [k: string]: unknown;
          }[];
          id?: string;
        }[];
        cta: {
          heading?: string;
          subheading?: string;
          ctas: {
            label: string;
            icon?:
              | 'Thumbs Up'
              | 'Plus'
              | 'Star'
              | 'Chat Bubble'
              | 'Phone'
              | 'Person'
              | 'Map Pin'
              | 'Smiley Face'
              | 'Sad Face'
              | 'Arrow Right'
              | 'Arrow Left'
              | 'Arrow Up'
              | 'Arrow Down'
              | 'Chevron Right'
              | 'Chevron Left'
              | 'Chevron Up'
              | 'Chevron Down'
              | 'Building'
              | 'Calendar'
              | 'Credit Card'
              | 'Envelope'
              | 'Document'
              | 'Globe'
              | 'Fire'
              | 'Heart'
              | 'Link';
            type?: 'page' | 'url' | 'phone_number' | 'email';
            page?: string | Page;
            url?: string;
            open_in_new_tab?: boolean;
            phone_number?: string;
            email?: string;
            id?: string;
            blockName?: string;
            blockType: 'link';
          }[];
        };
        id?: string;
        blockName?: string;
        blockType: 'faqs';
      }
    | {
        preheading?: string;
        heading: string;
        subheading?: string;
        ctas: {
          label: string;
          icon?:
            | 'Thumbs Up'
            | 'Plus'
            | 'Star'
            | 'Chat Bubble'
            | 'Phone'
            | 'Person'
            | 'Map Pin'
            | 'Smiley Face'
            | 'Sad Face'
            | 'Arrow Right'
            | 'Arrow Left'
            | 'Arrow Up'
            | 'Arrow Down'
            | 'Chevron Right'
            | 'Chevron Left'
            | 'Chevron Up'
            | 'Chevron Down'
            | 'Building'
            | 'Calendar'
            | 'Credit Card'
            | 'Envelope'
            | 'Document'
            | 'Globe'
            | 'Fire'
            | 'Heart'
            | 'Link';
          type?: 'page' | 'url' | 'phone_number' | 'email';
          page?: string | Page;
          url?: string;
          open_in_new_tab?: boolean;
          phone_number?: string;
          email?: string;
          id?: string;
          blockName?: string;
          blockType: 'link';
        }[];
        id?: string;
        blockName?: string;
        blockType: 'page-header';
      }
    | {
        content: {
          [k: string]: unknown;
        }[];
        id?: string;
        blockName?: string;
        blockType: 'rich-text';
      }
    | {
        rating: number;
        quote: string;
        name: string;
        caption: string;
        image: string | Media;
        id?: string;
        blockName?: string;
        blockType: 'testimonial';
      }
    | {
        preheading?: string;
        heading: string;
        subheading?: string;
        locations: {
          name: string;
          opening_hours: {
            monday: {
              closed?: boolean;
              open?: string;
              close?: string;
            };
            tuesday: {
              closed?: boolean;
              open?: string;
              close?: string;
            };
            wednesday: {
              closed?: boolean;
              open?: string;
              close?: string;
            };
            thursday: {
              closed?: boolean;
              open?: string;
              close?: string;
            };
            friday: {
              closed?: boolean;
              open?: string;
              close?: string;
            };
            saturday: {
              closed?: boolean;
              open?: string;
              close?: string;
            };
            sunday: {
              closed?: boolean;
              open?: string;
              close?: string;
            };
          };
          address: {
            line1: string;
            line2?: string;
            line3?: string;
            city: string;
            state: string;
            postal_code: string;
          };
          id?: string;
        }[];
        id?: string;
        blockName?: string;
        blockType: 'locations';
      }
    | {
        id?: string;
        blockName?: string;
        blockType: 'team-grid';
      }
    | {
        preheading?: string;
        heading: string;
        subheading?: string;
        ctas: {
          label: string;
          icon?:
            | 'Thumbs Up'
            | 'Plus'
            | 'Star'
            | 'Chat Bubble'
            | 'Phone'
            | 'Person'
            | 'Map Pin'
            | 'Smiley Face'
            | 'Sad Face'
            | 'Arrow Right'
            | 'Arrow Left'
            | 'Arrow Up'
            | 'Arrow Down'
            | 'Chevron Right'
            | 'Chevron Left'
            | 'Chevron Up'
            | 'Chevron Down'
            | 'Building'
            | 'Calendar'
            | 'Credit Card'
            | 'Envelope'
            | 'Document'
            | 'Globe'
            | 'Fire'
            | 'Heart'
            | 'Link';
          type?: 'page' | 'url' | 'phone_number' | 'email';
          page?: string | Page;
          url?: string;
          open_in_new_tab?: boolean;
          phone_number?: string;
          email?: string;
          id?: string;
          blockName?: string;
          blockType: 'link';
        }[];
        image: string | Media;
        positions: {
          title: string;
          description: string;
          type: 'full-time' | 'part-time' | 'contract' | 'internship';
          location: string;
          close_date?: string;
          id?: string;
        }[];
        id?: string;
        blockName?: string;
        blockType: 'open-positions';
      }
    | {
        preheading?: string;
        heading: string;
        subheading?: string;
        benefits: {
          icon:
            | 'Thumbs Up'
            | 'Plus'
            | 'Star'
            | 'Chat Bubble'
            | 'Phone'
            | 'Person'
            | 'Map Pin'
            | 'Smiley Face'
            | 'Sad Face'
            | 'Arrow Right'
            | 'Arrow Left'
            | 'Arrow Up'
            | 'Arrow Down'
            | 'Chevron Right'
            | 'Chevron Left'
            | 'Chevron Up'
            | 'Chevron Down'
            | 'Building'
            | 'Calendar'
            | 'Credit Card'
            | 'Envelope'
            | 'Document'
            | 'Globe'
            | 'Fire'
            | 'Heart'
            | 'Link';
          benefit: string;
          description?: string;
          id?: string;
        }[];
        plan: {
          title: string;
          price: string;
          description: string;
          features: {
            feature: string;
            id?: string;
          }[];
          ctas: {
            label: string;
            icon?:
              | 'Thumbs Up'
              | 'Plus'
              | 'Star'
              | 'Chat Bubble'
              | 'Phone'
              | 'Person'
              | 'Map Pin'
              | 'Smiley Face'
              | 'Sad Face'
              | 'Arrow Right'
              | 'Arrow Left'
              | 'Arrow Up'
              | 'Arrow Down'
              | 'Chevron Right'
              | 'Chevron Left'
              | 'Chevron Up'
              | 'Chevron Down'
              | 'Building'
              | 'Calendar'
              | 'Credit Card'
              | 'Envelope'
              | 'Document'
              | 'Globe'
              | 'Fire'
              | 'Heart'
              | 'Link';
            type?: 'page' | 'url' | 'phone_number' | 'email';
            page?: string | Page;
            url?: string;
            open_in_new_tab?: boolean;
            phone_number?: string;
            email?: string;
            id?: string;
            blockName?: string;
            blockType: 'link';
          }[];
        };
        id?: string;
        blockName?: string;
        blockType: 'plan-pricing';
      }
    | {
        preheading?: string;
        heading: string;
        subheading?: string;
        treatments: string[] | Treatment[];
        id?: string;
        blockName?: string;
        blockType: 'pricing-table';
      }
    | {
        options: {
          icon:
            | 'Thumbs Up'
            | 'Plus'
            | 'Star'
            | 'Chat Bubble'
            | 'Phone'
            | 'Person'
            | 'Map Pin'
            | 'Smiley Face'
            | 'Sad Face'
            | 'Arrow Right'
            | 'Arrow Left'
            | 'Arrow Up'
            | 'Arrow Down'
            | 'Chevron Right'
            | 'Chevron Left'
            | 'Chevron Up'
            | 'Chevron Down'
            | 'Building'
            | 'Calendar'
            | 'Credit Card'
            | 'Envelope'
            | 'Document'
            | 'Globe'
            | 'Fire'
            | 'Heart'
            | 'Link';
          heading: string;
          subheading?: string;
          cta: {
            label: string;
            icon?:
              | 'Thumbs Up'
              | 'Plus'
              | 'Star'
              | 'Chat Bubble'
              | 'Phone'
              | 'Person'
              | 'Map Pin'
              | 'Smiley Face'
              | 'Sad Face'
              | 'Arrow Right'
              | 'Arrow Left'
              | 'Arrow Up'
              | 'Arrow Down'
              | 'Chevron Right'
              | 'Chevron Left'
              | 'Chevron Up'
              | 'Chevron Down'
              | 'Building'
              | 'Calendar'
              | 'Credit Card'
              | 'Envelope'
              | 'Document'
              | 'Globe'
              | 'Fire'
              | 'Heart'
              | 'Link';
            type?: 'page' | 'url' | 'phone_number' | 'email';
            page?: string | Page;
            url?: string;
            open_in_new_tab?: boolean;
            phone_number?: string;
            email?: string;
            id?: string;
            blockName?: string;
            blockType: 'link';
          }[];
          id?: string;
        }[];
        id?: string;
        blockName?: string;
        blockType: 'contact-options';
      }
    | {
        preheading?: string;
        heading: string;
        subheading?: string;
        image: string | Media;
        id?: string;
        blockName?: string;
        blockType: 'contact-form';
      }
    | {
        preheading?: string;
        heading: string;
        subheading?: string;
        ctas: {
          label: string;
          icon?:
            | 'Thumbs Up'
            | 'Plus'
            | 'Star'
            | 'Chat Bubble'
            | 'Phone'
            | 'Person'
            | 'Map Pin'
            | 'Smiley Face'
            | 'Sad Face'
            | 'Arrow Right'
            | 'Arrow Left'
            | 'Arrow Up'
            | 'Arrow Down'
            | 'Chevron Right'
            | 'Chevron Left'
            | 'Chevron Up'
            | 'Chevron Down'
            | 'Building'
            | 'Calendar'
            | 'Credit Card'
            | 'Envelope'
            | 'Document'
            | 'Globe'
            | 'Fire'
            | 'Heart'
            | 'Link';
          type?: 'page' | 'url' | 'phone_number' | 'email';
          page?: string | Page;
          url?: string;
          open_in_new_tab?: boolean;
          phone_number?: string;
          email?: string;
          id?: string;
          blockName?: string;
          blockType: 'link';
        }[];
        id?: string;
        blockName?: string;
        blockType: 'latest-blog-posts';
      }
    | {
        id?: string;
        blockName?: string;
        blockType: 'blog-posts';
      }
    | {
        preheading?: string;
        heading: string;
        subheading?: string;
        ctas: {
          label: string;
          icon?:
            | 'Thumbs Up'
            | 'Plus'
            | 'Star'
            | 'Chat Bubble'
            | 'Phone'
            | 'Person'
            | 'Map Pin'
            | 'Smiley Face'
            | 'Sad Face'
            | 'Arrow Right'
            | 'Arrow Left'
            | 'Arrow Up'
            | 'Arrow Down'
            | 'Chevron Right'
            | 'Chevron Left'
            | 'Chevron Up'
            | 'Chevron Down'
            | 'Building'
            | 'Calendar'
            | 'Credit Card'
            | 'Envelope'
            | 'Document'
            | 'Globe'
            | 'Fire'
            | 'Heart'
            | 'Link';
          type?: 'page' | 'url' | 'phone_number' | 'email';
          page?: string | Page;
          url?: string;
          open_in_new_tab?: boolean;
          phone_number?: string;
          email?: string;
          id?: string;
          blockName?: string;
          blockType: 'link';
        }[];
        featured_treatments: {
          treatment: string | Treatment;
          image: string | Media;
          id?: string;
        }[];
        id?: string;
        blockName?: string;
        blockType: 'featured-treatments';
      }
  )[];
  meta: {
    title?: string;
    description?: string;
  };
  createdAt: string;
  updatedAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "treatments".
 */
export interface Treatment {
  id: string;
  title: string;
  slug?: string;
  price?: string;
  category: 'preventative' | 'restorative' | 'cosmetic' | 'orthodontics';
  layout: (
    | {
        preheading?: string;
        heading: string;
        subheading?: string;
        ctas: {
          label: string;
          icon?:
            | 'Thumbs Up'
            | 'Plus'
            | 'Star'
            | 'Chat Bubble'
            | 'Phone'
            | 'Person'
            | 'Map Pin'
            | 'Smiley Face'
            | 'Sad Face'
            | 'Arrow Right'
            | 'Arrow Left'
            | 'Arrow Up'
            | 'Arrow Down'
            | 'Chevron Right'
            | 'Chevron Left'
            | 'Chevron Up'
            | 'Chevron Down'
            | 'Building'
            | 'Calendar'
            | 'Credit Card'
            | 'Envelope'
            | 'Document'
            | 'Globe'
            | 'Fire'
            | 'Heart'
            | 'Link';
          type?: 'page' | 'url' | 'phone_number' | 'email';
          page?: string | Page;
          url?: string;
          open_in_new_tab?: boolean;
          phone_number?: string;
          email?: string;
          id?: string;
          blockName?: string;
          blockType: 'link';
        }[];
        id?: string;
        blockName?: string;
        blockType: 'page-header';
      }
    | {
        content: {
          [k: string]: unknown;
        }[];
        id?: string;
        blockName?: string;
        blockType: 'rich-text';
      }
    | {
        benefits: {
          icon:
            | 'Thumbs Up'
            | 'Plus'
            | 'Star'
            | 'Chat Bubble'
            | 'Phone'
            | 'Person'
            | 'Map Pin'
            | 'Smiley Face'
            | 'Sad Face'
            | 'Arrow Right'
            | 'Arrow Left'
            | 'Arrow Up'
            | 'Arrow Down'
            | 'Chevron Right'
            | 'Chevron Left'
            | 'Chevron Up'
            | 'Chevron Down'
            | 'Building'
            | 'Calendar'
            | 'Credit Card'
            | 'Envelope'
            | 'Document'
            | 'Globe'
            | 'Fire'
            | 'Heart'
            | 'Link';
          benefit: string;
          description?: string;
          id?: string;
        }[];
        id?: string;
        blockName?: string;
        blockType: 'benefits';
      }
    | {
        rating: number;
        quote: string;
        name: string;
        caption: string;
        image: string | Media;
        id?: string;
        blockName?: string;
        blockType: 'testimonial';
      }
    | {
        preheading?: string;
        heading?: string;
        subheading?: string;
        faqs: {
          question: string;
          answer: {
            [k: string]: unknown;
          }[];
          id?: string;
        }[];
        cta: {
          heading?: string;
          subheading?: string;
          ctas: {
            label: string;
            icon?:
              | 'Thumbs Up'
              | 'Plus'
              | 'Star'
              | 'Chat Bubble'
              | 'Phone'
              | 'Person'
              | 'Map Pin'
              | 'Smiley Face'
              | 'Sad Face'
              | 'Arrow Right'
              | 'Arrow Left'
              | 'Arrow Up'
              | 'Arrow Down'
              | 'Chevron Right'
              | 'Chevron Left'
              | 'Chevron Up'
              | 'Chevron Down'
              | 'Building'
              | 'Calendar'
              | 'Credit Card'
              | 'Envelope'
              | 'Document'
              | 'Globe'
              | 'Fire'
              | 'Heart'
              | 'Link';
            type?: 'page' | 'url' | 'phone_number' | 'email';
            page?: string | Page;
            url?: string;
            open_in_new_tab?: boolean;
            phone_number?: string;
            email?: string;
            id?: string;
            blockName?: string;
            blockType: 'link';
          }[];
        };
        id?: string;
        blockName?: string;
        blockType: 'faqs';
      }
  )[];
  meta: {
    title?: string;
    description?: string;
  };
  createdAt: string;
  updatedAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "footer-navigation".
 */
export interface FooterNavigation {
  id: string;
  columns: {
    heading: string;
    links: {
      label: string;
      icon?:
        | 'Thumbs Up'
        | 'Plus'
        | 'Star'
        | 'Chat Bubble'
        | 'Phone'
        | 'Person'
        | 'Map Pin'
        | 'Smiley Face'
        | 'Sad Face'
        | 'Arrow Right'
        | 'Arrow Left'
        | 'Arrow Up'
        | 'Arrow Down'
        | 'Chevron Right'
        | 'Chevron Left'
        | 'Chevron Up'
        | 'Chevron Down'
        | 'Building'
        | 'Calendar'
        | 'Credit Card'
        | 'Envelope'
        | 'Document'
        | 'Globe'
        | 'Fire'
        | 'Heart'
        | 'Link';
      type?: 'page' | 'url' | 'phone_number' | 'email';
      page?: string | Page;
      url?: string;
      open_in_new_tab?: boolean;
      phone_number?: string;
      email?: string;
      id?: string;
      blockName?: string;
      blockType: 'link';
    }[];
    id?: string;
  }[];
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "users".
 */
export interface User {
  id: string;
  email?: string;
  resetPasswordToken?: string;
  resetPasswordExpiration?: string;
  loginAttempts?: number;
  lockUntil?: string;
  createdAt: string;
  updatedAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "team".
 */
export interface Team {
  id: string;
  name: string;
  slug?: string;
  image: string | Media;
  role: string;
  short_bio?: string;
  long_bio?: {
    [k: string]: unknown;
  }[];
  index?: number;
  twitter_url?: string;
  linkedin_url?: string;
  website_url?: string;
  createdAt: string;
  updatedAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "blog".
 */
export interface Blog {
  id: string;
  title: string;
  slug?: string;
  image: string | Media;
  author: string | Team;
  excerpt: string;
  content: {
    [k: string]: unknown;
  }[];
  reading_time?: number;
  meta: {
    title?: string;
    description?: string;
  };
  createdAt: string;
  updatedAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "contact-form-submissions".
 */
export interface ContactFormSubmission {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  phone?: string;
  message: string;
  createdAt: string;
  updatedAt: string;
}