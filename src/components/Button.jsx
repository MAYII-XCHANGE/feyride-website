
export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  disabled = false,
  className = '',
  href,
  ...props
}) {
  const baseStyles = 'font-semibold rounded-lg transition-all duration-200 inline-flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-primary-200/60 focus:ring-offset-2';

  const variantStyles = {
    primary: 'text-white bg-primary-500 hover:bg-primary-600 shadow-md hover:shadow-lg',
    secondary: 'text-primary-500 bg-primary-50 hover:bg-primary-100',
    outline: 'text-primary-500 border-2 border-primary-500 hover:bg-primary-50',
    accent: 'text-white bg-accent-warning hover:bg-accent-warning/90',
    info: 'text-white bg-accent-info hover:bg-accent-info/90',
    success: 'text-white bg-accent-success hover:bg-accent-success/90',
    error: 'text-white bg-accent-error hover:bg-accent-error/90',
    ghost: 'text-primary-500 hover:bg-primary-50',
  };

  const sizeStyles = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  const finalClassName = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

  if (href) {
    return (
      <a
        className={finalClassName}
        href={href}
        aria-disabled={disabled}
        {...props}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      className={finalClassName}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
}


