import { useEffect, useRef, type ReactNode, type ElementType } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitType from 'split-type';
import '../styles/AnimatedText.css';

gsap.registerPlugin(ScrollTrigger);

interface AnimatedTextProps {
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

const AnimatedText = ({
  children,
  className = '',
  delay = 0,
  duration = 0.8,
  ease = 'power3.out',
  stagger = 0.05,
  animateOnScroll = true,
  direction = 'bottom',
  tag: Tag = 'p',
}: AnimatedTextProps) => {
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
          start: 'top 80%',
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
    <Tag className={`animated-text ${className}`.trim()} ref={containerRef}>
      {children}
    </Tag>
  );
};

export default AnimatedText;
