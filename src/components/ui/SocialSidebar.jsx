import React from 'react';

// Social media sidebar (Instagram, TikTok, Facebook) fixed on the left side
const socials = [
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/arriba.surfcamp.bali?igsh=YWQ4eWI3bHR5dTBs',
    svg: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor" aria-hidden="true">
        <path d="M7.75 2A5.75 5.75 0 0 0 2 7.75v8.5A5.75 5.75 0 0 0 7.75 22h8.5A5.75 5.75 0 0 0 22 16.25v-8.5A5.75 5.75 0 0 0 16.25 2h-8.5ZM7.5 4.5h9a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3h-9a3 3 0 0 1-3-3v-9a3 3 0 0 1 3-3Zm10.25 1.75a1 1 0 1 0 0 2 1 1 0 0 0 0-2ZM12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm0 1.5A2.5 2.5 0 1 1 12 15a2.5 2.5 0 0 1 0-5Z" />
      </svg>
    )
  },
  {
    name: 'TikTok',
    href: 'https://www.tiktok.com/@arriba.surf.camp?_t=ZN-8yqWK0uvAoQ&_r=1',
    svg: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor" aria-hidden="true">
        <path d="M13.75 2a1 1 0 0 0-1 1v11.25a2.75 2.75 0 1 1-2.75-2.75 1 1 0 1 0 0-2A4.75 4.75 0 1 0 14.75 14V7.93a6.96 6.96 0 0 0 3.5.95h.5a1 1 0 1 0 0-2h-.5A4.98 4.98 0 0 1 15.75 5V3a1 1 0 0 0-1-1h-1Z" />
      </svg>
    )
  },
  {
    name: 'Facebook',
    href: 'https://facebook.com/',
    svg: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor" aria-hidden="true">
        <path d="M13.5 9H16a1 1 0 1 0 0-2h-2.5V5.75c0-.69.56-1.25 1.25-1.25H16a1 1 0 1 0 0-2h-1.25A3.25 3.25 0 0 0 11.5 5.75V7H10a1 1 0 0 0 0 2h1.5v8.25a.75.75 0 0 1-.75.75H9a1 1 0 1 0 0 2h1.75a2.75 2.75 0 0 0 2.75-2.75V9Z" />
      </svg>
    )
  }
];

const SocialSidebar = () => {
  return (
    <aside
      className="fixed left-2 top-1/2 -translate-y-1/2 z-40 flex flex-col gap-2 p-3 rounded-xl bg-brand-foam/70 backdrop-blur-md border border-brand-sand-deep/70 shadow-subtle"
      aria-label="Social media links"
    >
      {socials.map(({ name, href, svg }) => (
        <a
          key={name}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={name}
          className="group relative w-10 h-12 flex items-center justify-center rounded-xl border-2 border-brand-sun hover:border-brand-sun-accent bg-white/90 hover:bg-brand-sun/10 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-brand-sun-accent transform hover:scale-105 transition-all duration-300 shadow-md hover:shadow-lg"
        >
          <span className="relative text-brand-ink group-hover:text-brand-sun-accent group-hover:scale-110 transition-all duration-300">
            {svg}
          </span>
        </a>
      ))}
    </aside>
  );
};

export default SocialSidebar;
