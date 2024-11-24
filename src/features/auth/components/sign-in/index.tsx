import Button from '@/components/buttons';
import SubmitButton from '@/components/buttons/submit-button';
import Divider from '@/components/divider';
import Error from '@/components/error';
import Input from '@/components/input';

import { AUTH_TABS, SIGN_IN_AUTH_PROVIDERS, SIGN_IN_CONTROLS } from '@/features/auth/lib/constants';
import { AuthProps } from '@/features/auth/lib/types';

export default function SignIn({ switchTab, formState, formAction }: AuthProps) {
  return (
    <>
      <div className="mb-4 flex flex-col gap-4">
        {SIGN_IN_AUTH_PROVIDERS.map(provider => (
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
      <Divider text="or email" className="mt-6" />
      <form action={formData => formAction(formData)}>
        <div className="mt-6 flex flex-col gap-8">
          {SIGN_IN_CONTROLS.map(control => (
            <Input data={control} key={control.id} />
          ))}
        </div>
        <p className="mt-6 text-sm text-dark-electric-blue">
          By clicking Log in, you accept Quizlet&apos;s <b>Terms of Service</b> and <b>Privacy Policy</b>
        </p>
        {formState?.errors && (
          <Error className="mt-8">
            {typeof formState.errors === 'string'
              ? Object.values(formState.errors)
              : (Object.values(formState.errors).at(0) as string)}
          </Error>
        )}
        <div className="mt-6 flex flex-col gap-4">
          <SubmitButton label="Log in" size="large" width="full" />
          <Button
            label="New to Quizlet? Create an account"
            size="large"
            width="full"
            mode="outlined"
            onClick={() => switchTab(AUTH_TABS.SIGN_UP)}
          />
          <Button label="Log in with magic link" size="large" width="full" borderless={true} />
        </div>
      </form>
    </>
  );
}
