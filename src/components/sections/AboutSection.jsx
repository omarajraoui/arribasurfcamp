import React from 'react';
import { motion } from 'framer-motion';

const AboutSection = () => {
  return (
  <section className="w-full py-16 px-4 bg-brand-sand">
      <div className="w-full max-w-none mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold mb-6 text-brand-ink">
              Welcome to Paradise
            </h2>
            <p className="text-lg text-soft mb-6 leading-relaxed">
              Located in the heart of Indonesia's most pristine surf breaks, Arriba Surf Camp 
              offers an unparalleled surfing experience. Our camp combines world-class waves 
              with comfortable accommodations and expert instruction.
            </p>
            <p className="text-lg text-soft mb-8 leading-relaxed">
              Whether you're a beginner looking to catch your first wave or an experienced 
              surfer seeking the perfect barrel, our team of certified instructors will guide 
              you to surf perfection.
            </p>
            <button className="btn btn-primary px-8">Learn More About Us</button>
          </motion.div>
          
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 gap-5"
          >
            <div className="space-y-4">
              <div className="h-48 card-surface flex items-center justify-center text-center p-4">
                <div>
                  <svg className="w-12 h-12 mx-auto mb-3 text-brand-sun" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"/>
                  </svg>
                  <p className="font-semibold text-brand-ink text-sm">Professional Instruction</p>
                </div>
              </div>
              <div className="h-32 card-surface flex items-center justify-center text-center p-3">
                <div>
                  <svg className="w-8 h-8 mx-auto mb-2 text-brand-sun" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                  <p className="font-semibold text-brand-ink text-xs">Safe Environment</p>
                </div>
              </div>
            </div>
            <div className="space-y-4 mt-8">
              <div className="h-32 card-surface flex items-center justify-center text-center p-3">
                <div>
                  <svg className="w-8 h-8 mx-auto mb-2 text-brand-sun" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"/>
                  </svg>
                  <p className="font-semibold text-brand-ink text-xs">Comfortable Rooms</p>
                </div>
              </div>
              <div className="h-48 card-surface flex items-center justify-center text-center p-4">
                <div>
                  <svg className="w-12 h-12 mx-auto mb-3 text-brand-sun" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                  </svg>
                  <p className="font-semibold text-brand-ink text-sm">World-Class Waves</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
