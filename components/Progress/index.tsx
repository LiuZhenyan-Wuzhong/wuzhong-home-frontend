import { AllHTMLAttributes } from 'react';
import * as ProgressUI from '@radix-ui/react-progress';
import { clsx } from 'clsx';

interface ProgressProps extends AllHTMLAttributes<HTMLDivElement> {
  progress: number;
}

export default function Progress({ className, progress }: ProgressProps): JSX.Element {
  return (
    <ProgressUI.Root
      className={clsx(
        'relative overflow-hidden bg-gray-100 rounded-full w-[420px] h-[6px]',
        className
      )}
      value={progress}>
      <ProgressUI.Indicator
        className="bg-resumePrimary w-full h-full transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${100 - progress}%)` }}
      />
      <div>ww</div>
    </ProgressUI.Root>
  );
}
