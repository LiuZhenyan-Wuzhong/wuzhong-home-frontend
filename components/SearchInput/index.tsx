import clsx from 'clsx';
import { AllHTMLAttributes } from 'react';
import SearchIcon from '../../public/icon/search.svg';

interface SearchInput extends AllHTMLAttributes<HTMLInputElement> {}

export default function SearchInput({ onChange }: SearchInput) {
    return (
        <div
            className={clsx(
                'flex gap-2 bg-gray-200 rounded-md py-1 px-2 text-gray-500 items-center bg-opacity-50',
                'hover:bg-white hover:border',
                'trasition ease-in duration-150',
                'primary-shadow-onhover'
            )}>
            <div className="w-5 h-5">
                <SearchIcon />
            </div>
            <input
                type="text"
                className="outline-none h-6 bg-transparent font-normal text-sm"
                onChange={onChange}
            />
        </div>
    );
}
