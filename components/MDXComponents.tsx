import { coreContent } from '@/lib/utils/contentlayer';
import type { Authors, Blog, Courses } from 'contentlayer/generated';
import type { MDXComponents } from 'mdx/types';
import { useMDXComponent } from 'next-contentlayer/hooks';
import Image from './Image';
import CustomLink from './Link';
import LinkButton from './LinkButton';
import Pre from './Pre';
import TOCInline from './TOCInline';
import React from 'react';

interface MDXLayout {
  content: Blog | Authors | Courses;
  [key: string]: unknown;
}

type TableWrapperProps = React.TableHTMLAttributes<HTMLTableElement>;

export const TableWrapper: React.FC<TableWrapperProps> = ({ children, ...props }) => {
  return (
    <div style={{ overflowX: 'auto', width: '100%' }}>
      <table style={{ width: '100%', borderCollapse: 'collapse' }} {...props}>
        {children}
      </table>
    </div>
  );
};

type TableCellProps = React.TdHTMLAttributes<HTMLTableCellElement>;

export const Tr: React.FC<React.HTMLAttributes<HTMLTableRowElement>> = ({ children, ...props }) => (
  <tr {...props}>{children}</tr>
);

export const Td: React.FC<TableCellProps> = ({ children, ...props }) => (
  <td style={{ border: '1px solid #ddd', padding: '8px' }} {...props}>
    {children}
  </td>
);

export const Th: React.FC<TableCellProps> = ({ children, ...props }) => (
  <th
    style={{ border: '1px solid #ddd', padding: '8px', background: 'rgba(255,255,255,0)' }}
    {...props}
  >
    {children}
  </th>
);

export const components: MDXComponents = {
  Image,
  TOCInline,
  a: CustomLink,
  pre: Pre,
  table: TableWrapper as any,
  tr: Tr as any,
  td: Td as any,
  th: Th as any,
  LinkButton,
};

interface MDXLayoutRendererProps extends MDXLayout {}

export const MDXLayoutRenderer: React.FC<MDXLayoutRendererProps> = ({ content, ...rest }) => {
  const MDXLayout = useMDXComponent(content.body.code);
  const mainContent = coreContent(content);

  return <MDXLayout content={mainContent} components={components} {...rest} />;
};
