'use client';

import { useState } from 'react';

import { motion } from 'framer-motion';
import { Send } from 'lucide-react';
import emailjs from '@emailjs/browser';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { SectionHeader } from '@/components/ui/section-header';
import { fadeIn } from '@/lib/motion';

const EMAILJS_SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || '';
const EMAILJS_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || '';
const EMAILJS_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || '';

export function ContactPreview() {
	const [formState, setFormState] = useState({
		name: '',
		email: '',
		message: '',
	});
	const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

	const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		setFormState({
			...formState,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();

		if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
			console.error('EmailJS environment variables are missing.');
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
					title: 'Message from homepage',
					message: formState.message,
				},
				EMAILJS_PUBLIC_KEY
			);
			setStatus('success');
			setFormState({ name: '', email: '', message: '' });
			setTimeout(() => setStatus('idle'), 5000);
		} catch {
			setStatus('error');
			setTimeout(() => setStatus('idle'), 5000);
		}
	};

	return (
		<section className="py-16 md:py-24 bg-muted/30">
			<div className="container px-4">
				<SectionHeader
					title="Get In Touch"
					description="Interested in working together or have a question? Feel free to reach out!"
					className="text-center"
				/>

				<motion.div
					variants={fadeIn('up', 0.3)}
					initial="hidden"
					whileInView="show"
					viewport={{ once: true }}
					className="max-w-md mx-auto mt-10"
				>
					<form onSubmit={handleSubmit} className="space-y-4">
						<div>
							<Input
								name="name"
								placeholder="Your Name"
								value={formState.name}
								onChange={handleChange}
								required
								disabled={status === 'sending'}
							/>
						</div>
						<div>
							<Input
								name="email"
								type="email"
								placeholder="Your Email"
								value={formState.email}
								onChange={handleChange}
								required
								disabled={status === 'sending'}
							/>
						</div>
						<div>
							<Textarea
								name="message"
								placeholder="Your Message"
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
							<p className="text-green-500 text-sm text-center">Message sent successfully!</p>
						)}
						{status === 'error' && (
							<p className="text-red-500 text-sm text-center">Failed to send. Please try again.</p>
						)}
					</form>
				</motion.div>
			</div>
		</section>
	);
}