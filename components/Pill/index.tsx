import clsx from 'clsx';
import { AllHTMLAttributes } from 'react';

export enum PillType {
    primary = 'default',
    main = 'main',
    secondary = 'secondary',
    ghost = 'ghost',
}

interface PillProps extends AllHTMLAttributes<HTMLButtonElement> {
    variant?: PillType;
}

export default function Pill({
    className,
    onClick,
    variant,
    children,
}: PillProps) {
    return (
        <button
            className={clsx(
                'outline-none rounded-full transition ease-in duration-150',
                variant === PillType.primary || variant === undefined
                    ? 'px-3 py-1 bg-primary text-sm hover:bg-primaryHover active:bg-primaryActive text-white'
                    : '',
                variant === PillType.secondary
                    ? 'px-3 py-1 bg-gray-200 text-sm hover:bg-gray-300 active:bg-gray-400 text-gray-800'
                    : '',
                variant === PillType.main
                    ? 'px-4 py-2 font-semibold bg-gradient-to-r from-green-500 to-primary opacity-80 hover:opacity-50 active:opacity-100 text-white'
                    : '',
                variant === PillType.ghost
                    ? 'px-2 py-2 bg-transparent text-gray-800 font-normal hover:bg-gray-100 active:bg-gray-200'
                    : '',
                className
            )}
            onClick={onClick}>
            {children}
        </button>
    );
}
