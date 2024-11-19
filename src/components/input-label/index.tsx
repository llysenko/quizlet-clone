import clsx from 'clsx';
import Image from 'next/image';

import AppTooltip from '@/components/app-tooltip/app-tooltip';

import styles from './styles.module.scss';

export default function InputLabel({
  label,
  tooltipIconSrc,
  tooltipHtml,
  error
}: {
  label: string;
  tooltipIconSrc?: string;
  tooltipHtml?: any;
  error?: boolean;
}) {
  return (
    <div className="mb-2 flex items-center">
      <p className={clsx('text-sm font-semibold', error && 'text-error', !error && 'capitalize text-gray-600')}>
        {label}
      </p>
      <div className="relative">
        {tooltipIconSrc && (
          <AppTooltip placement="right" content={tooltipHtml}>
            <Image
              src={tooltipIconSrc}
              alt=""
              width={24}
              height={24}
              className={clsx(error && styles.icon_error, 'ml-2')}
            />
          </AppTooltip>
        )}
      </div>
    </div>
  );
}
