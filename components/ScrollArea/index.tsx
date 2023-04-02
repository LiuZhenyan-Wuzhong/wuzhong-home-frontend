import { AllHTMLAttributes } from 'react';
import * as RadixScrollArea from '@radix-ui/react-scroll-area';
import clsx from 'clsx';

interface ScrollAreaProps extends AllHTMLAttributes<HTMLDivElement> {}

export default function ScrollArea({ className, children }: ScrollAreaProps) {
    return (
        <RadixScrollArea.Root className="relative w-full h-full">
            <RadixScrollArea.Viewport className="absolute inset-0 top-8 bg-gray-500">
                {children}
            </RadixScrollArea.Viewport>
            <RadixScrollArea.Scrollbar
                className="flex h-full w-2 touch-none select-none bg-transparent py-2 transition ease-in-out duration-100"
                orientation="vertical">
                <RadixScrollArea.Thumb className="relative h-6 w-full flex-1 rounded-full bg-gray-600" />
            </RadixScrollArea.Scrollbar>
            <RadixScrollArea.Scrollbar orientation="horizontal">
                <RadixScrollArea.Thumb />
            </RadixScrollArea.Scrollbar>
            <RadixScrollArea.Corner />
        </RadixScrollArea.Root>
    );
}
