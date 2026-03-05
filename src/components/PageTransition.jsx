import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

export default function PageTransition({ children }) {
  const [isTransitioning, setIsTransitioning] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsTransitioning(true);
    const timer = setTimeout(() => setIsTransitioning(false), 100);
    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <div className={`${isTransitioning ? 'animate-fadeIn' : ''}`}>
      {children}
    </div>
  );
}
