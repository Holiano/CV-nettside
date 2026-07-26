'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { ArrowDownCircle } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { fadeIn, staggerContainer } from '@/lib/motion';

export default function AboutPage() {
	return (
		<div className="py-16 md:py-24">
			<div className="container">
				<motion.div
					variants={staggerContainer()}
					initial="hidden"
					animate="show"
					className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
				>
					<motion.div variants={fadeIn('right', 0.3)} className="space-y-6">
						<h1 className="text-4xl font-bold">About Me</h1>
						<p className="text-lg text-muted-foreground">
							I am a computer engineering student at HVL specialising in machine learning. Co-founder and technical lead of an AI startup for the aquaculture industry, and incoming developer intern at Sparebanken Norge. I am seeking a summer or graduate role in software development or applied AI from 2027.
						</p>
						<div className="space-y-4">
							<h2 className="text-2xl font-semibold">My Journey</h2>
							<p className="text-muted-foreground">
								My path here wasn't a straight line. After studying Aquaculture Engineering at NTNU and attending Nordhordaland Folkehøgskule, I found my true calling in Computer Engineering. This non-linear route gave me a broader toolkit for tackling complex problems. Whether developing real-time multiplayer web apps or crafting AI-powered tools, I am driven to stay at the forefront of the technological shifts reshaping our world.
							</p>
						</div>
						<Button className="mt-6" asChild>
							<a href="/Julian_Hjartholm_Bosdal_CV.pdf" download>
								Download CV <ArrowDownCircle className="ml-2 h-4 w-4" />
							</a>
						</Button>
					</motion.div>

					<motion.div variants={fadeIn('left', 0.3)} className="relative h-[500px]">
						<Image
							src="/meg.png"
							alt="Professional photo"
							fill
							className="object-cover rounded-lg"
							sizes="(max-width: 768px) 100vw, 50vw"
						/>
					</motion.div>
				</motion.div>

				<motion.div
					variants={staggerContainer()}
					initial="hidden"
					animate="show"
					className="mt-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
				>
					<motion.div variants={fadeIn('up', 0.1)}>
						<Card className="h-full card-gradient">
							<CardContent className="p-6">
								<h3 className="text-xl font-semibold mb-4">Education</h3>
								<p className="text-muted-foreground">
									Pursuing a Bachelor in Computer Engineering at HVL in Bergen with an ML/AI specialisation — machine learning (DAT158) and deep learning (DAT255) — on top of core CS: distributed systems, algorithms & data structures, and databases. Grade average 4.42 / 5.0.
								</p>
							</CardContent>
						</Card>
					</motion.div>

					<motion.div variants={fadeIn('up', 0.2)}>
						<Card className="h-full card-gradient">
							<CardContent className="p-6">
								<h3 className="text-xl font-semibold mb-4">Experience</h3>
								<p className="text-muted-foreground">
									Co-founder and technical lead of AkvaJournal, incoming Developer Intern at Sparebanken Norge, Team Leader at Salt Bergen, former Volunteer Programmer at Fribyte, and former Event Organiser at ROOT Linjeforening.
								</p>
							</CardContent>
						</Card>
					</motion.div>

					<motion.div variants={fadeIn('up', 0.3)}>
						<Card className="h-full card-gradient">
							<CardContent className="p-6">
								<h3 className="text-xl font-semibold mb-4">Skills</h3>
								<p className="text-muted-foreground">
									Node.js, TypeScript, React/Next.js, Java, Spring Boot, SQL/PostgreSQL, and MongoDB, with tooling like Claude Code, Git, Docker, Playwright, and LLM APIs.								</p>
							</CardContent>
						</Card>
					</motion.div>
				</motion.div>
			</div>
		</div>
	);
}