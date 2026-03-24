import { useEffect, useRef, useCallback } from 'react';

interface ParallaxImageProps {
  src: string;
  alt: string;
  speed?: number;
  className?: string;
}

const ParallaxImage = ({
  src,
  alt,
  speed = 0.3,
  className = '',
}: ParallaxImageProps) => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  const currentY = useRef(0);
  const targetY = useRef(0);
  const rafId = useRef<number>(0);

  const lerp = (start: number, end: number, factor: number) =>
    start + (end - start) * factor;

  const update = useCallback(() => {
    const wrapper = wrapperRef.current;
    const img = imgRef.current;
    if (!wrapper || !img) return;

    const rect = wrapper.getBoundingClientRect();
    const viewportCenter = window.innerHeight / 2;
    const elementCenter = rect.top + rect.height / 2;
    const distance = elementCenter - viewportCenter;

    targetY.current = distance * speed;
    currentY.current = lerp(currentY.current, targetY.current, 0.1);

    img.style.transform = `translateY(${currentY.current}px) scale(1.25)`;

    rafId.current = requestAnimationFrame(update);
  }, [speed]);

  useEffect(() => {
    // Only activate on desktop
    const isDesktop = window.innerWidth >= 900;
    if (!isDesktop) return;

    rafId.current = requestAnimationFrame(update);

    return () => {
      if (rafId.current) {
        cancelAnimationFrame(rafId.current);
      }
    };
  }, [update]);

  return (
    <div
      ref={wrapperRef}
      className={`parallax-image-wrapper ${className}`.trim()}
      style={{ overflow: 'hidden', position: 'relative' }}
    >
      <img
        ref={imgRef}
        src={src}
        alt={alt}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          transform: 'scale(1.25)',
          willChange: 'transform',
        }}
      />
    </div>
  );
};

export default ParallaxImage;
