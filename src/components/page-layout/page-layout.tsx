'use client';

import Image from 'next/image';
import clsx from 'clsx';
import { useState } from 'react';

import Footer from '@/components/footer';
import Header from '@/components/header';
import IconButton from '@/components/icon-button';
import LogIn from '@/components/log-in';
import SignUp from '@/components/sign-up';

export default function PageLayout({ children }: any) {
  const [open, setOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('login');

  function toggleMenu() {
    setOpen(!open);

    document.body.classList.remove(open ? 'overflow-hidden' : 'overflow-auto');
    document.body.classList.add(open ? 'overflow-auto' : 'overflow-hidden');
  }

  function switchTab(chosenTab: 'signup' | 'login') {
    setActiveTab(chosenTab);
  }

  return (
    <div className="wrapper">
      <div className="page-header">
        <Header toggleMenu={toggleMenu} />
      </div>
      <main className="page-body">{children}</main>
      <div className="page-footer">
        <Footer />
      </div>
      {open && (
        <div className="fixed inset-0 z-[1000] flex h-full w-full flex-col items-stretch overflow-auto bg-white">
          <div className="flex">
            <div className="background hidden h-screen flex-col justify-between lg:flex">
              <div className={clsx(activeTab === 'login' && 'w-[18.75rem]', 'm-11')}>
                <h1 className="text-heading-1 font-bold">
                  {activeTab === 'login' ? 'Smash sets in your sweats.' : 'The best way to study. Sign up for free.'}
                </h1>
              </div>
              <div className="p-11">
                <Image src="/static/images/logo-full.svg" alt="Quizlet" width={160} height={37} />
              </div>
            </div>
            <div className="h-screen shrink grow basis-1/2 overflow-y-auto">
              <div className="m-4 flex justify-end">
                <IconButton
                  size="medium"
                  iconSrc="/static/images/icon__close.svg"
                  title="Close menu"
                  borderless={true}
                  onClick={toggleMenu}
                />
              </div>
              <div className="m-auto flex max-w-[40rem] flex-col px-12 pb-10">
                <div className="mb-6 flex gap-8">
                  <h3
                    className={clsx(
                      activeTab === 'signup' &&
                        'text-text-color-h underline decoration-magenta decoration-wavy underline-offset-8',
                      activeTab !== 'signup' && 'text-gray-600',
                      'cursor-pointer',
                      'text-2xl',
                      'font-bold'
                    )}
                    onClick={() => switchTab('signup')}>
                    Sign up
                  </h3>
                  <h3
                    className={clsx(
                      activeTab === 'login' &&
                        'text-text-color-h underline decoration-magenta decoration-wavy underline-offset-8',
                      activeTab !== 'login' && 'text-gray-600',
                      'cursor-pointer',
                      'text-2xl',
                      'font-bold'
                    )}
                    onClick={() => switchTab('login')}>
                    Log in
                  </h3>
                </div>
                {activeTab === 'signup' && <SignUp />}
                {activeTab === 'login' && <LogIn />}
              </div>
            </div>
          </div>

          <style jsx>{`
            .background {
              background-image: url('/static/images/bg-auth.png');
              background-repeat: no-repeat;
              background-size: cover;
              background-position: 50%;
              flex-grow: 1;
              flex-shrink: 1;
              flex-basis: 50%;
            }
          `}</style>
        </div>
      )}
    </div>
  );
}
