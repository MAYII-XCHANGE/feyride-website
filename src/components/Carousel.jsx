import { useState, useEffect, useCallback } from 'react';

export default function Carousel({ items, renderItem, autoPlay = true, interval = 5000, showCounter = true }) {
  const [current, setCurrent] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % items.length);
  }, [items.length]);

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + items.length) % items.length);
  }, [items.length]);

  const goTo = useCallback((index) => {
    setCurrent(index);
  }, []);

  // Auto-play effect with pause on hover
  useEffect(() => {
    if (!autoPlay || isHovered) return;
    
    const timer = setTimeout(next, interval);
    return () => clearTimeout(timer);
  }, [autoPlay, interval, isHovered, next]);

  return (
    <div 
      className="relative w-full group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Carousel Container */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-nova-green/5 to-transparent">
        {/* Items with smooth fade transition */}
        <div className="relative flex">
          {items.map((item, idx) =>
            idx === current ? (
              <div
                key={idx}
                className="w-full flex-shrink-0 transition-all duration-500 ease-out"
                style={{ position: 'absolute', width: '100%' }}
              >
                {renderItem(item, idx)}
              </div>
            ) : null
          )}
          {/* Placeholder for layout */}
          <div className="w-full flex-shrink-0 opacity-0">
            {renderItem(items[0], 0)}
          </div>
        </div>
      </div>

      {/* Navigation Arrows - Smooth appearance on hover */}
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-all duration-300 opacity-0 group-hover:opacity-100 hover:scale-110 active:scale-95"
        aria-label="Previous slide"
      >
        <svg className="w-6 h-6 text-nova-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-all duration-300 opacity-0 group-hover:opacity-100 hover:scale-110 active:scale-95"
        aria-label="Next slide"
      >
        <svg className="w-6 h-6 text-nova-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Counter Badge - Uber style (01 / 12) */}
      {showCounter && (
        <div className="absolute top-4 left-4 z-20 bg-black/50 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-semibold">
          {String(current + 1).padStart(2, '0')} / {String(items.length).padStart(2, '0')}
        </div>
      )}

      {/* Dots - Enhanced with smooth animations */}
      <div className="flex justify-center gap-2 mt-6">
        {items.map((_, idx) => (
          <button
            key={idx}
            onClick={() => goTo(idx)}
            className={`transition-all duration-300 rounded-full cursor-pointer ${
              idx === current 
                ? 'bg-nova-green w-8 h-3 scale-100' 
                : 'bg-nova-charcoal-lighter w-3 h-3 hover:bg-nova-charcoal-lighter/80 hover:scale-110'
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

