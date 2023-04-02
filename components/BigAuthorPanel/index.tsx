import clsx from 'clsx';
import { AllHTMLAttributes } from 'react';
import Pill from '../Pill';
import MessageIcon from '/public/icon/message.svg';

interface BigAuthorPanelProps extends AllHTMLAttributes<HTMLDivElement> {}

export default function BigAuthorPanel({ className }: BigAuthorPanelProps) {
    return (
        <div className={clsx('flex gap-4', className)}>
            <div className="rounded-full w-16 h-16 bg-gray-300 my-auto"></div>
            <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2">
                    <span className="font-semibold text-gray-600">WuZhong</span>
                    <span className="rounded-md bg-gray-300 text-white text-sm font-semibold p-0.5">
                        PRO
                    </span>
                </div>
                <div className="text-sm text-gray-700">{628} Followers</div>
                <div className="flex justify-between items-center">
                    <Pill>Follow</Pill>
                    <Pill>
                        <div className="w-5 h-5">
                            <MessageIcon />
                        </div>
                    </Pill>
                </div>
            </div>
        </div>
    );
}
