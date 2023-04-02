import { AllHTMLAttributes } from 'react';

const tags = ['#javascript', '#react', '#vue', '#angular', '#nextjs'];

interface TagItemProps extends AllHTMLAttributes<HTMLDivElement> {
    name: string;
}

function TagItem({ className, name }: TagItemProps) {
    return (
        <div className="py-1 px-2 hover:bg-gray-200 cursor-default rounded-lg transition ease-in-out duration-150">
            <div className="font-light text-gray-800">{name}</div>
        </div>
    );
}

interface TagPanelProps extends AllHTMLAttributes<HTMLDivElement> {}

export default function TagPanel({ className }: TagPanelProps) {
    return (
        <div className="w-full">
            <div className="font-semibold text-xl mb-2">Popular tags</div>
            {tags.map((tag, idx) => (
                <TagItem key={idx} name={tag} />
            ))}
        </div>
    );
}
