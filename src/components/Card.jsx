
export default function Card({ children, className = '', elevated = false }) {
  const baseClass = elevated ? 'card-elevated' : 'card';
  return (
    <div
      className={`${baseClass} p-6 ${className}`}
    >
      {children}
    </div>
  );
}

