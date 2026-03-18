import { useEffect, useRef, useState } from "react";
import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useReducedMotion,
} from "framer-motion";
import Card from "./Card";

function TestimonialCard({ testimonial, avatarSrc }) {
  return (
    <Card
      elevated
      className="flex h-full min-h-[260px] flex-col border border-nova-charcoal-lighter text-left"
    >
      <div className="mb-4 flex items-center gap-3">
        <img
          src={avatarSrc}
          alt={`${testimonial.name} headshot`}
          className="h-12 w-12 rounded-full border border-nova-charcoal-lighter object-cover"
          loading="lazy"
        />
        <div>
          <h4 className="font-display font-bold text-nova-charcoal">
            {testimonial.name}
          </h4>
          <p className="text-xs text-nova-charcoal-700">
            {testimonial.company}
          </p>
        </div>
      </div>

      <p className="mb-5 text-sm leading-relaxed text-nova-charcoal-700">
        "{testimonial.quote}"
      </p>

      <div className="mt-auto border-t border-nova-charcoal-lighter pt-4">
        <p className="text-sm text-nova-charcoal">
          <span className="font-semibold text-nova-green">
            {testimonial.savedAmount
              ? `Saved NGN ${testimonial.savedAmount}`
              : `Earned NGN ${testimonial.earnedAmount}`}
          </span>{" "}
          on {testimonial.trips} trips
        </p>
      </div>
    </Card>
  );
}

export default function TestimonialMarquee({
  testimonials,
  testimonialAvatars,
  speed = 36,
}) {
  const shouldReduceMotion = useReducedMotion();
  const x = useMotionValue(0);
  const trackRef = useRef(null);
  const [singleTrackWidth, setSingleTrackWidth] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const marqueeTestimonials = [...testimonials, ...testimonials];

  useEffect(() => {
    if (!trackRef.current) {
      return undefined;
    }

    const measureTrack = () => {
      if (!trackRef.current) {
        return;
      }

      setSingleTrackWidth(trackRef.current.scrollWidth / 2);
    };

    measureTrack();

    const resizeObserver = new ResizeObserver(() => {
      measureTrack();
    });

    resizeObserver.observe(trackRef.current);

    return () => {
      resizeObserver.disconnect();
    };
  }, [testimonials.length]);

  useEffect(() => {
    x.set(0);
  }, [singleTrackWidth, x]);

  useAnimationFrame((_, delta) => {
    if (shouldReduceMotion || isPaused || singleTrackWidth === 0) {
      return;
    }

    const nextX = x.get() - speed * (delta / 1000);

    if (Math.abs(nextX) >= singleTrackWidth) {
      x.set(0);
      return;
    }

    x.set(nextX);
  });

  if (shouldReduceMotion) {
    return (
      <div className="-mx-4 overflow-x-auto px-4 sm:-mx-0 sm:px-0">
        <div className="flex w-max gap-5 pb-2">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="flex w-[min(85vw,22rem)] flex-none self-stretch sm:w-[22rem]"
            >
              <TestimonialCard
                testimonial={testimonial}
                avatarSrc={testimonialAvatars[testimonial.avatar]}
              />
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div
      className="relative overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocusCapture={() => setIsPaused(true)}
      onBlurCapture={() => setIsPaused(false)}
    >
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-8 bg-gradient-to-r from-white via-white/90 to-transparent sm:w-16" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-8 bg-gradient-to-l from-white via-white/90 to-transparent sm:w-16" />

      <motion.div
        ref={trackRef}
        className="flex items-stretch gap-5 pr-5 sm:gap-6 sm:pr-6"
        style={{ x }}
      >
        {marqueeTestimonials.map((testimonial, index) => (
          <div
            key={`${testimonial.id}-${index}`}
            className="flex w-[min(85vw,22rem)] flex-none self-stretch sm:w-[22rem] lg:w-[24rem]"
            aria-hidden={index >= testimonials.length}
          >
            <TestimonialCard
              testimonial={testimonial}
              avatarSrc={testimonialAvatars[testimonial.avatar]}
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
}
