import { clsx } from 'clsx';
import {
  AllHTMLAttributes,
  Dispatch,
  MouseEventHandler,
  SetStateAction,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState
} from 'react';
import { Category, Tag } from '../../store/reducers/articles';
import Button, { ButtonType } from '../Button';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import TagIcon from '/public/icon/tag.svg';
import CrossIcon from '/public/icon/cross.svg';
import ArrowIcon from '/public/icon/arrow.svg';
import CheckBox from '../CheckBox';
import { CheckedState } from '@radix-ui/react-checkbox';
import Select from '../Select';
import { Filter, FilterType, FilterStandard, BlogContext, BlogContextI } from '../BlogSection';

interface ClearFilterButtonProps extends AllHTMLAttributes<HTMLDivElement> {
  setFilters: Dispatch<SetStateAction<Filter[]>>;
}

function ClearFilterButton({ className, setFilters }: ClearFilterButtonProps): JSX.Element {
  // callback
  const handleClearFilter = useCallback(() => {
    setFilters([]);
  }, [setFilters]);

  return (
    <Button
      onClick={handleClearFilter}
      className={clsx(
        'border border-dashed p-1 leading-none rounded-md text-sm font-semibold bg-white',
        'hover:bg-gray-100 text-gray-400 border-gray-300',
        className
      )}>
      Clear filters
    </Button>
  );
}

interface AddFilterMenuProps extends AllHTMLAttributes<HTMLDivElement> {
  setFilters: Dispatch<SetStateAction<Filter[]>>;
}

function AddFilterMenu({ className, setFilters }: AddFilterMenuProps): JSX.Element {
  // context
  const { filterTargetMap, changeNewFilter, newFilterRef } = useContext(
    BlogContext as React.Context<BlogContextI>
  );

  // callback
  const handleSwitchFilterMenu = useCallback(
    (open: boolean) => {
      if (!open) {
        newFilterRef.current = null;
      }
    },
    [newFilterRef]
  );

  return (
    <DropdownMenu.Root onOpenChange={handleSwitchFilterMenu}>
      <DropdownMenu.Trigger asChild>
        <button
          className={clsx(
            'border border-dashed p-1 leading-none rounded-md text-sm font-semibold bg-white',
            'hover:bg-gray-100 text-gray-400 border-gray-300',
            className
          )}>
          Add filters
        </button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content
          className={clsx(
            'bg-white rounded-lg p-1 shadow-lg border will-change-[opacity,transform] animate-slideDownAndFade',
            'flex flex-col gap-1'
          )}
          style={{ fontSize: 14 }}
          side="bottom"
          sideOffset={5}>
          {Object.entries(filterTargetMap).map(([type, val], idx) => (
            <DropdownMenu.Sub key={idx}>
              <DropdownMenu.SubTrigger
                className={clsx(
                  'group leading-none text-gray-600 rounded items-center h-8 px-2 relative select-none outline-none',
                  'hover:bg-gray-200',
                  'flex items-center justify-between gap-4',
                  'transition-colors ease-in-out duration-300'
                )}>
                <div className="w-5 h-5 relative">
                  <TagIcon />
                </div>
                <div className="flex items-center">
                  {type}
                  <div
                    className={clsx(
                      'w-5 h-5 relative -right-1 text-gray-400',
                      'group-data-[state=open]:rotate-90 -rotate-90',
                      'transition-transform ease-in-out duration-300'
                    )}>
                    <ArrowIcon />
                  </div>
                </div>
              </DropdownMenu.SubTrigger>
              <DropdownMenu.Portal>
                <DropdownMenu.SubContent
                  className={clsx(
                    'min-w-[100px] bg-white rounded-lg p-1 shadow-lg border will-change-[opacity,transform] animate-slideDownAndFade',
                    'flex flex-col'
                  )}
                  sideOffset={6}>
                  {Object.values(val).map((filterTarget, idx) => (
                    <CheckBox
                      key={idx}
                      style={{ fontSize: 14 }}
                      text={filterTarget.name}
                      defaultChecked={false}
                      onCheckedChange={(checked) =>
                        changeNewFilter(checked, filterTarget, type as FilterType)
                      }></CheckBox>
                  ))}
                </DropdownMenu.SubContent>
              </DropdownMenu.Portal>
            </DropdownMenu.Sub>
          ))}
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
}

interface FilterItemProps extends AllHTMLAttributes<HTMLDivElement> {
  filter: Filter;
}

function FilterItem({ className, filter }: FilterItemProps): JSX.Element {
  // context
  const { filterTargetMap, changeNewFilter } = useContext(
    BlogContext as React.Context<BlogContextI>
  );

  // type
  const filterTypeDescMap = {
    [FilterType.category]: { name: 'category', value: FilterType.category },
    [FilterType.tag]: { name: 'tag', value: FilterType.tag }
  };

  // Filterstandard
  const filterStandardDescMap = {
    [FilterStandard.equals]: { name: 'equals', value: FilterStandard.equals },
    [FilterStandard.excludes]: { name: 'excludes', value: FilterStandard.excludes },
    [FilterStandard.includes]: { name: 'includes', value: FilterStandard.includes }
  };

  // FilterValueDescMap
  const filterValueDescMap = filterTargetMap[filter.type];

  Object.keys(filterValueDescMap).forEach((key, idx) => {
    Object.defineProperty(filterValueDescMap[key], 'value', {
      value: filterValueDescMap.name
    });
  });

  return (
    <div
      className={clsx(
        'border p-1 leading-none rounded-md text-sm font-semibold bg-white',
        'hover:bg-gray-100 text-gray-400 border-gray-300',
        className
      )}>
      <Select value={filter.type} descMap={filterTypeDescMap}></Select>
      <Select value={filter.filterStandard} descMap={filterStandardDescMap}></Select>
      {filter.filterStandard === FilterStandard.equals && (
        <Select value={filter.filterTargets[0].name} descMap={filterValueDescMap}></Select>
      )}
      {(filter.filterStandard === FilterStandard.excludes ||
        filter.filterStandard === FilterStandard.includes) &&
        filter.filterTargets.map((filterTarget, idx) => (
          <CheckBox
            key={idx}
            style={{ fontSize: 14 }}
            text={filterTarget.name}
            defaultChecked={false}
            onCheckedChange={(checked) => changeNewFilter(checked, filterTarget)}></CheckBox>
        ))}
    </div>
  );
}

interface HeaderProps extends AllHTMLAttributes<HTMLDivElement> {}

export default function Header({ className }: HeaderProps) {
  // state
  const [filters, setFilters] = useState<Filter[]>([]);

  return (
    <div className={clsx('w-full flex py-4 gap-4 items-start text-gray-800 border-b', className)}>
      {filters.length === 0 ? (
        <AddFilterMenu setFilters={setFilters} />
      ) : (
        <>
          <ClearFilterButton setFilters={setFilters} />
          {filters.map((filter, idx) => (
            <FilterItem key={idx} filter={filter} />
          ))}
        </>
      )}
    </div>
  );
}
