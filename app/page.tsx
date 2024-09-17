import Hero from '@/components/Hero';
import Intro from '@/components/Intro';
import { ScrollProvider } from '@/components/Providers/ScrollProvider';
import RecentPosts from '@/components/RecentPosts';
import SectionContainer from '@/components/SectionContainer';
import Works from '@/components/Work/Works';
import { allCoreContent, sortedBlogPost } from '@/lib/utils/contentlayer';
import { allBlogs } from 'contentlayer/generated';
import ThreeScene from '@/components/ThreeScene';

export default async function Page() {
  const sortedPosts = sortedBlogPost(allBlogs);
  const posts = allCoreContent(sortedPosts);

  return (
    <ScrollProvider>
      <Hero threeDScene={<ThreeScene />} />
      <Intro />
      <Works />
      <SectionContainer>
        <RecentPosts posts={posts} />
      </SectionContainer>
    </ScrollProvider>
  );
}
