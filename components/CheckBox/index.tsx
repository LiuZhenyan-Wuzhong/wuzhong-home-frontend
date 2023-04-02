import { AllHTMLAttributes, FormEventHandler, useCallback } from 'react';
import * as Checkbox from '@radix-ui/react-checkbox';
import { CheckIcon } from '@radix-ui/react-icons';
import clsx from 'clsx';

interface CheckBoxProps extends AllHTMLAttributes<HTMLDivElement> {
  text: string;
  IndicatorClassName?: string;
  onCheckedChange?: (checked: Checkbox.CheckedState) => void;
}

export default function CheckBox({
  className,
  IndicatorClassName,
  value,
  defaultChecked,
  onCheckedChange,
  text,
  checked,
  ...props
}: CheckBoxProps) {
  return (
    <div className={clsx('flex items-center gap-2 py-2 px-2')} {...props}>
      <Checkbox.Root
        className={clsx(
          'group rounded-sm text-gray-600 w-4 h-4 border border-gray-600 inline-flex items-center justify-center',
          'overflow-hidden data-[state=checked]:border-primary'
        )}
        value={value}
        id={text}
        defaultChecked={defaultChecked}
        checked={checked}
        onCheckedChange={onCheckedChange}>
        <Checkbox.Indicator
          className={clsx(
            'w-full h-full',
            'group-data-[state=checked]:bg-primary group-data-[state=checked]:text-white',
            IndicatorClassName
          )}>
          <CheckIcon />
        </Checkbox.Indicator>
      </Checkbox.Root>
      {text === undefined ? undefined : (
        <label className="leading-none" htmlFor={text}>
          {text}
        </label>
      )}
    </div>
  );
}
