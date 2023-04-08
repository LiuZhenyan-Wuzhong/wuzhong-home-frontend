import { AllHTMLAttributes, ForwardedRef, forwardRef } from 'react';
import { Locale } from '../Navbar';
import HanContent from './components/hanContent';
import EnContent from './components/enContent';

interface ResumeProps extends AllHTMLAttributes<HTMLDivElement> {
  locale: Locale;
}

function Resume({ locale }: ResumeProps, ref: ForwardedRef<HTMLDivElement>): JSX.Element {
  return locale === Locale.han ? <HanContent ref={ref} /> : <EnContent ref={ref} />;
}

export default forwardRef(Resume);
