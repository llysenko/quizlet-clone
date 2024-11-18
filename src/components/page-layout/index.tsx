'use client';

import { useRouter } from 'next/navigation';
import { createContext, ReactNode, useEffect, useState } from 'react';
import { useFormState } from 'react-dom';

import { useAuthDialogStore } from '@/store';

import Header from '@/components/header';

import { signIn, signOut, signUp } from '@/features/auth/actions/auth';
import AuthModal from '@/features/auth/components/auth-modal';
import { ActionState } from '@/features/auth/lib/types';

export const UserContext = createContext(null);
export default function PageLayout({ user, children }: { user: any; children: ReactNode }) {
  const router = useRouter();
  const { open, setOpen } = useAuthDialogStore();
  const [signInFormState, signInFormAction] = useFormState<ActionState, FormData>(signIn, { errors: '' });
  const [signUpFormState, signUpFormAction] = useFormState<ActionState, FormData>(signUp, { errors: '' });

  async function handleSignOut() {
    await signOut();
  }

  function toggleMenu() {
    setOpen(!open);

    document.body.classList.remove(open ? 'overflow-hidden' : 'overflow-auto');
    document.body.classList.add(open ? 'overflow-auto' : 'overflow-hidden');
  }

  useEffect(() => {
    if (signInFormState.token) {
      toggleMenu();
      router.push('/latest');
    }
  }, [signInFormState.token]);

  useEffect(() => {
    if (signUpFormState.token) {
      toggleMenu();
      router.push('/latest');
    }
  }, [signUpFormState.token]);

  return (
    <UserContext.Provider value={user}>
      <div className="wrapper">
        <div className="page-header">
          <Header signOut={handleSignOut} toggleMenu={toggleMenu} />
        </div>
        <main className="page-body">{children}</main>
        {open && (
          <AuthModal
            signInFormAction={signInFormAction}
            signInFormState={signInFormState}
            signUpFormAction={signUpFormAction}
            signUpFormState={signUpFormState}
            toggleMenu={toggleMenu}
          />
        )}
      </div>
    </UserContext.Provider>
  );
}
