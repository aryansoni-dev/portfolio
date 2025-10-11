"use client";
import ArrowIcon from '@/assets/icons/arrow-up-right.svg';

const footerLinks = [
  {
    title: 'GitHub',
    href: 'https://github.com/aryansoni-dev', // Test with working GitHub URL first
  },
  // {
  //   title: 'YouTube',
  //   href: 'https://youtube.com/', // Test with working YouTube URL first
  // },
  {
    title: 'LinkedIn',
    href: 'https://linkedin.com/in/aryan-soni-dev', // Test with working LinkedIn URL first
  },
  {
    title: 'Instagram',
    href: 'https://instagram.com/aryan.soni_ig', // Test with working Instagram URL first
  },
]

export const Footer = () => {
  return <footer className='relative overflow-x-clip'>
    <div className="absolute h-[400px] w-[1600px] bottom-0 left-1/2 -translate-x-1/2 bg-emerald-300/30 [mask-image:radial-gradient(50%_50%_at_bottom_center,black,transparent)] -z-10"></div>
    <div className="container">
      <div className='border-t border-white/15 py-6 text-sm flex flex-col items-center gap-8 md:flex-row justify-between relative z-10 pointer-events-auto'>
        <div className='text-white/40'>&copy; 2025. All rights reserved.</div>
        <nav className='flex flex-col items-center gap-8 md:flex-row pointer-events-auto'>
          {footerLinks.map(link => (
            <a 
              key={link.title} 
              href={link.href} 
              target="_blank" 
              rel="noopener noreferrer"
              className='inline-flex items-center gap-1.5 text-white/60 transition-all duration-300 hover:text-emerald-400 hover:scale-110 cursor-pointer relative z-50 pointer-events-auto'
            >
              <span className='font-semibold pointer-events-none'>{link.title}</span>
              <ArrowIcon className="size-4 pointer-events-none" />
            </a>
          ))}
        </nav>

      </div>
    </div>
  </footer>;
};
