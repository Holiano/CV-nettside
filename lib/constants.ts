export const siteConfig = {
	name: 'Julian Hjartholm Bosdal',
	description:
		'Combining a strong academic foundation with hands-on development experience',
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
			title: 'Skills',
			href: '/skills',
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
		email: 'mailto:Bosdalj@gmail.com',
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
			'Built and maintained client websites',
			'Gained hands-on experience with Git, Docker, and server management',
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
			'Personal website and CV built from scratch at first, then using AI-assisted development. Inspiration found in the README file',
		image: 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg',
		tags: ['HTML', 'CSS', 'JavaScript', 'GitHub Pages', 'Claude Code', 'Claude Design'],
		link: 'https://julianbosdal.me',
		repo: 'https://github.com/Holiano/CV-nettside',
	},
	{
		title: 'Poker - group project',
		description:
			'Multiplayer Texas Hold\'em web app with a Java backend, PostgreSQL database, and server-side rendered pages. Group leader and managed collaboration using Maven and Git.',
		image: 'https://images.pexels.com/photos/6664190/pexels-photo-6664190.jpeg',
		tags: ['Java', 'Spring Boot', 'PostgreSQL', 'Maven', 'Tomcat'],
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
		institution: 'HVL – Western Norway University',
		location: 'Bergen, Norway',
		startDate: 'Aug 2024',
		endDate: 'Jul 2027',
		gpa: '4.67/5.0',
		achievements: [
			'Grade average: A, A, A, A, A, A, A, B, C across 9 graded courses',
			'Java OOP, database design (SQL + MongoDB), data structures & algorithms',
			'Computer networks, TCP/IP, distributed systems, Linux, web dev, UML',
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

export type Certificate = {
	title: string;
	issuer: string;
	date: string;
	id?: string;
	url?: string;
	pdf?: string;
};

export const certificates: Certificate[] = [];

export type Skill = {
	name: string;
	level: number; // 1-10
	category: 'technical' | 'software' | 'soft' | 'language';
};

export const skills: Skill[] = [
	// Technical Skills
	{ name: 'Git', level: 9, category: 'technical' },
	{ name: 'Prompt Engineering', level: 8, category: 'technical' },
	{ name: 'SQL / Database Design', level: 8, category: 'technical' },
	{ name: 'AI/LLM Integration', level: 7, category: 'technical' },

	// Soft Skills
	{ name: 'Team Leadership', level: 8, category: 'soft' },
	{ name: 'Problem Solving', level: 9, category: 'soft' },
	{ name: 'Analytical Thinking', level: 8, category: 'soft' },
	{ name: 'Volunteering', level: 9, category: 'soft' },

	// Languages
	{ name: 'Norwegian', level: 10, category: 'language' },
	{ name: 'English', level: 9, category: 'language' },
	{ name: 'German', level: 4, category: 'language' },
];

export type BlogPost = {
	title: string;
	excerpt: string;
	date: string;
	author: string;
	image: string;
	slug: string;
};

export const blogPosts: BlogPost[] = [];