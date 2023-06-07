import React, { Fragment } from 'react';
import escapeHTML from 'escape-html';
import { Text } from 'slate';
import Image from 'next/image';
import Link from 'next/link';

const serialize = (children) => children.map((node, i) => {
  if (Text.isText(node)) {
    let text = <span dangerouslySetInnerHTML={{ __html: escapeHTML(node.text) }} />;

    if (node.bold) {
      text = (
        <strong key={i}>
          {text}
        </strong>
      );
    }

    if (node.italic) {
      text = (
        <em key={i}>
          {text}
        </em>
      );
    }

    // Handle other leaf types here...

    return (
      <Fragment key={i}>
        {text}
      </Fragment>
    );
  }

  if (!node) {
    return null;
  }

  switch (node.type) {
    case 'h1':
      return (
        <h1 key={i}>
          {serialize(node.children)}
        </h1>
      );
    case 'h2':
        return (
          <h2 key={i}>
            {serialize(node.children)}
          </h2>
        );
    case 'h3':
        return (
          <h3 key={i}>
            {serialize(node.children)}
          </h3>
        );
    case 'h4':
        return (
          <h4 key={i}>
            {serialize(node.children)}
          </h4>
        );
    case 'h5':
        return (
          <h5 key={i}>
            {serialize(node.children)}
          </h5>
        );
    case 'h6':
      return (
        <h6 key={i}>
          {serialize(node.children)}
        </h6>
      );
    case 'quote':
      return (
        <blockquote key={i}>
          {serialize(node.children)}
        </blockquote>
      );
    case 'ul':
      return (
        <ul key={i}>
          {serialize(node.children)}
        </ul>
      );
    case 'ol':
      return (
        <ol key={i}>
          {serialize(node.children)}
        </ol>
      );
    case 'li':
      return (
        <li key={i}>
          {serialize(node.children)}
        </li>
      );
    case 'link':
      if (node.linkType == "internal") {
        return (
          <Link href={node.doc.relationTo == "blog" ? "/blog/" + node.doc.value.slug : "/"+node.doc.value.slug} target={node.newTab ? "_blank" : "_self"}>
            {serialize(node.children)}
          </Link>
        )
      } else {
        return (
          <a
            href={escapeHTML(node.url)}
            key={i}
          >
            {serialize(node.children)}
          </a>
        );
      }
      
    case 'upload':
      return (
        <div className="relative w-full aspect-[4/3] shadow-md bg-white">
              <Image
                  src={(node.value.url ?? "")}
                  alt={node.value.alt}
                  fill={true}
                  className="object-cover"
                  sizes="100vw"
                />
        </div>
      )

    default:
      return (
        <p key={i}>
          {serialize(node.children)}
        </p>
      );
  }
});


export default serialize