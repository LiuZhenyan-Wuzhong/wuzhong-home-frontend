import { AllHTMLAttributes } from 'react';
import { Article } from '../../store/reducers/articles';
import CategoryTag from '../CategoryTag';
import TagItem from '../TagItem';
import Image from 'next/image';
import { AppState } from '../../store/store';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import { User } from '../../store/reducers/authUser';
import { clsx } from 'clsx';

interface UserItemProps extends AllHTMLAttributes<HTMLDivElement> {
  user: User;
}

function UserItem({ className, user }: UserItemProps) {
  return (
    <div className="flex gap-4 items-center">
      <div className="w-10 h-10 rounded-full relative">
        <Image
          className="object-cover rounded-full"
          src={user.avatorImgUrl || 'http://dummyimage.com/32x32'}
          fill
          alt="avator"
        />
      </div>
      <div className="flex gap-2 items-center">
        <span className="font-light" style={{ fontSize: 18 }}>
          {user.name}
        </span>
        {/* <div className="px-1 py-0.5 font-semibold text-white rounded-md bg-gray-200">
					{user.name}
                </div> */}
      </div>
    </div>
  );
}

interface ArticleItemProps extends AllHTMLAttributes<HTMLDivElement> {
  article: Article;
}

export default function ArticleItem({ className, article }: ArticleItemProps) {
  const categories = useSelector((state: AppState) => state.articleState.categories);
  const tags = useSelector((state: AppState) => state.articleState.tags);

  return (
    <Link href={`/articles/${article._id}/`}>
      <div id="article-item" className="w-full cursor-pointer dark:text-gray-200">
        <div
          className={clsx(
            'py-3 px-4 rounded-2xl transition-colors duration-200 ease-in-out',
            'hover:bg-gray-100',
            'dark:hover:bg-gray-700'
          )}>
          <div className="w-full flex flex-col xl:flex-row gap-8 items-center justify-between">
            <div className="flex flex-col gap-4 items-start text-gray-700 dark:text-gray-200">
              <div className="flex items-center justify-between w-full">
                {article.author && <UserItem user={article.author as User} />}
                {article.category && categories[article.category] ? (
                  <CategoryTag>{categories[article.category].name}</CategoryTag>
                ) : null}
              </div>

              <div>
                <span className="font-semibold" style={{ fontSize: 20 }}>
                  {article.title}
                </span>
              </div>

              <div>
                <span className="font-light">{article.description}</span>
              </div>

              <div className="flex w-full gap-4 items-center justify-between">
                <div className="flex gap-4">
                  <div className="flex gap-1">
                    {article.tags &&
                      article.tags.map((tagId, idx) => {
                        if (tags[tagId]) {
                          return <TagItem key={idx}>{tags[tagId].name}</TagItem>;
                        } else {
                          return null;
                        }
                      })}
                  </div>
                </div>

                <div className="font-thin">2022-03-02</div>
              </div>
            </div>

            <div className="w-64 h-40 relative overflow-hidden rounded-2xl border">
              <Image
                src={article.feature_img || 'http://dummyimage.com/400x300'}
                fill
                className="flex-shrink-0 object-cover"
                alt="Article Pic"
              />
            </div>
          </div>
        </div>
        <div className="mx-4 py-2 border-b dark:border-gray-700"></div>
      </div>
    </Link>
  );
}
