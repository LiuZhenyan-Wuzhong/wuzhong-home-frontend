import { AllHTMLAttributes, Dispatch, RefObject, SetStateAction, useCallback } from 'react';
import * as Toolbar from '@radix-ui/react-toolbar';
import DownloadLogo from '/public/icon/download.svg';
import ZoomoutLogo from '/public/icon/zoomout.svg';
import ZoominLogo from '/public/icon/zoomin.svg';
import clsx from 'clsx';

interface ResumeControllerProps extends AllHTMLAttributes<HTMLDivElement> {
  togglesChecked: string[];
  setTogglesChecked: Dispatch<SetStateAction<string[]>>;
  resumeRef: RefObject<HTMLDivElement>;
}

export default function ResumeController({
  className,
  togglesChecked,
  setTogglesChecked,
  resumeRef
}: ResumeControllerProps): JSX.Element {
  // callback
  const handleDownload = useCallback(() => {
    if (resumeRef.current) {
      const originalContents = document.body.innerHTML;

      resumeRef.current.classList.remove('scale-50');

      document.body.innerHTML = resumeRef.current.outerHTML;

      window.onafterprint = () => {
        document.body.innerHTML = originalContents;
      };

      window.print();
    }
  }, [resumeRef]);

  return (
    <Toolbar.Root
      className={clsx(
        className,
        'flex flex-col p-2 min-w-max rounded-md bg-white shadow-lg',
        'dark:bg-gray-700'
      )}
      aria-label="Formatting options">
      <Toolbar.ToggleGroup type="multiple" value={togglesChecked} onValueChange={setTogglesChecked}>
        <Toolbar.ToggleItem
          className={clsx(
            'flex items-center justify-center p-1 w-8 h-8',
            'flex-shrink-0 flex-grow-0 outline-none',
            'rounded text-gray-600 hover:bg-gray-100 data-[state=on]:bg-gray-200',
            'transition-all duration-300',
            'dark:text-gray-300 dark:hover:bg-gray-600 dark:data-[state=on]:bg-gray-600'
          )}
          value="zoomout"
          aria-label="Zoomout">
          <ZoominLogo />
        </Toolbar.ToggleItem>
      </Toolbar.ToggleGroup>

      <Toolbar.Separator className="h-[1px] bg-gray-300 dark:bg-gray-600 my-2" />

      <Toolbar.Button
        onClick={handleDownload}
        className={clsx(
          'flex items-center justify-center p-1 w-8 h-8',
          'flex-shrink-0 flex-grow-0 outline-none rounded',
          'text-gray-600 hover:bg-gray-100 active:bg-gray-200',
          'dark:text-gray-300 dark:hover:bg-gray-600 dark:dactive:bg-gray-600',
          'transition-all duration-300'
        )}>
        <DownloadLogo />
      </Toolbar.Button>
    </Toolbar.Root>
  );
}
