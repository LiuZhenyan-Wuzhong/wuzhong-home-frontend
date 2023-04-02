import { AllHTMLAttributes } from 'react';
import * as RadioGroup from '@radix-ui/react-radio-group';
import styles from '../../styles/CategoryRadio.module.css';

interface CategoryRadioProps extends AllHTMLAttributes<HTMLDivElement> {
    categoryName: string;
    categoryId: string;
}

export default function CategoryRadio({
    className,
    categoryName,
    categoryId,
}: CategoryRadioProps) {
    return (
        <div className="flex items-center gap-2">
            <RadioGroup.Item
                className="RadioGroupItem flex items-center justify-center border bg-white w-5 h-5 rounded-full shadow-sm hover:bg-gray-100"
                value={categoryId}
                id={categoryId}>
                <RadioGroup.Indicator className={styles.RadioGroupIndicator} />
            </RadioGroup.Item>
            <label className="Label" htmlFor={categoryId}>
                {categoryName}
            </label>
        </div>
    );
}
