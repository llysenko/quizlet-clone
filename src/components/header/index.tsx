import React from 'react';

import LocaleSwitcher from '@/components/locale-switcher';
import Navigation from '@/components/navigation';
import ThemeSwitcher from '@/components/theme-switcher';

export default function Header() {
  return (
    <header className="flex items-center justify-between">
      <Navigation/>
      <div className="grid grid-flow-col gap-2 auto-cols-min">
        <LocaleSwitcher/>
        <ThemeSwitcher/>
      </div>
    </header>
  );
}
