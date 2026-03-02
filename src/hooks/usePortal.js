import { useState, useLayoutEffect } from 'react';

export const usePortal = (id = 'portal-root') => {
  const [container] = useState(() => {
    const el = document.createElement('div');
    el.id = id;
    return el;
  });

  useLayoutEffect(() => {
    document.body.appendChild(container);
    
    return () => {
      if (container.parentElement) {
        document.body.removeChild(container);
      }
    };
  }, [container]);

  return container;
};