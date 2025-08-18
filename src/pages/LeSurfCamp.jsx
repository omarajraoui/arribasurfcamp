import React, { lazy, Suspense } from 'react';
import SurfCampHeroVideo from '../components/surfcamp/SurfCampHeroVideo';
const Chambres = lazy(() => import('../components/surfcamp/Chambres'));
const Villa = lazy(() => import('../components/surfcamp/Villa'));
const Planning = lazy(() => import('../components/surfcamp/Planning'));

const LeSurfCamp = () => {
  return (
    <div className="surf-camp-page w-full">
      <SurfCampHeroVideo />
      <Suspense fallback={<div className="w-full h-screen flex items-center justify-center text-brand-ink-soft text-sm">Loading...</div>}>
        <section id="chambres" className="min-h-screen">
          <Chambres />
        </section>
        <section id="villa" className="min-h-screen">
          <Villa />
        </section>
        <section id="planning" className="min-h-screen">
          <Planning />
        </section>
      </Suspense>
    </div>
  );
};

export default LeSurfCamp;
