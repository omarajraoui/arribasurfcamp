import React from 'react';

const FloatingContactButtons = () => {
  const whatsappLink = 'https://wa.me/0000000000'; // TODO: replace with real phone
  const emailLink = 'mailto:contact@arriba-surf.com';

  return (
  <div className="fixed bottom-3 right-3 flex flex-col items-end gap-2 z-40">
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
  className="group w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#25D366] hover:brightness-105 text-white flex items-center justify-center shadow-subtle relative overflow-hidden transition-all focus:outline-none focus:ring-2 focus:ring-brand-sun/40"
      >
    <svg viewBox="0 0 24 24" className="w-5 h-5 md:w-6 md:h-6" fill="currentColor" aria-hidden="true">
          <path d="M12 2a10 10 0 0 0-8.94 14.6L2 22l5.6-1.05A10 10 0 1 0 12 2Zm0 2a8 8 0 0 1 6.86 12.05l-.23.37A8 8 0 0 1 6.37 6.37 8 8 0 0 1 12 4Zm-3.17 3.75c-.18 0-.46.05-.7.36-.24.31-.92.9-.92 2.2 0 1.3.95 2.56 1.08 2.74.13.18 1.84 2.94 4.54 3.87 2.24.78 2.7.7 3.19.64.49-.06 1.57-.64 1.79-1.26.22-.62.22-1.16.16-1.26-.06-.1-.24-.16-.5-.28-.26-.12-1.57-.77-1.81-.85-.24-.09-.42-.13-.6.13-.18.27-.69.85-.84 1.03-.16.18-.31.2-.57.08-.26-.12-1.11-.41-2.13-1.32-.79-.7-1.33-1.57-1.48-1.83-.16-.27-.02-.41.1-.54.1-.1.26-.27.38-.4.12-.13.16-.22.24-.37.08-.15.04-.28-.02-.4-.06-.12-.56-1.37-.77-1.88-.2-.51-.4-.44-.58-.45Z" />
        </svg>
      </a>
      <a
        href={emailLink}
        aria-label="Email"
  className="group w-10 h-10 md:w-12 md:h-12 rounded-full bg-brand-sun hover:brightness-110 text-brand-ink flex items-center justify-center shadow-subtle relative overflow-hidden transition-all focus:outline-none focus:ring-2 focus:ring-brand-sun-soft/60"
      >
  <svg viewBox="0 0 24 24" className="w-5 h-5 md:w-6 md:h-6" fill="currentColor" aria-hidden="true">
          <path d="M5.75 4A3.75 3.75 0 0 0 2 7.75v8.5A3.75 3.75 0 0 0 5.75 20h12.5A3.75 3.75 0 0 0 22 16.25v-8.5A3.75 3.75 0 0 0 18.25 4H5.75Zm0 2.5h12.5c.69 0 1.25.56 1.25 1.25v.21l-7.13 4.06a1.25 1.25 0 0 1-1.24 0L4.5 7.96v-.21c0-.69.56-1.25 1.25-1.25Zm13.75 4.22v5.53c0 .69-.56 1.25-1.25 1.25H5.75c-.69 0-1.25-.56-1.25-1.25v-5.53l5.9 3.36c.99.56 2.21.56 3.2 0l5.9-3.36Z" />
        </svg>
      </a>
    </div>
  );
};

export default FloatingContactButtons;
