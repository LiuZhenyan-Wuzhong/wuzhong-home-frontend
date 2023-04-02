import { clsx } from 'clsx';
import { AllHTMLAttributes, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Button, { ButtonType } from '../Button';
import * as Dialog from '@radix-ui/react-dialog';
import CrossIcon from '/public/icon/cross.svg';

interface SubscribeDialogProps extends AllHTMLAttributes<HTMLDivElement> {}

function SubscribeDialog({ className }: SubscribeDialogProps): JSX.Element {
  // state
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  return (
    <Dialog.Root open={modalOpen}>
      <Dialog.Trigger asChild>
        <Button
          className="min-w-max text-[16px] font-bold"
          variant={ButtonType.primary}
          onClick={() => setModalOpen(true)}>
          Subscribe Now
          {/* {t('blogs.subscribe.buttonText')} */}
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

interface SubscribePanelProps extends AllHTMLAttributes<HTMLDivElement> {}

export default function SubscribePanel({ className }: SubscribePanelProps) {
  // translation
  const { t } = useTranslation('blogs');

  return (
    <div>
      <div className={clsx('w-full h-24 flex items-center justify-between p-4 gap-6', className)}>
        <div className="font-light text-sm text-gray-800 dark:text-gray-200">
          {/* {t('blogs.subscribe.text')} */}
          Subscribe for free to receive update pushes as soon as possible
        </div>
        <SubscribeDialog />
      </div>
      <div className="mx-4 h-4 border-b dark:border-gray-700"></div>
    </div>
  );
}
