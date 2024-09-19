'use client';

import MainLayout from '@/layouts/MainLayout';
import { useSession } from 'next-auth/react';
import Image from '@/components/Image';
import * as React from 'react'; // If you're using date-fns

export default function User() {
  const { data: session } = useSession();
  console.log('user session', session?.user);

  // @ts-ignore
  return (
    <MainLayout>
      <div className="pt-4">
        <div className="mb-4 space-x-2 flex flex-row justify-center items-center sm:flex-row sm:items-center">
          <div>
            <Image
              alt=""
              height={100}
              width={100}
              src={session?.user?.image || ''}
              className="justify-center border-primary-500 border-2 bg-transparent"
            />
          </div>

          <div className="sm:text-left space-y-1 text-gray-300">
            <h3 className="flex flex-row text-center space text-xl font-bold md:text-2xl lg:text-3xl">
              <h6 className="text-left space text-xl font-normal">Name:</h6>
              {session?.user?.name}
            </h3>
            <h6 className="text-left space text-xl font-normal">Mail:</h6>
            <h4 className="text-center space text-xl font-normal md:text-xl lg:text-2xl">
              {session?.user?.email}
            </h4>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
