import React, { useEffect, useState, Suspense } from 'react';

// Dynamic import wrapper for Leaflet map to cut initial bundle & load only when visible
const LazyLeaflet = React.lazy(() => import('./MapInner'));

const LazyMap = () => {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = document.getElementById('villa-map-lazy');
    if (!el) return;
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      });
    }, { rootMargin: '200px 0px' });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div id="villa-map-lazy" className="w-full h-64 rounded-xl overflow-hidden border border-gray-200 relative z-10 bg-gradient-to-br from-brand-foam to-white flex items-center justify-center">
      {visible ? (
        <Suspense fallback={<div className="text-xs text-brand-ink-soft animate-pulse">Loading map…</div>}>
          <LazyLeaflet />
        </Suspense>
      ) : (
        <div className="text-xs text-brand-ink-soft animate-pulse">Preparing map…</div>
      )}
    </div>
  );
};
export default LazyMap;
