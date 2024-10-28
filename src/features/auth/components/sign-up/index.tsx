import clsx from 'clsx';
import { useRef, useState } from 'react';

import Button from '@/components/buttons';
import SubmitButton from '@/components/buttons/submit-button';
import Checkbox from '@/components/checkbox';
import Divider from '@/components/divider';
import Input, { InputType } from '@/components/input';

import { signup } from '@/features/auth/actions/auth';
import BirthdayDateSelect from '@/features/auth/components/sign-up/birthday-date-select';
import { EmailSchema, PasswordSchema, SignUpFormSchema, User, UsernameSchema } from '@/features/auth/lib/definitions';

export default function SignUp({ switchTab }: { switchTab: (chosenTab: 'login' | 'signup') => void }) {
  const [error, setError] = useState<{ name: string; message?: string } | null>(null);
  const [errors, setErrors] = useState<(string | number | undefined | unknown)[]>([]);
  const [birthdayErrors, setBirthdayErrors] = useState<string[]>([]);
  const formRef = useRef<HTMLFormElement | null>(null);
  const controls = [
    {
      id: 'user-email',
      type: 'email' as InputType,
      name: 'email',
      label: 'email',
      placeholder: 'user@email.com'
    },
    {
      id: 'user-name',
      type: 'text' as InputType,
      name: 'username',
      label: 'username',
      placeholder: 'andrew123'
    },
    {
      id: 'user-password',
      type: 'password' as InputType,
      name: 'password',
      label: 'password',
      placeholder: '••••••••'
    }
  ];
  const acceptData = [
    {
      id: 'accept-reminders',
      name: 'accept-reminders',
      label: 'I want to receive personalized study reminders and gain access to exclusive discounts and giveaways'
    },
    {
      id: 'accept-policy',
      name: 'accept-policy',
      label: "I accept Quizlet's Terms of Service and Privacy Policy"
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
    }
  ];

  async function signUp(formData: FormData) {
    setErrors([]);

    const validatedFields = SignUpFormSchema.safeParse({
      email: formData.get('email'),
      username: formData.get('username'),
      password: formData.get('password'),
      policyAccepted: !!formData.get('accept-policy'),
      remindersAccepted: !!formData.get('accept-reminders'),
      month: formData.get('months'),
      day: formData.get('days'),
      year: formData.get('years')
    });

    if (!validatedFields.success) {
      setErrors(Object.keys(validatedFields.error.flatten().fieldErrors));

      return;
    }

    const response = await signup(validatedFields.data as User);

    if (response?.errors) {
      setErrors(Array.isArray(response.errors) ? Object.keys(errors) : [response.errors]);

      return;
    }
  }

  function validate({ name, value }: { name: string; value: string }) {
    const validateSchema = name === 'email' ? EmailSchema : name === 'password' ? PasswordSchema : UsernameSchema;
    const result = validateSchema.safeParse(value);

    setError(result.success ? null : { name, message: result.error?.issues?.at(0)?.message });
  }

  function validateBirthday() {
    if (formRef.current) {
      const emptyFields = [
        { name: 'months', value: formRef.current['months'].value },
        { name: 'days', value: formRef.current['days'].value },
        { name: 'years', value: formRef.current['years'].value }
      ]
        .filter(item => Number(item.value) === -1)
        .map(item => item.name);

      setBirthdayErrors(emptyFields);
    }
  }

  return (
    <div>
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
      <form ref={formRef} className="mt-4" action={signUp}>
        <BirthdayDateSelect onInputChange={validateBirthday} error={birthdayErrors} />
        <div className="flex flex-col gap-8">
          {controls.map(control => (
            <Input data={control} key={control.id} onInputBlur={validate} error={error} />
          ))}
        </div>
        <div className="mt-8 flex flex-col gap-6">
          {acceptData.map(data => (
            <Checkbox data={data} key={data.id} />
          ))}
        </div>
        {errors.length > 0 && (
          <div className="mt-8">
            <div className="rounded-lg border-2 border-error p-4 font-semibold text-error">
              <ul className={clsx(errors.length >= 2 && 'list-disc', 'ml-6')}>
                {errors.includes('policyAccepted') && (
                  <li>PLEASE ACCEPT QUIZLET&apos;S TERMS OF SERVICE AND PRIVACY POLICY TO CONTINUE.</li>
                )}
                {((errors.length === 1 && errors.at(0) !== 'policyAccepted') || errors.length >= 2) && (
                  <li>Oops, something went wrong 😅. Please try again.</li>
                )}
              </ul>
            </div>
          </div>
        )}
        <div className="mt-6 flex flex-col gap-4">
          <SubmitButton label="Sign up" size="large" width="full" />
          <Button
            label="Already have an account? Log in"
            size="large"
            width="full"
            mode="outlined"
            onClick={() => switchTab('login')}
          />
        </div>
      </form>
    </div>
  );
}
