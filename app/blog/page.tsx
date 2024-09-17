import BlogPostsListLayout from '@/layouts/MDX/BlogPostsListLayout';
import MainLayout from '@/layouts/MainLayout';
import { sortedBlogPost } from '@/lib/utils/contentlayer';
// import { POSTS_PER_PAGE } from '@/types/default';
import { allBlogs } from 'contentlayer/generated';

export const metadata = {
  title: 'Blog',
  description: 'Quantitative Blog Post',
};

export default function Blog() {
  const activePosts = allBlogs.filter((p) => p.draft === false);

  return (
    <MainLayout>
      <BlogPostsListLayout posts={sortedBlogPost(activePosts)} />
    </MainLayout>
  );
}
