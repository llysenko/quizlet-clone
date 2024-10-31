import clsx from 'clsx';
import { useRef, useState } from 'react';

import Button from '@/components/buttons';
import SubmitButton from '@/components/buttons/submit-button';
import Checkbox from '@/components/checkbox';
import Divider from '@/components/divider';
import Input, { InputType } from '@/components/input';

import BirthdayDateSelect from '@/features/auth/components/sign-up/birthday-date-select';

export default function SignUp({ switchTab, formAction, formState }: any) {
  const [birthdayErrors, setBirthdayErrors] = useState<string[]>([]);
  const formRef = useRef<HTMLFormElement | null>(null);
  const controls = [
    {
      id: 'userEmail',
      type: 'email' as InputType,
      name: 'email',
      label: 'email',
      placeholder: 'user@email.com'
    },
    {
      id: 'userName',
      type: 'text' as InputType,
      name: 'username',
      label: 'username',
      placeholder: 'andrew123'
    },
    {
      id: 'userPassword',
      type: 'password' as InputType,
      name: 'password',
      label: 'password',
      placeholder: '••••••••'
    }
  ];
  const checkboxes = [
    {
      id: 'remindersAccepted',
      name: 'remindersAccepted',
      label: 'I want to receive personalized study reminders and gain access to exclusive discounts and giveaways'
    },
    {
      id: 'policyAccepted',
      name: 'policyAccepted',
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

  function validateBirthday() {
    if (formRef.current) {
      const emptyFields = [
        { name: 'month', value: formRef.current['month'].value },
        { name: 'day', value: formRef.current['day'].value },
        { name: 'year', value: formRef.current['year'].value }
      ]
        .filter(item => Number(item.value) === -1)
        .map(item => item.name);

      setBirthdayErrors(emptyFields);
    }
  }

  function handleFormData(formData: FormData) {
    const day = formData.get('day');
    const month = formData.get('month');
    const year = formData.get('year');
    const birthday = day !== '-1' && month !== '-1' && year !== '-1' ? new Date(`${day}-${month}-${year}`) : null;

    const modifiedFormData = new FormData();

    formData.forEach((value, key) => modifiedFormData.append(key, value));

    if (birthday) modifiedFormData.set('birthday', birthday.toISOString());

    formAction(modifiedFormData);
  }

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
      <form ref={formRef} className="mt-4" action={formData => handleFormData(formData)}>
        <BirthdayDateSelect
          onInputChange={validateBirthday}
          error={birthdayErrors}
          errorMsg={formState.errors?.birthday}
        />
        <div className="flex flex-col gap-8">
          {controls.map(controlData => (
            <Input
              key={controlData.id}
              data={controlData}
              error={formState.errors ? formState.errors[controlData.name] : null}
            />
          ))}
        </div>
        <div className="mt-8 flex flex-col gap-6">
          {checkboxes.map(checkboxData => (
            <Checkbox
              data={checkboxData}
              key={checkboxData.id}
              error={formState.errors ? formState.errors[checkboxData.name] : null}
            />
          ))}
        </div>
        {formState.errors && (
          <div className="mt-8">
            <div className="rounded-lg border-2 border-error p-4 font-semibold text-error">
              <ul className={clsx(typeof formState.errors !== 'string' && 'list-disc', 'ml-6')}>
                {formState.errors.policyAccepted && (
                  <li>PLEASE ACCEPT QUIZLET&apos;S TERMS OF SERVICE AND PRIVACY POLICY TO CONTINUE.</li>
                )}
                {((Object.keys(formState.errors).length === 1 && !formState.errors.policyAccepted) ||
                  Object.keys(formState.errors).length >= 2) && (
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
    </>
  );
}
