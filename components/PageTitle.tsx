import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

export default function PageTitle({ children }: Props) {
  return (
    <h1 className="p-3 text-2xl font-extrabold leading-9 tracking-tight text-gray-800 dark:text-gray-200 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14">
      {children}
    </h1>
  );
}
