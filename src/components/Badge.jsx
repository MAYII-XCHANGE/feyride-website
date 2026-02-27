
export default function Badge({ children, variant = 'primary' }) {
  const variantClass = {
    primary: 'badge-primary',
    success: 'badge-success',
    accent: 'bg-accent-warning text-white',
    info: 'bg-accent-info text-white',
    warning: 'bg-accent-warning/80 text-white',
    error: 'bg-accent-error text-white',
  };

  return (
    <span className={`${variantClass[variant]}`}>
      {children}
    </span>
  );
}

