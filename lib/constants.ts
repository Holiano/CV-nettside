export const siteConfig = {
	name: 'Julian Hjartholm Bosdal',
	description:
		'Computer engineering student at HVL (graduating 2027) with machine learning and deep learning coursework — developer intern at Sparebanken Norge working on the bank’s design system, and co-founder of an aquaculture AI startup',
	mainNav: [
		{
			title: 'Home',
			href: '/',
		},
		{
			title: 'About',
			href: '/about',
		},
		{
			title: 'Education',
			href: '/education',
		},
		{
			title: 'Experience',
			href: '/experience',
		},
		{
			title: 'Projects',
			href: '/projects',
		},
	],
	links: {
		github: 'https://github.com/Holiano',
		linkedin: 'https://linkedin.com/in/julian-bosdal',
		facebook: 'https://www.facebook.com/Holianox/',
		instagram: 'https://www.instagram.com/julianbosdal/',
		whatsapp: 'https://wa.me/4795454892',
		email: 'mailto:bosdalj@gmail.com',
		phone: 'tel:+4795454892',
	},
};

export type Experience = {
	title: string;
	company: string;
	location: string;
	startDate: string;
	endDate: string;
	description: string[];
	technologies: string[];
};

export const experiences: Experience[] = [
	{
		title: 'Developer Intern',
		company: 'Sparebanken Norge',
		location: 'Bergen, Norway',
		startDate: 'Sep 2026',
		endDate: 'Dec 2026',
		description: [
			'Part of the team behind Splash, the component library that keeps the bank’s website and app visually consistent',
			'Helped build a visual discovery page, so designers can browse components instead of scrolling long lists by name',
			'Working on templates for common component sets and a Figma-to-code flow using only Splash components, to shorten the path from idea to prototype',
			'Acting as a link between designers and developers',
		],
		technologies: ['Design Systems', 'Component Library', 'Figma', 'Frontend Development'],
	},
	{
		title: 'Team Leader',
		company: 'Salt Bergen (Church)',
		location: 'Bergen, Norway',
		startDate: 'Mar 2026',
		endDate: 'Present',
		description: [
			'Leading a team of 24 with full responsibility every third weekend',
			'Coordinating preparations, welcoming guests, delegating tasks',
		],
		technologies: ['Leadership', 'Event Organisation', 'Team Management'],
	},
	{
		title: 'Volunteer Programmer',
		company: 'Fribyte',
		location: 'Bergen, Norway',
		startDate: 'Aug 2024',
		endDate: 'Aug 2025',
		description: [
			'Built and maintained client websites for external clients',
			'Worked with Git, Docker, and server management',
		],
		technologies: ['Git', 'Docker', 'Web Development', 'Server Management'],
	},
	{
		title: 'Event Organiser',
		company: 'ROOT Linjeforening, HVL',
		location: 'Bergen, Norway',
		startDate: 'Aug 2024',
		endDate: 'Jun 2025',
		description: [
			'Organised social events for IT students including bouldering, volleyball, paintball and tournaments',
			'Connected IT students across campuses',
		],
		technologies: ['Event Planning', 'Community Building', 'Student Engagement'],
	},
	{
		title: 'Vice President, Student Council',
		company: 'Nordhordaland FHS',
		location: 'Frekhaug, Norway',
		startDate: 'Sep 2022',
		endDate: 'Apr 2023',
		description: [
			'Co-led a 6-person team that ran student events and bridged the gap between students and teachers',
		],
		technologies: ['Leadership', 'Event Planning', 'Communication'],
	},
	{
		title: 'Warehouse Operator',
		company: 'Eurosupply AS',
		location: 'Flaktveit, Norway',
		startDate: 'Jun 2023',
		endDate: 'Aug 2024',
		description: [
			'Managed logistics for cruise ship supply',
			'Operated forklifts, inventory & shipping',
		],
		technologies: ['Logistics', 'Inventory Management'],
	},
	{
		title: 'Health Care Worker',
		company: 'Gulen Kommune / Trondheim Kommune',
		location: 'Dalsøyra/Brekke, Norway',
		startDate: 'Jun 2021',
		endDate: 'Aug 2025',
		description: [
			'Elderly care at Gulen Kommune',
			'Support for individuals with autism & Down syndrome at Trondheim Kommune',
		],
		technologies: ['Healthcare', 'Patient Care'],
	},
	{
		title: 'Aquaculture Technician',
		company: 'Mowi Norway AS',
		location: 'Hjartholm, Norway',
		startDate: 'Jun 2021',
		endDate: 'Aug 2022',
		description: [
			'Monitored fish health, feeding schedules, equipment, and environmental compliance',
		],
		technologies: ['Aquaculture', 'Environmental Monitoring'],
	},
	{
		title: 'Cafe Assistant',
		company: 'Norled AS',
		location: 'Lavik/Oppedal, Norway',
		startDate: 'Jun 2021',
		endDate: 'Aug 2021',
		description: [
			'Customer service and food sales on ferry routes',
			'High-volume, time-pressured environment',
		],
		technologies: ['Customer Service'],
	},
];

export type Project = {
	title: string;
	description: string;
	image: string;
	tags: string[];
	link?: string;
	repo?: string;
};

export const projects: Project[] = [
	{
		title: 'Personal Portfolio & CV',
		description:
			'Personal website and CV built from scratch, then refined with AI assistance; deployed via GitHub Pages with custom domain.',
		image: '/portfolio.webp',
		tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'GitHub Pages', 'Claude Code', 'Claude Design'],
		link: 'https://julianbosdal.me',
		repo: 'https://github.com/Holiano/CV-nettside',
	},
	{
		title: 'AkvaJournal — Startup',
		description:
			'Co-founder and technical lead of a voice-first PWA for hands-free field registration: Norwegian speech-to-text (NB-Whisper on Modal) with LLM structuring into Word/Excel reports, on a GDPR-compliant EU-hosted stack. Ran customer discovery in a conservative market — shadowed fish health biologists on site and mapped the friction in their existing journal workflow. Incubated at VIS.',
		image: '/vela-ai.webp',
		tags: ['Startup', 'Node.js', 'PWA', 'NB-Whisper/LLM', 'Supabase', 'Railway EU'],
		link: 'https://akvajournal.no',
		repo: 'https://github.com/isacskogsholm1/IsacFiskehelse',
	},
	{
		title: 'Poker - group project',
		description:
			'Built a multiplayer web app with Java backend, PostgreSQL database, and server-side rendered pages. Managed collaboration via Scrum, Maven and Git.',
		image: 'https://images.pexels.com/photos/15793573/pexels-photo-15793573.jpeg',
		tags: ['Java', 'Spring Boot', 'PostgreSQL', 'Maven', 'Tomcat', 'Scrum'],
		repo: 'https://github.com/Holiano/poker-royale',
	},
];

export type Education = {
	degree: string;
	field: string;
	institution: string;
	location: string;
	startDate: string;
	endDate: string;
	gpa?: string;
	achievements: string[];
};

export const education: Education[] = [
	{
		degree: 'Bachelor',
		field: 'Computer Engineering',
		institution: 'HVL – Western Norway University of Applied Sciences',
		location: 'Bergen, Norway',
		startDate: 'Aug 2024',
		endDate: 'Jul 2027',
		gpa: '4.42/5.0',
		achievements: [
			'Grade average: 4.42 / 5.0',
			'Coursework in ML/AI: machine learning (DAT158) and deep learning (DAT255)',
			'Core CS: distributed systems, algorithms & data structures, databases',
		],
	},
	{
		degree: 'FutureMakers Bootcamp',
		field: 'Upcoming · Two-week entrepreneurship bootcamp',
		institution: 'HVL & University of Cape Town',
		location: 'Cape Town, South Africa',
		startDate: 'Oct 2026',
		endDate: 'Oct 2026',
		achievements: [
			'Selected through application and interview for an intensive bootcamp at UCT, working in cross-cultural venture teams on real-world challenges',
		],
	},
	{
		degree: 'Student & Stipendiat',
		field: 'Sport & Outdoor / Aqua',
		institution: 'Nordhordaland Folkehøgskule',
		location: 'Norway',
		startDate: 'Aug 2022',
		endDate: 'Jun 2024',
		achievements: [
			'Year 1: Aqua program – Vice president of the Student Council',
			'Year 2: Sport & Outdoor with staff responsibilities',
		],
	},
	{
		degree: 'Bachelor (30 credits)',
		field: 'Aquaculture Engineering',
		institution: 'NTNU',
		location: 'Trondheim, Norway',
		startDate: 'Aug 2021',
		endDate: 'Jun 2022',
		achievements: [],
	},
];
