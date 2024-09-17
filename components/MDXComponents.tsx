/* eslint-disable react/display-name */
import { coreContent } from '@/lib/utils/contentlayer';
import type { Authors, Blog, Courses } from 'contentlayer/generated';
import type { MDXComponents } from 'mdx/types';
import { useMDXComponent } from 'next-contentlayer/hooks';
import Image from './Image';
import CustomLink from './Link';
import LinkButton from './LinkButton';
import Pre from './Pre';
import TOCInline from './TOCInline';

interface MDXLayout {
  content: Blog | Authors | Courses;

  [key: string]: unknown;
}

export const TableWrapper = ({ children }) => {
  return (
    <div style={{ overflowX: 'auto', width: '100%' }}>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>{children}</table>
    </div>
  );
};

export const Tr = ({ children }) => <tr>{children}</tr>;
export const Td = ({ children }) => (
  <td style={{ border: '1px solid #ddd', padding: '8px' }}>{children}</td>
);
export const Th = ({ children }) => (
  <th style={{ border: '1px solid #ddd', padding: '8px', background: 'rgba(255,255,255,0)' }}>
    {children}
  </th>
);

// @ts-ignore
export const components: MDXComponents = {
  Image,
  TOCInline,
  a: CustomLink,
  pre: Pre,
  table: TableWrapper,
  tr: Tr,
  td: Td,
  th: Th,
  LinkButton,
};

export const MDXLayoutRenderer = ({ content, ...rest }: MDXLayout) => {
  const MDXLayout = useMDXComponent(content.body.code);
  const mainContent = coreContent(content);

  return <MDXLayout content={mainContent} components={components} {...rest} />;
};
