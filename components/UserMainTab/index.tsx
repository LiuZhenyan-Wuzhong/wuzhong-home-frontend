import clsx from 'clsx';
import { AllHTMLAttributes, useState } from 'react';

const userMainTabState = {
    0: {
        id: 0,
        name: 'Articles',
        value: 'Articles',
    },
    1: {
        id: 1,
        name: 'About',
        value: 'About',
    },
};

interface UserMainTabItemProps extends AllHTMLAttributes<HTMLDivElement> {
    selected: boolean;
}

export function UserMainTabItem({
    className,
    children,
    selected,
}: UserMainTabItemProps) {
    // if(!children instanceof String)return null
    return (
        <div
            className={clsx(
                'py-3 px-4 text-gray-700 hover:bg-gray-100 duration-150 transition-colors ease-in',
                selected ? 'border-b border-gray-600' : ''
            )}>
            {children}
        </div>
    );
}

interface UserMainTabProps extends AllHTMLAttributes<HTMLDivElement> {}

export default function UserMainTab({ className }: UserMainTabProps) {
    const [selectedItemValue, setSelectedItemValue] = useState('Articles');
    return (
        <div className={clsx(className, 'sticky top-16')}>
            <div className="flex border-b bg-white">
                {Object.values(userMainTabState).map((tabItem, idx) => {
                    const selected = selectedItemValue === tabItem.value;
                    return (
                        <UserMainTabItem key={tabItem.id} selected={selected}>
                            {tabItem.name}
                        </UserMainTabItem>
                    );
                })}
            </div>
        </div>
    );
}
