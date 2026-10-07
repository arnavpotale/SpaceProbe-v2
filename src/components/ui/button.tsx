import * as React from 'react';
import { cn } from '@/lib/utils';

export interface ButtonProps extends React.ComponentProps<'button'> {
  variant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link';
  size?: 'default' | 'sm' | 'lg' | 'icon';
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'default', size = 'default', ...props }, ref) => {
    const variantStyles = {
      default:
        'bg-[#004DC0] text-white hover:bg-[#0057D9] shadow-lg shadow-[#004DC0]/20 border border-transparent',
      destructive: 'bg-[#ff4757]/80 text-white hover:bg-[#ff4757] border border-transparent',
      outline:
        'border border-[#D8ECF9]/20 bg-transparent text-white hover:bg-white/5 hover:border-[#D8ECF9]/40',
      secondary: 'bg-white/10 text-white hover:bg-white/15 border border-white/10',
      ghost: 'bg-transparent text-white hover:bg-white/5 hover:text-[#00a8ff]',
      link: 'bg-transparent text-[#00a8ff] hover:underline p-0 h-auto justify-start',
    }[variant];

    const sizeStyles = {
      default: 'h-10 px-4 py-2 text-sm',
      sm: 'h-8 rounded-lg px-3 text-xs',
      lg: 'h-12 rounded-xl px-6 text-base font-semibold',
      icon: 'h-9 w-9 p-0',
    }[size];

    return (
      <button
        ref={ref}
        className={cn(
          'inline-flex items-center justify-center gap-2 rounded-xl font-medium transition-all duration-200 outline-none focus-visible:ring-2 focus-visible:ring-[#00a8ff] disabled:pointer-events-none disabled:opacity-50 cursor-pointer',
          variantStyles,
          sizeStyles,
          className
        )}
        {...props}
      />
    );
  }
);

Button.displayName = 'Button';
