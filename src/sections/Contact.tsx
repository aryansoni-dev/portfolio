import ArrowIcon from '@/assets/icons/arrow-up-right.svg';
import grainImg from '@/assets/images/grain.jpg';

export const ContactSection = () => {
  return <section id="contact" className="py-16 pt-12 lg:py-24 lg:pt-20">
    <div className="container">
      <div className="bg-gradient-to-r from-emerald-300 to-sky-400 text-gray-900 py-8 px-10 rounded-3xl text-center relative overflow-hidden z-0 md:text-left">
        <div className="absolute inset-0 opacity-5 -z-10" style={{ backgroundImage: `url(${grainImg.src})` }} ></div>
        <div className='flex flex-col gap-8 items-center md:flex-row md:gap-16'>
          <div>
            <h2 className="font-serif text-2xl md:text-3xl">Let&apos;s create something amazing together</h2>
            <p className="text-sm mt-2 md:text-base">
              Ready to bring your next project to life? Let&apos;s connect and discuss how I can help you achieve your goals.
            </p>
          </div>
          <div>
            <a 
              href="mailto:aryansoni.dev.23@gmail.com" 
              className="text-white bg-gray-900 inline-flex items-center px-6 h-12 rounded-xl gap-2 mt-8 w-max border border-gray-900 transition-all duration-500 hover:bg-emerald-600 hover:border-emerald-600 hover:shadow-2xl transform hover:scale-110"
            >
              <span className="font-semibold">Contact Me</span>
              <ArrowIcon className="size-4" />
            </a>
          </div>

        </div>

      </div>

    </div>
  </section>;
};
