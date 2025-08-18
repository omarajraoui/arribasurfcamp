import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { formatWeekBase, formatPrice, BASE_WEEK_PRICE_EUR } from '../../utils/currency';

const OfferSection = () => {
  const { t, i18n } = useTranslation();
  // derive fresh each render so switching language updates price
  const baseDisplay = formatWeekBase((i18n.language || 'en').split('-')[0]);
  const mainOffer = {
    name: t('bookNowPage.standardPackage') + ' Arriba',
    duration: t('bookNowPage.packageFeatures.0').replace('✓ ','').split(',')[0],
  price: baseDisplay,
    image: 'https://images.unsplash.com/photo-1502680390469-be75c86b636f?w=800&h=600&fit=crop&auto=format',
    features: t('bookNowPage.packageFeatures', { returnObjects: true }),
    highlights: [
      t('offerSection.highlightsTitle') // placeholder highlight; adapt real highlights list as needed
    ]
  };

  return (
    <section className="w-full py-20 px-4 bg-gradient-to-b from-brand-sand-alt/40 to-brand-foam">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="pill mb-4 inline-block text-brand-sun-accent bg-brand-sun-accent/10 border border-brand-sun-accent">
            {t('offerSection.specialBadge')}
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-ink mb-6">
            {t('offerSection.heading')}
          </h2>
          <p className="text-xl text-brand-ink-soft max-w-3xl mx-auto leading-relaxed">
            {t('offerSection.subheading')}
          </p>
        </motion.div>

        {/* Main Offer Card */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="relative max-w-4xl mx-auto"
        >
          <div className="relative bg-white rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500">
            
            {/* Discount removed */}

            {/* Hero Image Section */}
            <div className="relative h-80 lg:h-96 overflow-hidden">
              <img
                src={mainOffer.image}
                alt={mainOffer.name}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
              
              {/* Overlay Content */}
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-3xl lg:text-4xl font-bold mb-2">{mainOffer.name}</h3>
                <div className="flex items-center gap-3">
                  <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold">
                    {mainOffer.duration}
                  </span>
                  <span className="bg-brand-sun-accent px-3 py-1 rounded-full text-sm font-bold">
                    {t('offerSection.locationTag')}
                  </span>
                </div>
              </div>
            </div>

            {/* Content Section */}
            <div className="p-8 lg:p-12">
              
              {/* Pricing Section */}
              <div className="text-center mb-10">
                <div className="flex flex-col items-center justify-center gap-2 mb-4">
                  <span className="text-5xl lg:text-6xl font-bold text-brand-sun-accent">{mainOffer.price}</span>
                  <span className="text-sm text-brand-ink-soft">{t('offers.perPerson')}</span>
                </div>
                <p className="text-brand-ink-soft mb-6">{t('offerSection.allInclusiveTagline')}</p>
                {/* CTA Button now links to booking page */}
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="/book-now"
                  className="inline-block btn btn-primary px-12 py-4 text-xl font-bold shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  {t('offerSection.cta', { price: mainOffer.price })}
                </motion.a>
              </div>

              {/* Features Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                
                {/* Included Features */}
                <div>
                  <h4 className="text-2xl font-bold text-brand-ink mb-6 flex items-center gap-2">
                    <svg className="w-6 h-6 text-brand-sun-accent" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {t('offerSection.includedTitle')}
                  </h4>
                  <ul className="space-y-3">
                    {mainOffer.features.map((feature, index) => (
                      <motion.li 
                        key={index}
                        initial={{ x: -20, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="flex items-start gap-3"
                      >
                        <svg className="w-5 h-5 text-brand-sun-accent mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span className="text-brand-ink-soft">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* Highlights */}
                <div>
                  <h4 className="text-2xl font-bold text-brand-ink mb-6 flex items-center gap-2">
                    <svg className="w-6 h-6 text-brand-coral" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                    </svg>
                    {t('offerSection.highlightsTitle')}
                  </h4>
                  <div className="space-y-4">
                    {mainOffer.highlights.map((highlight, index) => (
                      <motion.div 
                        key={index}
                        initial={{ x: 20, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="bg-brand-sand-alt/30 rounded-lg p-4 border-l-4 border-brand-coral"
                      >
                        <p className="text-brand-ink font-medium">{highlight}</p>
                      </motion.div>
                    ))}
                  </div>

                  {/* Contact Info */}
                  <div className="mt-8 p-6 bg-gradient-to-r from-brand-sun-accent/10 to-brand-coral/10 rounded-xl border border-brand-sun-accent/20">
                    <h5 className="font-bold text-brand-ink mb-3">{t('offerSection.contactHeading')}</h5>
                    <p className="text-sm text-brand-ink-soft mb-4">
                      {t('offerSection.contactText')}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3">
                      <a href="https://wa.me/33768960462" target="_blank" rel="noopener noreferrer" className="btn btn-outline flex-1 py-2 text-sm">
                        {t('offerSection.contactWhatsapp')}
                      </a>
                      <a href="mailto:arriba.surfcamp.bali@gmail.com" className="btn btn-outline flex-1 py-2 text-sm">
                        {t('offerSection.contactEmail')}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Bottom Trust Signals */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-16"
        >
          <div className="flex flex-col items-center gap-6 text-brand-ink-soft">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-brand-sun-accent" fill="currentColor" viewBox="0 0 20 20">
                <path d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
              <span className="text-sm font-medium">{t('offerSection.trust.surfSpots')}</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-brand-sun-accent" fill="currentColor" viewBox="0 0 20 20">
                <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z"/>
              </svg>
              <span className="text-sm font-medium">{t('offerSection.trust.instructors')}</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-brand-sun-accent" fill="currentColor" viewBox="0 0 20 20">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
              <span className="text-sm font-medium">{t('offerSection.trust.authentic')}</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-brand-sun-accent" fill="currentColor" viewBox="0 0 20 20">
                <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"/>
              </svg>
              <span className="text-sm font-medium">{t('offerSection.trust.sharedVilla')}</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default OfferSection;
