import Image from 'next/image';
import { useState } from 'react';

export default function InputLabel({
  label,
  tooltipIconSrc,
  tooltipHtml
}: {
  label: string;
  tooltipIconSrc?: string;
  tooltipHtml?: string;
}) {
  const [tooltipVisible, setTooltipVisible] = useState(false);

  return (
    <div className="mb-2 flex items-center">
      <p className="text-sm font-semibold text-gray-600">{label}</p>
      <div className="relative">
        {tooltipIconSrc && (
          <Image
            src={tooltipIconSrc}
            alt=""
            width={24}
            height={24}
            className="ml-2"
            onMouseOver={() => setTooltipVisible(true)}
            onMouseLeave={() => setTooltipVisible(false)}
          />
        )}
        {tooltipVisible && tooltipHtml && (
          <div
            dangerouslySetInnerHTML={{ __html: tooltipHtml }}
            className="bg-dark-grey absolute right-[-255px] top-[-20px] z-10 w-[246px] rounded p-2 text-xs text-white"></div>
        )}
      </div>
    </div>
  );
}
