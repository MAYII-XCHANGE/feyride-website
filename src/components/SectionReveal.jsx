import { motion, useReducedMotion } from "framer-motion";

const EASE = [0.16, 1, 0.3, 1];

const sectionVariants = {
  hidden: {
    opacity: 0,
    y: 48,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      ease: EASE,
      when: "beforeChildren",
      staggerChildren: 0.14,
      delayChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 28,
    filter: "blur(8px)",
    clipPath: "inset(0 0 18% 0 round 1rem)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    clipPath: "inset(0 0 0% 0 round 1rem)",
    transition: {
      duration: 0.8,
      ease: EASE,
    },
  },
};

function getMotionTag(as) {
  return motion[as] ?? motion.div;
}

export function RevealSection({
  as = "section",
  className,
  style,
  children,
  amount = 0.2,
}) {
  const reduceMotion = useReducedMotion();
  const MotionTag = getMotionTag(as);

  if (reduceMotion) {
    return (
      <MotionTag className={className} style={style}>
        {children}
      </MotionTag>
    );
  }

  return (
    <MotionTag
      className={className}
      style={style}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount }}
      variants={sectionVariants}
    >
      {children}
    </MotionTag>
  );
}

export function RevealGroup({ as = "div", className, children }) {
  const reduceMotion = useReducedMotion();
  const MotionTag = getMotionTag(as);

  if (reduceMotion) {
    return <MotionTag className={className}>{children}</MotionTag>;
  }

  return (
    <MotionTag variants={sectionVariants} className={className}>
      {children}
    </MotionTag>
  );
}

export function RevealItem({ as = "div", className, children }) {
  const reduceMotion = useReducedMotion();
  const MotionTag = getMotionTag(as);

  if (reduceMotion) {
    return <MotionTag className={className}>{children}</MotionTag>;
  }

  return (
    <MotionTag variants={itemVariants} className={className}>
      {children}
    </MotionTag>
  );
}
