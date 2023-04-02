import { AllHTMLAttributes } from 'react';

const categories = [
    { name: 'Developer', count: 30 },
    { name: 'Software', count: 20 },
    { name: 'Hacking', count: 11 },
    { name: 'Tools', count: 16 },
    { name: 'Books', count: 0 },
];

interface CatrgoryItemProps extends AllHTMLAttributes<HTMLDivElement> {
    name: string;
    count: number;
}

export function CatrgoryItem({ className, name, count }: CatrgoryItemProps) {
    return (
        <div className="py-1 cursor-default">
            <div className="px-3 py-1.5 flex gap-2 items-center rounded-md hover:bg-gray-100 transition ease-in-out duration-150">
                <div className="px-2 rounded-full font-semibold text-sm text-white bg-gray-400">
                    {count}
                </div>
                <div className="font-light text-sm text-gray-800">{name}</div>
            </div>
            <div className="border-b pt-1 mx-3"></div>
        </div>
    );
}

interface CategoryPanelProps extends AllHTMLAttributes<HTMLDivElement> {}

export default function CategoryPanel({ className }: CategoryPanelProps) {
    return (
        <div className="w-full">
            <div className="font-semibold text-xl text-gray-800 mb-2">
                Categories
            </div>
            <div className="flex flex-col group group-first:border-t">
                {categories.map((category, idx) => (
                    <CatrgoryItem
                        key={idx}
                        name={category.name}
                        count={category.count}
                    />
                ))}
            </div>
        </div>
    );
}
