import clsx from 'clsx';
import { AllHTMLAttributes } from 'react';

interface SideBarProps extends AllHTMLAttributes<HTMLDivElement> {}

export default function SideBar({ className, children }: SideBarProps) {
    return (
        <div
            className={clsx('py-8 pb-12 flex-shrink-0 border-l', className)}
            style={{ width: 324 }}>
            {children}
        </div>
    );
}
