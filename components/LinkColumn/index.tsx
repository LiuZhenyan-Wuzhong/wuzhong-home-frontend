import Link from 'next/link';
import { AllHTMLAttributes } from 'react';

interface LinkColumnProps extends AllHTMLAttributes<HTMLDivElement> {
    linkColumn: any;
}

export default function LinkColumn({ className, linkColumn }: LinkColumnProps) {
    return (
        <div className="h-full flex flex-col gap-2">
            <div className="font-semibold text-sm">{linkColumn.title}</div>
            {linkColumn.subTitles.map(
                (subTitle: { name: string; url: string }, idx: number) => (
                    <div key={idx} className="font-light text-sm">
                        <Link href={subTitle.url}>{subTitle.name}</Link>
                    </div>
                )
            )}
        </div>
    );
}
