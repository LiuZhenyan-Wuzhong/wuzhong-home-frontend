import clsx from 'clsx';
import { AllHTMLAttributes } from 'react';
import Image from 'next/image';
import { Project } from '../../store/reducers/projects';
import Link from 'next/link';
import Router from 'next/router';

interface ProjectCardProps extends AllHTMLAttributes<HTMLDivElement> {
  project: Project;
}

export default function ProjectCard({ className, project }: ProjectCardProps): JSX.Element {
  return (
    <div
      className={clsx(
        'w-64 h-52 flex-grow overflow-hidden rounded-3xl group',
        'flex flex-col items-center relative',
        className
      )}
      onClick={() => Router.push('/projects/' + project._id)}>
      <Image
        src={project.imgUrls[0]}
        fill
        alt={project.name}
        className="object-cover border rounded-3xl dark:border-gray-600"
      />

      <div
        className={clsx(
          'absolute p-4 z-20 w-full h-full',
          '-translate-y-full',
          'group-hover:bg-opacity-70 group-hover:translate-y-0',
          'transition-all ease-in-out duration-500'
        )}
        style={{
          background: 'linear-gradient(90.21deg, #007fff -5.91%, #3acbde 111.58%)',
          opacity: 0.75
        }}></div>

      <div
        className={clsx(
          'absolute p-4 z-20 w-full h-full flex flex-col items-center justify-center',
          'translate-y-1/4',
          'group-hover:bg-opacity-70 group-hover:translate-y-0',
          'transition-all ease-in-out duration-500'
        )}>
        <p
          className={clsx(
            'text-white font-bold text-xl',
            'text-opacity-0 group-hover:text-opacity-100',
            'transition-all ease-in-out duration-500'
          )}>
          {project.name}
        </p>
        <p
          className={clsx(
            'text-white font-normal Italics',
            'text-opacity-0 group-hover:text-opacity-100',
            'transition-all ease-in-out duration-500'
          )}>
          {project.description}
        </p>
      </div>
    </div>
  );
}
