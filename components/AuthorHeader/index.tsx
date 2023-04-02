import { AllHTMLAttributes } from 'react';

interface AuthorHeaderProps extends AllHTMLAttributes<HTMLDivElement> {
    author: any;
}

export default function AuthorHeader({ className, author }: AuthorHeaderProps) {
    return (
        <div className="flex items-start justify-between border-b py-2">
            <div className="flex items-center gap-4">
                <div className="rounded-full w-12 h-12 bg-gray-300"></div>
                <div className="py-2 flex flex-col justify-between">
                    <div className="flex items-center gap-2">
                        <span className="font-semibold text-gray-700">
                            {author.name}
                        </span>
                        <span className="rounded-md bg-gray-200 text-white text-sm font-semibold p-0.5">
                            PRO
                        </span>
                    </div>
                    <div className="flex font-normal text-gray-700 gap-2">
                        <span>{author.date}</span>
                        <span>·</span>
                        <span>{author.lastEditTime}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
