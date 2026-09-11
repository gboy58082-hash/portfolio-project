'use client';

import React, { useEffect, useState } from 'react';

export default function Cursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [cursorType, setCursorType] = useState<'default' | 'hover' | 'project'>('default');
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Only run on desktop
    if (window.matchMedia('(pointer: coarse)').matches) return;

    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!visible) setVisible(true);
    };

    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      if (target.closest('.project-card-interactive')) {
        setCursorType('project');
      } else if (
        target.tagName === 'BUTTON' ||
        target.tagName === 'A' ||
        target.closest('button') ||
        target.closest('a') ||
        target.closest('.interactive-cta') ||
        target.getAttribute('role') === 'button'
      ) {
        setCursorType('hover');
      } else {
        setCursorType('default');
      }
    };

    const onMouseLeave = () => setVisible(false);

    window.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseover', onMouseOver);
    document.addEventListener('mouseleave', onMouseLeave);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseover', onMouseOver);
      document.removeEventListener('mouseleave', onMouseLeave);
    };
  }, [visible]);

  if (!visible) return null;

  return (
    <div className={`cursor-wrapper ${cursorType === 'hover' ? 'cursor-hover' : ''} ${cursorType === 'project' ? 'cursor-project' : ''}`}>
      <div
        className="custom-cursor-dot"
        style={{
          transform: `translate3d(${position.x}px, ${position.y}px, 0) translate(-50%, -50%)`,
        }}
      />
      <div
        className="custom-cursor-ring"
        style={{
          transform: `translate3d(${position.x}px, ${position.y}px, 0) translate(-50%, -50%)`,
        }}
      >
        {cursorType === 'project' && <span>VIEW CASE STUDY →</span>}
      </div>
    </div>
  );
}
