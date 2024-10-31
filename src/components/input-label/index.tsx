import clsx from 'clsx';
import Image from 'next/image';
import { useState } from 'react';

export default function InputLabel({
  label,
  tooltipIconSrc,
  tooltipHtml,
  error
}: {
  label: string;
  tooltipIconSrc?: string;
  tooltipHtml?: string;
  error?: boolean;
}) {
  const [tooltipVisible, setTooltipVisible] = useState(false);

  return (
    <div className="mb-2 flex items-center">
      <p className={clsx('text-sm font-semibold', error && 'text-error', !error && 'capitalize text-gray-600')}>
        {label}
      </p>
      <div className="relative">
        {tooltipIconSrc && (
          <Image
            src={tooltipIconSrc}
            alt=""
            width={24}
            height={24}
            className="ml-2"
            style={{
              filter: error
                ? 'brightness(0) saturate(100%) invert(20%) sepia(30%) saturate(7028%) hue-rotate(333deg) brightness(76%) contrast(123%)'
                : ''
            }}
            onMouseOver={() => setTooltipVisible(true)}
            onMouseLeave={() => setTooltipVisible(false)}
          />
        )}
        {tooltipVisible && tooltipHtml && (
          <div
            dangerouslySetInnerHTML={{ __html: tooltipHtml }}
            className="absolute right-[-255px] top-[-20px] z-10 w-[246px] rounded bg-dark-grey p-2 text-xs text-white"></div>
        )}
      </div>
    </div>
  );
}
