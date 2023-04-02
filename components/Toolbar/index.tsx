import { AllHTMLAttributes } from 'react';
import * as ToggleUI from '@radix-ui/react-toggle';
import { clsx } from 'clsx';

interface ToolbarProps extends AllHTMLAttributes<HTMLDivElement> {
  pressed: boolean;
  onPressedChange: (pressed: boolean) => void;
}

export default function Toolbar({
  className,
  children,
  pressed,
  onPressedChange
}: ToolbarProps): JSX.Element {
  return (
    <ToggleUI.Root
      className={clsx('p-2 text-gray-600', className)}
      pressed={pressed}
      onPressedChange={onPressedChange}>
      {children}
    </ToggleUI.Root>
  );
}
