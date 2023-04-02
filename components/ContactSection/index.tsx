import { clsx } from 'clsx';
import { useTranslation } from 'next-i18next';
import { AllHTMLAttributes, Context, forwardRef, RefObject, useContext } from 'react';
import GithubLogo from '/public/icon/github-mark.svg';
import ContactLogo from '/public/icon/contact.svg';
import PhoneLogo from '/public/icon/phone.svg';
import TwitterLogo from '/public/icon/twitter.svg';
import WebLogo from '/public/icon/web.svg';

interface ContactItemContainerProps extends AllHTMLAttributes<HTMLAnchorElement> {}

function ContactItemContainer({
  className,
  children,
  href
}: ContactItemContainerProps): JSX.Element {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={clsx(
        'h-20 flex flex-grow gap-2 items-center rounded-2xl p-4 border',
        'bg-blue-500 border-blue-500',
        'hover:bg-gray-100 hover:text-gray-800 hover:border-gray-200',
        'dark:hover:bg-gray-700 dark:hover:text-gray-200 dark:hover:border-gray-600',
        'transition-colors ease-in-out duration-500',
        className
      )}>
      {children}
    </a>
  );
}
interface ContactSectionProps extends AllHTMLAttributes<HTMLDivElement> {}

function ContactSection({ className }: ContactSectionProps): JSX.Element {
  // hook
  const { t } = useTranslation('index');

  return (
    <div
      id="contact-section"
      className={clsx('w-full', 'flex flex-col gap-10 items-center', className)}>
      <div className="w-full text-center text-4xl font-semibold text-gray-700 dark:text-gray-200">
        {t('contact.title')}
      </div>
      <div
        className={clsx(
          'gap-6 w-full flex-wrap text-white',
          'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'
        )}>
        <ContactItemContainer href="#" className="w-full">
          <div className="w-6 h-6 relative">
            <WebLogo />
          </div>
          <p className="flex-grow text-center select-none">个人页面</p>
        </ContactItemContainer>

        <ContactItemContainer href="https://github.com/LiuZhenyan-Wuzhong">
          <div className="w-8 h-8 relative flex-shrink-0">
            <GithubLogo />
          </div>
          <p className="flex-grow text-center select-none">LiuZhenyan-Wuzhong</p>
        </ContactItemContainer>

        <ContactItemContainer href="https://twitter.com/Wuzhong_Liu">
          <div className="w-8 h-8 relative flex-shrink-0">
            <TwitterLogo />
          </div>
          <p className="flex-grow text-center select-none">Wuzhong_Liu</p>
        </ContactItemContainer>

        <ContactItemContainer
          href="wuzhong110110@gmail.com"
          className="lg:col-span-3 lg:px-72 xl:col-span-1 xl:px-4">
          <div className="w-8 h-8 relative flex-shrink-0">
            <ContactLogo />
          </div>
          <p className="flex-grow text-center select-none">
            wuzhong110110
            <br className="hidden xl:inline" />
            @gmail.com
          </p>
        </ContactItemContainer>
      </div>
    </div>
  );
}

export default ContactSection;
