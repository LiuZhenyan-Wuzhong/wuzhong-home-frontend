import { AllHTMLAttributes } from 'react';

interface TagProps extends AllHTMLAttributes<HTMLDivElement> {}

export default function TagItem({ className, children }: TagProps) {
    return (
        <div className="bg-gray-300 my-auto py-0.5 px-1 flex items-center rounded-md">
            <span className="font-border text-white text-xs">{children}</span>
        </div>
    );
}
