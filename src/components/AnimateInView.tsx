"use client";

import { useEffect, useRef, useState, ReactNode, CSSProperties } from "react";

type AnimType = "up" | "down" | "left" | "right" | "fade" | "scale";

const INITIAL: Record<AnimType, CSSProperties> = {
  up:    { opacity: 0, transform: "translateY(28px)" },
  down:  { opacity: 0, transform: "translateY(-28px)" },
  left:  { opacity: 0, transform: "translateX(-28px)" },
  right: { opacity: 0, transform: "translateX(28px)" },
  fade:  { opacity: 0 },
  scale: { opacity: 0, transform: "scale(0.93)" },
};

interface Props {
  children: ReactNode;
  className?: string;
  type?: AnimType;
  delay?: number;
  duration?: number;
  threshold?: number;
  as?: keyof JSX.IntrinsicElements;
}

export default function AnimateInView({
  children,
  className,
  type = "up",
  delay = 0,
  duration = 700,
  threshold = 0.12,
  as: Tag = "div",
}: Props) {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  const easing = "cubic-bezier(0.16, 1, 0.3, 1)";
  const transition = `opacity ${duration}ms ${easing} ${delay}ms, transform ${duration}ms ${easing} ${delay}ms`;

  const style: CSSProperties = visible
    ? { opacity: 1, transform: "none", transition }
    : { ...INITIAL[type], transition };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const Component = Tag as any;
  return (
    <Component ref={ref} className={className} style={style}>
      {children}
    </Component>
  );
}
