import clsx from 'clsx';
import { AllHTMLAttributes } from 'react';

interface ContainerProps extends AllHTMLAttributes<HTMLDivElement> {}

export default function Container({ className, children }: ContainerProps) {
    return (
        <div
            className={clsx(
                'relative m-auto sm:w-140 md:w-172 lg:w-236 xl:w-300',
                className
            )}>
            {children}
        </div>
    );
}
