import { useEffect, useRef, useState, type FormEvent } from 'react'
import './App.css'

function App() {
	const [activeSection, setActiveSection] = useState('home')
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
	const YT_VIDEO_IDS = ['EZedaUShjcQ', 'OloaWHVb5Hs', '9wjiB3JgCcc', 'h-xRIv-uD3I', 'D5rPXYT3F_4', 'UA0jrwFMlX0']
	const VIDEO_ESSAY_IDS = ['NzB9-GrfBx0', '954HzC-uxhA', 'OqU1Uu6MlIs', 'IOxhv9ipen8', '_UP7kIgl0Xk', 'HW68h4coN70']
	const CONTENT_EDITING_IDS = ['4_Gr3zXY7oY', 'A2U9e1wfuq0', 'xeAjHr2Az58', '6fmn6dl4zxE', 'zPtcFhrnTVY', 'JILqiNT8K6A', 'ftg5N3z44zo', 'VQN5WpmFrEQ']
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
									Wik
								</h1>
							</div>
							
							{/* Showreel Video Section */}
							<div className="max-w-4xl mx-auto">

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

							{/* Collaborators Section */}
							<div className="mt-16">
								<div className="flex flex-wrap justify-center items-center gap-10 opacity-80">
									<div className="flex flex-col items-center gap-3">
										<img src="/icons/LHC.jpg" alt="LastHitCreative" className="w-16 h-16 rounded-full object-cover ring-1 ring-zinc-800" loading="lazy" />
										<span className="text-base text-zinc-400">LastHitCreative</span>
									</div>
									<div className="flex flex-col items-center gap-3">
										<img src="/icons/vars.jpeg" alt="Vars" className="w-16 h-16 rounded-full object-cover ring-1 ring-zinc-800" loading="lazy" />
										<span className="text-base text-zinc-400">Vars</span>
									</div>
									<div className="flex flex-col items-center gap-3">
										<img src="/icons/sunny.jpg" alt="SunnySplosion" className="w-16 h-16 rounded-full object-cover ring-1 ring-zinc-800" loading="lazy" />
										<span className="text-base text-zinc-400">SunnySplosion</span>
									</div>
									<div className="flex flex-col items-center gap-3">
										<img src="/icons/MegalodonVT.jpg" alt="MegalodonVT" className="w-16 h-16 rounded-full object-cover ring-1 ring-zinc-800" loading="lazy" />
										<span className="text-base text-zinc-400">MegalodonVT</span>
									</div>
									<div className="flex flex-col items-center gap-3">
										<img src="/icons/BamBaeYoh.jpg" alt="BamBaeYoh" className="w-16 h-16 rounded-full object-cover ring-1 ring-zinc-800" loading="lazy" />
										<span className="text-base text-zinc-400">BamBaeYoh</span>
									</div>
									<div className="flex flex-col items-center gap-3">
										<img src="/icons/scrub.jpeg" alt="ScrubNoob" className="w-16 h-16 rounded-full object-cover ring-1 ring-zinc-800" loading="lazy" />
										<span className="text-base text-zinc-400">ScrubNoob</span>
									</div>
									<div className="flex flex-col items-center gap-3">
										<img src="/icons/polstat.jpg" alt="PolsatGames" className="w-16 h-16 rounded-full object-cover ring-1 ring-zinc-800" loading="lazy" />
										<span className="text-base text-zinc-400">PolsatGames</span>
									</div>
								</div>
							</div>

							{/* Testimonials */}
							<div className="mt-16">

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
						<div className="grid grid-cols-1 gap-6 md:grid-cols-2">
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
							<h1 className="text-4xl font-bold mb-8 text-center">Content Editing</h1>
							<div className="grid grid-cols-1 gap-6 md:grid-cols-2">
								{CONTENT_EDITING_IDS.map((videoId) => (
									<div key={videoId} className="overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900/60 shadow-2xl">
										<div className="relative aspect-video w-full">
											<iframe
												className="h-full w-full"
												src={`https://www.youtube.com/embed/${videoId}?vq=hd1080&modestbranding=1&rel=0&autoplay=0&fs=1`}
												title={`Content editing ${videoId}`}
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
			case 'shorts':
				return (
					<section className="relative z-10">
						<div className="mx-auto max-w-6xl px-6 py-20 md:px-10">
							<h1 className="text-4xl font-bold mb-8 text-center">TikToks</h1>
							<div className="grid grid-cols-1 gap-6 md:grid-cols-3">
								<div className="overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900/60 shadow-2xl">
									<div className="relative aspect-[9/16] w-full">
										<iframe
											className="h-full w-full"
											src={`https://www.tiktok.com/embed/v2/7478756656571174190`}
											title={`TikTok 7478756656571174190`}
											frameBorder="0"
											allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
											allowFullScreen
										/>
									</div>
								</div>
								<div className="overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900/60 shadow-2xl">
									<div className="relative aspect-[9/16] w-full">
										<iframe
											className="h-full w-full"
											src={`https://www.tiktok.com/embed/v2/7486925939780259095`}
											title={`TikTok 7486925939780259095`}
											frameBorder="0"
											allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
											allowFullScreen
										/>
									</div>
								</div>
								<div className="overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900/60 shadow-2xl">
									<div className="relative aspect-[9/16] w-full">
										<iframe
											className="h-full w-full"
											src={`https://www.tiktok.com/embed/v2/7477965440795381035`}
											title={`TikTok 7477965440795381035`}
											frameBorder="0"
											allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
											allowFullScreen
										/>
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
							<div className="grid grid-cols-1 gap-6 md:grid-cols-2">
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
							<h1 className="text-4xl font-bold mb-8 text-center">About Me</h1>
							<div className="space-y-8">
								<div className="text-center">
									<div className="w-24 h-24 rounded-full mx-auto mb-6 overflow-hidden ring-2 ring-brand/60">
										<img src="/icons/wik.jpg" alt="Wik avatar" className="h-full w-full object-cover" loading="lazy" />
									</div>
									<p className="text-zinc-300 leading-relaxed">
										I'm a freelance video editor based in Latvia, working across two distinct fields, creating cinematic visuals with motion graphics and fast-paced, comedic content.
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
													<h4 className="font-medium">Over 2 million views generated</h4>
													<p className="text-zinc-400 text-sm">Across client channels</p>
												</div>
											</li>
										</ul>
									</div>

									<div>
										<h3 className="text-xl font-semibold mb-4 md:text-right">Tools & Software</h3>
										<ul className="space-y-2 md:space-y-1 md:w-full md:max-w-md md:ml-auto">
											{['Adobe Premiere Pro', 'Adobe After Effects', 'Blender', 'FL Studio'].map((tool, index) => (
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
								
							{/* Social Media Links */}
							<div className="text-center pt-8">
								<h3 className="text-xl font-semibold mb-6">Contacts/Links</h3>
								<div className="flex flex-wrap justify-center gap-4">
									<a 
										href="https://www.youtube.com/@wikthe3rd" 
										target="_blank" 
										rel="noopener noreferrer"
										className="inline-flex items-center gap-2 rounded-lg bg-zinc-900/60 px-4 py-2 text-sm font-medium hover:bg-zinc-800/60 transition-colors border border-zinc-800"
									>
										<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4 text-red-500">
											<path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
										</svg>
										YouTube
									</a>
									<a 
										href="https://x.com/Wikthe3rd" 
										target="_blank" 
										rel="noopener noreferrer"
										className="inline-flex items-center gap-2 rounded-lg bg-zinc-900/60 px-4 py-2 text-sm font-medium hover:bg-zinc-800/60 transition-colors border border-zinc-800"
									>
										<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4 text-zinc-300">
											<path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
										</svg>
										Twitter
									</a>
									<a 
										href="mailto:Wikthe3rd@gmail.com"
										className="inline-flex items-center gap-2 rounded-lg bg-zinc-900/60 px-4 py-2 text-sm font-medium hover:bg-zinc-800/60 transition-colors border border-zinc-800"
									>
										<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4 text-blue-500">
											<path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z"/>
											<path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z"/>
										</svg>
										Email
									</a>
									<div className="inline-flex items-center gap-2 rounded-lg bg-zinc-900/60 px-4 py-2 text-sm font-medium border border-zinc-800">
										<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4 text-indigo-500">
											<path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0027-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419-.019 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1568 2.4189Z"/>
									</svg>
									@wikthe3rd
								</div>
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
			{/* Background WebM video with lowered opacity - only shown on Home and About */}
			{(activeSection === 'home' || activeSection === 'about') && (
				<div className="fixed inset-0 z-0">
					<video 
						autoPlay 
						loop 
						muted 
						playsInline
						className="w-full h-full object-scale-down opacity-20"
					>
						<source src="/background.webm" type="video/webm" />
					</video>
				</div>
			)}
			
			<div className="pointer-events-none absolute inset-0 bg-grid-radial z-10" />
			
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
						onClick={() => navigateTo('shorts')}
						className={`hover:text-white transition-colors ${activeSection === 'shorts' ? 'text-brand' : 'text-zinc-300'}`}
					>
						TikToks
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
						Contact
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
							<button onClick={() => navigateTo('shorts')} className={`w-full rounded-md px-3 py-2 text-left text-sm hover:bg-zinc-900 ${activeSection === 'shorts' ? 'text-brand' : 'text-zinc-300'}`}>TikToks</button>
							<button onClick={() => navigateTo('content-editing')} className={`w-full rounded-md px-3 py-2 text-left text-sm hover:bg-zinc-900 ${activeSection === 'content-editing' ? 'text-brand' : 'text-zinc-300'}`}>Content Editing</button>
							<button onClick={() => navigateTo('about')} className={`w-full rounded-md px-3 py-2 text-left text-sm hover:bg-zinc-900 ${activeSection === 'about' ? 'text-brand' : 'text-zinc-300'}`}>About</button>
						</nav>
						<div className="mt-6">
							<button onClick={focusContactForm} className="inline-flex w-full items-center justify-center rounded-full bg-brand px-4 py-2 text-sm font-medium hover:bg-brand-dark">Contact</button>
						</div>
						</div>
					</div>
					)}

			{/* Main Content */}
			{renderContent()}

			{/* Contact Footer */}
			<footer id="contact" className="relative z-10 border-t border-zinc-900/60 bg-black/60 px-6 py-12 md:px-10">
				<div className="mx-auto max-w-6xl">
					<h2 className="text-xl font-semibold">Let's Build your next video.</h2>
						<div className="relative mt-6">
							<div className={`transition-all duration-300 ${submitState !== 'idle' ? 'opacity-0 scale-95' : 'opacity-100'}`}>
								<form ref={formRef} onSubmit={handleContactSubmit} className="grid grid-cols-1 gap-4 md:grid-cols-2">
									<input ref={contactNameRef} name="name" id="name" autoComplete="name" required className="rounded-lg border border-zinc-800 bg-zinc-950 px-4 py-2 text-sm outline-none placeholder:text-zinc-500 focus:border-zinc-600 md:col-span-1" placeholder="Your name" />
									<input type="email" name="email" id="email" autoComplete="email" required className="rounded-lg border border-zinc-800 bg-zinc-950 px-4 py-2 text-sm outline-none placeholder:text-zinc-500 focus:border-zinc-600 md:col-span-1" placeholder="Email or Discord" />
									<textarea name="message" id="message" className="md:col-span-2 rounded-lg border border-zinc-800 bg-zinc-950 px-4 py-2 text-sm outline-none placeholder:text-zinc-500 focus:border-zinc-600" rows={4} placeholder="What are you looking for?" />
									<input type="hidden" name="_subject" value="New Wik Edits inquiry" />
									<button type="submit" disabled={isSubmitting} className="md:col-span-2 inline-flex w-full items-center justify-center rounded-lg bg-brand px-5 py-2 text-sm font-semibold hover:bg-brand-dark disabled:opacity-60">
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
