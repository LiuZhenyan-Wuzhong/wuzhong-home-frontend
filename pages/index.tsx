import Head from 'next/head';
import Image from 'next/image';
import { clsx } from 'clsx';
import style from '/styles/Intro.module.css';
import Container from '../components/Container';
import Button, { ButtonType } from '../components/Button';
import { useTranslation } from 'next-i18next';
import ResumeSection from '../components/ResumeSection';
import SkillSection from '../components/SkillSection';
import ProjectSection from '../components/ProjectSection';
import ContactSection from '../components/ContactSection';
import { useRouter } from 'next/dist/client/router';
import { GetStaticProps } from 'next/types';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export default function ProfilePage() {
  // hook
  const { t } = useTranslation('index');

  // router
  const router = useRouter();

  return (
    <>
      <Head>
        <title>{t('title')}</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="overflow-hidden relative flex-grow dark:text-gray-200 dark:bg-gray-800">
        <div className="h-24 w-full bg-indigo-50 dark:bg-gray-800"></div>
        <div id="header-section" className="w-full bg-indigo-50 dark:bg-gray-800">
          <div
            className={clsx(
              'absolute right-0 top-0 left-96 h-192 pr-0',
              'lg:right-0 lg:translate-x-48 lg:translate-y-24'
            )}>
            <Image
              src={'/img/WuBlogBGMain_3.jpg'}
              fill
              alt=""
              className="object-contain rotate-90 scale-150 dark:invisible"
            />
          </div>
          <Container
            className="relative flex flex-col gap-12 p-24 pt-32 px-16 xl:px-32"
            id="index-container">
            <div
              className={clsx(
                'flex lg:flex-row flex-col items-center gap-24 relative',
                'transition-all ease-in-out duration-300'
              )}>
              <div
                className={clsx(
                  'flex flex-1 flex-col justify-around items-start relative gap-5',
                  'order-2 lg:order-1'
                )}>
                <h1 className="m-0 font-bold leading-tight" style={{ fontSize: 50 }}>
                  {t('iam')} <span className="text-primary">{t('liuzhenyan')}</span>
                  {t('typing.static')}
                  <br className="hidden lg:inline" />
                  {t('typing.sparking1')}
                </h1>
                <p className="leading-7 text-gray-500 dark:text-gray-200" style={{ fontSize: 16 }}>
                  {t('introduction.1')}
                </p>
                <p className="leading-7 text-gray-500 dark:text-gray-200">{t('introduction.2')}</p>
                <p className="leading-7 text-gray-500 dark:text-gray-200">{t('introduction.3')}</p>
                <p className="leading-7 text-gray-500 dark:text-gray-200">
                  {t('introduction.find-me-on')}{' '}
                  <a
                    href="https://github.com/LiuZhenyan-Wuzhong"
                    className="underline"
                    target="_blank"
                    rel="noreferrer">
                    Github
                  </a>{' '}
                  {t('introduction.and')}{' '}
                  <a
                    href="https://twitter.com/Wuzhong_Liu"
                    className="underline"
                    target="_blank"
                    rel="noreferrer">
                    twitter
                  </a>
                  {t('introduction.mail-me-at')}{' '}
                  <a
                    href="https://wuzhong110110@gmail.com"
                    className="underline"
                    target="_blank"
                    rel="noreferrer">
                    wuzhong110110@gmail.com .
                  </a>
                </p>
                <div className="flex gap-4">
                  <Button
                    variant={ButtonType.primary}
                    className={clsx(
                      'font-semibold rounded-xl px-6 py-3 text-lg mt-4',
                      style['animation-button']
                    )}
                    onClick={() => router.push('/projects')}>
                    {t('discover')}
                  </Button>
                  <a href="#contact-section">
                    <Button
                      variant={ButtonType.secondary}
                      className={clsx(
                        'font-semibold rounded-xl px-6 py-3 text-lg mt-4 border border-gray-300'
                      )}>
                      {t('contact-me')}
                    </Button>
                  </a>
                </div>
              </div>
              <div
                className={clsx(
                  'w-64 h-64 flex flex-col justify-around relative flex-shrink-0 rounded-full',
                  'flex-grow-0',
                  'order-1 lg:order-2',
                  'transition-all ease-in-out duration-300 overflow-hidden'
                )}>
                <Image src="/img/queen.jpg" fill alt="" className="object-cover object-left" />
              </div>
            </div>
            <hr className="w-64 mx-auto dark:border-gray-700" />
            <ResumeSection />
          </Container>
        </div>

        <Container className="relative flex flex-col gap-20 p-24 px-0" id="body-container">
          <SkillSection />
          <hr className="w-64 mx-auto dark:border-gray-700" />
          <ProjectSection />
          <hr className="w-64 mx-auto dark:border-gray-700" />
          <ContactSection />
        </Container>
      </main>
    </>
  );
}

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? 'han', ['index']))
  }
});
