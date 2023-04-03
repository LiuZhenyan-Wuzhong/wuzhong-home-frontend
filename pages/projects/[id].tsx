import Head from 'next/head';
import { useRouter } from 'next/router';
import Container from '../../components/Container';

import { AllHTMLAttributes, useMemo, useRef } from 'react';
import { Article } from '../../store/reducers/articles';
import Image from 'next/image';
import { useSelector } from 'react-redux';
import { AppState } from '../../store/store';
import { clsx } from 'clsx';

const author = {
  name: 'Wuzhong',
  date: 'Jul 7 ,2022',
  lastEditTime: '3 min read'
};

interface DetailProjectPageProps extends AllHTMLAttributes<HTMLDivElement> {
  article: Article;
}

export default function DetailProjectPage({}: DetailProjectPageProps) {
  // router
  const router = useRouter();

  // store
  const projects = useSelector((state: AppState) => state.projectState.projects);

  // memo
  const settings = useMemo(
    () => ({
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    }),
    []
  );

  if (router.query.id instanceof Array || router.query.id === undefined) {
    router.push('/404');
    return null;
  }

  const project = projects[router.query.id as string];

  return (
    <>
      <Head>
        <title>WuBlog Projects</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="dark:bg-gray-800">
        <div className="h-24 w-full bg-transparent"></div>
        <Container className="flex flex-col items-center justify-center gap-4 flex-grow">
          <div id="project-item" className="py-12 px-4 rounded-2xl w-full">
            <div className="w-full flex flex-col md:flex-row gap-8 items-start justify-between">
              <div className="w-1/3 flex flex-grow-0 flex-col gap-1 items-start text-gray-800 shrink-0">
                <div className="flex gap-4 items-center dark:text-gray-200">
                  <span className="font-bold text-lg">{project.name}</span>
                  <span className="font-bold text-primary text-lg">{project.time}</span>
                </div>

                <div className="flex flex-wrap text-gray-400 dark:text-gray-500 text-sm font-normal">
                  {project.stackList.join(' \\ ')}
                </div>

                <div className="font-normal text-gray-600 dark:text-gray-300">
                  {project.introduction}
                </div>

                <div className="flex gap-2">
                  link:
                  <a
                    href={project.link?.value}
                    className="font-normal text-gray-600 dark:text-gray-300 underline">
                    {project.link?.desc}
                  </a>
                </div>
              </div>

              <div className="w-2/3 flex flex-col gap-8 flex-wrap flex-grow-0">
                {project.videoUrls &&
                  project.videoUrls.map((videoUrl, idx) => (
                    <div
                      key={idx}
                      className="w-full h-96 relative overflow-hidden rounded-2xl border shrink-0 dark:border-gray-600">
                      <video className="w-full h-full" controls>
                        <source
                          src={videoUrl}
                          type={`video/${videoUrl.split('.')[videoUrl.split('.').length - 1]}`}
                        />
                      </video>
                    </div>
                  ))}

                {project.gifUrls[0] && (
                  <div className="w-full h-96 relative overflow-hidden rounded-2xl border shrink-0 dark:border-gray-600">
                    <Image
                      src={project.gifUrls[0]}
                      fill
                      className="flex-shrink-0 object-cover"
                      alt="Proejct Pic"
                    />
                  </div>
                )}
                {project.imgUrls.map((imgUrl, idx) => (
                  <div
                    key={idx}
                    className="w-full h-96 relative overflow-hidden rounded-2xl border shrink-0 dark:border-gray-600">
                    <Image
                      src={imgUrl}
                      fill
                      className="flex-shrink-0 object-cover"
                      alt="Proejct Pic"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </main>
    </>
  );
}
