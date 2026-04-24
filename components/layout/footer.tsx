import Link from 'next/link';
import { Linkedin, Github, Facebook, Instagram, Phone, Mail, MessageSquare } from 'lucide-react';

import { siteConfig } from '@/lib/constants';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

export function Footer() {
	const currentYear = new Date().getFullYear();

	const socialLinks = [
		{ icon: <Phone className="h-5 w-5" />, href: siteConfig.links.phone, label: 'Phone' },
		{ icon: <Mail className="h-5 w-5" />, href: siteConfig.links.email, label: 'Email' },
		{ icon: <Linkedin className="h-5 w-5" />, href: siteConfig.links.linkedin, label: 'LinkedIn' },
		{ icon: <Github className="h-5 w-5" />, href: siteConfig.links.github, label: 'GitHub' },
		{ icon: <MessageSquare className="h-5 w-5" />, href: siteConfig.links.whatsapp, label: 'WhatsApp' },
		{ icon: <Facebook className="h-5 w-5" />, href: siteConfig.links.facebook, label: 'Facebook' },
		{ icon: <Instagram className="h-5 w-5" />, href: siteConfig.links.instagram, label: 'Instagram' },
	];

	const navLinks = [
		{ title: 'About Me', href: '/about' },
		{ title: 'Education', href: '/education' },
		{ title: 'Skills', href: '/skills' },
		{ title: 'Experience', href: '/experience' },
		{ title: 'Projects', href: '/projects' },
	];

	return (
		<footer className="bg-card py-16 border-t mt-auto relative overflow-hidden">
			{/* Subtle gradient background for the footer to harmonize with the rest of the site */}
			<div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent pointer-events-none" />

			<div className="container px-4 mx-auto flex flex-col items-center text-center relative z-10">
				<Link href="/" className="inline-block mb-4">
					<span className="text-3xl font-bold text-gradient">Julian Bosdal</span>
				</Link>
				<p className="text-sm text-muted-foreground mb-10 max-w-md">
					Computer engineering student at HVL — Bergen, Norway.
				</p>

				<nav className="flex flex-wrap justify-center gap-x-8 gap-y-4 mb-10">
					{navLinks.map((link, index) => (
						<Link
							key={index}
							href={link.href}
							className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
						>
							{link.title}
						</Link>
					))}
				</nav>

				<div className="flex flex-wrap justify-center gap-3 mb-10">
					{socialLinks.map((link, index) => (
						<Button 
							key={index} 
							size="icon" 
							variant="outline" 
							className="rounded-full hover:bg-primary/10 hover:text-primary hover:border-primary/50 transition-all duration-300" 
							asChild
						>
							<Link href={link.href} aria-label={link.label} target="_blank" rel="noreferrer">
								{link.icon}
							</Link>
						</Button>
					))}
				</div>

				<Separator className="w-full max-w-4xl mb-8 opacity-50" />

				<p className="text-sm text-muted-foreground">
					© {currentYear} Julian Hjartholm Bosdal. All rights reserved.
				</p>
			</div>
		</footer>
	);
}