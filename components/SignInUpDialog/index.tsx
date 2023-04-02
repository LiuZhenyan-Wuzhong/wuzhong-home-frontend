import {
    AllHTMLAttributes,
    forwardRef,
    useCallback,
    useMemo,
    useState,
} from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import Button, { ButtonType } from '../Button';
import CrossIcon from '/public/icon/cross.svg';
import SignInContent from './components/SignInContent';
import SignUpContent from './components/SignUpContent';
import { clsx } from 'clsx';

export enum SignInUpType {
    SignIn = 'InitType/SignIn',
    SignUp = 'InitType/SignUp',
}

interface SignInUpDialogProps extends AllHTMLAttributes<HTMLDivElement> {
    initType: SignInUpType;
    buttonVariant: ButtonType;
}

function SignInUpDialog({
    className,
    initType,
    buttonVariant,
}: SignInUpDialogProps) {
    // memo
    const buttonText = useMemo(() => {
        switch (initType) {
            case SignInUpType.SignIn: {
                return 'Sign In';
            }
            case SignInUpType.SignUp: {
                return 'Sign Up';
            }
            default: {
                return 'Sign In';
            }
        }
    }, [initType]);

    // state
    const [curType, setCurType] = useState<SignInUpType>(initType);

    const [modalOpen, setModalOpen] = useState<boolean>(false);

    // callback
    const closeModal = useCallback(() => {
        setModalOpen(false);
    }, []);

    return (
        <Dialog.Root open={modalOpen}>
            <Dialog.Trigger asChild>
                <Button
                    className="min-w-max"
                    variant={buttonVariant}
                    onClick={() => setModalOpen(true)}>
                    {buttonText}
                </Button>
            </Dialog.Trigger>
            <Dialog.Portal>
                <Dialog.Overlay
                    id="DialogOverlay"
                    className="bg-gray-700 z-20 bg-opacity-50 fixed inset-0 transition duration-150 ease-in-out"
                />
                <Dialog.Content
                    id="DialogContent"
                    className={clsx(
                        'outline-none z-20 bg-white rounded-lg shadow-md fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-150 ease-in-out'
                    )}
                    style={{ width: 420 }}>
                    {curType === SignInUpType.SignIn ? (
                        <SignInContent
                            className="m-auto"
                            setSignInUpType={setCurType}
                            closeModal={closeModal}
                        />
                    ) : (
                        <SignUpContent
                            className="m-auto"
                            setSignInUpType={setCurType}
                            closeModal={closeModal}
                        />
                    )}

                    <button
                        className="text-gray-500 hover:text-gray-700 h-6 w-6 absolute top-3 right-3 inline-flex items-center justify-center rounded-full"
                        id="CloseIconButton"
                        aria-label="Close"
                        onClick={() => setModalOpen(false)}>
                        <CrossIcon />
                    </button>
                </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root>
    );
}

export default SignInUpDialog;
