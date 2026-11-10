export const siteConfig = {
	name: 'Julian Hjartholm Bosdal',
	description:
		'Computer engineering student at HVL (graduating 2027), intern at Sparebanken Norge and founder of MerTid, a B2B startup that aims to help small businesses use AI safely.',
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
			'Bringing new ideas and AI solutions into a bank where security comes first',
			'Working within strict requirements for privacy and GDPR',
			'Acting as a link between designers and developers',
		],
		technologies: ['AI', 'Privacy/GDPR', 'Security Awareness', 'Cross-Team Communication'],
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
		title: 'Board Member, Aid Committee',
		company: 'Student-KRIK Bergen',
		location: 'Bergen, Norway',
		startDate: 'Nov 2025',
		endDate: 'Present',
		description: [
			'Raising money and awareness for Sports Crosses Borders, KRIK’s aid programme that uses sport to reach children and young people in Cambodia, Ecuador, Bolivia and Brazil',
			'Planning social events and fundraisers for students in Bergen',
		],
		technologies: ['Fundraising', 'Event Planning', 'Board Work', 'Volunteering'],
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
		technologies: ['Client Communication', 'Web Development', 'Teamwork'],
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
		title: 'MerTid',
		description:
			'My own B2B startup, still at the idea stage. I was one of 4 finalists pitching to juries at Haugekonferansen 2026, where I got 5 interested pilots in Bergen. The plan is to help small, values-driven businesses start using AI safely: find out where their time goes, set up the tools, train the staff and measure how many hours they save. Only 4 in 10 small businesses use AI today, compared to 8 in 10 large ones (SSB 2026), and that gap is what I want to close. The subscription pays for itself at around 8 saved hours a month. In each pilot we will measure the hours before and after, keep the data in the EU and always have a human approve what the AI produces.',
		image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg',
		tags: ['Startup', 'B2B', 'AI Implementation', 'Business Development', 'Pricing', 'Privacy/GDPR', 'Pitching'],
	},
	{
		title: 'Howl',
		description:
			'Built in ten days by a team of six at the ZERO2MVP bootcamp at UCT in Cape Town. Howl warns small shop owners about unrest and looting near their store, using news, social media and police data. Alerts come through Telegram, and there is an SOS button for emergencies. My part was user research, stakeholder contact and the pitch. I visited shops in Rondebosch and Salt River, where owners asked for a panic button before we had even mentioned it, so it went straight into the MVP. I also co-presented our investor pitch.',
		image: 'https://images.pexels.com/photos/264636/pexels-photo-264636.jpeg',
		tags: ['Startup', 'Customer Discovery', 'UX', 'Stakeholder Management', 'Pitching'],
	},
	{
		title: 'AkvaJournal',
		description:
			'I co-founded AkvaJournal and led the technical side. It was a voice app that lets fish health biologists log their observations hands-free out in the field. Speech is transcribed with NB-Whisper, and an LLM turns it into Word and Excel reports, all hosted in the EU. Before we built anything, we followed biologists on site to see where their current journal routine falls short. Incubated at VIS.',
		image: '/vela-ai.webp',
		tags: ['Startup', 'Technical Leadership', 'Customer Discovery', 'Applied AI', 'Privacy/GDPR'],
		link: 'https://akvajournal.no',
		repo: 'https://github.com/isacskogsholm1/IsacFiskehelse',
	},
	{
		title: 'Personal Portfolio & CV',
		description:
			'The website you are on now. I built the first version from scratch and have since improved it with help from AI. Hosted on GitHub Pages with my own domain.',
		image: '/portfolio.webp',
		tags: ['Web Design', 'AI Tools', 'Continuous Learning'],
		link: 'https://julianbosdal.me',
		repo: 'https://github.com/Holiano/CV-nettside',
	},
	{
		title: 'Poker - group project',
		description:
			'A multiplayer poker game we made as a group project. Java and Spring Boot on the backend, PostgreSQL for data and pages rendered on the server. We worked in Scrum and used Maven and Git.',
		image: 'https://images.pexels.com/photos/15793573/pexels-photo-15793573.jpeg',
		tags: ['Teamwork', 'Scrum', 'Project Management', 'Problem-Solving'],
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
		endDate: 'Jun 2027',
		gpa: '4.42/5.0',
		achievements: [
			'Grade average: 4.42 / 5.0',
			'Coursework in ML/AI: machine learning (DAT158) and deep learning (DAT255)',
			'Core CS: distributed systems, algorithms & data structures, databases',
		],
	},
	{
		degree: 'FutureMakers Bootcamp',
		field: 'Two-week entrepreneurship bootcamp (MakersForge ZERO2MVP)',
		institution: 'HVL & University of Cape Town',
		location: 'Cape Town, South Africa',
		startDate: 'Oct 2026',
		endDate: 'Oct 2026',
		achievements: [
			'Selected through application and interview',
			'Built Howl, a safety app for small shop owners, from idea to working MVP in ten days with a team of six',
			'Did customer interviews in local shops and co-presented our investor pitch',
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
