"use client";
import { Card } from "@/components/Card";
import { SectionHeader } from "@/components/SectionHeader";
import StarIcon from '@/assets/icons/star.svg';
import Image from "next/image";
import BookCover from '@/assets/images/book-cover.png';
import BhopalMap from '@/assets/images/bhopal_map.png';
import { title } from "process";
import JSIcon from '@/assets/icons/square-js.svg';
import HtmlIcon from '@/assets/icons/html5.svg';
import CssIcon from '@/assets/icons/css3.svg';
import ReactIcon from '@/assets/icons/react.svg';
import GithubIcon from '@/assets/icons/github.svg';
import { TechIcon } from "@/components/TechIcon";
import { CardHeader } from "@/components/CardHeader";
import { ToolboxItems } from "@/components/ToolboxItems";
import { motion } from "framer-motion";
import { useRef } from "react";
const toolboxItems = [
  {
    title: 'JavaScript',
    iconType: JSIcon,
  },
  {
    title: 'HTML5',
    iconType: HtmlIcon,
  },
  {
    title: 'CSS3',
    iconType: CssIcon,
  },
  {
    title: 'React',
    iconType: ReactIcon,
  },
  {
    title: 'Github',
    iconType: GithubIcon,
  },
]

const hobbies = [
  {
    title: 'Fitness',
    emoji: '🏋️',
    left: '5%',
    top: '5%',
  },
  {
    title: 'Gaming',
    emoji: '🎮',
    left: '50%',
    top: '5%',
  },
  {
    title: 'Reading',
    emoji: '📚',
    left: '48%',
    top: '40%',
  },
  {
    title: 'Riding',
    emoji: '🏍️',
    left: '10%',
    top: '30%',
  },
]

export const AboutSection = () => {
  const constraintRef = useRef(null);

  return <section id="about" className="py-20 lg:py-28">
    <div className="container">
      <SectionHeader eyebrow="A Glimpse Into My World" title="About Me" description="Learn more about who I am, what I do, and what inspires me." />

      <div className="mt-20 flex flex-col gap-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-5 md:gap-8 lg:grid-cols-3">
          <Card className="h-[320px] md:col-span-2 lg:col-span-1">
            <CardHeader title="My Reads" description="Explore the books shaping my perspective." />
            <div className="w-40 mx-auto mt-2 md:mt-0 sm:pb-5">
              <Image src={BookCover} alt="Book Cover" />
            </div>
          </Card>

          <Card className="h-[320px] md:col-span-3 lg:col-span-2 group">
            <CardHeader title="My Toolbox" description="Explore the technologies I use to craft exceptional digital experiences." className="" />
            <ToolboxItems items={toolboxItems} className="" itemsWrapperClassName="animate-move-l [animation-duration:30s] hover:[animation-play-state:paused] group-hover:[animation-play-state:paused]" />
            <ToolboxItems items={toolboxItems} className="mt-6" itemsWrapperClassName="animate-move-r [animation-duration:15s] hover:[animation-play-state:paused] group-hover:[animation-play-state:paused]" />
          </Card>
        </div>

        <div className="grid gap-8 grid-cols-1 md:grid-cols-5 lg:grid-cols-3">
          <Card className="h-[320px] flex flex-col md:col-span-3 lg:col-span-2">
            <CardHeader title="Beyond The Code" description="When I&apos;m not coding, you&apos;ll find me exploring these passions." className="mb-8" />
            <div className="flex flex-wrap gap-3 justify-center">
              {hobbies.map((hobby) => (
                <div 
                  key={hobby.title} 
                  className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 rounded-full py-2 px-4 transition-all duration-300 hover:scale-105"
                >
                  <span className="text-lg">{hobby.emoji}</span>
                  <span className="font-medium text-white text-sm">{hobby.title}</span>
                </div>
              ))}
            </div>
          </Card>
          <Card className="h-[320px] md:col-span-2 lg:col-span-1">
            <CardHeader title="My Location" description="Based in the heart of India." />
            <div className="flex-1 flex items-center justify-center p-4">
              <Image src={BhopalMap} alt="Bhopal Map" className="w-full h-full object-cover rounded-lg" />
            </div>
          </Card>
        </div>
      </div>
    </div>
  </section>;
};

