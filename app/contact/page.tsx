'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Send } from 'lucide-react';
import emailjs from '@emailjs/browser';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { fadeIn, staggerContainer } from '@/lib/motion';

const EMAILJS_SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || '';
const EMAILJS_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || '';
const EMAILJS_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || '';

export default function ContactPage() {
	const [formState, setFormState] = useState({
		name: '',
		email: '',
		subject: '',
		message: '',
	});
	const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		setFormState({
			...formState,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		
		if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
			console.error("EmailJS environment variables are missing.");
			setStatus('error');
			return;
		}

		setStatus('sending');
		try {
			await emailjs.send(
				EMAILJS_SERVICE_ID,
				EMAILJS_TEMPLATE_ID,
				{
					name: formState.name,
					from_name: formState.name,
					email: formState.email,
					title: formState.subject,
					message: formState.message,
				},
				EMAILJS_PUBLIC_KEY
			);
			setStatus('success');
			setFormState({ name: '', email: '', subject: '', message: '' });
			setTimeout(() => setStatus('idle'), 5000);
		} catch {
			setStatus('error');
			setTimeout(() => setStatus('idle'), 5000);
		}
	};

	return (
		<div className="py-16 md:py-24">
			<div className="container">
				<motion.div
					variants={staggerContainer()}
					initial="hidden"
					animate="show"
					className="max-w-4xl mx-auto"
				>
					<motion.div
						variants={fadeIn('down', 0.2)}
						className="text-center mb-12"
					>
						<h1 className="text-4xl font-bold mb-4">Get in Touch</h1>
						<p className="text-lg text-muted-foreground">
							Have a question or want to work together? Feel free to reach out!
						</p>
					</motion.div>

					<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
						<motion.div variants={fadeIn('right', 0.3)}>
							<Card className="card-gradient h-full">
								<CardContent className="p-6">
									<h2 className="text-2xl font-semibold mb-6">Contact Information</h2>
									<div className="space-y-4">
										<div className="flex items-center">
											<Phone className="h-5 w-5 text-primary mr-3" />
											<a href="tel:+4795454892" className="text-muted-foreground hover:text-primary transition-colors">+47 954 54 892</a>
										</div>
										<div className="flex items-center">
											<Mail className="h-5 w-5 text-primary mr-3" />
											<a href="mailto:Bosdalj@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">Bosdalj@gmail.com</a>
										</div>
										<div className="flex items-center">
											<MapPin className="h-5 w-5 text-primary mr-3" />
											<p className="text-muted-foreground">Bergen, Norway</p>
										</div>
									</div>
								</CardContent>
							</Card>
						</motion.div>

						<motion.div variants={fadeIn('left', 0.3)}>
							<form onSubmit={handleSubmit} className="space-y-4">
								<div>
									<Input
										placeholder="Your Name"
										name="name"
										value={formState.name}
										onChange={handleChange}
										required
										disabled={status === 'sending'}
									/>
								</div>
								<div>
									<Input
										type="email"
										placeholder="Your Email"
										name="email"
										value={formState.email}
										onChange={handleChange}
										required
										disabled={status === 'sending'}
									/>
								</div>
								<div>
									<Input
										placeholder="Subject"
										name="subject"
										value={formState.subject}
										onChange={handleChange}
										required
										disabled={status === 'sending'}
									/>
								</div>
								<div>
									<Textarea
										placeholder="Your Message"
										name="message"
										value={formState.message}
										onChange={handleChange}
										required
										className="min-h-[150px]"
										disabled={status === 'sending'}
									/>
								</div>
								<Button type="submit" className="w-full" disabled={status === 'sending'}>
									{status === 'sending' ? 'Sending...' : 'Send Message'} 
									{status !== 'sending' && <Send className="ml-2 h-4 w-4" />}
								</Button>
								{status === 'success' && (
									<p className="text-green-500 text-sm mt-2 text-center">Message sent successfully!</p>
								)}
								{status === 'error' && (
									<p className="text-red-500 text-sm mt-2 text-center">Failed to send the message. Please try again.</p>
								)}
							</form>
						</motion.div>
					</div>
				</motion.div>
			</div>
		</div>
	);
}