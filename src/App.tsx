import { useEffect, useRef, useState, type FormEvent } from 'react'
import './App.css'

function App() {
	const [activeSection, setActiveSection] = useState('home')
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
	const YT_VIDEO_IDS = ['EZedaUShjcQ', 'OloaWHVb5Hs', '9wjiB3JgCcc', 'h-xRIv-uD3I', 'D5rPXYT3F_4', 'UA0jrwFMlX0']
	const VIDEO_ESSAY_IDS = ['954HzC-uxhA', 'OqU1Uu6MlIs', 'IOxhv9ipen8', '_UP7kIgl0Xk', 'HW68h4coN70', 'b_BXMLDnuH4']
	const contactNameRef = useRef<HTMLInputElement | null>(null)
	const formRef = useRef<HTMLFormElement | null>(null)
	const [isSubmitting, setIsSubmitting] = useState(false)
	const [submitState, setSubmitState] = useState<'idle' | 'success' | 'error'>('idle')

const handleContactSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		setIsSubmitting(true)
		setSubmitState('idle')
		const formElement = e.currentTarget
		const formData = new FormData(formElement)
        try {
			const response = await fetch('https://formspree.io/f/xkgzevgv', {
				method: 'POST',
				body: formData,
				headers: { Accept: 'application/json' },
			})
			if (response.ok) {
				setSubmitState('success')
				formElement.reset()
                window.setTimeout(() => setSubmitState('idle'), 2200)
			} else {
				setSubmitState('error')
                window.setTimeout(() => setSubmitState('idle'), 3500)
			}
		} catch (_) {
			setSubmitState('error')
            window.setTimeout(() => setSubmitState('idle'), 3500)
		} finally {
			setIsSubmitting(false)
		}
	}

	const navigateTo = (section: string) => {
		setActiveSection(section)
		setIsMobileMenuOpen(false)
	}

	const focusContactForm = () => {
		setIsMobileMenuOpen(false)
		document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
		window.setTimeout(() => {
			contactNameRef.current?.focus()
		}, 450)
	}

	useEffect(() => {
		const onKeyDown = (e: KeyboardEvent) => {
			if (e.key === 'Escape') setIsMobileMenuOpen(false)
		}
		window.addEventListener('keydown', onKeyDown)
		return () => window.removeEventListener('keydown', onKeyDown)
	}, [])

	const renderContent = () => {
		switch (activeSection) {
			case 'home':
				return (
					<section className="relative z-10">
						<div className="mx-auto max-w-6xl px-6 py-20 md:px-10">
							<div className="text-center mb-16">
								<h1 className="text-balance text-5xl font-extrabold tracking-tight md:text-7xl mb-6">
									Wik Edits
								</h1>
								<p className="text-pretty text-zinc-300 md:text-xl max-w-3xl mx-auto">
									Cinematic gaming edits that hit like a pentakill. Specialized in fast‑paced League of Legends montages, highlight reels, and story‑driven edits.
								</p>
							</div>
							
							{/* Showreel Video Section */}
							<div className="max-w-4xl mx-auto">
								<h2 className="text-2xl font-bold mb-6 text-center">Showreel</h2>
								<div className="relative aspect-video w-full overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900/60 shadow-2xl">
									{/* Try multiple embed methods for better quality */}
									<iframe
										className="w-full h-full"
										src="https://www.youtube.com/embed/_Y5WufLwvrE?vq=hd1080&modestbranding=1&rel=0&autoplay=0&cc_load_policy=0&iv_load_policy=3&fs=1&disablekb=0&enablejsapi=1&origin=https://wik-edits.vercel.app"
										title="Wik Edits Showreel"
										frameBorder="0"
										allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
										allowFullScreen
									/>
								</div>

							</div>

							{/* Quick Stats */}
							<div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
								<div className="text-center">
									<div className="text-3xl font-bold text-brand mb-2">4K</div>
									<div className="text-zinc-400">Workflow</div>
								</div>
								<div className="text-center">
									<div className="text-3xl font-bold text-brand mb-2">Sync</div>
									<div className="text-zinc-400">To Beat</div>
								</div>
								<div className="text-center">
									<div className="text-3xl font-bold text-brand mb-2">Sound</div>
									<div className="text-zinc-400">Design</div>
								</div>
							</div>

						{/* Testimonials */}
						<div className="mt-16">
							<h2 className="text-2xl font-bold mb-6 text-center">What creators say</h2>
							<div className="grid grid-cols-1 gap-6 md:grid-cols-2">
								{/* ScrubNoob */}
								<article className="rounded-xl border border-zinc-800 bg-zinc-950/70 p-6 shadow-xl">
									<header className="mb-4 flex items-center gap-3">
										<img src="/icons/scrub.jpeg" alt="ScrubNoob avatar" className="h-12 w-12 rounded-full object-cover ring-1 ring-zinc-800" loading="lazy" />
										<div>
											<div className="flex items-center gap-2">
												<h3 className="text-base font-semibold leading-none">ScrubNoob</h3>
												<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4 text-sky-400">
													<path d="M9 12.75 11.25 15l3.75-4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
												</svg>
											</div>
											<p className="text-xs text-zinc-400">129K subscribers</p>
										</div>
									</header>
									<blockquote className="relative text-zinc-200">
										<span aria-hidden className="absolute -left-3 -top-2 text-brand text-2xl">“</span>
										<p className="pl-2 text-sm leading-6">
											Wik created some absolutely banger montages for me and would highly recommend him for anyone thats looking to have their own montage. To this day i still get messages about the montages he worked on saying "this is the best montage ive ever seen" His editing is absolutely <em>*chefs kiss*</em>
										</p>
									</blockquote>
								</article>

								{/* Vars */}
								<article className="rounded-xl border border-zinc-800 bg-zinc-950/70 p-6 shadow-xl">
									<header className="mb-4 flex items-center gap-3">
										<img src="/icons/vars.jpeg" alt="Vars avatar" className="h-12 w-12 rounded-full object-cover ring-1 ring-zinc-800" loading="lazy" />
										<div>
											<div className="flex items-center gap-2">
												<h3 className="text-base font-semibold leading-none">Vars</h3>
												<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4 text-sky-400">
													<path d="M9 12.75 11.25 15l3.75-4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
												</svg>
											</div>
											<p className="text-xs text-zinc-400">208K subscribers</p>
										</div>
									</header>
									<blockquote className="relative text-zinc-200">
										<span aria-hidden className="absolute -left-3 -top-2 text-brand text-2xl">“</span>
										<p className="pl-2 text-sm leading-6">
											One of the most innovative editors I ever had. He always found something new to add to each project and never shirked quality, while still outputting videos for me very quickly. It was a pleasure working with him!
										</p>
									</blockquote>
								</article>
							</div>
						</div>
						</div>
					</section>
				)
			case 'video-essays':
				return (
					<section className="relative z-10">
						<div className="mx-auto max-w-6xl px-6 py-20 md:px-10">
						<h1 className="text-4xl font-bold mb-8 text-center">Video Essays</h1>
						<div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
							{VIDEO_ESSAY_IDS.map((videoId) => (
								<div key={videoId} className="overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900/60 shadow-2xl">
									<div className="relative aspect-video w-full">
										<iframe
											className="h-full w-full"
											src={`https://www.youtube.com/embed/${videoId}?vq=hd1080&modestbranding=1&rel=0&autoplay=0&fs=1`}
											title={`Video essay ${videoId}`}
											frameBorder="0"
											allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
											allowFullScreen
										/>
									</div>
								</div>
							))}
						</div>
						</div>
					</section>
				)
			case 'content-editing':
				return (
					<section className="relative z-10">
						<div className="mx-auto max-w-6xl px-6 py-20 md:px-10">
							<h1 className="text-4xl font-bold mb-8">Content Editing</h1>
							<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
								<div className="space-y-6">
									<h2 className="text-2xl font-semibold">Services</h2>
									<div className="space-y-4">
										<div className="flex items-start gap-3">
											<div className="w-2 h-2 bg-brand rounded-full mt-2 flex-shrink-0" />
											<div>
												<h3 className="font-medium">YouTube Optimization</h3>
												<p className="text-zinc-400 text-sm">Thumbnails, titles, descriptions, and SEO optimization</p>
											</div>
										</div>
										<div className="flex items-start gap-3">
											<div className="w-2 h-2 bg-brand rounded-full mt-2 flex-shrink-0" />
											<div>
												<h3 className="font-medium">Social Media Cuts</h3>
												<p className="text-zinc-400 text-sm">Instagram, TikTok, and Twitter-optimized content</p>
											</div>
										</div>
										<div className="flex items-start gap-3">
											<div className="w-2 h-2 bg-brand rounded-full mt-2 flex-shrink-0" />
											<div>
												<h3 className="font-medium">Stream Highlights</h3>
												<p className="text-zinc-400 text-sm">Twitch and YouTube stream compilation editing</p>
											</div>
										</div>
									</div>
								</div>
								<div className="rounded-xl border border-zinc-800 bg-zinc-950 p-6">
									<h3 className="font-semibold mb-4">Pricing</h3>
									<div className="space-y-3">
										<div className="flex justify-between">
											<span>Basic Edit (5-10 min)</span>
											<span className="text-brand">$50-100</span>
										</div>
										<div className="flex justify-between">
											<span>Standard Edit (10-20 min)</span>
											<span className="text-brand">$100-200</span>
										</div>
										<div className="flex justify-between">
											<span>Premium Edit (20+ min)</span>
											<span className="text-brand">$200+</span>
										</div>
									</div>
								</div>
							</div>
						</div>
					</section>
				)
			case 'montages':
				return (
					<section className="relative z-10">
						<div className="mx-auto max-w-6xl px-6 py-20 md:px-10">
							<h1 className="text-4xl font-bold mb-8 text-center">Montages</h1>
							
							
							{/* Montages grid (same format as Video Essays) */}
							<div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
								{YT_VIDEO_IDS.map((videoId) => (
									<div key={videoId} className="overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900/60 shadow-2xl">
										<div className="relative aspect-video w-full">
											<iframe
												className="h-full w-full"
												src={`https://www.youtube.com/embed/${videoId}?vq=hd1080&modestbranding=1&rel=0&autoplay=0&fs=1`}
												title={`Montage ${videoId}`}
												frameBorder="0"
												allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
												allowFullScreen
											/>
										</div>
									</div>
								))}
							</div>
						</div>
					</section>
				)
			case 'about':
				return (
					<section className="relative z-10">
						<div className="mx-auto max-w-4xl px-6 py-20 md:px-10">
							<h1 className="text-4xl font-bold mb-8 text-center">About Wik Edits</h1>
							<div className="space-y-8">
								<div className="text-center">
									<div className="w-24 h-24 rounded-full mx-auto mb-6 overflow-hidden ring-2 ring-brand/60">
										<img src="/icons/wik.jpg" alt="Wik avatar" className="h-full w-full object-cover" loading="lazy" />
									</div>
									<h2 className="text-2xl font-semibold mb-4">Professional Gaming Video Editor</h2>
									<p className="text-zinc-300 leading-relaxed">
										Passionate about creating cinematic gaming content that captures the intensity and excitement of competitive gameplay. 
										Specializing in League of Legends, FPS games, and competitive esports content.
									</p>
								</div>
								
								<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
									<div>
										<h3 className="text-xl font-semibold mb-4">Experience</h3>
										<ul className="space-y-3">
											<li className="flex items-start gap-3">
												<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 text-brand mt-0.5"><path fillRule="evenodd" d="M2.25 12a9.75 9.75 0 1 1 19.5 0 9.75 9.75 0 0 1-19.5 0Zm14.03-2.78a.75.75 0 0 0-1.06-1.06L10 13.69l-1.72-1.72a.75.75 0 1 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.06 0l5.75-5.75Z" clipRule="evenodd"/></svg>
												<div>
													<h4 className="font-medium">5+ Years</h4>
													<p className="text-zinc-400 text-sm">Video editing experience</p>
												</div>
											</li>
											<li className="flex items-start gap-3">
												<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 text-brand mt-0.5"><path fillRule="evenodd" d="M2.25 12a9.75 9.75 0 1 1 19.5 0 9.75 9.75 0 0 1-19.5 0Zm14.03-2.78a.75.75 0 0 0-1.06-1.06L10 13.69l-1.72-1.72a.75.75 0 1 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.06 0l5.75-5.75Z" clipRule="evenodd"/></svg>
												<div>
													<h4 className="font-medium">100+ Projects</h4>
													<p className="text-zinc-400 text-sm">Completed successfully</p>
												</div>
											</li>
											<li className="flex items-start gap-3">
												<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 text-brand mt-0.5"><path fillRule="evenodd" d="M2.25 12a9.75 9.75 0 1 1 19.5 0 9.75 9.75 0 0 1-19.5 0Zm14.03-2.78a.75.75 0 0 0-1.06-1.06L10 13.69l-1.72-1.72a.75.75 0 1 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.06 0l5.75-5.75Z" clipRule="evenodd"/></svg>
												<div>
													<h4 className="font-medium">Over 2 million views generated</h4>
													<p className="text-zinc-400 text-sm">Across client channels</p>
												</div>
											</li>
										</ul>
									</div>

									<div>
										<h3 className="text-xl font-semibold mb-4 md:text-right">Tools & Software</h3>
										<ul className="space-y-2 md:space-y-1 md:w-full md:max-w-md md:ml-auto">
											{['Adobe Premiere Pro', 'After Effects', 'Blender', 'FL Studio'].map((tool, index) => (
												<li key={index} className="flex items-center gap-3 md:grid md:grid-cols-[1fr_0.5rem_auto] md:gap-3 md:w-full">
													{/* spacer column for right alignment */}
													<span aria-hidden className="hidden md:block" />
													<div className="w-2 h-2 bg-brand rounded-full md:justify-self-center" />
													<span className="text-sm md:text-right">{tool}</span>
												</li>
											))}
										</ul>
									</div>
								</div>
								
								<div className="text-center pt-8">
							<button 
								onClick={focusContactForm}
								className="inline-flex items-center gap-3 rounded-full bg-brand px-6 py-3 text-sm font-semibold hover:bg-brand-dark transition-colors"
							>
								Get in Touch
							</button>
								</div>
							</div>
						</div>
					</section>
				)
			default:
				return null
		}
	}

	return (
		<main className="relative min-h-dvh overflow-hidden">
			<div className="pointer-events-none absolute inset-0 bg-grid-radial" />
			
			{/* Navigation Header */}
			<header className="relative z-20 flex items-center justify-between px-6 py-5 md:px-10 bg-black/80 backdrop-blur-sm border-b border-zinc-800">
				<button 
					onClick={() => navigateTo('home')}
					className="flex items-center gap-2 hover:opacity-80 transition-opacity cursor-pointer"
				>
					<img src="/icons/wik.jpg" alt="Wik Edits logo" className="h-8 w-8 rounded object-cover ring-1 ring-brand/60" />
					<span className="text-lg font-semibold tracking-wide">Wik Edits</span>
				</button>
				<nav className="hidden gap-6 text-sm md:flex">
					<button 
						onClick={() => navigateTo('home')}
						className={`hover:text-white transition-colors ${activeSection === 'home' ? 'text-brand' : 'text-zinc-300'}`}
					>
						Home
					</button>
					<button 
						onClick={() => navigateTo('video-essays')}
						className={`hover:text-white transition-colors ${activeSection === 'video-essays' ? 'text-brand' : 'text-zinc-300'}`}
					>
						Video Essays
					</button>
					<button 
						onClick={() => navigateTo('montages')}
						className={`hover:text-white transition-colors ${activeSection === 'montages' ? 'text-brand' : 'text-zinc-300'}`}
					>
						Montages
					</button>
					<button 
						onClick={() => navigateTo('content-editing')}
						className={`hover:text-white transition-colors ${activeSection === 'content-editing' ? 'text-brand' : 'text-zinc-300'}`}
					>
						Content Editing
					</button>
					<button 
						onClick={() => navigateTo('about')}
						className={`hover:text-white transition-colors ${activeSection === 'about' ? 'text-brand' : 'text-zinc-300'}`}
					>
						About
					</button>
				</nav>
				<div className="flex items-center gap-3">
					<button 
						onClick={focusContactForm}
						className="hidden md:inline-flex rounded-full bg-brand px-4 py-2 text-sm font-medium hover:bg-brand-dark transition-colors"
					>
						Get a quote
					</button>
					<button
						aria-label="Toggle menu"
						aria-expanded={isMobileMenuOpen}
						aria-controls="mobile-menu"
						onClick={() => setIsMobileMenuOpen((v) => !v)}
						className="inline-flex items-center justify-center rounded-md border border-zinc-800 bg-zinc-950 p-2 md:hidden hover:bg-zinc-900"
					>
						<span className="sr-only">Open menu</span>
						{!isMobileMenuOpen ? (
							/* Hamburger */
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
								<path fillRule="evenodd" d="M3.75 5.25a.75.75 0 0 1 .75-.75h15a.75.75 0 0 1 0 1.5H4.5a.75.75 0 0 1-.75-.75Zm0 6a.75.75 0 0 1 .75-.75h15a.75.75 0 0 1 0 1.5H4.5a.75.75 0 0 1-.75-.75Zm0 6a.75.75 0 0 1 .75-.75h15a.75.75 0 0 1 0 1.5H4.5a.75.75 0 0 1-.75-.75Z" clipRule="evenodd" />
							</svg>
						) : (
							/* X icon */
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
								<path fillRule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 1 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
							</svg>
						)}
					</button>
				</div>
			</header>

			{/* Mobile menu overlay */}
			{isMobileMenuOpen && (
				<div className="fixed inset-0 z-30 md:hidden" role="dialog" aria-modal="true" id="mobile-menu">
					<button className="absolute inset-0 h-full w-full bg-black/60 backdrop-blur-sm" onClick={() => setIsMobileMenuOpen(false)} aria-label="Close menu overlay" />
					<div className="absolute right-0 top-0 h-full w-72 max-w-[80%] border-l border-zinc-800 bg-zinc-950 p-6 shadow-2xl">
						<div className="mb-6 flex items-center justify-between">
							<span className="text-sm font-medium text-zinc-400">Menu</span>
							<button aria-label="Close menu" onClick={() => setIsMobileMenuOpen(false)} className="rounded-md p-2 hover:bg-zinc-900">
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
									<path fillRule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 1 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
								</svg>
							</button>
						</div>
						<nav className="flex flex-col gap-3">
							<button onClick={() => navigateTo('home')} className={`w-full rounded-md px-3 py-2 text-left text-sm hover:bg-zinc-900 ${activeSection === 'home' ? 'text-brand' : 'text-zinc-300'}`}>Home</button>
							<button onClick={() => navigateTo('video-essays')} className={`w-full rounded-md px-3 py-2 text-left text-sm hover:bg-zinc-900 ${activeSection === 'video-essays' ? 'text-brand' : 'text-zinc-300'}`}>Video Essays</button>
							<button onClick={() => navigateTo('montages')} className={`w-full rounded-md px-3 py-2 text-left text-sm hover:bg-zinc-900 ${activeSection === 'montages' ? 'text-brand' : 'text-zinc-300'}`}>Montages</button>
							<button onClick={() => navigateTo('content-editing')} className={`w-full rounded-md px-3 py-2 text-left text-sm hover:bg-zinc-900 ${activeSection === 'content-editing' ? 'text-brand' : 'text-zinc-300'}`}>Content Editing</button>
							<button onClick={() => navigateTo('about')} className={`w-full rounded-md px-3 py-2 text-left text-sm hover:bg-zinc-900 ${activeSection === 'about' ? 'text-brand' : 'text-zinc-300'}`}>About</button>
						</nav>
						<div className="mt-6">
							<button onClick={focusContactForm} className="inline-flex w-full items-center justify-center rounded-full bg-brand px-4 py-2 text-sm font-medium hover:bg-brand-dark">Get a quote</button>
						</div>
						</div>
					</div>
					)}

			{/* Main Content */}
			{renderContent()}

			{/* Contact Footer */}
			<footer id="contact" className="relative z-10 border-t border-zinc-900/60 bg-black/60 px-6 py-12 md:px-10">
				<div className="mx-auto max-w-6xl">
					<h2 className="text-xl font-semibold">Let's build your next montage</h2>
					<p className="mt-2 max-w-2xl text-sm text-zinc-400">Tell me the vibe, tracks, and clips. I'll handle the pacing, transitions, and hype.</p>
						<div className="relative mt-6">
							<div className={`transition-all duration-300 ${submitState !== 'idle' ? 'opacity-0 scale-95' : 'opacity-100'}`}>
								<form ref={formRef} onSubmit={handleContactSubmit} className="grid grid-cols-1 gap-4 md:grid-cols-3">
									<input ref={contactNameRef} name="name" id="name" autoComplete="name" required className="rounded-lg border border-zinc-800 bg-zinc-950 px-4 py-2 text-sm outline-none placeholder:text-zinc-500 focus:border-zinc-600 md:col-span-1" placeholder="Your name" />
									<input type="email" name="email" id="email" autoComplete="email" required className="rounded-lg border border-zinc-800 bg-zinc-950 px-4 py-2 text-sm outline-none placeholder:text-zinc-500 focus:border-zinc-600 md:col-span-1" placeholder="Email or Discord" />
									<input type="url" name="projectLink" id="projectLink" className="rounded-lg border border-zinc-800 bg-zinc-950 px-4 py-2 text-sm outline-none placeholder:text-zinc-500 focus:border-zinc-600 md:col-span-1" placeholder="Project link (Drive/YouTube)" />
									<textarea name="message" id="message" className="md:col-span-3 rounded-lg border border-zinc-800 bg-zinc-950 px-4 py-2 text-sm outline-none placeholder:text-zinc-500 focus:border-zinc-600" rows={4} placeholder="What are you looking for?" />
									<input type="hidden" name="_subject" value="New Wik Edits inquiry" />
									<button type="submit" disabled={isSubmitting} className="md:col-span-3 inline-flex w-full items-center justify-center rounded-lg bg-brand px-5 py-2 text-sm font-semibold hover:bg-brand-dark disabled:opacity-60">
										{isSubmitting ? 'Sending…' : 'Send'}
									</button>
								</form>
							</div>
                            {submitState !== 'idle' && (
								<div className="absolute inset-0 z-10 flex items-center justify-center">
									<div className={`rounded-xl border border-zinc-800 bg-zinc-950/80 px-6 py-5 text-sm shadow-2xl ${submitState === 'success' ? 'text-emerald-300' : 'text-red-300'}`}>
										<div className="flex items-center gap-3">
											<span className={`inline-flex h-8 w-8 items-center justify-center rounded-full ${submitState === 'success' ? 'bg-emerald-500/15 ring-1 ring-emerald-500/30' : 'bg-red-500/15 ring-1 ring-red-500/30'} animate-pulse-check`}>
												{submitState === 'success' ? (
													<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
														<path d="M9 12.75 11.25 15l3.75-4.5" />
														<path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Z" clipRule="evenodd" />
													</svg>
												) : (
													<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
														<path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-1.72 6.53a.75.75 0 1 0-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 1 0 1.06 1.06L12 13.06l1.72 1.72a.75.75 0 1 0 1.06-1.06L13.06 12l1.72-1.72a.75.75 0 1 0-1.06-1.06L12 10.94 10.28 8.78Z" clipRule="evenodd" />
													</svg>
												)}
											</span>
											<span>{submitState === 'success' ? 'Thanks! Your request was sent.' : 'Sorry, something went wrong. Please try again.'}</span>
										</div>
									</div>
                                </div>
                            )}
						</div>
					<p className="mt-6 text-xs text-zinc-500">© {new Date().getFullYear()} Wik Edits. All rights reserved.</p>
				</div>
			</footer>
		</main>
	)
}

export default App
