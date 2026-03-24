import { useEffect, useRef, type ReactNode, type ElementType } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitType from 'split-type';
import '../styles/AnimatedHeading.css';

gsap.registerPlugin(ScrollTrigger);

interface AnimatedHeadingProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  ease?: string;
  stagger?: number;
  animateOnScroll?: boolean;
  direction?: 'bottom' | 'top';
  tag?: ElementType;
}

const AnimatedHeading = ({
  children,
  className = '',
  delay = 0,
  duration = 1,
  ease = 'power3.out',
  stagger = 0.1,
  animateOnScroll = false,
  direction = 'bottom',
  tag: Tag = 'h1',
}: AnimatedHeadingProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const split = new SplitType(el, { types: 'lines' });
    const lines = split.lines;

    if (!lines || lines.length === 0) return;

    // Wrap each line's content in an inner span for animation
    lines.forEach((line, i) => {
      const inner = document.createElement('span');
      inner.className = `line-inner-${i}`;
      inner.innerHTML = line.innerHTML;
      line.innerHTML = '';
      line.appendChild(inner);
      line.className = `line-${i}`;
    });

    const inners = el.querySelectorAll('[class^="line-inner-"]');
    const yFrom = direction === 'top' ? '-100%' : '100%';

    gsap.set(inners, { y: yFrom });

    const animationConfig: gsap.TweenVars = {
      y: '0%',
      duration,
      ease,
      stagger,
      delay,
    };

    if (animateOnScroll) {
      gsap.to(inners, {
        ...animationConfig,
        scrollTrigger: {
          trigger: el,
          start: 'top 75%',
          once: true,
        },
      });
    } else {
      gsap.to(inners, animationConfig);
    }

    return () => {
      split.revert();
      ScrollTrigger.getAll().forEach((t) => {
        if (t.trigger === el) t.kill();
      });
    };
  }, [children, delay, duration, ease, stagger, animateOnScroll, direction]);

  return (
    <Tag className={`animated-heading ${className}`.trim()} ref={containerRef}>
      {children}
    </Tag>
  );
};

export default AnimatedHeading;
