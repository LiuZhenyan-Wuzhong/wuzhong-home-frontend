import clsx from 'clsx';
import { AllHTMLAttributes, MouseEventHandler, useCallback, useState } from 'react';
import Button, { ButtonType } from '../Button';
import UpLogo from '/public/icon/up.svg';

function useScroll() {
  const [scrollDis, setScrollDis] = useState(document.documentElement.scrollTop);

  document.addEventListener('scroll', (e) => {
    setScrollDis(document.documentElement.scrollTop);
  });
  return scrollDis;
}

interface BackToTopProps extends AllHTMLAttributes<HTMLDivElement> {}

export default function BackToTop({ className }: BackToTopProps): JSX.Element {
  // hook
  const scrollDis = useScroll();

  return (
    <a href="#">
      <Button
        variant={ButtonType.primary}
        className={clsx(
          className,
          'w-10 h-10 rounded-lg fixed pl-2 pb-2 pr-2 pt-2',
          'transition-all ease-in-out duration-500',
          scrollDis > 400
            ? 'translate-y-0'
            : 'invisible bg-transparent text-transparent translate-y-12'
        )}>
        <UpLogo />
      </Button>
    </a>
  );
}
