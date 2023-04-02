import { clsx } from 'clsx';
import { useTranslation } from 'next-i18next';
import { AllHTMLAttributes, Context, useContext } from 'react';
import { useSelector } from 'react-redux';
import { AppState } from '../../store/store';
import ProjectCard from '../ProjectCard';

interface ProjectSectionProps extends AllHTMLAttributes<HTMLDivElement> {}

export default function ProjectSection({ className }: ProjectSectionProps): JSX.Element {
  // state
  const projects = useSelector((state) => (state as AppState).projectState.projects);

  // hook
  const { t } = useTranslation('index');

  return (
    <div id="project-section" className={clsx('w-full', 'flex flex-col gap-10 items-center')}>
      <div className="w-full text-center text-4xl font-semibold text-gray-700 dark:text-gray-200">
        {t('project.title')}
      </div>
      <div className="flex flex-col sm:flex-row justify-around gap-6 w-full">
        {Object.values(projects).map((project, idx) => (
          <ProjectCard key={idx} project={project} />
        ))}
      </div>
    </div>
  );
}
