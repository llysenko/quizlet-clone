'use client';

import { useLocale, useTranslations } from 'next-intl';

import { locales } from '@/config';

import LocaleSwitcherSelect from '@/components/locale-switcher-select';

export default function LocaleSwitcher() {
  const t = useTranslations('LocaleSwitcher');
  const locale = useLocale();

  return (
    <LocaleSwitcherSelect defaultValue={locale} label={t('label')}>
      {locales.map(cur => (
        <option key={cur} value={cur} className="text-sm">
          {t('locale', { locale: cur })}
        </option>
      ))}
    </LocaleSwitcherSelect>
  );
}
