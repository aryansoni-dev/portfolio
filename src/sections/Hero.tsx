import memojiImage from '@/assets/images/memoji-computer.png';
import Image from 'next/image';
import ArrowDown from '@/assets/icons/arrow-down.svg';
import grainImg from '@/assets/images/grain.jpg';
import StarIcon from '@/assets/icons/star.svg';
import { HeroOrbit } from '@/components/HeroOrbit';
import SparkleIcon from '@/assets/icons/sparkle.svg';

export const HeroSection = () => {
  return <div id="home" className='py-32 md:py-48 lg:py-60 relative z-0 overflow-x-clip'>

    <div className='absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)]'>
      <div className='absolute inset-0 -z-30 opacity-5' style={{ backgroundImage: `url(${grainImg.src})` }}></div>
      <div className='hero-ring size-[620px]'></div>
      <div className='hero-ring size-[820px]'></div>
      <div className='hero-ring size-[1028px]'></div>
      <div className='hero-ring size-[1220px]'></div>

      <HeroOrbit size={430} rotation={-14} orbit orbitDuration='30s' spin spinDuration='3s' >
        <SparkleIcon className='size-8 text-emerald-300/20' />
      </HeroOrbit>
      <HeroOrbit size={440} rotation={79} orbit orbitDuration='32s' spin spinDuration='3s' >
        <SparkleIcon className='size-5 text-emerald-300/20' />
      </HeroOrbit>
      <HeroOrbit size={520} rotation={-41} orbit orbitDuration='34s' >
        <div className='size-2 text-emerald-300/20 rounded-full' />
      </HeroOrbit>
      <HeroOrbit size={530} rotation={178} orbit orbitDuration='36s' spin spinDuration='3s' >
        <SparkleIcon className='size-5 text-emerald-300/20' />
      </HeroOrbit>
      <HeroOrbit size={550} rotation={20} orbit orbitDuration='38s' spin spinDuration='6s' >
        <StarIcon className='size-12 text-emerald-300' />
      </HeroOrbit>
      <HeroOrbit size={590} rotation={98} orbit orbitDuration='40s' spin spinDuration='6s' >
        <StarIcon className='size-8 text-emerald-300' />
      </HeroOrbit>
      <HeroOrbit size={650} rotation={-5} orbit orbitDuration='42s' >
        <div className='size-2 text-emerald-300/20 rounded-full' />
      </HeroOrbit>
      <HeroOrbit size={710} rotation={144} orbit orbitDuration='44s' spin spinDuration='3s' >
        <SparkleIcon className='size-14 text-emerald-300/20' />
      </HeroOrbit>
      <HeroOrbit size={720} rotation={20} orbit orbitDuration='46s' >
        <div className='size-3 text-emerald-300/20 rounded-full' />
      </HeroOrbit>
      <HeroOrbit size={800} rotation={-72} orbit orbitDuration='48s' spin spinDuration='6s' >
        <StarIcon className='size-28 text-emerald-300' />
      </HeroOrbit>
    </div>
    {/* <div className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'>
      <div className='size-[800px] animate-spin [animation-duration:30s]'>
        <div className='inline-flex animate-spin [animation-duration:5s]'>
          <StarIcon className='size-28 text-emerald-300' />
        </div>
      </div>
    </div> */}

    <div className="container ">
      <div className='flex flex-col items-center '>
        <Image src={memojiImage} className='size-[100px]' alt="Person peeking from behind the laptop" />
        <div className='bg-gray-950 border-gray-800 px-4 py-1.5 inline-flex items-center gap-4 rounded-lg'>
          <div className='bg-green-500 size-2.5 rounded-full relative'>
            <div className='bg-green-500 absolute inset-0 rounded-full animate-ping-large'></div>
          </div>
          <div className='text-sm font-medium'>Available for new projects</div>
        </div>

      </div>
      <div className='max-w-lg mx-auto'>
        <h1 className='font-serif text-4xl md:text-6xl text-center font-bold text-white mt-2 mb-4'>Aryan Soni</h1>
        <h2 className='font-serif text-2xl md:text-4xl text-center tracking-wide text-white/80 mb-6'>Building Exceptional User Experiences</h2>
        <p className='mt-4 text-center text-white/60 md:text-lg'>
          I specialize in transforming designs into functional, high-performing web apps. Let&apos;s discuss your next project.
        </p>
      </div>
      <div className='flex flex-col md:flex-row justify-center items-center mt-8 gap-4'>
        <a 
          href="#projects" 
          className='inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl bg-transparent transition-all duration-500 hover:bg-emerald-500/20 hover:border-emerald-400 hover:shadow-lg transform hover:scale-105'
        >
          <span className='font-semibold'>Explore My Work</span>
          <ArrowDown className='size-4' />
        </a>
        <a 
          href="#contact" 
          className='inline-flex items-center gap-2 border border-white bg-white text-gray-900 h-12 px-6 rounded-xl transition-all duration-500 hover:bg-emerald-100 hover:shadow-xl transform hover:scale-105'
        >
          <span>🤝</span>
          <span>Let&apos;s Connect</span>
        </a>
      </div>
    </div>;
  </div>
};
