import { AllHTMLAttributes } from 'react';
import Link from 'next/link';
import clsx from 'clsx';
import { useRouter } from 'next/router';

interface NavbarItemProps extends AllHTMLAttributes<HTMLButtonElement> {
  url: string;
  name: string;
}

export default function NavbarItem({ className, url, name }: NavbarItemProps) {
  const useMainPath = () => {
    const router = useRouter();

    const curPath = router.asPath;

    return '/' + curPath.split('/')[1];
  };

  const mainPath = useMainPath();

  return (
    <button
      className={clsx(
        'font-medium text-gray-400 cursor-pointer rounded-lg p-4 px-3',
        'transition duration-150 ease-in font-semibold',
        'dark:text-gray-200',
        mainPath === url
          ? 'text-primary dark:text-primary'
          : 'hover:text-gray-700 dark:hover:text-gray-400',
        className
      )}>
      <Link href={url}>{name}</Link>
    </button>
  );
}
