import { Interactive } from 'react-interactive';
import { SunIcon } from '@modulz/radix-icons';
import { styled } from './stitches.config';

interface InteractiveDarkModeButtonProps {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  className?: string;
}
const InteractiveDarkModeButton: React.VFC<InteractiveDarkModeButtonProps> = ({
  onClick,
  className,
}) => {
  return (
    <Interactive as="button" className={className} onClick={onClick}>
      <SunIcon width="30" height="30" />
    </Interactive>
  );
};

export const DarkModeButton = styled(InteractiveDarkModeButton, {
  color: '$highContrast',
  width: '30px',
  height: '30px',
  '&.hover, &.active': {
    color: '$green',
  },
  '&.focusFromKey': {
    outline: '2px solid $colors$green',
    outlineOffset: '2px',
  },
});

interface InteractiveLinkProps {
  href: string;
  className?: string;
  children: React.ReactNode;
}
const InteractiveLink: React.VFC<InteractiveLinkProps> = ({
  href,
  className,
  children,
}) => {
  return (
    <Interactive
      as="a"
      href={href}
      className={className}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </Interactive>
  );
};

export const Link = styled(InteractiveLink, {
  color: '$highContrast',
  borderBottom: '1px dotted $colors$green',
  textDecoration: 'none',
  '&.hover, &.active': {
    borderBottomStyle: 'solid',
  },
  '&.focusFromKey': {
    outline: '2px solid $colors$green',
    outlineOffset: '2px',
  },
  variants: {
    type: {
      lowContrast: {
        color: '$lowContrast',
        fontSize: '14px',
        '&.hover, &.active': {
          color: '$highContrast',
        },
      },
    },
  },
});

interface InteractiveButtonProps {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  className?: string;
  children: React.ReactNode;
}
const InteractiveButton: React.VFC<InteractiveButtonProps> = ({
  onClick,
  className,
  children,
}) => {
  return (
    <Interactive as="button" className={className} onClick={onClick}>
      {children}
    </Interactive>
  );
};

export const Button = styled(InteractiveButton, {
  color: '$highContrast',
  border: '2px solid $colors$highContrast',
  width: '100%',
  height: '42px',
  lineHeight: '36px',
  fontSize: '18px',
  textAlign: 'center',
  margin: '25px 0',
  userSelect: 'none',
  '&.hover, &.active': {
    color: '$green',
    borderColor: '$green',
  },
  '&.focusFromKey': {
    outline: '2px solid $colors$green',
    outlineOffset: '2px',
  },
});
