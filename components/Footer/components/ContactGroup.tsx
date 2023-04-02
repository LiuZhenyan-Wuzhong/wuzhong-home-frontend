import { AllHTMLAttributes } from 'react';
import WuBlogLogo from '/public/logo.svg';
import GithubLogo from '/public/icon/github-mark.svg';
// import WhiteGithubLogo from '/public/icon/github-mark-white.svg';

interface ContactGroupProps extends AllHTMLAttributes<HTMLDivElement> {}

export default function ContactGroup({ className }: ContactGroupProps) {
  return (
    <>
      <div className="flex flex-col gap-3 w-60">
        <WuBlogLogo width="80" height="80" viewBox="0 0 54 46" />
        <div className="font-light text-sm leading-4">
          WuBlog is a platform for users all over the world to exchange hobbies.
        </div>
        <div className="flex">
          <div className="flex p-1 items-center hover:bg-gray-800 rounded-lg text-gray-800 hover:text-white transition-colors ease-in-out duration-150">
            <GithubLogo width="32" height="32" viewBox="0 0 100 100" fill="currentColor" />
          </div>
        </div>
      </div>
    </>
  );
}
