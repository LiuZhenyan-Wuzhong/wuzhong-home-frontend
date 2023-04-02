import clsx from 'clsx';
import { AllHTMLAttributes } from 'react';
import Button, { ButtonType } from '../Button';

const bannerState = {
  bannerTitle: 'Meeting friends from all over the world.',
  bannerSubText:
    'Find the world’s best designers on Dribbble – the largest independent community for digital designers.',
  bannerMainText: "Can't wait to share with us?",
  bannerSubText2: 'Viewing 12 of 10,000+ designers available for hire'
};

interface BannerProps extends AllHTMLAttributes<HTMLDivElement> {}

export default function Banner({ className }: BannerProps) {
  return (
    <div className={clsx('w-full', className)}>
      <div className="flex py-8 flex-col gap-4 items-start text-gray-800 border-b">
        <div>
          <span className="font-semibold" style={{ fontSize: 28 }}>
            {bannerState.bannerTitle}
          </span>
        </div>

        <div>
          <span className="font-light">{bannerState.bannerSubText}</span>
        </div>

        <div
          className={clsx(
            'rounded-2xl group border border-gray-300 common-shadow w-full px-6 bg-gradient-to-br from-gray-100 via-white to-white'
          )}>
          <div className="w-full h-20 flex items-center justify-between">
            <div className="font-semibold">{bannerState.bannerMainText}</div>
            <Button variant={ButtonType.main}>Submit Now!</Button>
          </div>
          <div
            className={clsx(
              'group-hover:h-32 h-0 w-full',
              'transition-all duration-300 ease-in-out delay-150'
            )}></div>
        </div>

        <div>
          <span className="font-thin">{bannerState.bannerSubText2}</span>
        </div>
      </div>
    </div>
  );
}
