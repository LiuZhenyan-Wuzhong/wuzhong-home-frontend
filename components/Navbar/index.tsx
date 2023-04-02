import Link from 'next/link';
import clsx from 'clsx';
import NavbarItem from './components/NavbarItem';
import UserInfoPanel from './components/UserInfoPanel';
import WuBlogLogo from 'public/logo.svg';
import TransIcon from '/public/icon/translation.svg';
import SunIcon from '/public/icon/sun.svg';
import MoonIcon from '/public/icon/moon.svg';
import SearchInput from '../SearchInput';
import { useCallback, useEffect, useMemo, useState } from 'react';
import Select from '../Select';
import { useRouter } from 'next/dist/client/router';
import Tooltip from '../Tooltip';
import Toolbar from '../Toolbar';

export enum Locale {
  en = 'en',
  han = 'han'
}

const supportedLocale = {
  [Locale.en]: { name: 'English', value: Locale.en },
  [Locale.han]: { name: '简体中文', value: Locale.han }
};

function useScroll() {
  const [scrollDis, setScrollDis] = useState(document.documentElement.scrollTop);

  document.addEventListener('scroll', (e) => {
    setScrollDis(document.documentElement.scrollTop);
  });
  return scrollDis;
}

export default function Navbar() {
  // state
  const [locale, setLocale] = useState(localStorage.getItem('locale') ?? 'han');

  const [darkMode, setDarkMode] = useState(
    (localStorage.getItem('darkMode') && localStorage.getItem('darkMode') === 'dark') || false
  );

  const router = useRouter();

  // hook
  const scrollDis = useScroll();

  // callback
  const handleSelectLocale = useCallback(
    (value: Locale) => {
      setLocale(value);
      router.push(router.pathname, router.asPath, { locale: value });
    },
    [router]
  );

  // memo
  const urlNameMap = useMemo(
    () => ({
      // Blogs: '/blogs',
      Projects: '/projects',
      Resume: '/resume'
    }),
    []
  );

  // callback
  const handleModeChange = useCallback((pressed: boolean) => {
    setDarkMode(pressed);
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('darkMode', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('darkMode', 'bright');
    }
  }, [darkMode]);

  useEffect(() => {
    router.locale = locale;
    localStorage.setItem('locale', locale);
  }, [locale, router]);

  return (
    <div
      className={clsx(
        'flex bg-white px-16 justify-between fixed top-0 left-0 right-0 z-30',
        'transition-all duration-300 ease-in-out border-b',
        'dark:text-gray-200 dark:bg-gray-800 dark:border-gray-700',
        router.pathname === '/'
          ? clsx(
              scrollDis <= 64 ? 'border-b-transparent bg-opacity-0 h-24' : '',
              scrollDis > 64 ? 'h-16' : ''
            )
          : clsx(scrollDis <= 64 ? 'h-24' : '', scrollDis > 64 ? 'h-16' : '')

        // "backdrop-filter backdrop-blur-sm backdrop-saturate-200"
      )}>
      <div className={clsx('text-gray-700 flex items-center gap-2 h-full')}>
        <Link href={'/'}>
          <div className="pr-2">
            <WuBlogLogo width="40" height="40" viewBox="0 0 54 46" />
          </div>
        </Link>
        {Object.entries(urlNameMap).map(([name, url], idx) => (
          <NavbarItem key={idx} url={url} name={name} />
        ))}
      </div>

      <div className="flex gap-2 items-center">
        {/* <SearchInput /> */}
        <Select descMap={supportedLocale} value={locale} onValueChange={handleSelectLocale}>
          <div
            id="locale-select"
            className={clsx(
              'flex items-center justify-center w-8 h-8 p-1.5 rounded-lg border',
              'transition-all ease-in-out duration-300',
              'hover:shadow-sm hover:border-gray-200 hover:duration-0 hover:border-opacity-100 hover:bg-gray-100 ',
              'dark:hover:bg-gray-700',
              'active:bg-gray-200 active:border-gray-300 dark:active:bg-gray-700 dark:active:border-gray-600',
              'border-gray-200 dark:border-gray-600',
              scrollDis <= 64 ? 'border-opacity-0' : ''
            )}>
            <TransIcon />
          </div>
        </Select>

        <Tooltip content={darkMode ? '明亮模式' : '黑暗模式'}>
          <Toolbar pressed={darkMode} onPressedChange={handleModeChange}>
            <div
              className={clsx(
                'flex items-center justify-center w-8 h-8 p-1.5 rounded-lg border',
                'transition-all ease-in-out duration-300',
                'dark:text-gray-200',
                'hover:shadow-sm hover:border-gray-200 hover:duration-0 hover:border-opacity-100 hover:bg-gray-100 ',
                'dark:hover:bg-gray-700',
                'active:bg-gray-200 active:border-gray-300 dark:active:bg-gray-700 dark:active:border-gray-600',
                'border-gray-200 dark:border-gray-600'
              )}>
              {darkMode ? <SunIcon /> : <MoonIcon />}
            </div>
          </Toolbar>
        </Tooltip>
        {/* <UserInfoPanel /> */}
      </div>
    </div>
  );
}
