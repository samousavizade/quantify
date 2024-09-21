import Image from '@/components/Image';
import type { Authors } from 'contentlayer/generated';
import { ReactNode } from 'react';
import { FaEnvelope, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

interface Props {
  children: ReactNode;
  content: Omit<Authors, '_id' | '_raw' | 'body'>;
}

export default function AuthorLayout({ children, content }: Props) {
  const { avatar, name, occupation, company, email, github, linkedin, twitter } = content;
  console.log(company);
  return (
    <div className="pt-4">
      <div className="mb-4 space-x-2 flex flex-col-reverse justify-center items-center sm:flex-row sm:items-center">
        <div>
          <Image
            alt="Dale Larroder"
            height={100}
            width={100}
            src={avatar || ''}
            className="rounded-full object-scale-down grayscale"
          />
        </div>
        <div className="text-center sm:text-left ml-2 space-y-1 text-gray-300">
          <h3 className="flex justify-center space text-xl font-bold md:text-2xl lg:text-3xl">
            {name}
          </h3>
          <h4 className="flex justify-center space text-sm font-normal md:text-base">
            {occupation}
          </h4>
          <div className="flex justify-center space-x-4 mt-2">
            <a href={email} aria-label="Email">
              <FaEnvelope className="h-6 w-6" />
            </a>
            <a href={github} aria-label="GitHub">
              <FaGithub className="h-6 w-6" />
            </a>
            <a href={linkedin} aria-label="LinkedIn">
              <FaLinkedin className="h-6 w-6" />
            </a>
            <a href={twitter} aria-label="Twitter">
              <FaTwitter className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>

      <div className="prose max-w-none pb-8 text-justify text-sm dark:prose-dark md:text-lg xl:col-span-2">
        {children}
      </div>
    </div>
  );
}
