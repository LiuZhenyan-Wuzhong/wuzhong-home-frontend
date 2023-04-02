import clsx from 'clsx';
import { AllHTMLAttributes, useState } from 'react';
import Image from 'next/image';

interface UserMainBGProps extends AllHTMLAttributes<HTMLDivElement> {
    src?: string;
}

export default function UserMainBG({ className, src }: UserMainBGProps) {
    const [expandBG, setExpandBG] = useState<boolean>(false);

    return (
        <div
            className={clsx(
                'w-full overflow-hidden relative',
                'transition-all duration-300 ease-in-out',
                'hover:h-140 h-80',
                'delay-100',
                className
            )}
            onClick={() => setExpandBG((prev) => !prev)}>
            {src ? (
                <Image
                    src={src}
                    className="object-cover px-4"
                    fill
                    alt="bg"></Image>
            ) : (
                <div className="bg-white h-full w-full"></div>
            )}
        </div>
    );
}
