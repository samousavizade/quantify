import React from 'react';
import Link from 'next/link';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import ArchitectureIcon from '@mui/icons-material/Architecture';
import Tag from '@/components/Tag';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface Course {
  imageSrc: string;
  title: string;
  field: string;
  tags: string[];
  timeNeeded: string;
  level: string;
  provider: string;
  rating: number;
}

interface CourseCardProps {
  courses: Course[];
}

const CourseCard: React.FC<CourseCardProps> = ({ courses }) => {
  return (
    <ul className={'space-y-5'}>
      {courses.map(
        ({ imageSrc, title, field, tags, timeNeeded, level, provider, rating }, index) => {
          return (
            <motion.li
              key={title}
              className="flex tracking-tight leading-9 bg-transparent"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: index / 10 }}
            >
              <div className="xl:w-1/3 lg:w-1/3 md:w-1/3 sm:w-0">
                <div className="relative w-full h-full">
                  <Image
                    src={imageSrc}
                    alt={title}
                    layout="fill" // Use layout fill for responsive images
                    objectFit="cover" // Ensures the image covers the container
                    className="rounded-l-3xl"
                  />
                </div>
              </div>

              <div className="xl:w-2/3 lg:w-2/3 md:w-2/3 sm:w-full p-4 my-auto">
                {/* Course Title */}
                <Link
                  prefetch={false}
                  href={`/courses/${title.replaceAll(' ', '-')}`}
                  className={
                    'horizontal-underline mb-2 text-3xl font-normal active:horizontal-underline-active'
                  }
                >
                  {title}
                </Link>

                <div className="mt-2 text-xl font-bold text-primary-700 dark:text-primary-300">
                  {field}
                </div>

                <div className="mt-2 flex flex-wrap gap-2">
                  {tags.map((tag) => (
                    <Tag key={tag} text={tag} />
                  ))}
                </div>

                {/* Time Needed and Level */}
                <div className="mt-3 flex text-xl items-center space-x-2 text-gray-600 dark:text-gray-400">
                  <AccessTimeFilledIcon />
                  <p className="inline font-sans py-1">{timeNeeded}</p>
                  <span className="text-gray-400 py-1">|</span>
                  <ArchitectureIcon />
                  <p className="inline font-sans py-1">{level}</p>
                </div>

                {/* Course Provider */}
                <div className={'mt-2 text-xl'}>
                  <p className="inline mr-2 text-gray-800 dark:text-gray-200">Provided by:</p>
                  <p className="inline text-primary-800 dark:text-primary-200">{provider}</p>
                </div>

                {/* Rating and Total Students */}
                <div className="mt-2 flex items-center space-x-4">
                  {/* Course Rating */}
                  <div className="flex items-center">
                    {Array.from({ length: 5 }, (_, index) => (
                      <svg
                        key={index}
                        className={`h-5 w-5 ${
                          index < rating ? 'text-yellow-400' : 'text-gray-300'
                        }`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.462 4.49a1 1 0 00.95.69h4.741c.97 0 1.371 1.24.588 1.81l-3.833 2.783a1 1 0 00-.364 1.118l1.463 4.49c.3.921-.755 1.688-1.54 1.118l-3.834-2.784a1 1 0 00-1.175 0l-3.833 2.784c-.785.57-1.84-.197-1.54-1.118l1.462-4.49a1 1 0 00-.364-1.118L2.05 9.927c-.783-.57-.383-1.81.588-1.81h4.74a1 1 0 00.951-.69l1.462-4.49z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
            </motion.li>
          );
        }
      )}
    </ul>
  );
};

export default CourseCard;
