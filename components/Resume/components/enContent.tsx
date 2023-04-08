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
import { Locale } from '../../Navbar';

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

      <div className="text-xl font-bold">{university}</div>
      <div className="flex gap-4 items-end">
        <div className="text-xl font-normal text-gray-400 dark:text-gray-500">{degree}</div>
      </div>
      {/* <div className="text-xl font-normal text-gray-600 dark:text-gray-200">{course}</div> */}

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
        <div className="text-lg font-bold text-gray-600 dark:text-gray-200 w-32">{skillType}</div>
        {/* <div className="text-xs font-normal text-gray-400 dark:text-gray-500">{skillName}</div> */}
      </div>
      <div className="flex gap-8 items-center text-lg font-normal leading-tight">
        {/* <Progress progress={proficiency} />
        {proficiency} */}
        {description}
      </div>
    </div>
  );
}

interface EnContentProps extends AllHTMLAttributes<HTMLDivElement> {}

function EnContent({ className }: EnContentProps, ref: ForwardedRef<HTMLDivElement>): JSX.Element {
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
          <div className="w-full flex gap-6 items-end">
            <p className="text-6xl font-bold font-family-mont text-gray-600 dark:text-gray-200 flex-shrink-0">
              {'Liu Zhenyan'}
            </p>
            <div>
              <p className="text-xl text-gray-600 dark:text-gray-200 font-normal">
                {'Intention post:'}
              </p>
              <p className="text-xl text-gray-600 dark:text-gray-200 font-normal">
                {'Intern of Front-end'}
              </p>
            </div>
          </div>

          <div
            id="contact"
            className="grid grid-cols-2 gap-4 pr-20 mt-4 text-gray-600 dark:text-gray-200">
            <div className="flex items-center gap-4">
              <div className="w-7 h-7 text-primary dark:text-primaryHover relative -left-0">
                <PhoneLogo />
              </div>
              <div>+86 {process.env.NEXT_PUBLIC_TEL || '188xxxx8277'}</div>
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
              href="https://www.wuzhong.cloud"
              target="_blank"
              rel="noreferrer">
              <div className="w-7 h-7 text-primary dark:text-primaryHover relative -left-0">
                <WebLogo />
              </div>
              <div>www.wuzhong.cloud</div>
            </a>

            <div className="flex items-center gap-4">
              <div className="w-7 h-7 text-primary dark:text-primaryHover relative -left-0">
                <CapLogo />
              </div>
              <div>{"Master's Degree Student"}</div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-7 h-7 text-primary dark:text-primaryHover relative -left-0">
                <SiteLogo />
              </div>
              <div>{'Shanghai, China'}</div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex w-full h-[85%] gap-8 text-xl text-gray-600 dark:text-gray-200 font-semibold">
        <div id="left-bottom" className={clsx('flex w-[32%] flex-col h-full justify-between')}>
          <div id="education" className={clsx('flex flex-col gap-3')}>
            <Title>{'Education'}</Title>

            <EducationItem
              time={'2021 - *2024'}
              university={'Tongji University'}
              degree={'Master Degree in Architecture'}
              course={'Courses: Introduction to Artificial Intelligence \\ Digital Architecture'}
              score={'GPA: 4.7 Score: 89.63/100' || undefined}
            />

            <EducationItem
              time={'2016 - 2021'}
              university={'Zhejiang University'}
              degree={'Bachelor Degree in Architecture'}
              course={'Courses: Parametric Design \\ Building Robotics'}
              score={'GPA: 4.12 Rank: 8/84' || undefined}
            />
          </div>

          <div id="experiance" className={clsx('flex flex-col gap-4')}>
            <Title>{'Experience'}</Title>

            <div className={clsx('flex flex-col flex-1 flex-grow gap-4')}>
              <ExperienceItem
                time="9.2017 - 6.2019"
                company={'Zhejiang University'}
                work={"President of club 'Alumni Liaison Association'."}
              />
              <ExperienceItem
                time="9.2016 - 6.2021"
                company={'Zhejiang University'}
                work={'Awarded a four-star volunteer.'}
              />
              <ExperienceItem
                time="6.2021 - 9.2021"
                company={'Many Core'}
                work={'Research Algorithm Intern'}
              />
              {/* <ExperienceItem
                time="1.2022 - 3.2022"
                company={'同济大学'}
                work={'极智未来·建筑黑客马拉松 前八'}
              /> */}
            </div>
          </div>

          <div id="awards" className={clsx('flex flex-col gap-3')}>
            <Title>{'Awards'}</Title>

            <AwardsItem time={'6.2017'} nameList={['ZJU Third Prize Scholarship']} />

            <AwardsItem
              time={'6.2018'}
              nameList={[
                'ZJU Third Prize Scholarship',
                'Zhejiang Provincial Government Scholarship'
              ]}
            />

            <AwardsItem
              time={'6.2019'}
              nameList={['ZJU Third Prize Scholarship', 'Jianlang Second Prize Scholarship']}
            />

            {/* <AwardsItem time={'2.2022'} nameList={[t('awards.item4.nameList.name1')]} /> */}
          </div>
        </div>

        <div id="right-bottom" className={clsx('flex w-[68%] flex-col justify-between gap-6')}>
          <div id="profile" className={clsx('flex flex-col gap-3')}>
            <Title>{'Profile'}</Title>

            <p className="text-xl font-normal text-gray-600 dark:text-gray-200">
              {
                'Liu Zhenyan, born in Hubei in 1999. I have learned front-end courses by self-taught and participated in the development of multiple projects, with experience in full-stack development.'
              }
            </p>
            <p className="text-xl font-normal text-gray-600 dark:text-gray-200">
              {
                'I have strong learning ability, is passionate about front-end development technology, and loves to learn new technologies like ChatGPT-API, Lang-Chain.'
              }
              {/* {
                'During my undergraduate period, I have served as the leader of a student club and was awarded a four-star volunteer with strong empathy and responsibility.'
              } */}
            </p>
          </div>

          <div id="project" className={clsx('flex flex-col gap-3')}>
            <Title>{'Projects'}</Title>

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
                'A project based on the Next.js framework for modeling and standardizing architectural drawings, using the Radix-UI component library with tailwindcss for layout. Geometry display is implemented through Three.js.'
              }
            />

            <ProjectItem
              time={'3.2023 - 4.2023'}
              name={'ChatGlider'}
              // description={t('projects.item2.description')}
              stackList={['Electron', 'Vite', 'React', 'ChatGPT-API', 'TypeScript']}
              introduction={
                'A desktop vocabulary translation software based on Electron and Vite. Translation logic is implemented by calling the ChatGPT API, and the front-end interface and interaction are based on React.'
              }
            />

            <ProjectItem
              time={'2.2022 - 3.2022'}
              name={'Sketch2Param'}
              // description={t('projects.item3.description')!}
              stackList={['Pytorch', 'HTML', 'CSS', 'JavaScript', 'Three.js']}
              introduction={
                'Developed a "hand-drawn sketch parametric modeling" project using vanilla HTML\\CSS\\JavaScript, with the reconstruction logic based on a Pytorch deep learning model (Res-Net), and the geometry display using the Three.js library.'
              }
            />
          </div>

          <div id="professional-skills" className="flex flex-col gap-1">
            <Title className="mb-3">{'Professional Skills'}</Title>
            <SkillItem
              skillType={'Front-end'}
              skillName={'HTML\\CSS\\JavaScript'}
              description={'Skilled in basic languages such as HTML, CSS, and JavaScript.'}
            />
            <SkillItem
              skillType={'Framework'}
              skillName={'React\\Nextjs'}
              description={
                'Skilled in React, familiar with Next.js and developed practical projects using it.'
              }
            />
            <SkillItem
              skillType={'Code Rule'}
              skillName={'TypeScript\\eslint'}
              description={
                'Familiar with TypeScript syntax and accustomed to developing with eslint to reduce errors.'
              }
            />
            <SkillItem
              skillType={'Build Tools'}
              skillName={'Vite'}
              description={'Aware of build tools like Vite.'}
            />
            <SkillItem
              skillType={'Desktop Dev'}
              skillName={'Electron'}
              description={'Capable of developing desktop applications using Electron.'}
            />
            <SkillItem
              skillType={'Back-end'}
              skillName={'nodejs\\python'}
              description={
                'Familiar with backend technologies such as Node.js and Python (Django), and capable of using databases.'
              }
            />
            <SkillItem
              skillType={'Design Tool'}
              skillName={'PS\\AI\\figma'}
              description={'Skilled in design tools like PS\\AI\\figma.'}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default forwardRef(EnContent);
