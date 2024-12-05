import { ReactElement, ReactNode } from 'react';
import { OverlayPlacement } from '@nextui-org/aria-utils';
import { Tooltip } from '@nextui-org/react';

type Props = {
  content: ReactElement | string;
  children: ReactNode;
  placement?: OverlayPlacement | undefined;
};

export default function AppTooltip({ content, children, placement = 'top' }: Props) {
  return (
    <Tooltip
      content={content}
      placement={placement}
      className="rounded bg-dark-jungle-green text-xs text-white"
      radius="none">
      {children}
    </Tooltip>
  );
}
