import React from 'react';

import { Button } from '@/components/button';
import LocaleSwitcher from '@/components/locale-switcher';
import Navigation from '@/components/navigation';
import ThemeSwitcher from '@/components/theme-switcher';

export default function Header() {
  return (
    <header className="flex items-center justify-between">
      <Button label="Button" size="medium" iconSrc="/static/images/sparkles.png" />
      <Navigation />
      <div className="grid auto-cols-min grid-flow-col gap-2">
        <LocaleSwitcher />
        <ThemeSwitcher />
      </div>
    </header>
  );
}
