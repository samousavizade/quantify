'use client';

import headerNavLinks from 'content/headerNavLinks';
import Link from 'next/link';
import CommandPalette from './CommandPalette/CommandPalette';
import MobileNav from './MobileNav';
import SectionContainer from './SectionContainer';
import ThemeSwitch from './ThemeSwitch';
import * as React from 'react';
import LogoutIcon from '@mui/icons-material/Logout';
import { signOut, useSession } from 'next-auth/react';
import classNames from 'classnames';
import { Avatar } from '@mui/material';

// @ts-ignore
export default function Header({ logoIcon }) {
  const { data: session, status } = useSession();

  let UserComponent = null;
  // @ts-ignore
  if (status === 'loading') {
    UserComponent = (
      <div className="flex bg-transparent text-white px-4 py-2 rounded-lg border-2 border-primary-500 transition-colors duration-750 ease-in-out hover:bg-blue-600 hover:bg-opacity-50">
        <span className="text-xl tracking-wide text-black dark:text-white">Validating...</span>
      </div>
    );
  } else if (status === 'unauthenticated') {
    UserComponent = (
      <div className="flex">
        <Link
          prefetch={false}
          href={'/login'}
          className="bg-transparent text-white px-4 py-2 rounded-l-lg border-2 border-r-0 border-blue-600 transition-colors duration-750 ease-in-out hover:bg-blue-600 hover:bg-opacity-50"
          aria-label="Login"
        >
          <span className="text-xl tracking-wide text-black dark:text-white">Login</span>
        </Link>
        <Link
          prefetch={false}
          href={'/register'}
          className="bg-transparent text-white px-4 py-2 rounded-r-lg border-2 border-green-600 transition-colors duration-750 ease-in-out hover:bg-green-600 hover:bg-opacity-50"
          aria-label="Register"
        >
          <span className="text-xl tracking-wide text-black dark:text-white">Register</span>
        </Link>
      </div>
    );
  } else if (status === 'authenticated') {
    UserComponent = (
      <div className="flex items-center bg-transparent border-2 rounded-full border-primary-500">
        {session.user?.image ? (
          <Avatar
            src={session.user?.image}
            alt={''}
            className={'h-10 w-10 rounded-full border border-gray-300'}
          />
        ) : (
          <Avatar
            alt={''}
            className={classNames('h-10 w-10 rounded-full border border-primary-500')}
          >
            {session.user?.name?.split(' ')[0][0]}
            {session.user?.name?.split(' ')[1][0]}
          </Avatar>
        )}
        <Link
          prefetch={false}
          href={'/user'}
          className={
            'horizontal-underline mx-2 text-xl font-medium active:horizontal-underline-active'
          }
        >
          {/*{session.user?.name}*/}
          Profile
        </Link>
        <LogoutIcon
          className={
            'min-h-full text-black dark:text-white rounded-r-full duration-750 ease-in-out bg-danger-600 border-2 border-danger-600 bg-opacity-50 pl-1'
          }
          fontSize={'large'}
          onClick={() => {
            signOut().then((r) => console.log('Sign out', r));
          }}
        />
      </div>
    );
  }

  // @ts-ignore
  return (
    <SectionContainer>
      <header className="z-40 bg-transparent py-5 md:py-10">
        <div className="mx-auto flex max-w-5xl items-center justify-between">
          <div>
            <Link
              href="/"
              className={'horizontal-underline hidden text-4xl p-1 font-bold font-serif sm:block'}
              aria-label=".Quantifiable"
              style={{
                // fontFamily: "cursive"
                fontFamily: 'sans-serif',
              }}
            >
              {logoIcon}
            </Link>
          </div>
          <div className="flex items-center space-x-3 p-1 text-base leading-5">
            <div className="hidden space-x-6 sm:flex">
              {headerNavLinks.map(({ title, href }) => {
                return (
                  <Link
                    prefetch={false}
                    key={title}
                    href={href}
                    className={'horizontal-underline px-2 py-2 active:horizontal-underline-active'}
                    aria-label={title}
                  >
                    <span className="text-xl tracking-wide text-gray-900 dark:text-gray-100">
                      {title}
                    </span>
                  </Link>
                );
              })}
              {UserComponent}
            </div>
            <div className="flex items-center">
              <CommandPalette />
              <ThemeSwitch />
              <MobileNav />
            </div>
          </div>
        </div>
      </header>
    </SectionContainer>
  );
}
