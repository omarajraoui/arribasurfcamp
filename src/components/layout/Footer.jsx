import React, { useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import instagramPhotos from '../../data/instagramPhotos';

const Footer = () => {
  const socialLinks = [
    {
      name: 'Instagram',
      href: 'https://www.instagram.com/arriba.surfcamp.bali?igsh=YWQ4eWI3bHR5dTBs',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M7.75 2A5.75 5.75 0 0 0 2 7.75v8.5A5.75 5.75 0 0 0 7.75 22h8.5A5.75 5.75 0 0 0 22 16.25v-8.5A5.75 5.75 0 0 0 16.25 2h-8.5ZM7.5 4.5h9a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3h-9a3 3 0 0 1-3-3v-9a3 3 0 0 1 3-3Zm10.25 1.75a1 1 0 1 0 0 2 1 1 0 0 0 0-2ZM12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm0 1.5A2.5 2.5 0 1 1 12 15a2.5 2.5 0 0 1 0-5Z" />
        </svg>
      )
    },
    {
      name: 'TikTok',
      href: 'https://www.tiktok.com/@arriba.surf.camp?_t=ZN-8yqWK0uvAoQ&_r=1',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M13.75 2a1 1 0 0 0-1 1v11.25a2.75 2.75 0 1 1-2.75-2.75 1 1 0 1 0 0-2A4.75 4.75 0 1 0 14.75 14V7.93a6.96 6.96 0 0 0 3.5.95h.5a1 1 0 1 0 0-2h-.5A4.98 4.98 0 0 1 15.75 5V3a1 1 0 0 0-1-1h-1Z" />
        </svg>
      )
    },
    {
      name: 'Facebook',
      href: 'https://facebook.com/',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M9.198 21.5h4v-8.01h3.604l.396-3.98h-4V7.5a1 1 0 0 1 1-1h3v-4h-3a5 5 0 0 0-5 5v2.01h-2l-.396 3.98h2.396v8.01z"/>
        </svg>
      )
    },
    {
      name: 'YouTube',
      href: 'https://youtube.com/',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.498 6.186a2.997 2.997 0 0 0-2.11-2.111C19.505 3.546 12 3.546 12 3.546s-7.505 0-9.388.529A2.997 2.997 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a2.997 2.997 0 0 0 2.11 2.111C4.495 20.454 12 20.454 12 20.454s7.505 0 9.388-.529a2.997 2.997 0 0 0 2.11-2.111C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.75 15.568V8.432L15.5 12l-5.75 3.568z"/>
        </svg>
      )
    }
  ];

  return (
    <footer className="w-full bg-white">
      {/* Instagram Gallery Carousel */}
      <div className="w-full overflow-hidden">
        <Swiper
          modules={[Autoplay]}
          slidesPerView={2}
          spaceBetween={0}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          speed={1000}
          breakpoints={{
            640: {
              slidesPerView: 4,
            },
            1024: {
              slidesPerView: 6,
            },
          }}
          className="instagram-gallery"
        >
          {instagramPhotos.map((photo, index) => (
            <SwiperSlide key={photo.id}>
              <a 
                href="https://www.instagram.com/arriba.surfcamp.bali?igsh=YWQ4eWI3bHR5dTBs" 
                target="_blank" 
                rel="noopener noreferrer"
                className="relative group cursor-pointer block"
                title={photo.caption}
              >
                <img 
                  src={photo.src} 
                  alt={photo.alt}
                  loading="lazy"
                  className="w-full h-48 sm:h-32 lg:h-40 object-cover"
                />
                {/* Instagram Icon Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 ease-out flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M7.75 2A5.75 5.75 0 0 0 2 7.75v8.5A5.75 5.75 0 0 0 7.75 22h8.5A5.75 5.75 0 0 0 22 16.25v-8.5A5.75 5.75 0 0 0 16.25 2h-8.5ZM7.5 4.5h9a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3h-9a3 3 0 0 1-3-3v-9a3 3 0 0 1 3-3Zm10.25 1.75a1 1 0 1 0 0 2 1 1 0 0 0 0-2ZM12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm0 1.5A2.5 2.5 0 1 1 12 15a2.5 2.5 0 0 1 0-5Z" />
                  </svg>
                </div>
                
                {/* Caption overlay on hover */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-white text-xs text-center font-medium">
                    {photo.caption}
                  </p>
                </div>
              </a>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Social Media Links */}
      <div className="py-12 bg-white">
        <div className="max-w-2xl mx-auto">
          <ul className="flex justify-center items-center gap-8 lg:gap-12 flex-wrap">
            {socialLinks.map((social) => (
              <li key={social.name}>
                <a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 text-brand-ink hover:text-brand-sun-accent transition-all duration-300 ease-out transform hover:scale-105"
                >
                  <span className="transition-transform duration-300 group-hover:scale-110">
                    {social.icon}
                  </span>
                  <span className="text-sm font-bold uppercase tracking-wider font-title">
                    {social.name}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Separator */}
      <div className="flex justify-center">
        <div className="h-0.5 w-8 bg-brand-sand-deep rounded-full"></div>
      </div>

      {/* Copyright */}
      <div className="py-6 bg-white">
        <p className="text-center text-brand-ink-soft text-sm">
          Copyright © 2025 Arriba Surf Camp
        </p>
      </div>
    </footer>
  );
};

export default Footer;
