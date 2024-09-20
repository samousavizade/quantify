import PostNavigation from '@/components/PostNavigation';
import { CoreContent } from '@/lib/utils/contentlayer';
import type { Blog, Authors, Courses } from 'contentlayer/generated';
import { ReactNode } from 'react';
import AuthorLayout from '@/layouts/MDX/AuthorLayout';

interface Props {
  content: CoreContent<Blog> | CoreContent<Courses>;
  author: CoreContent<Authors>;
  children: ReactNode;
  next?: { slug: string; title: string };
  prev?: { slug: string; title: string };
}

export default function PostLayout({ content, author, children, next, prev }: Props) {
  const { title, readingTime } = content;

  return (
    <article>
      <header className="space-y-1 rounded-lg bg-primary-500 py-4 px-2 text-center sm:py-6 md:py-10">
        <h1 className="p-3 text-2xl font-extrabold leading-9 tracking-tight dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14">
          {title}
        </h1>
        <AuthorLayout content={author}>
          <dl>
            <dt className="sr-only">Published on</dt>
            <dd className="flex flex-col justify-center text-base font-medium leading-6 text-white sm:flex-row sm:space-x-2">
              <span className={'text-gray-500 text-lg font-serif'}>{readingTime.text}</span>
            </dd>
          </dl>
        </AuthorLayout>
      </header>
      <div
        className="divide-y divide-gray-200 font-medium dark:divide-gray-700 xl:grid xl:grid-cols-4 xl:gap-x-6 xl:divide-y-0"
        style={{ gridTemplateRows: 'auto 1fr' }}
      >
        <div className="divide-y divide-gray-200 dark:divide-gray-700 xl:col-span-4 xl:row-span-2 xl:pb-0">
          <div className="prose max-w-none pt-8 pb-8 dark:prose-dark">
            {children}
            <PostNavigation prev={prev} next={next} />
            {/*<PostComments />*/}
          </div>
        </div>
      </div>
    </article>
  );
}
