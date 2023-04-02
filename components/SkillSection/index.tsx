import { clsx } from 'clsx';
import { useTranslation } from 'next-i18next';
import { AllHTMLAttributes, ReactNode, useEffect, useRef } from 'react';
import * as echarts from 'echarts';

const skillGroupDatas: SkillGroupData[] = [
  {
    skillGroupName: '前端基础',
    skillItemDatas: [
      {
        skillName: 'HTML',
        skillRate: 80
      },
      {
        skillName: 'CSS',
        skillRate: 80
      },
      {
        skillName: 'JavaScript',
        skillRate: 80
      }
    ]
  },
  {
    skillGroupName: '前端框架',
    skillItemDatas: [
      {
        skillName: 'React',
        skillRate: 80
      },
      {
        skillName: 'Nextjs',
        skillRate: 70
      }
    ]
  },
  {
    skillGroupName: '代码规范',
    skillItemDatas: [
      {
        skillName: 'TypeScript',
        skillRate: 75
      },
      {
        skillName: 'eslint',
        skillRate: 60
      }
    ]
  },
  {
    skillGroupName: '构建工具',
    skillItemDatas: [
      {
        skillName: 'Vite',
        skillRate: 75
      }
    ]
  },
  {
    skillGroupName: '桌面开发',
    skillItemDatas: [
      {
        skillName: 'Electron',
        skillRate: 75
      }
    ]
  },
  {
    skillGroupName: '后端技术',
    skillItemDatas: [
      {
        skillName: 'Nodejs',
        skillRate: 80
      },
      {
        skillName: 'Python',
        skillRate: 85
      }
    ]
  },
  {
    skillGroupName: '设计基础',
    skillItemDatas: [
      {
        skillName: 'Photoshop',
        skillRate: 90
      },
      {
        skillName: 'Adobe Illustrator',
        skillRate: 85
      },
      {
        skillName: 'figma',
        skillRate: 70
      }
    ]
  }
];

export interface SkillItemData {
  skillName: string;
  skillRate: number;
}

interface SkillItemProps extends AllHTMLAttributes<HTMLDivElement> {
  skillName: string;
  skillRate: number;
}

function SkillItem({ className, skillName, skillRate }: SkillItemProps): JSX.Element {
  // ref
  const skillItemRef = useRef<HTMLDivElement>(null);

  const echartRef = useRef<echarts.ECharts | null>(null);

  const gaugeData = [{ value: skillRate }];

  const optionRef = useRef({
    series: [
      {
        type: 'gauge',
        startAngle: 90,
        endAngle: -270,
        radius: '100%',
        pointer: {
          show: false
        },
        progress: {
          show: true,
          roundCap: true,
          itemStyle: {
            color: '#0070f3'
          }
        },
        axisLine: {
          lineStyle: {
            width: 10,
            opacity: 0.2,
            color: [[1, '#bbbbbb']]
          }
        },
        axisTick: {
          show: false
        },
        axisLabel: {
          show: false
        },
        clockwise: false,
        splitLine: {
          show: false
        },
        darkMode: true,
        data: gaugeData,
        detail: {
          width: 20,
          height: 14,
          fontSize: 20,
          color: '#0070f3',
          offsetCenter: [0, 0],
          borderWidth: 0,
          formatter: '{value}%'
        }
      }
    ]
  });

  useEffect(() => {
    if (skillItemRef.current) {
      echartRef.current = echarts.init(skillItemRef.current);

      echartRef.current.setOption(optionRef.current);
    }
  }, [skillItemRef]);

  return (
    <div className="flex flex-col gap-2 items-center text-gray-600">
      <div ref={skillItemRef} className="w-24 h-24"></div>
      <div className="flex gap-2">
        <p className="font-normal text-lg">{skillName}</p>
      </div>
    </div>
  );
}

export interface SkillGroupData {
  skillGroupName: string;
  skillItemDatas: SkillItemData[];
}

interface SkillGroupProps extends AllHTMLAttributes<HTMLDivElement> {
  skillGroupData: SkillGroupData;
}

function SkillGroup({ className, skillGroupData }: SkillGroupProps): JSX.Element {
  return (
    <div
      className={clsx(
        className,
        'flex flex-col gap-4',
        'bg-opacity-70 rounded-3xl p-4 px-8 border',
        'bg-gray-50',
        'dark:bg-gray-700 dark:border-gray-600'
      )}>
      <p className="font-semibold text-lg">{skillGroupData.skillGroupName}</p>
      <div className="flex gap-10 justify-around">
        {skillGroupData.skillItemDatas.map((skillItemData, idx) => (
          <SkillItem
            key={idx}
            skillName={skillItemData.skillName}
            skillRate={skillItemData.skillRate}
          />
        ))}
      </div>
    </div>
  );
}

interface SkillSectionProps extends AllHTMLAttributes<HTMLDivElement> {}

export default function SkillSection({ className }: SkillSectionProps): JSX.Element {
  // hook
  const { t } = useTranslation('index');

  return (
    <div id="skills-section" className={clsx('w-full flex flex-col gap-6 items-center')}>
      <div className="w-full text-center text-4xl font-semibold text-gray-700 dark:text-gray-200">
        {t('skill.title')}
      </div>
      <div className="w-full text-gray-600 dark:text-gray-300">{t('skill.introduction')}</div>
      <div className="w-full flex flex-wrap gap-6">
        {skillGroupDatas.map((skillGroupData, idx) => (
          <SkillGroup key={idx} skillGroupData={skillGroupData} className="flex-grow" />
        ))}
      </div>
    </div>
  );
}
