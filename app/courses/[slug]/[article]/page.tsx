'use server';

import * as React from 'react';
import ScrollProgressBar from '@/components/ScrollProgressBar';
import MainLayout from '@/layouts/MainLayout';
import { allAuthors, allCourses } from 'contentlayer/generated';
import { MDXLayoutRenderer } from '@/components/MDXComponents';
import PageTitle from '@/components/PageTitle';
import AuthorLayout from '@/layouts/MDX/AuthorLayout';
import CourseArticleNavigation from '@/components/CourseArticleNavigation';

export default async function ArticleContent({
  params,
}: {
  params: {
    slug: string;
    article: string;
  };
}) {
  const intendedArticleTitle = params.article.replaceAll('-', ' ');

  const intendedArticleIndex = allCourses.map((c) => c.title).indexOf(intendedArticleTitle);

  const intendedArticle = allCourses[intendedArticleIndex];

  const prevArticleTitle =
    intendedArticleIndex - 1 >= 0 ? allCourses[intendedArticleIndex - 1].title : undefined;
  const nextArticleTitle =
    intendedArticleIndex + 1 <= allCourses.length - 1
      ? allCourses[intendedArticleIndex + 1].title
      : undefined;

  const author = allAuthors.find((a) => a.name === 'S. Alireza Mousavizade');

  if (!author || !intendedArticle) {
    return (
      <>
        <ScrollProgressBar />
        <MainLayout>
          <h1>Intended Article Doesn't exist.</h1>
        </MainLayout>
      </>
    );
  }

  return (
    <>
      <link
        rel={'stylesheet'}
        href={'https://cdn.jsdelivr.net/npm/katex@0.16.8/dist/katex.min.css'}
      />
      <ScrollProgressBar />
      <MainLayout>
        <header className="space-y-1 rounded-lg bg-primary-500 py-4 px-2 text-center sm:py-6 md:py-10">
          <PageTitle>{intendedArticle?.title}</PageTitle>
          <AuthorLayout content={author}>
            <dl>
              <dt className="sr-only">Published on</dt>
              <dd className="flex flex-col justify-center text-base font-medium leading-6 text-white sm:flex-row sm:space-x-2">
                <span className={'text-gray-300 dark:text-gray-300 text-lg font-sans'}>
                  # {intendedArticle?.readingTime.text}
                </span>
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
              <MDXLayoutRenderer
                toc={intendedArticle?.toc}
                content={intendedArticle}
                authorDetails={author}
              />
              {/*<PostComments />*/}
            </div>
          </div>
        </div>
        <div
          className="divide-y divide-gray-200 font-medium dark:divide-gray-700 xl:grid xl:grid-cols-4 xl:gap-x-6 xl:divide-y-0"
          style={{ gridTemplateRows: 'auto 1fr' }}
        >
          <div className="divide-y divide-gray-200 dark:divide-gray-700 xl:col-span-4 xl:row-span-2 xl:pb-0">
            <div className="prose max-w-none pt-8 pb-8 dark:prose-dark">
              <CourseArticleNavigation
                courseSlug={params.slug}
                prev={prevArticleTitle}
                next={nextArticleTitle}
              />
            </div>
          </div>
        </div>
      </MainLayout>
    </>
  );
}
