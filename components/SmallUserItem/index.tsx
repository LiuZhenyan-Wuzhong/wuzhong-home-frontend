import { AllHTMLAttributes } from 'react';
import Image from 'next/image';
import clsx from 'clsx';

export interface UserInfo {
    avator: string;
    name: string;
    status: string;
    url: string;
}

interface SmallUserItemProps extends AllHTMLAttributes<HTMLDivElement> {
    userInfo: UserInfo;
}

export default function SmallUserItem({
    className,
    userInfo,
}: SmallUserItemProps) {
    return (
        <div
            className={clsx(
                'flex items-center gap-2 cursor-pointer min-w-min',
                className
            )}>
            <Image
                src={userInfo.avator}
                className="rounded-full bg-gray-200"
                width={24}
                height={24}
                style={{ objectFit: 'cover' }}
                alt="avator"></Image>
            <span className="font-thin text-sm text-gray-600">
                {userInfo.name}
            </span>
            <div className="px-1 py-0.5 bg-gray-300 rounded-md font-semibold text-xs text-white">
                {userInfo.status}
            </div>
        </div>
    );
}
