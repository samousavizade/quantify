import { MDXLayoutRenderer } from '@/components/MDXComponents';
import AuthorLayout from '@/layouts/MDX/AuthorLayout';
import MainLayout from '@/layouts/MainLayout';
import { allAuthors } from 'contentlayer/generated';
import { auth } from 'auth';
import FourZeroOne from '../not-authenticated';

export const metadata = {
  title: 'About - Dale Larroder',
  description: 'About me - Dale Larroder',
};

export default async function About() {
  const session = await auth();
  if (!session)
    return (
      <MainLayout>
        <FourZeroOne />
      </MainLayout>
    );
  if (!session?.user) return null;

  const author = allAuthors.find((p) => p.slug === 'about');

  if (!author) {
    return null;
  }

  return (
    <MainLayout>
      <AuthorLayout content={author}>
        <MDXLayoutRenderer content={author} />
      </AuthorLayout>
    </MainLayout>
  );
}
