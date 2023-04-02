import { AllHTMLAttributes } from 'react';
import Link from 'next/link';
import WuBlogLogo from '/public/logo.svg';
import GithubLogo from '/public/icon/github-mark.svg';
import ContactLogo from '/public/icon/contact.svg';
import PhoneLogo from '/public/icon/phone.svg';
import TwitterLogo from '/public/icon/twitter.svg';
import { clsx } from 'clsx';

interface ContactItemProps extends AllHTMLAttributes<HTMLAnchorElement> {}

function ContactItem({ className, children, href }: ContactItemProps): JSX.Element {
  return (
    <a
      className={clsx(
        'w-8 h-8 flex p-1 items-center justify-center rounded-full',
        'text-gray-700 hover:bg-gray-800  hover:text-white',
        'dark:text-gray-200 dark:hover:bg-gray-100 dark:hover:text-gray-600',
        'transition-colors ease-in-out duration-150'
      )}
      href={href}
      target="_blank"
      rel="noreferrer">
      {children}
    </a>
  );
}

interface FooterProps extends AllHTMLAttributes<HTMLDivElement> {}

export default function Footer({ className }: FooterProps) {
  return (
    <div className="bg-gray-200 w-full py-16 dark:bg-gray-600">
      <div className="sm:w-160 md:w-192 lg:w-256 xl:w-320 flex items-center justify-between text-sm mx-auto px-12">
        <div className="flex flex-col items-center gap-3 h-full">
          <Link href="/">
            <WuBlogLogo width="80" height="80" viewBox="0 0 54 46" />
          </Link>

          <p className="text-xl font-bold text-gray-500 dark:text-gray-300">Wuzhong Blog</p>
        </div>

        <div className="flex flex-col items-end font-light text-sm leading-6 w-96 gap-4 dark:text-gray-200">
          <p>You never walk alone.</p>
          <div className="flex items-center gap-2">
            <ContactItem href={'https://wuzhong110110@gmail.com'}>
              <ContactLogo />
            </ContactItem>
            <ContactItem href={'https://github.com/LiuZhenyan-Wuzhong'}>
              <GithubLogo />
            </ContactItem>
            <ContactItem href={'https://twitter.com/Wuzhong_Liu'}>
              <TwitterLogo />
            </ContactItem>
          </div>
          <p className="font-semibold">© Copyright 2022. All Rights Reserved</p>
        </div>
      </div>
    </div>
  );
}
