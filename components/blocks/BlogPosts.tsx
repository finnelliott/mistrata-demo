"use client";

import { ArrowLongLeftIcon, ArrowLongRightIcon } from "@heroicons/react/20/solid";
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import SectionHeader from "../shared/SectionHeader"
import Container from "./Container"

const posts = [
  {
    title: 'Boost your conversion rate',
    href: '#',
    category: { name: 'Article', href: '#' },
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium praesentium eius, ut atque fuga culpa, similique sequi cum eos quis dolorum.',
    date: 'Mar 16, 2020',
    datetime: '2020-03-16',
    image: {
      url: 
      'https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
      alt: 'Video thumbnail',
    },
    readingTime: '6 min',
    author: {
      name: 'Roel Aufderehar',
      href: '#',
      image: {
          url: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
          alt: 'Daniela Metz',
      },
    },
  },
  {
    title: 'How to use search engine optimization to drive sales',
    href: '#',
    category: { name: 'Video', href: '#' },
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium praesentium eius, ut atque fuga culpa, similique sequi cum eos quis dolorum.',
    date: 'Mar 10, 2020',
    datetime: '2020-03-10',
    image: {
      url:
        'https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
      alt: 'Video thumbnail',
    },
    readingTime: '4 min',
    author: {
      name: 'Daniela Metz',
      href: '#',
      image: {
          url: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
          alt: 'Daniela Metz',
      },
    }
  },
  {
    title: 'Improve your customer experience',
    href: '#',
    category: { name: 'Video', href: '#' },
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium praesentium eius, ut atque fuga culpa, similique sequi cum eos quis dolorum.',
    date: 'Mar 10, 2020',
    datetime: '2020-03-10',
    image: {
      url:
        'https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
      alt: 'Video thumbnail',
    },
    readingTime: '4 min',
    author: {
      name: 'Daniela Metz',
      href: '#',
      image: {
          url: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
          alt: 'Daniela Metz',
      },
    }
  },
  {
    title: 'Write better copy',
    href: '#',
    category: { name: 'Video', href: '#' },
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium praesentium eius, ut atque fuga culpa, similique sequi cum eos quis dolorum.',
    date: 'Mar 10, 2020',
    datetime: '2020-03-10',
    image: {
      url:
        'https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
      alt: 'Video thumbnail',
    },
    readingTime: '4 min',
    author: {
      name: 'Daniela Metz',
      href: '#',
      image: {
          url: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
          alt: 'Daniela Metz',
      },
    }
  },
  {
    title: 'Improve your customer experience',
    href: '#',
    category: { name: 'Video', href: '#' },
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium praesentium eius, ut atque fuga culpa, similique sequi cum eos quis dolorum.',
    date: 'Mar 10, 2020',
    datetime: '2020-03-10',
    image: {
      url:
        'https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
      alt: 'Video thumbnail',
    },
    readingTime: '4 min',
    author: {
      name: 'Daniela Metz',
      href: '#',
      image: {
          url: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
          alt: 'Daniela Metz',
      },
    },
  },
  {
    title: 'Write better copy',
    href: '#',
    category: { name: 'Video', href: '#' },
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium praesentium eius, ut atque fuga culpa, similique sequi cum eos quis dolorum.',
    date: 'Mar 10, 2020',
    datetime: '2020-03-10',
    image: {
      url:
        'https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
      alt: 'Video thumbnail',
    },
    readingTime: '4 min',
    author: {
      name: 'Daniela Metz',
      href: '#',
      image: {
          url: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
          alt: 'Daniela Metz',
      },
    }
  },
  {
    title: 'What to look for in a dentist',
    href: '#',
    category: { name: 'Video', href: '#' },
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium praesentium eius, ut atque fuga culpa, similique sequi cum eos quis dolorum.',
    date: 'Mar 10, 2020',
    datetime: '2020-03-10',
    image: {
      url:
        'https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
      alt: 'Video thumbnail',
    },
    readingTime: '4 min',
    author: {
      name: 'Daniela Metz',
      href: '#',
      image: {
          url: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
          alt: 'Daniela Metz',
      },
    }
  },
  {
    title: 'Improve your dental customer experience',
    href: '#',
    category: { name: 'Video', href: '#' },
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium praesentium eius, ut atque fuga culpa, similique sequi cum eos quis dolorum.',
    date: 'Mar 10, 2020',
    datetime: '2020-03-10',
    image: {
      url:
        'https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
      alt: 'Video thumbnail',
    },
    readingTime: '4 min',
    author: {
      name: 'Daniela Metz',
      href: '#',
      image: {
          url: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
          alt: 'Daniela Metz',
      },
    }
  },
  {
    title: 'How to get the most out of your dental benefits',
    href: '#',
    category: { name: 'Video', href: '#' },
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium praesentium eius, ut atque fuga culpa, similique sequi cum eos quis dolorum.',
    date: 'Mar 10, 2020',
    datetime: '2020-03-10',
    image: {
      url:
        'https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
      alt: 'Video thumbnail',
    },
    readingTime: '4 min',
    author: {
      name: 'Daniela Metz',
      href: '#',
      image: {
          url: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
          alt: 'Daniela Metz',
      },
    }
  },
  {
    title: 'What to look for in a dentist',
    href: '#',
    category: { name: 'Video', href: '#' },
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium praesentium eius, ut atque fuga culpa, similique sequi cum eos quis dolorum.',
    date: 'Mar 10, 2020',
    datetime: '2020-03-10',
    image: {
      url:
        'https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
      alt: 'Video thumbnail',
    },
    readingTime: '4 min',
    author: {
      name: 'Daniela Metz',
      href: '#',
      image: {
          url: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
          alt: 'Daniela Metz',
      },
    }
  },
  {
    title: 'How to get the most out of your dental benefits and improve your health',
    href: '#',
    category: { name: 'Video', href: '#' },
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium praesentium eius, ut atque fuga culpa, similique sequi cum eos quis dolorum.',
    date: 'Mar 10, 2020',
    datetime: '2020-03-10',
    image: {
      url:
        'https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
      alt: 'Video thumbnail',
    },
    readingTime: '4 min',
    author: {
      name: 'Daniela Metz',
      href: '#',
      image: {
          url: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
          alt: 'Daniela Metz',
      },
    }
  },
  {
    title: 'How to improve your dental health',
    href: '#',
    category: { name: 'Video', href: '#' },
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium praesentium eius, ut atque fuga culpa, similique sequi cum eos quis dolorum.',
    date: 'Mar 10, 2020',
    datetime: '2020-03-10',
    image: {
      url:
        'https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
      alt: 'Video thumbnail',
    },
    readingTime: '4 min',
    author: {
      name: 'Daniela Metz',
      href: '#',
      image: {
          url: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
          alt: 'Daniela Metz',
      },
    }
  },
  {
    title: 'How to improve your dental health',
    href: '#',
    category: { name: 'Video', href: '#' },
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium praesentium eius, ut atque fuga culpa, similique sequi cum eos quis dolorum.',
    date: 'Mar 10, 2020',
    datetime: '2020-03-10',
    image: {
      url:
        'https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
      alt: 'Video thumbnail',
    },
    readingTime: '4 min',
    author: {
      name: 'Daniela Metz',
      href: '#',
      image: {
          url: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
          alt: 'Daniela Metz',
      },
    }
  },
  {
    title: 'How to improve your dental health',
    href: '#',
    category: { name: 'Video', href: '#' },
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium praesentium eius, ut atque fuga culpa, similique sequi cum eos quis dolorum.',
    date: 'Mar 10, 2020',
    datetime: '2020-03-10',
    image: {
      url:
        'https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
      alt: 'Video thumbnail',
    },
    readingTime: '4 min',
    author: {
      name: 'Daniela Metz',
      href: '#',
      image: {
          url: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
          alt: 'Daniela Metz',
      },
    }
  },
  {
    title: 'How to improve your dental health',
    href: '#',
    category: { name: 'Video', href: '#' },
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium praesentium eius, ut atque fuga culpa, similique sequi cum eos quis dolorum.',
    date: 'Mar 10, 2020',
    datetime: '2020-03-10',
    image: {
      url:
        'https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
      alt: 'Video thumbnail',
    },
    readingTime: '4 min',
    author: {
      name: 'Daniela Metz',
      href: '#',
      image: {
          url: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
          alt: 'Daniela Metz',
      },
    }
  },
  {
    title: 'How to improve your dental health',
    href: '#',
    category: { name: 'Video', href: '#' },
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium praesentium eius, ut atque fuga culpa, similique sequi cum eos quis dolorum.',
    date: 'Mar 10, 2020',
    datetime: '2020-03-10',
    image: {
      url:
        'https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
      alt: 'Video thumbnail',
    },
    readingTime: '4 min',
    author: {
      name: 'Daniela Metz',
      href: '#',
      image: {
          url: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
          alt: 'Daniela Metz',
      },
    }
  },
  {
    title: 'How to improve your dental health',
    href: '#',
    category: { name: 'Video', href: '#' },
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium praesentium eius, ut atque fuga culpa, similique sequi cum eos quis dolorum.',
    date: 'Mar 10, 2020',
    datetime: '2020-03-10',
    image: {
      url:
        'https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
      alt: 'Video thumbnail',
    },
    readingTime: '4 min',
    author: {
      name: 'Daniela Metz',
      href: '#',
      image: {
          url: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
          alt: 'Daniela Metz',
      },
    }
  },
  {
    title: 'How to improve your dental health',
    href: '#',
    category: { name: 'Video', href: '#' },
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium praesentium eius, ut atque fuga culpa, similique sequi cum eos quis dolorum.',
    date: 'Mar 10, 2020',
    datetime: '2020-03-10',
    image: {
      url:
        'https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
      alt: 'Video thumbnail',
    },
    readingTime: '4 min',
    author: {
      name: 'Daniela Metz',
      href: '#',
      image: {
          url: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
          alt: 'Daniela Metz',
      },
    }
  },
  {
    title: 'Boost your conversion rate',
    href: '#',
    category: { name: 'Article', href: '#' },
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium praesentium eius, ut atque fuga culpa, similique sequi cum eos quis dolorum.',
    date: 'Mar 16, 2020',
    datetime: '2020-03-16',
    image: {
      url: 
      'https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
      alt: 'Video thumbnail',
    },
    readingTime: '6 min',
    author: {
      name: 'Roel Aufderehar',
      href: '#',
      image: {
          url: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
          alt: 'Daniela Metz',
      },
    },
  },
  {
    title: 'How to use search engine optimization to drive sales',
    href: '#',
    category: { name: 'Video', href: '#' },
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium praesentium eius, ut atque fuga culpa, similique sequi cum eos quis dolorum.',
    date: 'Mar 10, 2020',
    datetime: '2020-03-10',
    image: {
      url:
        'https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
      alt: 'Video thumbnail',
    },
    readingTime: '4 min',
    author: {
      name: 'Daniela Metz',
      href: '#',
      image: {
          url: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
          alt: 'Daniela Metz',
      },
    }
  },
  {
    title: 'Improve your customer experience',
    href: '#',
    category: { name: 'Video', href: '#' },
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium praesentium eius, ut atque fuga culpa, similique sequi cum eos quis dolorum.',
    date: 'Mar 10, 2020',
    datetime: '2020-03-10',
    image: {
      url:
        'https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
      alt: 'Video thumbnail',
    },
    readingTime: '4 min',
    author: {
      name: 'Daniela Metz',
      href: '#',
      image: {
          url: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
          alt: 'Daniela Metz',
      },
    }
  },
  {
    title: 'Write better copy',
    href: '#',
    category: { name: 'Video', href: '#' },
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium praesentium eius, ut atque fuga culpa, similique sequi cum eos quis dolorum.',
    date: 'Mar 10, 2020',
    datetime: '2020-03-10',
    image: {
      url:
        'https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
      alt: 'Video thumbnail',
    },
    readingTime: '4 min',
    author: {
      name: 'Daniela Metz',
      href: '#',
      image: {
          url: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
          alt: 'Daniela Metz',
      },
    }
  },
  {
    title: 'Improve your customer experience',
    href: '#',
    category: { name: 'Video', href: '#' },
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium praesentium eius, ut atque fuga culpa, similique sequi cum eos quis dolorum.',
    date: 'Mar 10, 2020',
    datetime: '2020-03-10',
    image: {
      url:
        'https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
      alt: 'Video thumbnail',
    },
    readingTime: '4 min',
    author: {
      name: 'Daniela Metz',
      href: '#',
      image: {
          url: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
          alt: 'Daniela Metz',
      },
    },
  },
  {
    title: 'Write better copy',
    href: '#',
    category: { name: 'Video', href: '#' },
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium praesentium eius, ut atque fuga culpa, similique sequi cum eos quis dolorum.',
    date: 'Mar 10, 2020',
    datetime: '2020-03-10',
    image: {
      url:
        'https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
      alt: 'Video thumbnail',
    },
    readingTime: '4 min',
    author: {
      name: 'Daniela Metz',
      href: '#',
      image: {
          url: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
          alt: 'Daniela Metz',
      },
    }
  },
  {
    title: 'What to look for in a dentist',
    href: '#',
    category: { name: 'Video', href: '#' },
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium praesentium eius, ut atque fuga culpa, similique sequi cum eos quis dolorum.',
    date: 'Mar 10, 2020',
    datetime: '2020-03-10',
    image: {
      url:
        'https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
      alt: 'Video thumbnail',
    },
    readingTime: '4 min',
    author: {
      name: 'Daniela Metz',
      href: '#',
      image: {
          url: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
          alt: 'Daniela Metz',
      },
    }
  },
  {
    title: 'Improve your dental customer experience',
    href: '#',
    category: { name: 'Video', href: '#' },
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium praesentium eius, ut atque fuga culpa, similique sequi cum eos quis dolorum.',
    date: 'Mar 10, 2020',
    datetime: '2020-03-10',
    image: {
      url:
        'https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
      alt: 'Video thumbnail',
    },
    readingTime: '4 min',
    author: {
      name: 'Daniela Metz',
      href: '#',
      image: {
          url: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
          alt: 'Daniela Metz',
      },
    }
  },
  {
    title: 'How to get the most out of your dental benefits',
    href: '#',
    category: { name: 'Video', href: '#' },
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium praesentium eius, ut atque fuga culpa, similique sequi cum eos quis dolorum.',
    date: 'Mar 10, 2020',
    datetime: '2020-03-10',
    image: {
      url:
        'https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
      alt: 'Video thumbnail',
    },
    readingTime: '4 min',
    author: {
      name: 'Daniela Metz',
      href: '#',
      image: {
          url: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
          alt: 'Daniela Metz',
      },
    }
  },
  {
    title: 'What to look for in a dentist',
    href: '#',
    category: { name: 'Video', href: '#' },
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium praesentium eius, ut atque fuga culpa, similique sequi cum eos quis dolorum.',
    date: 'Mar 10, 2020',
    datetime: '2020-03-10',
    image: {
      url:
        'https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
      alt: 'Video thumbnail',
    },
    readingTime: '4 min',
    author: {
      name: 'Daniela Metz',
      href: '#',
      image: {
          url: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
          alt: 'Daniela Metz',
      },
    }
  },
  {
    title: 'How to get the most out of your dental benefits and improve your health',
    href: '#',
    category: { name: 'Video', href: '#' },
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium praesentium eius, ut atque fuga culpa, similique sequi cum eos quis dolorum.',
    date: 'Mar 10, 2020',
    datetime: '2020-03-10',
    image: {
      url:
        'https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
      alt: 'Video thumbnail',
    },
    readingTime: '4 min',
    author: {
      name: 'Daniela Metz',
      href: '#',
      image: {
          url: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
          alt: 'Daniela Metz',
      },
    }
  },
  {
    title: 'How to improve your dental health',
    href: '#',
    category: { name: 'Video', href: '#' },
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium praesentium eius, ut atque fuga culpa, similique sequi cum eos quis dolorum.',
    date: 'Mar 10, 2020',
    datetime: '2020-03-10',
    image: {
      url:
        'https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
      alt: 'Video thumbnail',
    },
    readingTime: '4 min',
    author: {
      name: 'Daniela Metz',
      href: '#',
      image: {
          url: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
          alt: 'Daniela Metz',
      },
    }
  },
  {
    title: 'How to improve your dental health',
    href: '#',
    category: { name: 'Video', href: '#' },
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium praesentium eius, ut atque fuga culpa, similique sequi cum eos quis dolorum.',
    date: 'Mar 10, 2020',
    datetime: '2020-03-10',
    image: {
      url:
        'https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
      alt: 'Video thumbnail',
    },
    readingTime: '4 min',
    author: {
      name: 'Daniela Metz',
      href: '#',
      image: {
          url: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
          alt: 'Daniela Metz',
      },
    }
  },
  {
    title: 'How to improve your dental health',
    href: '#',
    category: { name: 'Video', href: '#' },
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium praesentium eius, ut atque fuga culpa, similique sequi cum eos quis dolorum.',
    date: 'Mar 10, 2020',
    datetime: '2020-03-10',
    image: {
      url:
        'https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
      alt: 'Video thumbnail',
    },
    readingTime: '4 min',
    author: {
      name: 'Daniela Metz',
      href: '#',
      image: {
          url: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
          alt: 'Daniela Metz',
      },
    }
  },
  {
    title: 'How to improve your dental health',
    href: '#',
    category: { name: 'Video', href: '#' },
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium praesentium eius, ut atque fuga culpa, similique sequi cum eos quis dolorum.',
    date: 'Mar 10, 2020',
    datetime: '2020-03-10',
    image: {
      url:
        'https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
      alt: 'Video thumbnail',
    },
    readingTime: '4 min',
    author: {
      name: 'Daniela Metz',
      href: '#',
      image: {
          url: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
          alt: 'Daniela Metz',
      },
    }
  },
  {
    title: 'How to improve your dental health',
    href: '#',
    category: { name: 'Video', href: '#' },
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium praesentium eius, ut atque fuga culpa, similique sequi cum eos quis dolorum.',
    date: 'Mar 10, 2020',
    datetime: '2020-03-10',
    image: {
      url:
        'https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
      alt: 'Video thumbnail',
    },
    readingTime: '4 min',
    author: {
      name: 'Daniela Metz',
      href: '#',
      image: {
          url: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
          alt: 'Daniela Metz',
      },
    }
  },
  {
    title: 'How to improve your dental health',
    href: '#',
    category: { name: 'Video', href: '#' },
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium praesentium eius, ut atque fuga culpa, similique sequi cum eos quis dolorum.',
    date: 'Mar 10, 2020',
    datetime: '2020-03-10',
    image: {
      url:
        'https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
      alt: 'Video thumbnail',
    },
    readingTime: '4 min',
    author: {
      name: 'Daniela Metz',
      href: '#',
      image: {
          url: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
          alt: 'Daniela Metz',
      },
    }
  },
  {
    title: 'How to improve your dental health',
    href: '#',
    category: { name: 'Video', href: '#' },
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium praesentium eius, ut atque fuga culpa, similique sequi cum eos quis dolorum.',
    date: 'Mar 10, 2020',
    datetime: '2020-03-10',
    image: {
      url:
        'https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
      alt: 'Video thumbnail',
    },
    readingTime: '4 min',
    author: {
      name: 'Daniela Metz',
      href: '#',
      image: {
          url: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
          alt: 'Daniela Metz',
      },
    }
  },

  {
    title: 'Boost your conversion rate',
    href: '#',
    category: { name: 'Article', href: '#' },
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium praesentium eius, ut atque fuga culpa, similique sequi cum eos quis dolorum.',
    date: 'Mar 16, 2020',
    datetime: '2020-03-16',
    image: {
      url: 
      'https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
      alt: 'Video thumbnail',
    },
    readingTime: '6 min',
    author: {
      name: 'Roel Aufderehar',
      href: '#',
      image: {
          url: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
          alt: 'Daniela Metz',
      },
    },
  },
  {
    title: 'How to use search engine optimization to drive sales',
    href: '#',
    category: { name: 'Video', href: '#' },
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium praesentium eius, ut atque fuga culpa, similique sequi cum eos quis dolorum.',
    date: 'Mar 10, 2020',
    datetime: '2020-03-10',
    image: {
      url:
        'https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
      alt: 'Video thumbnail',
    },
    readingTime: '4 min',
    author: {
      name: 'Daniela Metz',
      href: '#',
      image: {
          url: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
          alt: 'Daniela Metz',
      },
    }
  },
  {
    title: 'Improve your customer experience',
    href: '#',
    category: { name: 'Video', href: '#' },
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium praesentium eius, ut atque fuga culpa, similique sequi cum eos quis dolorum.',
    date: 'Mar 10, 2020',
    datetime: '2020-03-10',
    image: {
      url:
        'https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
      alt: 'Video thumbnail',
    },
    readingTime: '4 min',
    author: {
      name: 'Daniela Metz',
      href: '#',
      image: {
          url: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
          alt: 'Daniela Metz',
      },
    }
  },
  {
    title: 'Write better copy',
    href: '#',
    category: { name: 'Video', href: '#' },
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium praesentium eius, ut atque fuga culpa, similique sequi cum eos quis dolorum.',
    date: 'Mar 10, 2020',
    datetime: '2020-03-10',
    image: {
      url:
        'https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
      alt: 'Video thumbnail',
    },
    readingTime: '4 min',
    author: {
      name: 'Daniela Metz',
      href: '#',
      image: {
          url: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
          alt: 'Daniela Metz',
      },
    }
  },
  {
    title: 'Improve your customer experience',
    href: '#',
    category: { name: 'Video', href: '#' },
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium praesentium eius, ut atque fuga culpa, similique sequi cum eos quis dolorum.',
    date: 'Mar 10, 2020',
    datetime: '2020-03-10',
    image: {
      url:
        'https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
      alt: 'Video thumbnail',
    },
    readingTime: '4 min',
    author: {
      name: 'Daniela Metz',
      href: '#',
      image: {
          url: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
          alt: 'Daniela Metz',
      },
    },
  },
  {
    title: 'Write better copy',
    href: '#',
    category: { name: 'Video', href: '#' },
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium praesentium eius, ut atque fuga culpa, similique sequi cum eos quis dolorum.',
    date: 'Mar 10, 2020',
    datetime: '2020-03-10',
    image: {
      url:
        'https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
      alt: 'Video thumbnail',
    },
    readingTime: '4 min',
    author: {
      name: 'Daniela Metz',
      href: '#',
      image: {
          url: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
          alt: 'Daniela Metz',
      },
    }
  },
  {
    title: 'What to look for in a dentist',
    href: '#',
    category: { name: 'Video', href: '#' },
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium praesentium eius, ut atque fuga culpa, similique sequi cum eos quis dolorum.',
    date: 'Mar 10, 2020',
    datetime: '2020-03-10',
    image: {
      url:
        'https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
      alt: 'Video thumbnail',
    },
    readingTime: '4 min',
    author: {
      name: 'Daniela Metz',
      href: '#',
      image: {
          url: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
          alt: 'Daniela Metz',
      },
    }
  },
  {
    title: 'Improve your dental customer experience',
    href: '#',
    category: { name: 'Video', href: '#' },
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium praesentium eius, ut atque fuga culpa, similique sequi cum eos quis dolorum.',
    date: 'Mar 10, 2020',
    datetime: '2020-03-10',
    image: {
      url:
        'https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
      alt: 'Video thumbnail',
    },
    readingTime: '4 min',
    author: {
      name: 'Daniela Metz',
      href: '#',
      image: {
          url: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
          alt: 'Daniela Metz',
      },
    }
  },
  {
    title: 'How to get the most out of your dental benefits',
    href: '#',
    category: { name: 'Video', href: '#' },
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium praesentium eius, ut atque fuga culpa, similique sequi cum eos quis dolorum.',
    date: 'Mar 10, 2020',
    datetime: '2020-03-10',
    image: {
      url:
        'https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
      alt: 'Video thumbnail',
    },
    readingTime: '4 min',
    author: {
      name: 'Daniela Metz',
      href: '#',
      image: {
          url: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
          alt: 'Daniela Metz',
      },
    }
  },
  {
    title: 'What to look for in a dentist',
    href: '#',
    category: { name: 'Video', href: '#' },
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium praesentium eius, ut atque fuga culpa, similique sequi cum eos quis dolorum.',
    date: 'Mar 10, 2020',
    datetime: '2020-03-10',
    image: {
      url:
        'https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
      alt: 'Video thumbnail',
    },
    readingTime: '4 min',
    author: {
      name: 'Daniela Metz',
      href: '#',
      image: {
          url: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
          alt: 'Daniela Metz',
      },
    }
  },
  {
    title: 'How to get the most out of your dental benefits and improve your health',
    href: '#',
    category: { name: 'Video', href: '#' },
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium praesentium eius, ut atque fuga culpa, similique sequi cum eos quis dolorum.',
    date: 'Mar 10, 2020',
    datetime: '2020-03-10',
    image: {
      url:
        'https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
      alt: 'Video thumbnail',
    },
    readingTime: '4 min',
    author: {
      name: 'Daniela Metz',
      href: '#',
      image: {
          url: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
          alt: 'Daniela Metz',
      },
    }
  },
  {
    title: 'How to improve your dental health',
    href: '#',
    category: { name: 'Video', href: '#' },
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium praesentium eius, ut atque fuga culpa, similique sequi cum eos quis dolorum.',
    date: 'Mar 10, 2020',
    datetime: '2020-03-10',
    image: {
      url:
        'https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
      alt: 'Video thumbnail',
    },
    readingTime: '4 min',
    author: {
      name: 'Daniela Metz',
      href: '#',
      image: {
          url: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
          alt: 'Daniela Metz',
      },
    }
  },
  {
    title: 'How to improve your dental health',
    href: '#',
    category: { name: 'Video', href: '#' },
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium praesentium eius, ut atque fuga culpa, similique sequi cum eos quis dolorum.',
    date: 'Mar 10, 2020',
    datetime: '2020-03-10',
    image: {
      url:
        'https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
      alt: 'Video thumbnail',
    },
    readingTime: '4 min',
    author: {
      name: 'Daniela Metz',
      href: '#',
      image: {
          url: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
          alt: 'Daniela Metz',
      },
    }
  },
  {
    title: 'How to improve your dental health',
    href: '#',
    category: { name: 'Video', href: '#' },
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium praesentium eius, ut atque fuga culpa, similique sequi cum eos quis dolorum.',
    date: 'Mar 10, 2020',
    datetime: '2020-03-10',
    image: {
      url:
        'https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
      alt: 'Video thumbnail',
    },
    readingTime: '4 min',
    author: {
      name: 'Daniela Metz',
      href: '#',
      image: {
          url: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
          alt: 'Daniela Metz',
      },
    }
  },
  {
    title: 'How to improve your dental health',
    href: '#',
    category: { name: 'Video', href: '#' },
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium praesentium eius, ut atque fuga culpa, similique sequi cum eos quis dolorum.',
    date: 'Mar 10, 2020',
    datetime: '2020-03-10',
    image: {
      url:
        'https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
      alt: 'Video thumbnail',
    },
    readingTime: '4 min',
    author: {
      name: 'Daniela Metz',
      href: '#',
      image: {
          url: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
          alt: 'Daniela Metz',
      },
    }
  },
  {
    title: 'How to improve your dental health',
    href: '#',
    category: { name: 'Video', href: '#' },
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium praesentium eius, ut atque fuga culpa, similique sequi cum eos quis dolorum.',
    date: 'Mar 10, 2020',
    datetime: '2020-03-10',
    image: {
      url:
        'https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
      alt: 'Video thumbnail',
    },
    readingTime: '4 min',
    author: {
      name: 'Daniela Metz',
      href: '#',
      image: {
          url: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
          alt: 'Daniela Metz',
      },
    }
  },
  {
    title: 'How to improve your dental health',
    href: '#',
    category: { name: 'Video', href: '#' },
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium praesentium eius, ut atque fuga culpa, similique sequi cum eos quis dolorum.',
    date: 'Mar 10, 2020',
    datetime: '2020-03-10',
    image: {
      url:
        'https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
      alt: 'Video thumbnail',
    },
    readingTime: '4 min',
    author: {
      name: 'Daniela Metz',
      href: '#',
      image: {
          url: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
          alt: 'Daniela Metz',
      },
    }
  },
  {
    title: 'How to improve your dental health',
    href: '#',
    category: { name: 'Video', href: '#' },
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium praesentium eius, ut atque fuga culpa, similique sequi cum eos quis dolorum.',
    date: 'Mar 10, 2020',
    datetime: '2020-03-10',
    image: {
      url:
        'https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
      alt: 'Video thumbnail',
    },
    readingTime: '4 min',
    author: {
      name: 'Daniela Metz',
      href: '#',
      image: {
          url: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
          alt: 'Daniela Metz',
      },
    }
  },

  {
    title: 'Boost your conversion rate',
    href: '#',
    category: { name: 'Article', href: '#' },
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium praesentium eius, ut atque fuga culpa, similique sequi cum eos quis dolorum.',
    date: 'Mar 16, 2020',
    datetime: '2020-03-16',
    image: {
      url: 
      'https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
      alt: 'Video thumbnail',
    },
    readingTime: '6 min',
    author: {
      name: 'Roel Aufderehar',
      href: '#',
      image: {
          url: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
          alt: 'Daniela Metz',
      },
    },
  },
  {
    title: 'How to use search engine optimization to drive sales',
    href: '#',
    category: { name: 'Video', href: '#' },
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium praesentium eius, ut atque fuga culpa, similique sequi cum eos quis dolorum.',
    date: 'Mar 10, 2020',
    datetime: '2020-03-10',
    image: {
      url:
        'https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
      alt: 'Video thumbnail',
    },
    readingTime: '4 min',
    author: {
      name: 'Daniela Metz',
      href: '#',
      image: {
          url: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
          alt: 'Daniela Metz',
      },
    }
  },
  {
    title: 'Improve your customer experience',
    href: '#',
    category: { name: 'Video', href: '#' },
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium praesentium eius, ut atque fuga culpa, similique sequi cum eos quis dolorum.',
    date: 'Mar 10, 2020',
    datetime: '2020-03-10',
    image: {
      url:
        'https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
      alt: 'Video thumbnail',
    },
    readingTime: '4 min',
    author: {
      name: 'Daniela Metz',
      href: '#',
      image: {
          url: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
          alt: 'Daniela Metz',
      },
    }
  },
  {
    title: 'Write better copy',
    href: '#',
    category: { name: 'Video', href: '#' },
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium praesentium eius, ut atque fuga culpa, similique sequi cum eos quis dolorum.',
    date: 'Mar 10, 2020',
    datetime: '2020-03-10',
    image: {
      url:
        'https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
      alt: 'Video thumbnail',
    },
    readingTime: '4 min',
    author: {
      name: 'Daniela Metz',
      href: '#',
      image: {
          url: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
          alt: 'Daniela Metz',
      },
    }
  },
  {
    title: 'Improve your customer experience',
    href: '#',
    category: { name: 'Video', href: '#' },
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium praesentium eius, ut atque fuga culpa, similique sequi cum eos quis dolorum.',
    date: 'Mar 10, 2020',
    datetime: '2020-03-10',
    image: {
      url:
        'https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
      alt: 'Video thumbnail',
    },
    readingTime: '4 min',
    author: {
      name: 'Daniela Metz',
      href: '#',
      image: {
          url: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
          alt: 'Daniela Metz',
      },
    },
  },
  {
    title: 'Write better copy',
    href: '#',
    category: { name: 'Video', href: '#' },
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium praesentium eius, ut atque fuga culpa, similique sequi cum eos quis dolorum.',
    date: 'Mar 10, 2020',
    datetime: '2020-03-10',
    image: {
      url:
        'https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
      alt: 'Video thumbnail',
    },
    readingTime: '4 min',
    author: {
      name: 'Daniela Metz',
      href: '#',
      image: {
          url: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
          alt: 'Daniela Metz',
      },
    }
  },
  {
    title: 'What to look for in a dentist',
    href: '#',
    category: { name: 'Video', href: '#' },
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium praesentium eius, ut atque fuga culpa, similique sequi cum eos quis dolorum.',
    date: 'Mar 10, 2020',
    datetime: '2020-03-10',
    image: {
      url:
        'https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
      alt: 'Video thumbnail',
    },
    readingTime: '4 min',
    author: {
      name: 'Daniela Metz',
      href: '#',
      image: {
          url: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
          alt: 'Daniela Metz',
      },
    }
  },
  {
    title: 'Improve your dental customer experience',
    href: '#',
    category: { name: 'Video', href: '#' },
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium praesentium eius, ut atque fuga culpa, similique sequi cum eos quis dolorum.',
    date: 'Mar 10, 2020',
    datetime: '2020-03-10',
    image: {
      url:
        'https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
      alt: 'Video thumbnail',
    },
    readingTime: '4 min',
    author: {
      name: 'Daniela Metz',
      href: '#',
      image: {
          url: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
          alt: 'Daniela Metz',
      },
    }
  },
  {
    title: 'How to get the most out of your dental benefits',
    href: '#',
    category: { name: 'Video', href: '#' },
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium praesentium eius, ut atque fuga culpa, similique sequi cum eos quis dolorum.',
    date: 'Mar 10, 2020',
    datetime: '2020-03-10',
    image: {
      url:
        'https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
      alt: 'Video thumbnail',
    },
    readingTime: '4 min',
    author: {
      name: 'Daniela Metz',
      href: '#',
      image: {
          url: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
          alt: 'Daniela Metz',
      },
    }
  },
  {
    title: 'What to look for in a dentist',
    href: '#',
    category: { name: 'Video', href: '#' },
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium praesentium eius, ut atque fuga culpa, similique sequi cum eos quis dolorum.',
    date: 'Mar 10, 2020',
    datetime: '2020-03-10',
    image: {
      url:
        'https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
      alt: 'Video thumbnail',
    },
    readingTime: '4 min',
    author: {
      name: 'Daniela Metz',
      href: '#',
      image: {
          url: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
          alt: 'Daniela Metz',
      },
    }
  },
  {
    title: 'How to get the most out of your dental benefits and improve your health',
    href: '#',
    category: { name: 'Video', href: '#' },
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium praesentium eius, ut atque fuga culpa, similique sequi cum eos quis dolorum.',
    date: 'Mar 10, 2020',
    datetime: '2020-03-10',
    image: {
      url:
        'https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
      alt: 'Video thumbnail',
    },
    readingTime: '4 min',
    author: {
      name: 'Daniela Metz',
      href: '#',
      image: {
          url: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
          alt: 'Daniela Metz',
      },
    }
  },
  {
    title: 'How to improve your dental health',
    href: '#',
    category: { name: 'Video', href: '#' },
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium praesentium eius, ut atque fuga culpa, similique sequi cum eos quis dolorum.',
    date: 'Mar 10, 2020',
    datetime: '2020-03-10',
    image: {
      url:
        'https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
      alt: 'Video thumbnail',
    },
    readingTime: '4 min',
    author: {
      name: 'Daniela Metz',
      href: '#',
      image: {
          url: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
          alt: 'Daniela Metz',
      },
    }
  },
  {
    title: 'How to improve your dental health',
    href: '#',
    category: { name: 'Video', href: '#' },
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium praesentium eius, ut atque fuga culpa, similique sequi cum eos quis dolorum.',
    date: 'Mar 10, 2020',
    datetime: '2020-03-10',
    image: {
      url:
        'https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
      alt: 'Video thumbnail',
    },
    readingTime: '4 min',
    author: {
      name: 'Daniela Metz',
      href: '#',
      image: {
          url: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
          alt: 'Daniela Metz',
      },
    }
  },
  {
    title: 'How to improve your dental health',
    href: '#',
    category: { name: 'Video', href: '#' },
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium praesentium eius, ut atque fuga culpa, similique sequi cum eos quis dolorum.',
    date: 'Mar 10, 2020',
    datetime: '2020-03-10',
    image: {
      url:
        'https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
      alt: 'Video thumbnail',
    },
    readingTime: '4 min',
    author: {
      name: 'Daniela Metz',
      href: '#',
      image: {
          url: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
          alt: 'Daniela Metz',
      },
    }
  },
  {
    title: 'How to improve your dental health',
    href: '#',
    category: { name: 'Video', href: '#' },
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium praesentium eius, ut atque fuga culpa, similique sequi cum eos quis dolorum.',
    date: 'Mar 10, 2020',
    datetime: '2020-03-10',
    image: {
      url:
        'https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
      alt: 'Video thumbnail',
    },
    readingTime: '4 min',
    author: {
      name: 'Daniela Metz',
      href: '#',
      image: {
          url: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
          alt: 'Daniela Metz',
      },
    }
  },
  {
    title: 'How to improve your dental health',
    href: '#',
    category: { name: 'Video', href: '#' },
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium praesentium eius, ut atque fuga culpa, similique sequi cum eos quis dolorum.',
    date: 'Mar 10, 2020',
    datetime: '2020-03-10',
    image: {
      url:
        'https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
      alt: 'Video thumbnail',
    },
    readingTime: '4 min',
    author: {
      name: 'Daniela Metz',
      href: '#',
      image: {
          url: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
          alt: 'Daniela Metz',
      },
    }
  },
  {
    title: 'How to improve your dental health',
    href: '#',
    category: { name: 'Video', href: '#' },
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium praesentium eius, ut atque fuga culpa, similique sequi cum eos quis dolorum.',
    date: 'Mar 10, 2020',
    datetime: '2020-03-10',
    image: {
      url:
        'https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
      alt: 'Video thumbnail',
    },
    readingTime: '4 min',
    author: {
      name: 'Daniela Metz',
      href: '#',
      image: {
          url: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
          alt: 'Daniela Metz',
      },
    }
  },
  {
    title: 'How to improve your dental health',
    href: '#',
    category: { name: 'Video', href: '#' },
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium praesentium eius, ut atque fuga culpa, similique sequi cum eos quis dolorum.',
    date: 'Mar 10, 2020',
    datetime: '2020-03-10',
    image: {
      url:
        'https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
      alt: 'Video thumbnail',
    },
    readingTime: '4 min',
    author: {
      name: 'Daniela Metz',
      href: '#',
      image: {
          url: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
          alt: 'Daniela Metz',
      },
    }
  },

]

const BlogPosts = () => {

    function classNames(...classes: string[]) {
      return classes.filter(Boolean).join(' ')
    }

    const sectionHeader = {
        preheading: "Our team",
        heading: "Meet the people behind the scenes",
        subheading: "We are a team of passionate people who love to create amazing products.",
        ctas: [
            {
                link: {
                    label: "View all posts",
                    type: "page",
                    page: {
                        slug: "blog"
                    }
                }
            },
        ]
    }

    const [ pageIndex, setPageIndex ] = useState(0)

    return (
        <Container>
          <>
            <Link href={posts[pageIndex*7].href} key={posts[pageIndex*7].title} className="h-full flex flex-col justify-between hover:scale-[99%] transform duration-200 pb-16">
                <div>
                <div className="relative mb-8 block aspect-video sm:aspect-[3/1]">
                    <Image
                        src={posts[pageIndex*7].image.url}
                        alt={posts[pageIndex*7].image.alt}
                        fill={true}
                        className="object-cover"
                    />
                </div>
                <div className="mb-3 text-sm font-semibold text-teal-700">{posts[pageIndex*7].category.name}</div>
                <h3 className="text-2xl font-semibold mb-2 line-clamp-2 text-ellipsis">{posts[pageIndex*7].title}</h3>
                <p className="text-gray-500 mb-6 line-clamp-3 text-ellipsis">{posts[pageIndex*7].description}</p>
                </div>
                <div className="flex items-center">
                    <div className="flex-shrink-0 relative aspect-square w-10">
                        <Image
                            className="rounded-full object-cover"
                            src={posts[pageIndex*7].author.image.url}
                            alt={posts[pageIndex*7].author.image.alt}
                            fill={true}
                        />
                    </div>
                    <div className="ml-3">
                        <p className="text-sm font-medium text-gray-900">
                            {posts[pageIndex*7].author.name}
                        </p>
                        <div className="flex space-x-1 text-sm text-gray-500">
                            <time dateTime={posts[pageIndex*7].datetime}>{posts[pageIndex*7].date}</time>
                            <span aria-hidden="true">&middot;</span>
                            <span>{posts[pageIndex*7].readingTime} read</span>
                        </div>
                    </div>
                </div>
            </Link>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
              {posts.slice(pageIndex*7+1, pageIndex*7+7).map((post, index) => (
                <Link href={post.href} key={index} className="h-full flex flex-col justify-between hover:scale-[99%] transform duration-200">
                <div>
                <div className="relative mb-8 aspect-video">
                    <Image
                        src={post.image.url}
                        alt={post.image.alt}
                        fill={true}
                        className="object-cover"
                    />
                </div>
                <div className="mb-3 text-sm font-semibold text-teal-700">{post.category.name}</div>
                <h3 className="text-2xl font-semibold mb-2 line-clamp-2 text-ellipsis">{post.title}</h3>
                <p className="text-gray-500 mb-6 line-clamp-3 text-ellipsis">{post.description}</p>
                </div>
                <div className="flex items-center">
                    <div className="flex-shrink-0 relative object-cover aspect-square w-10">
                        <Image
                            className="rounded-full"
                            src={post.author.image.url}
                            alt={post.author.image.alt}
                            fill={true}
                        />
                    </div>
                    <div className="ml-3">
                        <p className="text-sm font-medium text-gray-900">
                            {post.author.name}
                        </p>
                        <div className="flex space-x-1 text-sm text-gray-500">
                            <time dateTime={post.datetime}>{post.date}</time>
                            <span aria-hidden="true">&middot;</span>
                            <span>{post.readingTime} read</span>
                        </div>
                    </div>
                </div>
              </Link>
              ))}
            </div>
            <nav className="flex items-center justify-between border-t border-gray-200 px-0 mt-16">
              <div className="-mt-px flex w-0 flex-1">
                {pageIndex > 0 && <button
                  onClick={() => setPageIndex(pageIndex - 1)}
                  className="inline-flex items-center border-t-2 border-transparent pt-4 pr-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
                >
                  <ArrowLongLeftIcon className="mr-3 h-5 w-5 text-gray-400" aria-hidden="true" />
                  Previous
                </button>}
              </div>
              <div className="hidden md:-mt-px md:flex">
                {
                  Math.ceil(posts.length) > 5 ? 
                    Array(Math.ceil(posts.length / 7)).fill(0).map((_, index) => {
                    if (index < 2) {
                      return <button
                        onClick={() => setPageIndex(index)}
                        className={classNames(pageIndex == index ? "border-primary-500 text-primary-600" : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300", "inline-flex items-center border-t-2 border-transparent px-4 pt-4 text-sm font-medium")}
                      >
                          {index + 1}
                      </button>
                    } else if (index == 2) {
                      return <span className="inline-flex items-center border-t-2 border-transparent px-4 pt-4 text-sm font-medium text-gray-500">
                        ...
                      </span>
                    } else if (index >= Math.ceil(posts.length / 7) - 2) {
                      return <button
                        onClick={() => setPageIndex(index)}
                        className={classNames(pageIndex == index ? "border-primary-500 text-primary-600" : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300", "inline-flex items-center border-t-2 border-transparent px-4 pt-4 text-sm font-medium")}
                      >
                          {index + 1}
                      </button>
                    }
                  }) 
                  :
                    Array(Math.ceil(posts.length / 7)).fill(0).map((_, index) => (
                    <button
                      onClick={() => setPageIndex(index)}
                      className={classNames(pageIndex == index ? "border-primary-500 text-primary-600" : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300", "inline-flex items-center border-t-2 border-transparent px-4 pt-4 text-sm font-medium")}
                    >
                      {index + 1}
                    </button>))
                }
              </div>
              <div className="-mt-px flex w-0 flex-1 justify-end">
                {posts.length / 7 >= pageIndex + 1 && <button
                  onClick={() => setPageIndex(pageIndex + 1)}
                  className="inline-flex items-center border-t-2 border-transparent pt-4 pl-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
                >
                  Next
                  <ArrowLongRightIcon className="ml-3 h-5 w-5 text-gray-400" aria-hidden="true" />
                </button>}
              </div>
            </nav>
          </>
        </Container>
    )
}

export default BlogPosts