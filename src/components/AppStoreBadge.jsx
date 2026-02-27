export default function AppStoreBadge({ className = "" }) {
  return (
    <svg
      viewBox="0 0 120 40"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <g fill="none">
        {/* Background */}
        <rect width="120" height="40" rx="5" fill="#000000" />
        
        {/* Apple Logo */}
        <path
          d="M24.769 20.3c-.013-2.976 2.43-4.407 2.538-4.477-1.381-2.019-3.532-2.297-4.3-2.328-1.831-.185-3.575 1.078-4.503 1.078-.928 0-2.362-1.052-3.883-1.023-1.996.03-3.835 1.16-4.862 2.948-2.072 3.598-.53 8.93 1.489 11.85 .988 1.43 2.166 3.035 3.712 2.978 1.51-.06 2.082-.977 3.908-.977 1.826 0 2.363.977 3.883.946 1.601-.024 2.635-1.447 3.622-2.878 1.144-1.661 1.614-3.268 1.642-3.35-.035-.013-3.15-1.21-3.18-4.796zm-2.907-8.613c.822-1 1.376-2.39 1.224-3.774-1.185.048-2.618.788-3.467 1.783-.76.878-1.425 2.282-1.246 3.63 1.318.102 2.663-.67 3.49-1.639z"
          fill="#FFFFFF"
        />
        
        {/* Download on the */}
        <text x="38" y="15.5" fill="#FFFFFF" fontSize="9" fontFamily="Arial, sans-serif" fontWeight="400">
          Download on the
        </text>
        
        {/* App Store */}
        <text x="38" y="28" fill="#FFFFFF" fontSize="13.5" fontFamily="Arial, sans-serif" fontWeight="600">
          App Store
        </text>
      </g>
    </svg>
  );
}
