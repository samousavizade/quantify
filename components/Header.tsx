'use client';

import classNames from 'classnames';
import headerNavLinks from 'content/headerNavLinks';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import CommandPalette from './CommandPalette/CommandPalette';
import MobileNav from './MobileNav';
import SectionContainer from './SectionContainer';
import ThemeSwitch from './ThemeSwitch';

export default function Header() {
  const pathName = usePathname();

  return (
    <SectionContainer>
      <header className="z-40 bg-transparent py-5 md:py-10">
        <div className="mx-auto flex max-w-5xl items-center justify-between">
          <div>
            <Link
              href="/"
              className={classNames(
                'horizontal-underline hidden text-4xl p-1 font-extrabold sm:block',
                {
                  'horizontal-underline-active': pathName === '/',
                }
              )}
              aria-label="d."
            >
              Quantify
            </Link>
          </div>
          <div className="flex items-center space-x-3 p-1 text-base leading-5">
            <div className="hidden space-x-6 sm:flex">
              {headerNavLinks.map(({ title, href }) => {
                const active = pathName?.includes(href);
                return (
                  <Link
                    prefetch
                    key={title}
                    href={href}
                    className={classNames('horizontal-underline px-2 py-2', {
                      'horizontal-underline-active': active,
                    })}
                    aria-label={title}
                  >
                    <span className="text-xl tracking-wide text-gray-900 dark:text-gray-100">
                      {title}
                    </span>
                  </Link>
                );
              })}

              <div className="flex">
                <Link
                  prefetch
                  href="/login"
                  className="bg-blue-500 text-white px-4 py-2 rounded-l hover:bg-blue-600"
                  aria-label="Login"
                >
                  <span className="text-xl tracking-wide">Login</span>
                </Link>
                <Link
                  prefetch
                  href="/register"
                  className="bg-green-500 text-white px-4 py-2 rounded-r hover:bg-green-600"
                  aria-label="Register"
                >
                  <span className="text-xl tracking-wide">Register</span>
                </Link>
              </div>
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
