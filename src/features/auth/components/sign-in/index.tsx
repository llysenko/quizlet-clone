'use client';

import Button from '@/components/buttons';
import SubmitButton from '@/components/buttons/submit-button';
import Divider from '@/components/divider';
import Input, { InputType } from '@/components/input';

export default function SignIn({ switchTab, formState, formAction }: any) {
  const controls = [
    {
      id: 'userUniqueIdentifier',
      type: 'text' as InputType,
      name: 'userUniqueIdentifier',
      label: 'email',
      placeholder: 'Enter your email address or username'
    },
    {
      id: 'userPassword',
      type: 'password' as InputType,
      name: 'password',
      label: 'password',
      placeholder: 'Enter your password'
    }
  ];
  const authProviders = [
    {
      name: 'google',
      label: 'Continue with Google',
      iconSrc: 'icon__google.svg'
    },
    {
      name: 'facebook',
      label: 'Continue with Facebook',
      iconSrc: 'icon__facebook_color.svg'
    },
    {
      name: 'apple',
      label: 'Continue with Apple',
      iconSrc: 'icon__apple.svg'
    }
  ];

  return (
    <>
      <div className="mb-4 flex flex-col gap-4">
        {authProviders.map(provider => (
          <Button
            key={provider.name}
            label={provider.label}
            iconSrc={`/static/images/${provider.iconSrc}`}
            size="large"
            width="full"
            mode="outlined"
          />
        ))}
      </div>
      <Divider text="or email" />
      <form action={formData => formAction(formData)}>
        <div className="mt-6 flex flex-col gap-8">
          {controls.map(control => (
            <Input data={control} key={control.id} />
          ))}
        </div>
        <p className="mt-6 text-sm text-gray-600">
          By clicking Log in, you accept Quizlet&apos;s <b>Terms of Service</b> and <b>Privacy Policy</b>
        </p>
        {formState.errors && (
          <div className="mt-8">
            <div className="rounded-lg border-2 border-error p-4 font-semibold text-error">
              <p>
                {typeof formState.errors === 'string'
                  ? Object.values(formState.errors)
                  : (Object.values(formState.errors).at(0) as string)}
              </p>
            </div>
          </div>
        )}
        <div className="mt-6 flex flex-col gap-4">
          <SubmitButton label="Log in" size="large" width="full" />
          <Button
            label="New to Quizlet? Create an account"
            size="large"
            width="full"
            mode="outlined"
            onClick={() => switchTab('signup')}
          />
          <Button label="Log in with magic link" size="large" width="full" borderless={true} />
        </div>
      </form>
    </>
  );
}
