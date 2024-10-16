import BirthdayDateSelect from '@/components/sign-up/birthday-date-select';
import Button from '@/components/button';
import Divider from '@/components/divider';
import Input, { InputType } from '@/components/input';
import Checkbox from '@/components/checkbox';

export default function SignUp() {
  const controls = [
    {
      id: 'user-email',
      type: 'email' as InputType,
      name: 'Email',
      placeholder: 'user@email.com'
    },
    {
      id: 'user-name',
      type: 'text' as InputType,
      name: 'Username',
      placeholder: 'andrew123'
    },
    {
      id: 'user-password',
      type: 'password' as InputType,
      name: 'Password',
      placeholder: '••••••••'
    }
  ];

  const acceptData = [
    {
      id: 'accept-policy',
      name: 'accept-policy',
      label: 'I want to receive personalized study reminders and gain access to exclusive discounts and giveaways'
    },
    {
      id: 'accept-reminders',
      name: 'accept-reminders',
      label: "I accept Quizlet's Terms of Service and Privacy Policy"
    }
  ];

  return (
    <div>
      <div className="mb-4 flex flex-col gap-4">
        <Button
          label="Continue with Google"
          iconSrc="/static/images/icon__google.svg"
          size="large"
          width="full"
          mode="outlined"
        />
        <Button
          label="Continue with Facebook"
          iconSrc="/static/images/icon__facebook_color.svg"
          size="large"
          width="full"
          mode="outlined"
        />
      </div>
      <Divider text="or email" />
      <form className="mt-4">
        <BirthdayDateSelect />
        <div className="flex flex-col gap-8">
          {controls.map(control => (
            <Input data={control} key={control.id} />
          ))}
        </div>
        <div className="mt-8 flex flex-col gap-6">
          {acceptData.map(data => (
            <Checkbox data={data} key={data.id} />
          ))}
        </div>
        <div className="mt-6 flex flex-col gap-4">
          <Button label="Sign up" size="large" width="full" />
          <Button label="Already have an account? Log in" size="large" width="full" mode="outlined" />
        </div>
      </form>
    </div>
  );
}
