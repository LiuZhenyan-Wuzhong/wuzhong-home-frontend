import { AllHTMLAttributes } from 'react';
import Avator from '../../Avator';
import { setUser } from '../../../store/actions/actions';
import { useDispatch, useSelector } from 'react-redux';
import { User } from '../../../store/reducers/authUser';
import { ButtonType } from '../../Button';
import SignInUpDialog, { SignInUpType } from '../../SignInUpDialog';

interface UserInfoPanelProps extends AllHTMLAttributes<HTMLDivElement> {}

export default function UserInfoPanel({ className }: UserInfoPanelProps) {
  // store
  const curUser: User = useSelector((state) => (state as any).authUserState.user);

  return (
    <div className="flex gap-4 items-center">
      {curUser ? (
        <>
          <Avator className="w-8 h-8" imgUrl={curUser.avatorImgUrl} />
          <div className="font-medium text-sm text-gray-600">{curUser.name}</div>
        </>
      ) : (
        <>
          <SignInUpDialog initType={SignInUpType.SignIn} buttonVariant={ButtonType.ghost} />
          <SignInUpDialog initType={SignInUpType.SignUp} buttonVariant={ButtonType.primary} />
        </>
      )}
    </div>
  );
}
