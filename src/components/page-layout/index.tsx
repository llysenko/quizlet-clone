'use client';

import { createContext, ReactNode } from 'react';
import { useFormState } from 'react-dom';
import { useRouter } from 'next/navigation';

import { useAuthDialogStore } from '@/store';

import Header from '@/components/header';

import { signIn, signOut, signUp } from '@/features/auth/actions/auth';
import AuthModal from '@/features/auth/components/auth-modal';
import { ActionState } from '@/features/auth/lib/types';

export const UserContext = createContext(null);
export default function PageLayout({ user, children }: { user: any; children: ReactNode }) {
  const router = useRouter();
  const { open, setOpen } = useAuthDialogStore();
  const [signInFormState, signInFormAction] = useFormState<ActionState, FormData>(handleSignIn, { errors: '' });
  const [signUpFormState, signUpFormAction] = useFormState<ActionState, FormData>(handleSignUp, { errors: '' });

  async function handleSignIn(prevState: ActionState, formData: FormData) {
    const response = await signIn(prevState, formData);

    if (response && !response.errors) {
      router.push('/latest');
      toggleMenu();
    }

    return response;
  }

  async function handleSignUp(prevState: ActionState, formData: FormData) {
    const response = await signUp(prevState, formData);

    if (!response.errors) {
      router.push('/latest');
      toggleMenu();
    }

    return response;
  }

  async function handleSignOut() {
    await signOut();
  }

  function toggleMenu() {
    setOpen(!open);

    document.body.classList.remove(open ? 'overflow-hidden' : 'overflow-auto');
    document.body.classList.add(open ? 'overflow-auto' : 'overflow-hidden');
  }

  return (
    <UserContext.Provider value={user}>
      <div className="wrapper">
        <div className="page-header">
          <Header signOut={handleSignOut} toggleMenu={toggleMenu} />
        </div>
        <main className="page-body">{children}</main>
        {open && (
          <AuthModal
            signInFormState={signInFormState}
            signUpFormState={signUpFormState}
            signInFormAction={signInFormAction}
            signUpFormAction={signUpFormAction}
            toggleMenu={toggleMenu}
          />
        )}
      </div>
    </UserContext.Provider>
  );
}
