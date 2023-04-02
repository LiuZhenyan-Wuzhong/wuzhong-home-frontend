import { AllHTMLAttributes } from 'react';

interface CategoryTagProps extends AllHTMLAttributes<HTMLDivElement> {}

export default function CategoryTag({ className, children }: CategoryTagProps) {
    return (
        <div className="bg-primary py-1 px-3 flex items-center text-white rounded-full">
            <span className="font-semibold block" style={{ fontSize: 14 }}>
                {children}
            </span>
        </div>
    );
}
