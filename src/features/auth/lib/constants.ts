import { InputType } from '@/components/input';

import { AuthTab } from '@/features/auth/lib/types';

export const USER_SESSION_NAME = 'session';
export const AUTH_PROVIDERS = {
  google: {
    name: 'google',
    label: 'Continue with Google',
    iconSrc: 'icon__google.svg'
  },
  facebook: {
    name: 'facebook',
    label: 'Continue with Facebook',
    iconSrc: 'icon__facebook_color.svg'
  },
  apple: {
    name: 'apple',
    label: 'Continue with Apple',
    iconSrc: 'icon__apple.svg'
  }
};
export const SIGN_IN_CONTROLS = [
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
export const SIGN_IN_AUTH_PROVIDERS = [...Object.values(AUTH_PROVIDERS)];
export const SIGN_UP_CONTROLS = [
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
export const SIGN_UP_CHECKBOXES = [
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
export const SIGN_UP_AUTH_PROVIDERS = [AUTH_PROVIDERS.google, AUTH_PROVIDERS.facebook];
export const MONTHS = {
  id: 'month',
  name: 'month',
  options: [
    {
      name: 'Month',
      value: '-1'
    },
    {
      name: 'January',
      value: '1'
    },
    {
      name: 'February',
      value: '2'
    },
    {
      name: 'March',
      value: '3'
    },
    {
      name: 'April',
      value: '4'
    },
    {
      name: 'May',
      value: '5'
    },
    {
      name: 'June',
      value: '6'
    },
    {
      name: 'July',
      value: '7'
    },
    {
      name: 'August',
      value: '8'
    },
    {
      name: 'September',
      value: '9'
    },
    {
      name: 'October',
      value: '10'
    },
    {
      name: 'November',
      value: '11'
    },
    {
      name: 'December',
      value: '12'
    }
  ]
};
export const AUTH_TABS = {
  SIGN_IN: 'signIn' as AuthTab,
  SIGN_UP: 'signUp' as AuthTab
};
