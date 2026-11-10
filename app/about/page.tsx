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
							I&apos;m a computer engineering student at HVL in Bergen, finishing in 2027. I like taking new technology and making it useful for real people. Right now I&apos;m an intern at Sparebanken Norge, where I help bring AI and new ideas into the bank. On the side I&apos;m building MerTid, a B2B startup that aims to help small businesses use AI safely, and I co-founded AkvaJournal. From 2027 I&apos;m looking for a consultant role in Bergen where I can work closely with clients and help them use AI safely and get real value out of it.
						</p>
						<div className="space-y-4">
							<h2 className="text-2xl font-semibold">My Journey</h2>
							<p className="text-muted-foreground">
								My path here wasn&apos;t a straight line. I started out studying aquaculture at NTNU, and I&apos;ve worked on a fish farm, in elderly care and in a warehouse. I also spent two years at a folk high school before I found my way to computer engineering. Those years taught me how to talk with all kinds of people and to understand a problem properly before trying to solve it. I still work that way. In Cape Town this autumn, I spent my time in small shops talking to the owners, and what they told us changed what we built.
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
									Bachelor in Computer Engineering at HVL in Bergen, with courses in machine learning and deep learning. Grade average 4.42 / 5.0. This autumn I also took part in a two-week entrepreneurship bootcamp at the University of Cape Town.
								</p>
							</CardContent>
						</Card>
					</motion.div>

					<motion.div variants={fadeIn('up', 0.2)}>
						<Card className="h-full card-gradient">
							<CardContent className="p-6">
								<h3 className="text-xl font-semibold mb-4">Experience</h3>
								<p className="text-muted-foreground">
									Intern at Sparebanken Norge, founder of MerTid, co-founder of AkvaJournal and team leader for 24 volunteers at Salt Bergen. Before that I built websites for clients at Fribyte and organised events for IT students at ROOT.
								</p>
							</CardContent>
						</Card>
					</motion.div>

					<motion.div variants={fadeIn('up', 0.3)}>
						<Card className="h-full card-gradient">
							<CardContent className="p-6">
								<h3 className="text-xl font-semibold mb-4">Skills</h3>
								<p className="text-muted-foreground">
									Communication and pitching, customer interviews, leading teams, project management and problem-solving. I know how to use AI in practice and how to do it with privacy and security in mind, and I pick up new tools quickly.
								</p>
							</CardContent>
						</Card>
					</motion.div>
				</motion.div>
			</div>
		</div>
	);
}