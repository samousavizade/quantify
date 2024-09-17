import Link from 'next/link';

interface CourseArticleNavigationProps {
  courseSlug?: string;
  prev?: string;
  next?: string;
}

export default function CourseArticleNavigation({
  courseSlug,
  prev,
  next,
}: CourseArticleNavigationProps) {
  return (
    <div className="grid grid-cols-3 gap-3 pt-4 sm:pt-6">
      <div className="flex flex-col items-center space-y-1 sm:items-start">
        {prev && (
          <>
            <span className="italic">Previous Article</span>
            <Link
              href={`/courses/${courseSlug}/${prev.replaceAll(' ', '-')}`}
              className="underline-magical max-w-sm truncate sm:max-w-[250px] xl:max-w-md"
            >
              &larr; {prev}
            </Link>
          </>
        )}
      </div>
      <div className="flex flex-col items-center space-y-1 sm:items-center">
        <span className="italic">Course Outline</span>
        <Link
          href={`/courses/${courseSlug}`}
          className="underline-magical max-w-sm truncate sm:max-w-[250px] xl:max-w-md"
        >
          {courseSlug?.replaceAll('-', ' ')}
        </Link>
      </div>
      <div className="flex flex-col items-center space-y-1 sm:items-end">
        {next && (
          <>
            <span className="italic">Next Article</span>
            <Link
              href={`/courses/${courseSlug}/${next.replaceAll(' ', '-')}`}
              className="underline-magical max-w-sm truncate sm:max-w-[250px] xl:max-w-md"
            >
              {next} &rarr;
            </Link>
          </>
        )}
      </div>
    </div>
  );
}
