import Button from '@/components/button';
import Divider from '@/components/divider';
import Input, { InputType } from '@/components/input';

export default function LogIn() {
  const controls = [
    {
      id: 'user-email',
      type: 'email' as InputType,
      name: 'Email',
      placeholder: 'Enter your email address or username'
    },
    {
      id: 'user-password',
      type: 'password' as InputType,
      name: 'Password',
      placeholder: 'Enter your password'
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
        <Button
          label="Continue with Apple"
          iconSrc="/static/images/icon__apple.svg"
          size="large"
          width="full"
          mode="outlined"
        />
      </div>
      <Divider text="or email" />
      <form>
        <div className="mt-6 flex flex-col gap-8">
          {controls.map(control => (
            <Input data={control} key={control.id} />
          ))}
        </div>
        <p className="mt-6 text-sm text-gray-600">
          By clicking Log in, you accept Quizlet&apos;s <b>Terms of Service</b> and <b>Privacy Policy</b>
        </p>
        <div className="mt-6 flex flex-col gap-4">
          <Button label="Log in" size="large" width="full" />
          <Button label="New to Quizlet? Create an account" size="large" width="full" mode="outlined" />
          <Button label="Log in with magic link" size="large" width="full" borderless={true} />
        </div>
      </form>
    </div>
  );
}
