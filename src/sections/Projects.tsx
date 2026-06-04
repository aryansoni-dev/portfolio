"use client";
import lnctWebsite from "@/assets/images/lnct-website.png";
import drJsoni from "@/assets/images/dr-soni.png";
import coffeeCulture from "@/assets/images/coffee.png";
import snowflake from "@/assets/images/snowflake.png";
import fintrack from "@/assets/images/fintrack.png";
import scholarAI from "@/assets/images/scholarAI.png";
import pdslms from "@/assets/images/pds_lms.png";
import darkSaasLandingPage from "@/assets/images/dark-saas-landing-page.png";
import lightSaasLandingPage from "@/assets/images/light-saas-landing-page.png";
import aiStartupLandingPage from "@/assets/images/ai-startup-landing-page.png";
import Image from "next/image";
import CheckIcon from '@/assets/icons/check-circle.svg';
import ArrowUpRightIcon from '@/assets/icons/arrow-up-right.svg';
import GithubIcon from '@/assets/icons/github.svg';
import GrainImg from '@/assets/images/grain.jpg';
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";

const portfolioProjects = [
	{
		// company: "Acme Corp",
		year: "2024",
		title: "Snowflake Chat WebApp",
		results: [
			{ title: "A web app that allows users to chat and share files." },
			{ title: "Inspired by WhatsApp and Telegram." },
			// { title: "Increased mobile traffic by 35%" },
		],
		// link: "https://youtu.be/4k7IdSLxh6w", // Has link - show working button
		github: "https://github.com/aryansoni-dev/snowflake-chat-app",
		image: snowflake,
	},
	{
		// company: "Innovative Co",
		year: "2024",
		title: "Personal Finance Tracker",
		results: [
			{ title: "A full stack app that helps users track and manage finances with a modern UI." },
			// { title: "Expanded customer reach by 35%" },
			// { title: "Increased brand awareness by 15%" },
		],
		link: "https://aryansoni-dev-fintrack.freedev.app/",
		github: "https://github.com/aryansoni-dev/personal-finance-tracker",
		image: fintrack,
	},
	{
		// company: "Quantum Dynamics",
		year: "2025",
		title: "LNCT Website",
		results: [
			{ title: "A college hackathon website showcasing institutes and companies." },
			// { title: "Improved site speed by 50%" },
			// { title: "Increased mobile traffic by 35%" },
		],
		link: "https://lnct-website.pages.dev", // Has link - show working button
		github: "https://github.com/aryansoni-dev/LNCT_Website",
		image: lnctWebsite,
	},
	{
		// company: "Quantum Dynamics",
		year: "2026",
		title: "Client Website",
		results: [
			{ title: "A beautifully designed modern website for a life insurance advisor." },
			// { title: "Improved site speed by 50%" },
			// { title: "Increased mobile traffic by 35%" },
		],
		link: "https://drjsoni.in", // Has link - show working button
		github: "https://github.com/aryansoni-dev/LNCT_Website",
		image: drJsoni,
	},
	{
		// company: "Quantum Dynamics",
		year: "2026",
		title: "Coffee Website",
		results: [
			{ title: "A beautifully designed modern website for a coffee shop." },
			// { title: "Improved site speed by 50%" },
			// { title: "Increased mobile traffic by 35%" },
		],
		link: "	https://coffee-culture0.netlify.app/", // Has link - show working button
		github: "https://github.com/aryansoni-dev/LNCT_Website",
		image: coffeeCulture,
	},
	{
		// company: "Quantum Dynamics",
		year: "2026",
		title: "ScholarAI",
		results: [
			{ title: "A full stack smart academic learning platform for students." },
			// { title: "Improved site speed by 50%" },
			// { title: "Increased mobile traffic by 35%" },
		],
		// link: "https://lnct-website.pages.dev", // Has link - show working button
		github: "https://github.com/aryansoni-dev/ScholarAI",
		image: scholarAI,
	},
	// {
	// 	// company: "Quantum Dynamics",
	// 	year: "2025",
	// 	title: "DearDiary",
	// 	results: [
	// 		{ title: "A full stack journaling app that lets users capture daily life moments." },
	// 		// { title: "Improved site speed by 50%" },
	// 		// { title: "Increased mobile traffic by 35%" },
	// 	],
	// 	// No link - should show "Coming Soon"
	// 	github: "https://github.com/aryansoni-dev/dear-diary",
	// 	image: aiStartupLandingPage,
	// },
	{
		// company: "Quantum Dynamics",
		year: "2025",
		title: "Library Management System",
		results: [
			{ title: "A typical full stack library management system." },
			// { title: "Improved site speed by 50%" },
			// { title: "Increased mobile traffic by 35%" },
		],
		// No link - should show "Coming Soon"
		github: "https://github.com/aryansoni-dev/library-management-system",
		image: pdslms,
	},
];

export const ProjectsSection = () => {
	return (
		<section id="projects" className="pb-16 lg:py-24">
			<div className="container ">
				<SectionHeader title="Real-world Results" eyebrow="Featured Projects" description="See how I transformed concepts into engaging digital experiences." />

				<div className="flex-col flex mt-10 gap-20 md:mt-20">
					{portfolioProjects.map((project, projectIndex) => (
						<Card key={project.title} className="px-8 pt-8 pb-0 md:pt-12 md:px-10 lg:pt-16 lg:px-20 sticky" style={{ top: `calc(64px + ${projectIndex * 40}px)` }} >
							<div className="absolute inset-0 -z-10 opacity-5" style={{ backgroundImage: `url(${GrainImg.src})` }}></div>
							<div className=" lg:grid lg:grid-cols-2 lg:gap-16 ">
								<div className=" lg:pb-16">
									<div className="flex">
										<div className="bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex font-bold uppercase tracking-widest text-sm gap-2 bg-clip-text text-transparent">
											{/* <span>{project.company}</span> */}
											{/* <span>&bull;</span> */}
											<span>{project.year}</span>
										</div>
									</div>
									<h3 className="font-serif text-2xl mt-2 md:text-4xl md:mt-5">{project.title}</h3>
									<hr className=" border-t-2 border-white/5 mt-4 md:mt-5" />
									<ul className="flex flex-col gap-4 mt-4 md:mt-5">
										{project.results.map((result, index) => (
											<li key={`${project.title}-result-${index}`} className="flex gap-2 text-sm text-white/50 md:text-base">
												<CheckIcon className='size-5 md:size-6' />
												<span>{result.title}</span>
											</li>
										))}
									</ul>
									<div className="flex flex-col md:flex-row gap-4 mt-8">
										{project.link ? (
											<button 
												onClick={() => {
													window.open(project.link, '_blank', 'noopener,noreferrer');
												}}
												className="bg-white text-gray-950 h-12 w-full rounded-xl font-semibold inline-flex items-center justify-center gap-2 md:w-auto px-6 transition-all duration-500 hover:bg-emerald-400 hover:text-white hover:shadow-2xl transform hover:scale-110 relative z-[100] cursor-pointer"
											>
												<span>Visit Live Site</span>
												<ArrowUpRightIcon className='size-4' />
											</button>
										) : (
											<div className="bg-gray-600 text-gray-300 h-12 w-full rounded-xl font-semibold inline-flex items-center justify-center gap-2 md:w-auto px-6 cursor-not-allowed opacity-60">
												<span>Live Preview Coming Soon</span>
												<ArrowUpRightIcon className='size-4' />
											</div>
										)}
										{project.github && (
											<button 
												onClick={() => {
													window.open(project.github, '_blank', 'noopener,noreferrer');
												}}
												className="bg-white/10 text-white border border-white/20 h-12 w-full rounded-xl font-semibold inline-flex items-center justify-center gap-2 md:w-auto px-6 transition-all duration-500 hover:bg-white/20 hover:shadow-2xl transform hover:scale-110 relative z-[100] cursor-pointer text-nowrap"
											>
												<span>View Source</span>
												<GithubIcon className='size-5' />
											</button>
										)}
									</div>
									
								</div>
								<div className="relative">
									<Image src={project.image} alt={project.title} className="mt-8 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none" />
								</div>
							</div>
						</Card>
					))
					}
				</div>
			</div>
		</section>
	);
};
