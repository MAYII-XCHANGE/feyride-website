export default function GooglePlayBadge({ className = "" }) {
  return (
    <svg
      viewBox="0 0 135 40"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <g fill="none">
        {/* Background */}
        <rect width="135" height="40" rx="5" fill="#000000" />
        
        {/* Google Play Triangle Logo */}
        <g transform="translate(10, 8)">
          {/* Blue part */}
          <path
            d="M1.5 1.5 L1.5 22.5 L12 12 Z"
            fill="#2196F3"
          />
          {/* Yellow part */}
          <path
            d="M1.5 22.5 L12 12 L19 15.5 L4.5 24 Z"
            fill="#FFC107"
          />
          {/* Red part */}
          <path
            d="M1.5 1.5 L4.5 0 L19 8.5 L12 12 Z"
            fill="#F44336"
          />
          {/* Green part */}
          <path
            d="M12 12 L19 8.5 L19 15.5 Z"
            fill="#4CAF50"
          />
        </g>
        
        {/* GET IT ON */}
        <text x="42" y="13.5" fill="#FFFFFF" fontSize="7.5" fontFamily="Arial, sans-serif" fontWeight="400">
          GET IT ON
        </text>
        
        {/* Google Play */}
        <text x="42" y="26" fill="#FFFFFF" fontSize="13" fontFamily="Arial, sans-serif" fontWeight="600">
          Google Play
        </text>
      </g>
    </svg>
  );
}
