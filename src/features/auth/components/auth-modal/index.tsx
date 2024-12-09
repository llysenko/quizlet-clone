import { useState } from 'react';
import Image from 'next/image';
import clsx from 'clsx';

import Heading1 from '@/components/headings/heading-1';
import IconButton from '@/components/icon-button';

import SignIn from '@/features/auth/components/sign-in';
import SignUp from '@/features/auth/components/sign-up';
import { AUTH_TABS } from '@/features/auth/lib/constants';
import { ActionState, AuthTab } from '@/features/auth/lib/types';

import styles from './styles.module.scss';

type Props = {
  signInFormState: ActionState;
  signUpFormState: ActionState;
  signInFormAction: (formData: FormData) => void;
  signUpFormAction: (formData: FormData) => void;
  toggleMenu: () => void;
};

export default function AuthModal({
  signInFormState,
  signUpFormState,
  signInFormAction,
  signUpFormAction,
  toggleMenu
}: Props) {
  const [activeTab, setActiveTab] = useState(AUTH_TABS.SIGN_IN);

  function switchTab(chosenTab: AuthTab) {
    setActiveTab(chosenTab);
  }

  return (
    <div className="fixed inset-0 z-[1000] flex h-full w-full flex-col items-stretch overflow-auto bg-white">
      <div className="flex">
        <div className={styles.background}>
          <div className={clsx(activeTab === AUTH_TABS.SIGN_IN && 'w-[18.75rem]', 'm-11')}>
            <Heading1>
              {activeTab === AUTH_TABS.SIGN_IN
                ? 'Smash sets in your sweats.'
                : 'The best way to study. Sign up for free.'}
            </Heading1>
          </div>
          <div className="p-11">
            <Image src="/images/logo-full.svg" alt="Quizlet" width={160} height={37} quality={75} />
          </div>
        </div>
        <div className="h-screen shrink grow basis-1/2 overflow-y-auto">
          <div className="m-4 flex justify-end">
            <IconButton
              borderless={true}
              iconSrc="/images/icon__close.svg"
              size="medium"
              title="Close menu"
              onClick={toggleMenu}
            />
          </div>
          <div className="m-auto flex max-w-[40rem] flex-col px-12 pb-10">
            <div className="mb-6 flex gap-8">
              <h3
                className={clsx(
                  activeTab === AUTH_TABS.SIGN_UP &&
                    'text-gunmetal underline decoration-phlox decoration-wavy underline-offset-8',
                  activeTab !== AUTH_TABS.SIGN_UP && 'text-dark-electric-blue',
                  'cursor-pointer',
                  'text-2xl',
                  'font-bold'
                )}
                onClick={() => switchTab(AUTH_TABS.SIGN_UP)}>
                Sign up
              </h3>
              <h3
                className={clsx(
                  activeTab === AUTH_TABS.SIGN_IN &&
                    'text-gunmetal underline decoration-phlox decoration-wavy underline-offset-8',
                  activeTab !== AUTH_TABS.SIGN_IN && 'text-dark-electric-blue',
                  'cursor-pointer',
                  'text-2xl',
                  'font-bold'
                )}
                onClick={() => switchTab(AUTH_TABS.SIGN_IN)}>
                Log in
              </h3>
            </div>
            {activeTab === AUTH_TABS.SIGN_UP && (
              <SignUp switchTab={switchTab} formAction={signUpFormAction} formState={signUpFormState} />
            )}
            {activeTab === AUTH_TABS.SIGN_IN && (
              <SignIn switchTab={switchTab} formAction={signInFormAction} formState={signInFormState} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
