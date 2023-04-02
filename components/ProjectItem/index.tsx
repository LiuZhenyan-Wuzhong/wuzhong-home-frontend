import { AllHTMLAttributes } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Project } from '../../store/reducers/projects';
import Button, { ButtonType } from '../Button';
import Router from 'next/router';

interface ProejctItemProps extends AllHTMLAttributes<HTMLDivElement> {
  project: Project;
}

export default function ProejctItem({ className, project }: ProejctItemProps) {
  return (
    <div id="project-item" className="w-full">
      <div className="py-3 px-4 rounded-2xl">
        <div className="w-full flex flex-col md:flex-row gap-8 items-start justify-between">
          <div className="w-72 flex flex-col gap-1 items-start text-gray-800 shrink-0">
            <div className="flex gap-4 items-center dark:text-gray-200">
              <span className="font-bold text-lg">{project.name}</span>
              <span className="font-bold text-primary text-lg">{project.time}</span>
            </div>

            <div>
              <span className="font-normal text-gray-600 dark:text-gray-300">
                {project.description}
              </span>
            </div>

            <div className="flex flex-wrap text-gray-400 dark:text-gray-500 text-sm font-normal">
              {project.stackList.join(' \\ ')}
            </div>

            <Button
              onClick={() => Router.push(`/projects/${project._id}/`)}
              className="mt-4 font-bold text-lg"
              variant={ButtonType.primary}>
              Detail
            </Button>
          </div>

          <div className="flex gap-8 overflow-x-scroll">
            {project.imgUrls.slice(0, 3).map((imgUrl, idx) => (
              <div
                key={idx}
                className="w-64 h-40 relative overflow-hidden rounded-2xl border shrink-0 dark:border-gray-600">
                <Image
                  src={imgUrl || 'http://dummyimage.com/400x300'}
                  fill
                  className="flex-shrink-0 object-cover"
                  alt="Proejct Pic"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="mx-4 py-2 border-b dark:border-gray-700"></div>
    </div>
  );
}
