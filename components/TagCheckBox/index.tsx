import { AllHTMLAttributes } from 'react';
import * as Checkbox from '@radix-ui/react-checkbox';
import { CheckIcon } from '@radix-ui/react-icons';
import { switchTagIds } from '../../store/actions/actions';
import store, { AppState } from '../../store/store';
import { useDispatch, useSelector } from 'react-redux';

interface TagCheckBoxProps extends AllHTMLAttributes<HTMLDivElement> {
  tagName: string;
  tagId: string;
}

export default function TagCheckBox({ className, tagName, tagId }: TagCheckBoxProps) {
  // state
  const curTags = useSelector((state: AppState) => state.articleState.curTags);

  // dispatch
  const dispatch = useDispatch();

  return (
    <div className="flex items-center gap-2">
      <Checkbox.Root
        id="CheckboxRoot"
        checked={curTags[tagId]}
        onCheckedChange={() => {
          switchTagIds(tagId).then((action) => dispatch(action));
        }}
        className="w-4 h-4 rounded-sm bg-white border flex items-center justify-center shadow-sm">
        <Checkbox.Indicator
          id="CheckboxIndicator"
          className="bg-primary w-4 h-4 rounded-sm flex items-center justify-center z-10">
          <CheckIcon className="text-white w-5 h-5" />
        </Checkbox.Indicator>
      </Checkbox.Root>
      <label className="Label" htmlFor="CheckboxRoot">
        {tagName}
      </label>
    </div>
  );
}
