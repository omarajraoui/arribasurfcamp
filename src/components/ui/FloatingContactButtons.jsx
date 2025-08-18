import React from 'react';

const socials = [
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/arriba.surfcamp.bali?igsh=YWQ4eWI3bHR5dTBs',
    bg: 'from-pink-500 to-orange-400',
    svg: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor" aria-hidden="true">
        <path d="M7.75 2A5.75 5.75 0 0 0 2 7.75v8.5A5.75 5.75 0 0 0 7.75 22h8.5A5.75 5.75 0 0 0 22 16.25v-8.5A5.75 5.75 0 0 0 16.25 2h-8.5ZM7.5 4.5h9a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3h-9a3 3 0 0 1-3-3v-9a3 3 0 0 1 3-3Zm10.25 1.75a1 1 0 1 0 0 2 1 1 0 0 0 0-2ZM12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm0 1.5A2.5 2.5 0 1 1 12 15a2.5 2.5 0 0 1 0-5Z" />
      </svg>
    )
  },
  {
    name: 'TikTok',
    href: 'https://www.tiktok.com/@arriba.surf.camp?_t=ZN-8yqWK0uvAoQ&_r=1',
    bg: 'from-gray-800 to-gray-600',
    svg: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor" aria-hidden="true">
        <path d="M13.75 2a1 1 0 0 0-1 1v11.25a2.75 2.75 0 1 1-2.75-2.75 1 1 0 1 0 0-2A4.75 4.75 0 1 0 14.75 14V7.93a6.96 6.96 0 0 0 3.5.95h.5a1 1 0 1 0 0-2h-.5A4.98 4.98 0 0 1 15.75 5V3a1 1 0 0 0-1-1h-1Z" />
      </svg>
    )
  },
  {
    name: 'Facebook',
    href: 'https://facebook.com/',
    bg: 'from-blue-600 to-blue-500',
    svg: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor" aria-hidden="true">
        <path d="M13.5 9H16a1 1 0 1 0 0-2h-2.5V5.75c0-.69.56-1.25 1.25-1.25H16a1 1 0 1 0 0-2h-1.25A3.25 3.25 0 0 0 11.5 5.75V7H10a1 1 0 0 0 0 2h1.5v8.25a.75.75 0 0 1-.75.75H9a1 1 0 1 0 0 2h1.75a2.75 2.75 0 0 0 2.75-2.75V9Z" />
      </svg>
    )
  }
];

const FloatingContactButtons = () => {
  const whatsappLink = 'https://wa.me/33768960462';
  const emailLink = 'mailto:arriba.surfcamp.bali@gmail.com';

  return (
    <div className="fixed bottom-3 right-3 flex flex-col items-end gap-2 z-50">
      {/* WhatsApp */}
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
        className="group w-11 h-11 md:w-12 md:h-12 rounded-full bg-[#25D366] hover:brightness-105 text-white flex items-center justify-center shadow-lg relative overflow-hidden transition-all focus:outline-none focus:ring-2 focus:ring-[#25D366]/40"
      >
        <svg viewBox="0 0 24 24" className="w-5 h-5 md:w-6 md:h-6" fill="currentColor" aria-hidden="true">
          <path d="M12 2a10 10 0 0 0-8.94 14.6L2 22l5.6-1.05A10 10 0 1 0 12 2Zm0 2a8 8 0 0 1 6.86 12.05l-.23.37A8 8 0 0 1 6.37 6.37 8 8 0 0 1 12 4Zm-3.17 3.75c-.18 0-.46.05-.7.36-.24.31-.92.9-.92 2.2 0 1.3.95 2.56 1.08 2.74.13.18 1.84 2.94 4.54 3.87 2.24.78 2.7.7 3.19.64.49-.06 1.57-.64 1.79-1.26.22-.62.22-1.16.16-1.26-.06-.1-.24-.16-.5-.28-.26-.12-1.57-.77-1.81-.85-.24-.09-.42-.13-.6.13-.18.27-.69.85-.84 1.03-.16.18-.31.2-.57.08-.26-.12-1.11-.41-2.13-1.32-.79-.7-1.33-1.57-1.48-1.83-.16-.27-.02-.41.1-.54.1-.1.26-.27.38-.4.12-.13.16-.22.24-.37.08-.15.04-.28-.02-.4-.06-.12-.56-1.37-.77-1.88-.2-.51-.4-.44-.58-.45Z" />
        </svg>
      </a>
      {/* Email */}
      <a
        href={emailLink}
        aria-label="Email"
        className="group w-11 h-11 md:w-12 md:h-12 rounded-full bg-brand-sun hover:brightness-110 text-brand-ink flex items-center justify-center shadow-lg relative overflow-hidden transition-all focus:outline-none focus:ring-2 focus:ring-brand-sun-soft/60 font-semibold"
      >
        <svg viewBox="0 0 24 24" className="w-5 h-5 md:w-6 md:h-6" fill="currentColor" aria-hidden="true">
          <path d="M5.75 4A3.75 3.75 0 0 0 2 7.75v8.5A3.75 3.75 0 0 0 5.75 20h12.5A3.75 3.75 0 0 0 22 16.25v-8.5A3.75 3.75 0 0 0 18.25 4H5.75Zm0 2.5h12.5c.69 0 1.25.56 1.25 1.25v.21l-7.13 4.06a1.25 1.25 0 0 1-1.24 0L4.5 7.96v-.21c0-.69.56-1.25 1.25-1.25Zm13.75 4.22v5.53c0 .69-.56 1.25-1.25 1.25H5.75c-.69 0-1.25-.56-1.25-1.25v-5.53l5.9 3.36c.99.56 2.21.56 3.2 0l5.9-3.36Z" />
        </svg>
      </a>
      {/* Socials stacked */}
      {socials.map(s => (
        <a
          key={s.name}
          href={s.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={s.name}
          className={`md:hidden group w-10 h-10 rounded-xl bg-gradient-to-br ${s.bg} text-white flex items-center justify-center shadow-md hover:scale-105 active:scale-95 transition-all`}
        >
          {s.svg}
        </a>
      ))}
    </div>
  );
};

export default FloatingContactButtons;
