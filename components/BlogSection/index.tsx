import { CheckedState } from '@radix-ui/react-checkbox';
import clsx from 'clsx';
import Router from 'next/router';
import {
  AllHTMLAttributes,
  createContext,
  MutableRefObject,
  useCallback,
  useRef,
  useState
} from 'react';
import { useTranslation } from 'react-i18next';
import ReactPaginate from 'react-paginate';
import { Article } from '../../store/reducers/articles';
import ArticleItem from '../ArticleItem';
import BlogHeader from '../BlogHeader';
import SubscribePanel from '../SubscribePanel';

export enum FilterType {
  category = 'category',
  tag = 'tag'
}

export enum FilterStandard {
  includes = 'includes',
  excludes = 'excludes',
  equals = 'equals'
}

export interface FilterTarget {
  _id: string;
  name: string;
  value: string;
}

export interface Filter {
  type: FilterType;
  filterStandard: FilterStandard;
  filterTargets: FilterTarget[];
}

export type FilterTargetMap = {
  [key in FilterType]: { [_id: string]: FilterTarget };
};

export interface BlogContextI {
  filterTargetMap: FilterTargetMap;
  changeNewFilter: any;
  newFilterRef: MutableRefObject<Filter | null>;
}

export const BlogContext = createContext<BlogContextI | null>(null);

interface BlogsProps extends AllHTMLAttributes<HTMLDivElement> {
  currentBlogs: Article[];
}

function Blogs({ className, currentBlogs }: BlogsProps): JSX.Element {
  return (
    <>{currentBlogs && currentBlogs.map((blog, idx) => <ArticleItem key={idx} article={blog} />)}</>
  );
}

interface BlogSectionProps extends AllHTMLAttributes<HTMLDivElement> {
  blogsPerPage: number;
  blogs: { [id: string]: Article };
}

export default function BlogSection({
  className,
  blogsPerPage,
  blogs
}: BlogSectionProps): JSX.Element {
  // translate
  const { t } = useTranslation('blogs');

  // state
  const [blogOffset, setBlogOffset] = useState(0);

  const [filterTargetMap, setFilterTargetMap] = useState<FilterTargetMap>({
    [FilterType.category]: {
      1: { _id: '1', name: 'cat1', value: 'cat1' },
      2: { _id: '2', name: 'cat2', value: 'cat2' },
      3: { _id: '3', name: 'cat3', value: 'cat3' },
      4: { _id: '4', name: 'cat4', value: 'cat4' }
    },
    [FilterType.tag]: {
      1: { _id: '1', name: 'tag1', value: 'tag1' },
      2: { _id: '2', name: 'tag2', value: 'tag2' },
      3: { _id: '3', name: 'tag3', value: 'tag3' },
      4: { _id: '4', name: 'tag4', value: 'tag4' }
    }
  });

  // props
  const endOffest = blogOffset + blogsPerPage;

  const blogList = Object.values(blogs);

  const currentBlogs = blogList.slice(blogOffset, endOffest);

  const pageCount = Math.ceil(blogList.length / blogsPerPage);

  // ref
  const newFilterRef = useRef<Filter | null>(null);

  // callback
  const handlePageClick = (selectedItem: { selected: number }) => {
    Router.push('#');

    const newOffset = (selectedItem.selected * blogsPerPage) % blogList.length;

    setBlogOffset(newOffset);
  };

  const changeNewFilter = useCallback(
    (checked: CheckedState, filterTarget: FilterTarget, type?: FilterType) => {
      console.log(1111);
      console.log(newFilterRef.current);

      if (newFilterRef.current) {
        newFilterRef.current.filterTargets.push(filterTarget);
      } else {
        if (checked && type) {
          newFilterRef.current = {
            type,
            filterStandard: FilterStandard.includes,
            filterTargets: [filterTarget]
          };
        }
      }
    },
    [newFilterRef]
  );

  return (
    <>
      <BlogContext.Provider value={{ filterTargetMap, changeNewFilter, newFilterRef }}>
        {/* <BlogHeader /> */}
        <div className="w-full h-8"></div>
        <Blogs currentBlogs={currentBlogs} />
        <SubscribePanel />
        <ReactPaginate
          breakLabel="..."
          nextLabel={t('blogs.next')}
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          previousLabel={t('blogs.previous')}
          renderOnZeroPageCount={null}
          pageLinkClassName={clsx(
            'border-y border-l px-3 h-10 flex items-center justify-center',
            'hover:bg-gray-100',
            'dark:hover:bg-gray-700 dark:border-gray-600 dark:text-gray-200'
          )}
          previousLinkClassName={clsx(
            'border-y border-l rounded-l h-10 flex items-center justify-center px-3',
            'hover:bg-gray-100',
            'dark:hover:bg-gray-700 dark:border-gray-600 dark:text-gray-200'
          )}
          breakLinkClassName={clsx(
            'border-y border-l px-3 h-10 flex items-center justify-center',
            'hover:bg-gray-100',
            'dark:hover:bg-gray-700 dark:border-gray-600 dark:text-gray-200'
          )}
          nextLinkClassName={clsx(
            'border rounded-r h-10 flex items-center justify-center px-3',
            'hover:bg-gray-100',
            'dark:hover:bg-gray-700 dark:border-gray-600 dark:text-gray-200'
          )}
          disabledLinkClassName={clsx(
            'h-10 flex items-center justify-center px-3 text-gray-500 dark:text-gray-500',
            'hover:bg-transparent dark:hover:bg-transparent cursor-default'
          )}
          containerClassName={clsx('flex items-center justify-center mx-4 py-4 pb-8')}
          activeLinkClassName={clsx('bg-primary text-white hover:bg-primary')}
        />
      </BlogContext.Provider>
    </>
  );
}
