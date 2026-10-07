import * as React from 'react';
import { cn } from '@/lib/utils';

export interface BadgeProps extends React.ComponentProps<'span'> {
  variant?: 'default' | 'secondary' | 'destructive' | 'outline';
}

export function Badge({ className, variant = 'default', ...props }: BadgeProps) {
  const variantStyles = {
    default: 'bg-[#00a8ff]/20 text-[#00a8ff] border-[#00a8ff]/40',
    secondary: 'bg-white/5 text-[#D8ECF9]/80 border-white/10',
    destructive: 'bg-[#ff4757]/20 text-[#ff4757] border-[#ff4757]/40',
    outline: 'border-[#D8ECF9]/20 text-white/90 bg-transparent',
  }[variant];

  return (
    <span
      data-slot="badge"
      className={cn(
        'inline-flex items-center justify-center rounded-md border px-2.5 py-0.5 text-xs font-mono font-medium tracking-wide transition-colors',
        variantStyles,
        className
      )}
      {...props}
    />
  );
}
