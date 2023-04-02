import clsx from 'clsx';
import { useTranslation } from 'next-i18next';
import Router from 'next/router';
import { AllHTMLAttributes } from 'react';
import Button, { ButtonType } from '../Button';

interface ResumeSectionProps extends AllHTMLAttributes<HTMLDivElement> {}

export default function ResumeSection({ className }: ResumeSectionProps): JSX.Element {
  // hook
  const { t } = useTranslation('index');

  return (
    <div id="resume-section" className={clsx('w-full', 'flex flex-col gap-3 items-center')}>
      <div className="w-full text-center text-4xl font-semibold text-gray-700 dark:text-gray-200">
        {t('resume.title')}
      </div>
      <div className={clsx('w-full')}>
        <div className="flex py-8 flex-col gap-4 items-start text-gray-800">
          <div
            className={clsx(
              'rounded-2xl group border common-shadow w-full px-6 bg-gradient-to-br overflow-hidden',
              'border-gray-300 from-gray-100 via-white to-white',
              'dark:border-gray-600 dark:from-gray-800 dark:via-gray-900 dark:to-gray-900'
            )}>
            <div className="w-full h-20 flex items-center justify-between">
              <div className="font-semibold text-gray-700 dark:text-gray-200">
                {t('resume.header')}
              </div>
              <Button
                className="dark:text-white"
                variant={ButtonType.main}
                onClick={() => Router.push('/resume')}>
                {t('resume.to-see-resume')}
              </Button>
            </div>
            <div
              className={clsx(
                'group-hover:h-52 flex flex-col gap-4 h-0 w-full',
                'transition-all duration-300 ease-in-out delay-150',
                'text-gray-700',
                'dark:text-gray-200'
              )}>
              <div
                className={clsx(
                  'transition-all ease-in-out duration-300',
                  'text-opacity-0 group-hover:text-opacity-100',
                  'invisible group-hover:visible group-hover:delay-300',
                  '-translate-x-full group-hover:translate-x-0'
                )}>
                {t('resume.p1')}
              </div>
              <div
                className={clsx(
                  'transition-all ease-in-out duration-300',
                  'text-opacity-0 group-hover:text-opacity-100',
                  'invisible group-hover:visible group-hover:delay-[1000ms]',
                  '-translate-x-full group-hover:translate-x-0'
                )}>
                {t('resume.p2')}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
