import React, { useState, useEffect } from 'react';

/*
 OptimizedImage: lightweight progressive image component
 Props:
  - src: main (full) image URL (required)
  - alt: alt text (required)
  - placeholder: tiny blurred data URL or small image (optional)
  - className: additional classes for <img>
  - sources: optional array of responsive sources: [{ srcSet, type, media }]
  - aspect: optional aspect ratio class wrapper (Tailwind) e.g. 'aspect-[16/10]'

 Behavior:
  - Renders a wrapper with a blurred placeholder background.
  - On load of full image, fades in and removes blur.
*/

const OptimizedImage = ({ src, alt, placeholder, className = '', sources = [], aspect, manifestKey }) => {
  const [loaded, setLoaded] = useState(false);
  const [manifestData, setManifestData] = useState(null);
  // Derive potential webp sibling (build script generates .webp next to original)
  let autoWebpSource = null;
  if (src && /\.(jpe?g|png)$/i.test(src)) {
    try {
      const webpGuess = src.replace(/\.(jpe?g|png)$/i, '.webp');
      // We can't synchronously check existence at runtime in browser; include anyway.
      autoWebpSource = { srcSet: webpGuess, type: 'image/webp' };
    } catch {}
  }
  // Use a 1x1 transparent png if no placeholder provided
  const tinyFallback = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP4//8/AwAI/AL+X4KJ5QAAAABJRU5ErkJggg==';
  const [ph, setPh] = useState(placeholder || tinyFallback);

  // Derive automatic manifest key from filename if not supplied
  let autoKey = null;
  if (src) {
    try {
      const parts = src.split('/');
      const file = parts[parts.length - 1];
      const base = file.replace(/\.[a-zA-Z0-9]+$/, '');
      autoKey = base.toLowerCase();
    } catch {}
  }
  const effectiveKey = (manifestKey || autoKey || '').toLowerCase();

  useEffect(() => {
    if (!effectiveKey) return;
    fetch('/optimized/image-manifest.json')
      .then(r => r.json())
      .then(man => {
        const entry = man[effectiveKey];
        if (entry) {
          setManifestData(entry);
          if (entry.placeholder) setPh(entry.placeholder);
        }
      })
      .catch(()=>{});
  }, [effectiveKey]);

  return (
    <div className={`relative overflow-hidden ${aspect || ''}`}>
      {/* Placeholder layer */}
      <div
        className={`absolute inset-0 bg-center bg-cover transition-opacity duration-500 ${loaded ? 'opacity-0' : 'opacity-100'} blur-sm scale-105`}
        style={{ backgroundImage: `url(${ph})` }}
        aria-hidden="true"
      />
      <picture>
        {manifestData && manifestData.variants && manifestData.variants.sort((a,b)=>b.width - a.width).map((v,i)=>(
          <source key={i} srcSet={`${v.src} ${v.width}w`} type={v.type} />
        ))}
        {autoWebpSource && <source {...autoWebpSource} />}
        {sources.map((s, i) => (<source key={i} {...s} />))}
        <img
          src={src}
          alt={alt}
          loading="lazy"
          decoding="async"
          onLoad={() => setLoaded(true)}
          onError={() => setLoaded(true)}
          className={`w-full h-full object-cover transition-opacity duration-500 ${loaded ? 'opacity-100' : 'opacity-0'} ${className}`}
        />
      </picture>
    </div>
  );
};

export default OptimizedImage;
