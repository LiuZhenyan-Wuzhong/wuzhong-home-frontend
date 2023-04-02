import { clsx } from 'clsx';
import { useTranslation } from 'next-i18next';
import { AllHTMLAttributes, ForwardedRef, forwardRef, RefObject } from 'react';
import Image from 'next/image';
import GithubLogo from '/public/icon/github-mark.svg';
import ContactLogo from '/public/icon/contact.svg';
import PhoneLogo from '/public/icon/phone.svg';
import BriefCaseLogo from '/public/icon/briefcase.svg';
import WebLogo from '/public/icon/web.svg';
import CapLogo from '/public/icon/cap.svg';
import SiteLogo from '/public/icon/site.svg';
import Progress from '../Progress';
import { Locale } from '../Navbar';

function Title({ children, className }: AllHTMLAttributes<HTMLParagraphElement>): JSX.Element {
  return (
    <p
      className={clsx(
        'text-3xl font-bold text-gray-600 dark:text-gray-200 pl-4 border-l-pink-300 leading-none',
        className
      )}
      style={{ borderLeftWidth: 7 }}>
      {children}
    </p>
  );
}

interface EducationItemProps extends AllHTMLAttributes<HTMLDivElement> {
  time: string;
  degree: string;
  course: string;
  university: string;
  score?: string;
}

function EducationItem({
  children,
  time,
  degree,
  course,
  university,
  score
}: EducationItemProps): JSX.Element {
  return (
    <div className="flex flex-col gap-1">
      <div className="text-lg font-bold text-primary dark:text-primaryHover">{time}</div>
      <div className="flex gap-4 items-end">
        <div className="text-xl font-bold">{university}</div>
        <div className="text-xl font-normal text-gray-400 dark:text-gray-500">{degree}</div>
      </div>
      <div className="text-xl font-normal text-gray-600 dark:text-gray-200">{course}</div>

      <div className="text-xl font-normal text-gray-600 dark:text-gray-200">{score}</div>
    </div>
  );
}

interface AwardsItemProps extends AllHTMLAttributes<HTMLDivElement> {
  time: string;
  nameList: string[];
}

function AwardsItem({ children, time, nameList }: AwardsItemProps): JSX.Element {
  return (
    <div className="flex flex-col gap-1">
      <div className="text-lg font-bold text-primary dark:text-primaryHover">{time}</div>
      {nameList.map((name, idx) => (
        <div
          className="text-xl font-normal flex gap-2 items-start text-gray-600 dark:text-gray-200"
          key={idx}>
          <div className="font-bold">{'· '}</div>
          {name}
        </div>
      ))}
    </div>
  );
}

interface ProjectItemProps extends AllHTMLAttributes<HTMLDivElement> {
  time: string;
  name: string;
  description?: string;
  stackList: string[];
  introduction: string;
}

function ProjectItem({
  time,
  name,
  description,
  stackList,
  introduction
}: ProjectItemProps): JSX.Element {
  return (
    <div className="flex flex-col">
      <div className="flex gap-4">
        <div className="text-lg font-bold text-primary dark:text-primaryHover">{time}</div>
        <div className="text-xl font-bold text-gray-600 dark:text-gray-200">{name}</div>
        {/* <div className="text-xl font-normal text-gray-400 dark:text-gray-500">{description}</div> */}
      </div>
      <div className="flex flex-wrap text-gray-400 dark:text-gray-500 text-[16px] font-normal leading-none">
        {stackList.join(' \\ ')}
      </div>
      <div className="flex flex-col mt-1">
        {introduction.split('\n').map((sub, idx) => (
          <div key={idx} className="mt-2 text-xl font-normal text-gray-600 dark:text-gray-200">
            {sub}
          </div>
        ))}
      </div>
    </div>
  );
}

interface ExperienceItemProps extends AllHTMLAttributes<HTMLDivElement> {
  time: string;
  company: string;
  work: string;
  locale?: Locale;
}

function ExperienceItem({
  children,
  time,
  company,
  work,
  locale
}: ExperienceItemProps): JSX.Element {
  return (
    <div className="flex flex-col gap-2 flex-shrink-0">
      <div className={clsx('flex w-full', locale === Locale.en ? 'flex-col gap-0' : 'gap-8')}>
        <div className="text-lg font-bold text-primary dark:text-primaryHover">{time}</div>
        <div className="text-xl font-semibold text-gray-600 dark:text-gray-200">{company}</div>
      </div>
      <div className="text-xl font-normal text-gray-600 dark:text-gray-200">{work}</div>
    </div>
  );
}

interface SkillItemProps extends AllHTMLAttributes<HTMLDivElement> {
  skillType: string;
  skillName: string;
  proficiency?: number; //[0:100]
  description: string;
}

function SkillItem({ children, skillType, skillName, description }: SkillItemProps): JSX.Element {
  return (
    <div className="flex gap-4 items-start">
      <div className="flex flex-col gap-0">
        <div className="text-lg font-bold text-gray-600 dark:text-gray-200">{skillType}</div>
        {/* <div className="text-xs font-normal text-gray-400 dark:text-gray-500">{skillName}</div> */}
      </div>
      <div className="flex gap-8 items-center text-lg font-normal">
        {/* <Progress progress={proficiency} />
        {proficiency} */}
        {description}
      </div>
    </div>
  );
}

interface ResumeProps extends AllHTMLAttributes<HTMLDivElement> {
  locale: Locale;
}

function Resume(
  { className, locale }: ResumeProps,
  ref: ForwardedRef<HTMLDivElement>
): JSX.Element {
  // hook
  const { t } = useTranslation('resume');

  return (
    <div
      ref={ref}
      className={clsx(
        'relative p-24 mx-auto',
        'flex flex-col gap-16 font-family-mont',
        'origin-top',
        'bg-white shadow-lg',
        'dark:bg-gray-700',
        className
      )}
      style={{ width: 1188, height: 1681 }}>
      <div className="flex w-full h-[15%] gap-8">
        <div id="left-top" className="flex w-[32%] items-center justify-start">
          <div className="h-full rounded-full relative overflow-hidden" style={{ aspectRatio: 1 }}>
            <Image
              src={'/img/wuzhong_02.jpg'}
              fill
              className="object-cover scale-150 origin-top translate-x-1"
              alt="avator"
            />
          </div>
        </div>

        <div id="right-top" className="flex w-[68%] flex-col gap-4">
          <div className="w-full flex gap-6 items-end flex-wrap">
            <p className="text-6xl font-bold font-family-mont text-gray-600 dark:text-gray-200">
              {t('contact.name')}
            </p>
            <p className="text-xl text-gray-600 dark:text-gray-200 font-normal">
              {t('contact.jobs')}
            </p>
          </div>

          <div
            id="contact"
            className="grid grid-cols-2 gap-4 pr-20 mt-4 text-gray-600 dark:text-gray-200">
            <div className="flex items-center gap-4">
              <div className="w-7 h-7 text-primary dark:text-primaryHover relative -left-0">
                <PhoneLogo />
              </div>
              <div>+86 188xxxx8277</div>
            </div>

            <a
              className="flex items-center gap-4"
              href="https://wuzhong110110@gmail.com"
              target="_blank"
              rel="noreferrer">
              <div className="w-7 h-7 text-primary dark:text-primaryHover relative -left-0">
                <ContactLogo />
              </div>
              <div>2132102@tongji.edu.cn</div>
            </a>

            <a
              className="flex items-center gap-5"
              href="https://github.com/LiuZhenyan-Wuzhong"
              target="_blank"
              rel="noreferrer">
              <div className="w-6 h-6 text-primary dark:text-primaryHover relative -left-0">
                <GithubLogo />
              </div>
              <div>LiuZhenyan-Wuzhong</div>
            </a>

            <a
              className="flex items-center gap-4"
              href="https://github.com/LiuZhenyan-Wuzhong"
              target="_blank"
              rel="noreferrer">
              <div className="w-7 h-7 text-primary dark:text-primaryHover relative -left-0">
                <WebLogo />
              </div>
              <div>www.wuzhong.com</div>
            </a>

            <div className="flex items-center gap-4">
              <div className="w-7 h-7 text-primary dark:text-primaryHover relative -left-0">
                <CapLogo />
              </div>
              <div>{'硕士研究生'}</div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-7 h-7 text-primary dark:text-primaryHover relative -left-0">
                <SiteLogo />
              </div>
              <div>{t('contact.site')}</div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex w-full h-[85%] gap-8 text-xl text-gray-600 dark:text-gray-200 font-semibold">
        <div
          id="left-bottom"
          className={clsx(
            'flex w-[32%] flex-col h-full justify-between',
            locale === Locale.han ? '' : ''
          )}>
          <div
            id="education"
            className={clsx('flex flex-col', locale === Locale.han ? 'gap-6' : 'gap-3')}>
            <Title>{t('education.title')}</Title>

            <EducationItem
              time={'2021 - *2024'}
              university={t('education.item1.university')}
              degree={t('education.item1.degree')}
              course={'修读：人工智能导论 \\ 数字建筑学'}
              score={t('education.item1.score') || undefined}
            />

            <EducationItem
              time={'2016 - 2021'}
              university={t('education.item2.university')}
              degree={t('education.item2.degree')}
              course={'修读：参数化设计 \\ 建筑机器人'}
              score={t('education.item2.score') || undefined}
            />
          </div>

          <div
            id="experiance"
            className={clsx('flex flex-col', locale === Locale.han ? 'gap-6' : 'gap-4')}>
            <Title>{t('experience.title')}</Title>

            <div
              className={clsx(
                'flex flex-col flex-1 flex-grow',
                locale === Locale.han ? 'gap-6' : 'gap-4'
              )}>
              <ExperienceItem
                time="9.2017 - 6.2019"
                company={t('experience.school.item1.company')}
                work={t('experience.school.item1.work')}
              />
              <ExperienceItem
                time="9.2016 - 6.2021"
                company={t('experience.school.item2.company')}
                work={t('experience.school.item2.work')}
              />
              <ExperienceItem
                time="6.2021 - 9.2021"
                company={t('experience.company.item2.company')}
                work={t('experience.company.item2.work')}
              />
              <ExperienceItem
                time="1.2022 - 3.2022"
                company={'同济大学'}
                work={'极智未来·建筑黑客马拉松 前八'}
              />
            </div>
          </div>

          <div
            id="awards"
            className={clsx('flex flex-col', locale === Locale.han ? 'gap-6' : 'gap-3')}>
            <Title>{t('awards.title')}</Title>

            <AwardsItem time={'6.2017'} nameList={[t('awards.item1.nameList.name1')]} />

            <AwardsItem
              time={'6.2018'}
              nameList={[t('awards.item2.nameList.name1'), t('awards.item2.nameList.name2')]}
            />

            <AwardsItem
              time={'6.2019'}
              nameList={[t('awards.item3.nameList.name1'), t('awards.item3.nameList.name2')]}
            />

            {/* <AwardsItem time={'2.2022'} nameList={[t('awards.item4.nameList.name1')]} /> */}
          </div>
        </div>

        <div
          id="right-bottom"
          className={clsx(
            'flex w-[68%] flex-col justify-between',
            locale === Locale.han ? 'gap-12' : 'gap-6'
          )}>
          <div
            id="profile"
            className={clsx('flex flex-col', locale === Locale.han ? 'gap-6' : 'gap-3')}>
            <Title>{t('profile.title')}</Title>

            <p className="text-xl font-normal text-gray-600 dark:text-gray-200">
              {t('profile.p1')}
            </p>
            <p className="text-xl font-normal text-gray-600 dark:text-gray-200">
              {t('profile.p2')}
            </p>
          </div>

          <div
            id="project"
            className={clsx('flex flex-col', locale === Locale.han ? 'gap-6' : 'gap-3')}>
            <Title>{t('projects.title')}</Title>

            <ProjectItem
              time={'11.2022 - *4.2023'}
              name={'AutoReview'}
              // description={t('projects.item1.description')}
              stackList={[
                'Nextjs',
                'Radix-UI',
                'tailwindcss',
                'Three.js',
                'TypeScript',
                'Python',
                'Django',
                'MySQL'
              ]}
              introduction={
                '一个基于Nextjs框架对建筑图纸进行建模和规范审核的项目，使用Radix-UI组件库配合tailwindcss进行布局。几何显示通过Three.js实现。\n本人负责部分交互逻辑，Three.js几何操作，后端，数据库，建模逻辑。'
              }
            />

            <ProjectItem
              time={'3.2023 - 4.2023'}
              name={'ChatGlider'}
              // description={t('projects.item2.description')}
              stackList={['Electron', 'Vite', 'React', 'ChatGPT-API', 'TypeScript']}
              introduction={
                '一款基于Electron和Vite构建的桌面词汇翻译软件，翻译逻辑通过调用ChatGPT API实现。前端界面与交互采用React框架。\n本人独立完成项目策划、设计、编码任务。'
              }
            />

            <ProjectItem
              time={'2.2022 - 3.2022'}
              name={'Sketch2Param'}
              // description={t('projects.item3.description')!}
              stackList={['Pytorch', 'HTML', 'CSS', 'JavaScript', 'Three.js']}
              introduction={
                '使用HTML\\CSS\\JavaScript实现的"手绘草图参数化建模"项目，重建逻辑使用基于Pytorch的深度学习模型(Res-Net)，几何显示使用Three.js库。\n由本人独立完成项目编码工作。'
              }
            />
          </div>

          <div id="professional-skills" className="flex flex-col gap-3">
            <Title className="mb-6">{t('professional-skills.title')}</Title>
            <SkillItem
              skillType={t('professional-skills.item1.skillType')}
              skillName={'HTML\\CSS\\JavaScript'}
              description={'能够熟练使用 HTML \\ CSS \\ JavaScript等基础语言，'}
            />
            <SkillItem
              skillType={t('professional-skills.item2.skillType')}
              skillName={'React\\Nextjs'}
              description={'擅长的前端框架为React，能使用Nextjs并开发过实际项目。'}
            />
            <SkillItem
              skillType={t('professional-skills.item3.skillType')}
              skillName={'TypeScript\\eslint'}
              description={'熟悉TypeScript语法，并习惯配合eslint开发以减少错误。'}
            />
            <SkillItem
              skillType={t('professional-skills.item4.skillType')}
              skillName={'Vite'}
              description={'熟悉Vite等构建工具。'}
            />
            <SkillItem
              skillType={t('professional-skills.item5.skillType')}
              skillName={'Electron'}
              description={'能够使用Electron进行桌面端开发。'}
            />
            <SkillItem
              skillType={t('professional-skills.item6.skillType')}
              skillName={'nodejs\\python'}
              description={'熟悉Nodejs，Python等后端技术，了解数据库以及后端框架的使用。'}
            />
            <SkillItem
              skillType={t('professional-skills.item7.skillType')}
              skillName={'PS\\AI\\figma'}
              description={'能使用PS\\AI\\figma等设计工具，与设计师高效对接，较好还原设计。'}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default forwardRef(Resume);
