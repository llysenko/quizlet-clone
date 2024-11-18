import { OverlayPlacement } from '@nextui-org/aria-utils';
import { Tooltip } from '@nextui-org/react';
import { ReactNode } from 'react';

export default function AppTooltip({
  content,
  children,
  placement = 'top'
}: {
  content: string;
  children: ReactNode;
  placement?: OverlayPlacement | undefined;
}) {
  return (
    <Tooltip content={content} className="bg-dark-grey text-xs text-white rounded" radius="none" placement={placement}>
      {children}
    </Tooltip>
  );
}
