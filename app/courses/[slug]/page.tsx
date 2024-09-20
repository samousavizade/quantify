'use client';

import * as React from 'react';
import ScrollProgressBar from '@/components/ScrollProgressBar';
import MainLayout from '@/layouts/MainLayout';
import { allCourses } from 'contentlayer/generated';
import PageTitle from '@/components/PageTitle';
import Link from 'next/link';

interface CourseContentProps {
  params: {
    slug: string;
  };
}

const groupBy = <T, K extends keyof any>(arr: T[], key: (i: T) => K): Record<K, T[]> =>
  arr.reduce(
    (groups, item) => {
      (groups[key(item)] ||= []).push(item);
      return groups;
    },
    {} as Record<K, T[]>
  );

export default async function CourseContent({ params }: CourseContentProps) {
  const requestedCourseName = params.slug.replaceAll('-', ' ');
  const filteredMDXFiles = allCourses.filter((c) => c.courseName === requestedCourseName);
  const sectionsMDXFiles = groupBy(filteredMDXFiles, (course) => course.courseSection);

  const sortedSectionNames = Object.keys(sectionsMDXFiles).sort((a, b) => {
    const c1 = parseInt(a.split('-')[0]);
    const c2 = parseInt(b.split('-')[0]);
    return c1 - c2;
  });

  return (
    <>
      <ScrollProgressBar />
      <MainLayout>
        <div className="px-2 py-4">
          <PageTitle>{requestedCourseName}</PageTitle>
        </div>
        {sortedSectionNames.map((sectionName, index) => {
          const MDXFilesInSection = sectionsMDXFiles[sectionName];
          return (
            <div key={sectionName} className="mb-4">
              <div
                className={`cursor-pointer bg-primary-500 text-xl text-black dark:text-white p-4 rounded-lg`}
              >
                {sectionName}
              </div>
              <div className={`overflow-hidden`}>
                {
                  <div className="bg-transparent p-2 space-y-2 rounded-b">
                    {MDXFilesInSection.map((course, courseIndex) => (
                      <Link
                        href={`/courses/${params.slug}/${course.title.replaceAll(' ', '-')}`}
                        key={index * courseIndex}
                        className="block text-xl text-black dark:text-white horizontal-underline active:horizontal-underline-active"
                      >
                        Volume {courseIndex + 1} : {course.title}
                      </Link>
                    ))}
                  </div>
                }
              </div>
            </div>
          );
        })}
      </MainLayout>
    </>
  );
}
