import { useState } from 'react';
import * as SelectUI from '@radix-ui/react-select';
import ArrowIcon from '/public/icon/arrow.svg';
import CheckIcon from '/public/icon/check.svg';
import { clsx } from 'clsx';

// interface SelectItemProps extends AllHTMLAttributes<HTMLDivElement> {}

interface Desc {
  name: string;
  value: any;
}

const SelectItem = ({
  children,
  className,
  ...props
}: Parameters<typeof SelectUI.Item>[0]): JSX.Element => {
  return (
    <SelectUI.Item
      className={clsx(
        'w-28 p-1 flex gap-2 items-center relative rounded-lg outline-none border',
        'border-white hover:bg-gray-100 hover:border-gray-200 active:bg-gray-200 text-gray-700',
        'dark:border-gray-800 dark:hover:bg-gray-700  dark:active:bg-gray-600 dark:text-gray-200',
        'transition ease-in-out duration-200',
        className
      )}
      {...props}>
      <div className="w-4 h-full inline-flex items-center justify-center">
        <SelectUI.ItemIndicator className="w-full">
          <CheckIcon />
        </SelectUI.ItemIndicator>
      </div>

      <SelectUI.ItemText>{children}</SelectUI.ItemText>
    </SelectUI.Item>
  );
};

export default function Select({
  children,
  descMap,
  ...props
}: Parameters<typeof SelectUI.Root>[0] & {
  descMap: { [key: string]: Desc };
}): JSX.Element {
  // props
  const { value } = props;

  // state
  const [open, setOpen] = useState(false);

  return (
    <SelectUI.Root {...props} onOpenChange={(open): void => setOpen(open)}>
      <SelectUI.Trigger asChild className={clsx(open ? 'bg-gray-100' : '')}>
        {children ? (
          children
        ) : (
          <div
            className={clsx(
              'flex items-center justify-end gap-1 w-24 p-1 pl-3 pr-2 rounded-lg border',
              'transition-all ease-in-out duration-300',
              'hover:shadow-sm hover:border-gray-200 hover:bg-gray-100 border-gray-200',
              'dark:hover:border-gray-600 dark:hover:bg-gray-700 dark:border-gray-600 dark:focus:bg-gray-600'
            )}>
            {descMap[value as string].name}
            <div className="w-4 h-4">
              <ArrowIcon
                className={clsx(
                  'transition-all ease-in-out duration-300',
                  open ? 'rotate-180' : ''
                )}
              />
            </div>
          </div>
        )}
      </SelectUI.Trigger>

      <SelectUI.Portal>
        <SelectUI.Content
          position="popper"
          align="center"
          side="bottom"
          className={clsx(
            'p-2 overflow-hidden rounded-lg shadow-lg border',
            'transition ease-in-out duration-300 z-30',
            'bg-white',
            'dark:bg-gray-800 dark:border-gray-700'
          )}>
          {/* <SelectUI.ScrollUpButton className="rotate-180 flex items-center justify-center bg-white text-violet11 cursor-default">
            <ArrowIcon className="w-4 h-4" />
          </SelectUI.ScrollUpButton> */}
          <SelectUI.Viewport>
            <SelectUI.Group className="flex flex-col gap-1 max-h-32">
              {Object.values(descMap).map((val, idx) => (
                <SelectItem key={idx} value={val.value}>
                  {val.name}
                </SelectItem>
              ))}
            </SelectUI.Group>
          </SelectUI.Viewport>
          {/* <SelectUI.ScrollDownButton className="flex items-center justify-center bg-white text-violet11 cursor-default">
            <ArrowIcon className="w-4 h-4" />
          </SelectUI.ScrollDownButton> */}
        </SelectUI.Content>
      </SelectUI.Portal>
    </SelectUI.Root>
  );
}
