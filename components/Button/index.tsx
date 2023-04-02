import clsx from 'clsx';
import { AllHTMLAttributes, ForwardedRef, forwardRef } from 'react';

export enum ButtonType {
  primary = 'default',
  main = 'main',
  secondary = 'secondary',
  ghost = 'ghost'
}

interface ButtonProps extends AllHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonType;
}

function Button(
  { className, onClick, variant, children }: ButtonProps,
  ref: ForwardedRef<HTMLButtonElement>
) {
  return (
    <button
      className={clsx(
        'outline-none rounded-lg transition ease-in duration-150',
        variant === ButtonType.primary
          ? 'px-3 py-2 bg-primary text-sm hover:bg-primaryHover active:bg-primaryActive text-white'
          : '',
        variant === ButtonType.secondary
          ? clsx(
              'px-3 py-2 bg-gray-200 text-sm hover:bg-gray-300 active:bg-gray-400 text-gray-800',
              'dark:bg-gray-600 dark:hover:bg-gray-500 dark:active:bg-gray-400 dark:border-gray-700',
              'dark:text-gray-200'
            )
          : '',
        variant === ButtonType.main
          ? 'px-4 py-2 font-semibold bg-gradient-to-r from-green-500 to-primary opacity-80 hover:opacity-50 active:opacity-100 text-white'
          : '',
        variant === ButtonType.ghost
          ? 'px-2 py-2 bg-transparent text-gray-800 font-normal hover:bg-gray-100 active:bg-gray-200'
          : '',
        className
      )}
      onClick={onClick}>
      {children}
    </button>
  );
}

export default forwardRef(Button);
