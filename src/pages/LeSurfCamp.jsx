import React from 'react';
import Chambres from '../components/surfcamp/Chambres';
import Villa from '../components/surfcamp/Villa';
import Planning from '../components/surfcamp/Planning';

const LeSurfCamp = () => {
  return (
    <div className="surf-camp-page w-full">
      <section id="chambres" className="min-h-screen">
        <Chambres />
      </section>
      <section id="villa" className="min-h-screen">
        <Villa />
      </section>
      <section id="planning" className="min-h-screen">
        <Planning />
      </section>
    </div>
  );
};

export default LeSurfCamp;
