import Image from 'next/image';
import defaultAvator from '/public/dev.jpeg';
import { AllHTMLAttributes } from 'react';
import clsx from 'clsx';

interface AvatorProps extends AllHTMLAttributes<HTMLDivElement> {
    imgUrl?: string;
}

export default function Avator({ className, imgUrl }: AvatorProps) {
    return (
        <div className={clsx(className, 'relative')}>
            <Image
                className={clsx('rounded-md', 'object-cover', className)}
                src={imgUrl || 'http://dummyimage.com/32x32'}
                fill
                alt="avator"
            />
        </div>
    );
}
