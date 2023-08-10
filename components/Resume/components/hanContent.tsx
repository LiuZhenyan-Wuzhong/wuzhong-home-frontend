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
      <div className="flex gap-4 items-end">
        <div className="text-lg font-bold text-primary dark:text-primaryHover w-32">{time}</div>
      </div>

      <div className="flex gap-4 items-end">
        <div className="text-xl font-bold">{university}</div>
        <div className="text-xl font-normal text-gray-400 dark:text-gray-500">{degree}</div>

        {/* <div className="text-xl font-normal text-gray-600 dark:text-gray-200">{course}</div> */}
      </div>
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
      </div>
      <div className="flex flex-wrap items-center text-gray-400 dark:text-gray-500 text-[16px] font-normal leading-none">
        {stackList.join(' \\ ')}
        {description && (
          <div className="ml-4 text-sm font-normal text-gray-400 dark:text-gray-500">
            {description}
          </div>
        )}
      </div>

      <div className="flex flex-col mt-0">
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
      {work.split('\n').map((sub, idx) => (
        <div key={idx} className="text-xl font-normal text-gray-600 dark:text-gray-200">
          {sub}
        </div>
      ))}
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
    <div className="items-start">
      {/* <div className="flex flex-col gap-0 flex-shrink-0">
        <div className="text-lg font-bold text-gray-600 dark:text-gray-200">{skillType}</div>
      </div>
      <div className="flex gap-8 items-center text-lg font-normal">
        {description}
      </div> */}

      <span className="text-lg font-bold text-gray-600 dark:text-gray-200 mr-4">{skillType}</span>
      <span className="text-lg font-normal">{description}</span>
    </div>
  );
}

interface HanContentProps extends AllHTMLAttributes<HTMLDivElement> {}

function HanContent(
  { className }: HanContentProps,
  ref: ForwardedRef<HTMLDivElement>
): JSX.Element {
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
              {'刘真言'}
            </p>
            <p className="text-xl text-gray-600 dark:text-gray-200 font-normal">
              {'意向岗位：前端开发实习生'}
            </p>
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
              <div>{'硕士研究生'}</div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-7 h-7 text-primary dark:text-primaryHover relative -left-0">
                <SiteLogo />
              </div>
              <div>{'中国 上海'}</div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex w-full h-[85%] gap-8 text-xl text-gray-600 dark:text-gray-200 font-semibold">
        <div id="left-bottom" className={clsx('flex w-[32%] flex-col h-full justify-between')}>
          <div id="education" className={clsx('flex flex-col gap-3')}>
            <Title className="mb-2">{'教育背景'}</Title>

            <EducationItem
              time={'2021 - *2024'}
              university={'同济大学'}
              degree={'建筑学硕士'}
              course={'修读：人工智能导论 \\ 数字建筑学'}
              score={'GPA: 4.71  排名: 8/146' || undefined}
            />

            <EducationItem
              time={'2016 - 2021'}
              university={'浙江大学'}
              degree={'建筑学学士'}
              course={'修读：参数化设计 \\ 建筑机器人'}
              score={'GPA: 4.12  排名: 8/84' || undefined}
            />
          </div>

          <div id="awards" className={clsx('flex flex-col gap-3')}>
            <Title className="mb-2">{'获奖情况'}</Title>

            <AwardsItem time={'6.2017'} nameList={['浙江大学优秀学生三等奖学金']} />

            <AwardsItem
              time={'6.2018'}
              nameList={['浙江大学学业二等奖学金', '浙江省政府奖学金', '浙江大学四星志愿者']}
            />

            <AwardsItem
              time={'6.2019'}
              nameList={['浙江大学优秀学生三等奖学金', '坚朗二等奖学金']}
            />

            <AwardsItem time={'2.2022'} nameList={['极智未来·建筑黑客马拉松 前八']} />
          </div>

          <div id="professional-skills" className="flex flex-col gap-3">
            <Title className="mb-2">{'专业技能'}</Title>
            <SkillItem
              skillType={'前端基础'}
              skillName={'HTML\\CSS\\JavaScript'}
              description={
                '熟悉HTML5元素以及API;熟悉CSS样式,能使用flex\\grid布局方式;熟悉JS,ES6语法,习惯使用TS。了解浏览器事件循环机制。'
              }
            />
            <SkillItem
              skillType={'前端框架'}
              skillName={'React\\Umi'}
              description={
                '熟悉React框架,习惯使用函数组件;了解Redux,Hox状态管理库;使用Umi开发过实际项目。'
              }
            />
            {/* <SkillItem
              skillType={'代码规范'}
              skillName={'TypeScript\\eslint'}
              description={'熟悉TypeScript，习惯配合eslint开发以减少错误'}
            /> */}
            <SkillItem
              skillType={'前端工程化'}
              skillName={'Vite'}
              description={
                '了解JS模块化规范.了解webpack构建工具,了解loader, plugin概念。了解并使用过vite。'
              }
            />
            <SkillItem
              skillType={'后端技术'}
              skillName={'nodejs\\python'}
              description={
                '使用过express，Django搭建后端服务器,了解HTTP请求, REST风格API设计,用户鉴权。'
              }
            />
            {/* <SkillItem
              skillType={'设计基础'}
              skillName={'PS\\AI\\figma'}
              description={'能使用PS\\AI\\figma等设计工具，与设计师高效对接'}
            /> */}
            {/* <SkillItem
              skillType={'桌面开发'}
              skillName={'Electron'}
              description={'能够使用Electron进行桌面端开发'}
            /> */}
          </div>
        </div>

        <div id="right-bottom" className={clsx('flex w-[68%] flex-col justify-between flex-grow')}>
          <div id="profile" className={clsx('flex flex-col gap-5')}>
            <Title>{'个人简介'}</Title>

            <p className="text-xl font-normal text-gray-600 dark:text-gray-200">
              {
                '刘真言，1999年生于湖北。本科毕业于浙江大学(建筑学)，研究生就读于同济大学(建筑学,2024年春毕业)。学习能力强，参与多个项目的开发，在两家公司担任过前端开发实习生工作。'
              }
            </p>
            {/* <p className="text-xl font-normal text-gray-600 dark:text-gray-200">
              {
                '本科期间曾担任社团负责人，具有较强的责任心；多次参与志愿活动并获得四星志愿者，拥有较强的同理心；多次团队建筑设计任务，具有良好的沟通能力与团队协作能力。'
              }
            </p> */}
          </div>

          <div id="project" className={clsx('flex flex-col gap-3')}>
            <Title>{'参与项目'}</Title>

            <ProjectItem
              time={'3.2023 - *8.2023'}
              name={'SuitNTie(适途咨询)'}
              description={'(下列功能已全部实现，简历投递时在进行最后优化。)'}
              stackList={['Umi', 'AntD', 'tailwindcss', 'TypeScript']}
              introduction={
                '本项目是面向国际高中的留学咨询平台。提供院校详实信息展示；职业兴趣测试；申请进度管理等功能。\n我负责该项目的前端实现，采用了Umi+AntD来搭建前端项目。项目中实现了基于GPT-4和院校数据库的机器人对话功能；基于AntD表格的分页筛选展示功能。采用umi内置的Hox来进行状态管理。'
              }
            />

            <ProjectItem
              time={'11.2022 - *4.2023'}
              name={'AutoReview'}
              // description={t('projects.item1.description')}
              stackList={[
                'React',
                'Radix-UI',
                'tailwindcss',
                'Three.js',
                'TypeScript',
                'Python',
                'Django',
                'MySQL'
              ]}
              introduction={
                '本项目是一个Web建筑图纸自动建模与规范审核工具。需实现图纸上传、用户项目管理、模型三维显示、自动审核规范等功能。\n我负责使用React框架配合Radix-UI组件库和tailwindcss进行页面布局，使用Three.js实现模型显示，使用Django和MySQL搭建RESTful API服务器提供用户和项目管理功能，通过Python实现图纸的三维建模。'
              }
            />

            <ProjectItem
              time={'3.2023 - 4.2023'}
              name={'ChatGlider'}
              // description={t('projects.item2.description')}
              stackList={['Electron', 'Vite', 'React', 'ChatGPT-API', 'TypeScript']}
              introduction={
                '本项目是一款桌面划词翻译软件。需实现自动翻译用户所选字段的功能。\n由我个人进行设计与开发，使用Electron构建桌面软件实现快捷的翻译使用体验，使用React构建UI，调用ChatGPT API实现翻译逻辑。'
              }
            />

            {/* <ProjectItem
              time={'2.2022 - 3.2022'}
              name={'Sketch2Param'}
              // description={t('projects.item3.description')!}
              stackList={['Pytorch', 'HTML', 'CSS', 'JavaScript', 'Three.js']}
              introduction={
                '本项目是一个Web端手绘草图参数化建模工具。需实现基于用户上传的草图预测参数化模型参数的功能。\n由本人主导完成项目编码工作，使用HTML\\CSS\\JS实现了用户界面，通过Pytorch搭建并训练了深度学习模型(Res-Net)以实现对参数化模型的预测，通过Three.js实现了参数化模型的显示并提供了用户调参接口。该项目入围了"极智未来·建筑黑客马拉松"竞赛，最终进入前八。'
              }
            /> */}
          </div>

          <div id="experiance" className={clsx('flex flex-col gap-5')}>
            <Title>{'实践经历'}</Title>

            <div className={clsx('flex flex-col flex-1 flex-grow gap-3')}>
              <ExperienceItem
                time="6.2021 - 9.2021"
                company={'群核科技(酷家乐)'}
                work={
                  '担任科研算法实习生，主要负责手绘草图三维重建相关文献阅读和复现。完成了两篇文章的算法复现，帮助部门总结了模型训练经验。此过程中我学习了使用pytorch进行深度学习训练，以及git\\linux等工作技能。'
                }
              />
              <ExperienceItem
                time="3.2023 - 7.2023"
                company={'上海西领留学咨询'}
                work={
                  '担任“SuitNTie(适途咨询)”项目中担任前端开发实习生岗位，独立负责了该项目的全部前端开发任务。与海外后端同事在线合作，出色地实现了该项目的前端页面和功能。'
                }
              />
              <ExperienceItem
                time="7.2023 - 8.2023"
                company={'平安科技'}
                work={
                  '担任"视觉算法团队"前端实习生。为PingAnGPT模型开发了流式响应的AI聊天窗口。开发了大模型评测系统的web页面以辅助算法工程师研发。'
                }
              />
              {/* <ExperienceItem
                time="9.2017 - 6.2019"
                company={'浙江大学'}
                work={'担任四星社团"校友联络协会"会长，有较强责任心与团队协作能力。'}
              /> */}
              {/* <ExperienceItem
                time="9.2016 - 6.2021"
                company={'浙江大学'}
                work={'参与志愿活动，荣获四星志愿者'}
              /> */}

              {/* <ExperienceItem
                time="1.2022 - 3.2022"
                company={'同济大学'}
                work={'极智未来·建筑黑客马拉松 前八'}
              /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default forwardRef(HanContent);
