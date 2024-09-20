'use client';

import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ScrollProgressBar from '@/components/ScrollProgressBar';
import MainLayout from '@/layouts/MainLayout';
import { allCourses } from 'contentlayer/generated';
import { LinkButton } from '@dlarroder/playground';
import PageTitle from '@/components/PageTitle';

interface CourseContentProps {
  params: {
    slug: string;
  };
}

// Utility function to group courses by a key
const groupBy = <T, K extends keyof any>(arr: T[], key: (i: T) => K): Record<K, T[]> =>
  arr.reduce(
    (groups, item) => {
      (groups[key(item)] ||= []).push(item);
      return groups;
    },
    {} as Record<K, T[]>
  );

export default function CourseContent({ params }: CourseContentProps) {
  const requestedCourseName = params.slug.replaceAll('-', ' ');

  const filteredMDXFiles = allCourses.filter((c) => c.courseName === requestedCourseName);
  const sectionsMDXFiles = groupBy(filteredMDXFiles, (course) => course.courseSection);

  const [expanded, setExpanded] = React.useState<string | false>(false);

  const handleChange = (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
    setExpanded(newExpanded ? panel : false);
    console.log(event);
  };

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
            <div key={sectionName}>
              <Accordion
                key={`${sectionName}-${index}`}
                className="bg-transparent"
                slotProps={{ transition: { unmountOnExit: true } }}
                expanded={expanded === `${sectionName}-${index}`}
                onChange={handleChange(`${sectionName}-${index}`)}
              >
                <AccordionSummary
                  key={`${sectionName}-${index}`}
                  className="bg-primary-500 text-xl text-black dark:text-white"
                  expandIcon={<ExpandMoreIcon className="text-black dark:text-white" />}
                  id={`${sectionName}-${index}`}
                  aria-controls={`${sectionName}-${index}`}
                >
                  {sectionName}
                </AccordionSummary>
                <AccordionDetails
                  className="p-2 space-y-2"
                  key={`${sectionName}-${index}`}
                  id={`${sectionName}-${index}`}
                >
                  {MDXFilesInSection.map((course, courseIndex) => (
                    <LinkButton
                      href={`/courses/${params.slug}/${course.title.replaceAll(' ', '-')}`}
                      key={course.title}
                      className="block text-xl text-black dark:text-white"
                    >
                      Volume {courseIndex + 1} : {course.title}
                    </LinkButton>
                  ))}
                </AccordionDetails>
              </Accordion>
            </div>
          );
        })}
      </MainLayout>
    </>
  );
}
