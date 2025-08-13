import { useState } from 'react'
import './App.css'

function App() {
	const [activeSection, setActiveSection] = useState('home')

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
									<iframe
										className="w-full h-full"
										src="https://www.youtube.com/embed/_Y5WufLwvrE"
										title="Wik Edits Showreel"
										frameBorder="0"
										allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
										allowFullScreen
									/>
								</div>
								<p className="text-center text-zinc-400 mt-4 text-sm">Experience the full showreel above</p>
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
						</div>
					</section>
				)
			case 'video-essays':
				return (
					<section className="relative z-10">
						<div className="mx-auto max-w-6xl px-6 py-20 md:px-10">
							<h1 className="text-4xl font-bold mb-8">Video Essays</h1>
							<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
								{['Game Analysis', 'Meta Breakdown', 'Strategy Guide', 'Patch Notes', 'Tournament Review', 'Player Spotlight'].map((title, index) => (
									<div key={index} className="rounded-xl border border-zinc-800 bg-zinc-950 p-6 hover:border-zinc-600 transition-colors">
										<div className="h-48 rounded-lg bg-gradient-to-br from-brand/20 via-purple-700/10 to-transparent mb-4" />
										<h3 className="font-semibold text-lg mb-2">{title}</h3>
										<p className="text-zinc-400 text-sm">In-depth analysis and commentary on gaming topics, strategies, and meta developments.</p>
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
							<h1 className="text-4xl font-bold mb-8">Montages</h1>
							<div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
								<div>
									<h2 className="text-2xl font-semibold mb-4">Styles</h2>
									<div className="space-y-3">
										{['Clutch Outplays', 'Pentakill Moments', 'Sync to Beat', 'Story-Driven', 'Highlight Reels', 'Compilation Edits'].map((style, index) => (
											<div key={index} className="flex items-center gap-3">
												<div className="w-2 h-2 bg-brand rounded-full" />
												<span>{style}</span>
											</div>
										))}
									</div>
								</div>
								<div>
									<h2 className="text-2xl font-semibold mb-4">Features</h2>
									<div className="space-y-3">
										{['4K Resolution', 'Custom Transitions', 'Sound Design', 'Color Grading', 'Motion Graphics', 'Beat Sync'].map((feature, index) => (
											<div key={index} className="flex items-center gap-3">
												<div className="w-2 h-2 bg-brand rounded-full" />
												<span>{feature}</span>
											</div>
										))}
									</div>
								</div>
							</div>
							
							{/* Sample Montage Grid */}
							<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
								{['League of Legends', 'Valorant', 'CS:GO', 'Overwatch', 'Apex Legends', 'Fortnite'].map((game, index) => (
									<div key={index} className="rounded-xl border border-zinc-800 bg-zinc-950 p-5 hover:border-zinc-600 transition-colors">
										<div className="h-32 rounded-lg bg-gradient-to-br from-brand/20 via-purple-700/10 to-transparent mb-3" />
										<h3 className="font-semibold">{game}</h3>
										<p className="text-zinc-400 text-sm mt-1">Click to view montage examples</p>
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
									<div className="w-24 h-24 bg-brand rounded-full mx-auto mb-6 flex items-center justify-center">
										<span className="text-2xl font-bold text-white">W</span>
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
										<div className="space-y-3">
											<div className="flex items-start gap-3">
												<div className="w-2 h-2 bg-brand rounded-full mt-2 flex-shrink-0" />
												<div>
													<h4 className="font-medium">5+ Years</h4>
													<p className="text-zinc-400 text-sm">Video editing experience</p>
												</div>
											</div>
											<div className="flex items-start gap-3">
												<div className="w-2 h-2 bg-brand rounded-full mt-2 flex-shrink-0" />
												<div>
													<h4 className="font-medium">100+ Projects</h4>
													<p className="text-zinc-400 text-sm">Completed successfully</p>
												</div>
											</div>
											<div className="flex items-start gap-3">
												<div className="w-2 h-2 bg-brand rounded-full mt-2 flex-shrink-0" />
												<div>
													<h4 className="font-medium">Gaming Focus</h4>
													<p className="text-zinc-400 text-sm">Esports and competitive content</p>
												</div>
											</div>
										</div>
									</div>
									
									<div>
										<h3 className="text-xl font-semibold mb-4">Tools & Software</h3>
										<div className="space-y-3">
											{['Adobe Premiere Pro', 'After Effects', 'DaVinci Resolve', 'Photoshop', 'Audition', 'Motion Graphics'].map((tool, index) => (
												<div key={index} className="flex items-center gap-3">
													<div className="w-2 h-2 bg-brand rounded-full" />
													<span className="text-sm">{tool}</span>
												</div>
											))}
										</div>
									</div>
								</div>
								
								<div className="text-center pt-8">
									<button 
										onClick={() => setActiveSection('home')}
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
					onClick={() => setActiveSection('home')}
					className="flex items-center gap-2 hover:opacity-80 transition-opacity cursor-pointer"
				>
					<div className="h-8 w-8 rounded bg-brand" />
					<span className="text-lg font-semibold tracking-wide">Wik Edits</span>
				</button>
				<nav className="hidden gap-6 text-sm md:flex">
					<button 
						onClick={() => setActiveSection('home')}
						className={`hover:text-white transition-colors ${activeSection === 'home' ? 'text-brand' : 'text-zinc-300'}`}
					>
						Home
					</button>
					<button 
						onClick={() => setActiveSection('video-essays')}
						className={`hover:text-white transition-colors ${activeSection === 'video-essays' ? 'text-brand' : 'text-zinc-300'}`}
					>
						Video Essays
					</button>
					<button 
						onClick={() => setActiveSection('content-editing')}
						className={`hover:text-white transition-colors ${activeSection === 'content-editing' ? 'text-brand' : 'text-zinc-300'}`}
					>
						Content Editing
					</button>
					<button 
						onClick={() => setActiveSection('montages')}
						className={`hover:text-white transition-colors ${activeSection === 'montages' ? 'text-brand' : 'text-zinc-300'}`}
					>
						Montages
					</button>
					<button 
						onClick={() => setActiveSection('about')}
						className={`hover:text-white transition-colors ${activeSection === 'about' ? 'text-brand' : 'text-zinc-300'}`}
					>
						About
					</button>
				</nav>
				<button 
					onClick={() => setActiveSection('home')}
					className="rounded-full bg-brand px-4 py-2 text-sm font-medium hover:bg-brand-dark transition-colors"
				>
					Get a quote
				</button>
			</header>

			{/* Main Content */}
			{renderContent()}

			{/* Contact Footer */}
			<footer id="contact" className="relative z-10 border-t border-zinc-900/60 bg-black/60 px-6 py-12 md:px-10">
				<div className="mx-auto max-w-6xl">
					<h2 className="text-xl font-semibold">Let's build your next montage</h2>
					<p className="mt-2 max-w-2xl text-sm text-zinc-400">Tell me the vibe, tracks, and clips. I'll handle the pacing, transitions, and hype.</p>
					<form className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-3">
						<input className="rounded-lg border border-zinc-800 bg-zinc-950 px-4 py-2 text-sm outline-none placeholder:text-zinc-500 focus:border-zinc-600 md:col-span-1" placeholder="Your name" />
						<input className="rounded-lg border border-zinc-800 bg-zinc-950 px-4 py-2 text-sm outline-none placeholder:text-zinc-500 focus:border-zinc-600 md:col-span-1" placeholder="Email or Discord" />
						<input className="rounded-lg border border-zinc-800 bg-zinc-950 px-4 py-2 text-sm outline-none placeholder:text-zinc-500 focus:border-zinc-600 md:col-span-1" placeholder="Project link (Drive/YouTube)" />
						<textarea className="md:col-span-3 rounded-lg border border-zinc-800 bg-zinc-950 px-4 py-2 text-sm outline-none placeholder:text-zinc-500 focus:border-zinc-600" rows={4} placeholder="What are you looking for?" />
						<button type="button" className="md:col-span-3 inline-flex w-full items-center justify-center rounded-lg bg-brand px-5 py-2 text-sm font-semibold hover:bg-brand-dark">Send</button>
					</form>
					<p className="mt-6 text-xs text-zinc-500">© {new Date().getFullYear()} Wik Edits. All rights reserved.</p>
				</div>
			</footer>
		</main>
	)
}

export default App
