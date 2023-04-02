import { AllHTMLAttributes } from 'react';
import SmallUserItem, { UserInfo } from '../SmallUserItem';

const userInfo: UserInfo = {
    avator: '/#',
    name: 'Wuzhong',
    status: 'PRO',
    url: '/#',
};

interface RecoCardProps extends AllHTMLAttributes<HTMLDivElement> {}

export default function RecoCard({ className }: RecoCardProps) {
    return (
        <div className="w-full flex justify-between items-start gap-4 hover:bg-gray-100 p-3 rounded-xl transition-colors duration-150 ease-in-out">
            <div className="flex flex-col gap-2">
                <SmallUserItem userInfo={userInfo} />
                <span className="text-sm font-semibold text-gray-800">
                    🔥 JavaScript Memory Management: How to Avoid Common Memory
                    Leaks and
                </span>
                <div className="flex gap-2">
                    <div className="w-12 h-12 bg-gray-400 flex-shrink-0"></div>
                    <div className="w-12 h-12 bg-gray-400 flex-shrink-0"></div>
                </div>
            </div>
        </div>
    );
}
