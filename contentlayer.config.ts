import { ComputedFields, defineDocumentType, makeSource } from 'contentlayer/source-files';
import readingTime from 'reading-time';
import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';
import { extractTocHeadings, remarkCodeTitles, remarkImgToJsx } from 'pliny/mdx-plugins/index.js';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeKatex from 'rehype-katex';
import rehypePrismPlus from 'rehype-prism-plus';
import rehypePresetMinify from 'rehype-preset-minify';
import { remarkMdxFrontmatter } from 'remark-mdx-frontmatter';
import remarkFrontmatter from 'remark-frontmatter';

const computedFields: ComputedFields = {
  readingTime: { type: 'json', resolve: (doc) => readingTime(doc.body.raw) },
  slug: {
    type: 'string',
    resolve: (doc) => doc._raw.flattenedPath.replace(/^.+?(\/)/, ''),
  },
  toc: { type: 'string', resolve: (doc) => extractTocHeadings(doc.body.raw) },
  courseName: {
    type: 'string',
    resolve: (doc) => doc._raw.sourceFileDir.split('/')[1],
  },
  courseSection: {
    type: 'string',
    resolve: (doc) => doc._raw.sourceFileDir.split('/')[2],
  },
};

export const Blog = defineDocumentType(() => ({
  name: 'Blog',
  filePathPattern: 'blog/**/*.mdx',
  contentType: 'mdx',
  fields: {
    title: { type: 'string', required: true },
    date: { type: 'date', required: true },
    field: { type: 'string', required: true },
    tags: { type: 'list', of: { type: 'string' } },
    lastmod: { type: 'date' },
    draft: { type: 'boolean' },
    summary: { type: 'string' },
    images: { type: 'list', of: { type: 'string' } },
    author: { type: 'string', required: true },
    layout: { type: 'string' },
    bibliography: { type: 'string' },
    canonicalUrl: { type: 'string' },
  },
  computedFields,
}));

export const Authors = defineDocumentType(() => ({
  name: 'Authors',
  filePathPattern: 'authors/**/*.mdx',
  contentType: 'mdx',
  fields: {
    name: { type: 'string', required: true },
    avatar: { type: 'string' },
    occupation: { type: 'string' },
    company: { type: 'string' },
    email: { type: 'string' },
    twitter: { type: 'string' },
    linkedin: { type: 'string' },
    github: { type: 'string' },
    layout: { type: 'string' },
  },
  computedFields,
}));

export const Courses = defineDocumentType(() => ({
  name: 'Courses',
  filePathPattern: 'courses/**/**/*.mdx',
  contentType: 'mdx',
  fields: {
    title: { type: 'string', required: true },
    draft: { type: 'boolean' },
    summary: { type: 'string' },
  },
  computedFields,
}));

export default makeSource({
  contentDirPath: 'content',
  documentTypes: [Blog, Authors, Courses],
  mdx: {
    cwd: process.cwd(),
    rehypePlugins: [
      rehypeKatex,
      rehypeSlug,
      rehypeAutolinkHeadings,
      rehypePresetMinify,
      [rehypePrismPlus, { ignoreMissing: true }],
    ],
    remarkPlugins: [
      remarkCodeTitles,
      remarkGfm,
      remarkMath,
      remarkFrontmatter,
      [remarkMdxFrontmatter, { name: 'matter' }],
      remarkCodeTitles,
      remarkImgToJsx,
    ],
  },
});
