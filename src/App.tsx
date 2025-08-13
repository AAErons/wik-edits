import './App.css'

function App() {
	return (
		<main className="relative min-h-dvh overflow-hidden">
			<div className="pointer-events-none absolute inset-0 bg-grid-radial" />
			<section className="relative z-10">
				<header className="flex items-center justify-between px-6 py-5 md:px-10">
					<div className="flex items-center gap-2">
						<div className="h-8 w-8 rounded bg-brand" />
						<span className="text-lg font-semibold tracking-wide">Wik Edits</span>
					</div>
					<nav className="hidden gap-6 text-sm md:flex">
						<a href="#work" className="text-zinc-300 hover:text-white">Work</a>
						<a href="#services" className="text-zinc-300 hover:text-white">Services</a>
						<a href="#contact" className="text-zinc-300 hover:text-white">Contact</a>
					</nav>
					<a href="#contact" className="rounded-full bg-brand px-4 py-2 text-sm font-medium hover:bg-brand-dark">Get a quote</a>
				</header>

				<div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-6 pb-20 pt-10 md:grid-cols-2 md:px-10">
					<div>
						<h1 className="text-balance text-4xl font-extrabold tracking-tight md:text-6xl">
							Cinematic gaming edits that hit like a pentakill
						</h1>
						<p className="mt-4 text-pretty text-zinc-300 md:text-lg">
							Specialized in fast‑paced League of Legends montages, highlight reels, and story‑driven edits tailored for YouTube and socials.
						</p>
						<div className="mt-6 flex flex-wrap items-center gap-3">
							<a href="#work" className="rounded-full bg-white px-5 py-2 text-sm font-semibold text-black hover:bg-zinc-200">See work</a>
							<a href="#contact" className="rounded-full border border-zinc-700 px-5 py-2 text-sm font-semibold text-white hover:border-zinc-500">Book an edit</a>
						</div>
						<div className="mt-8 flex items-center gap-4 text-xs text-zinc-400">
							<span>4K workflow</span>
							<span>•</span>
							<span>Sound design</span>
							<span>•</span>
							<span>Sync to beat</span>
						</div>
					</div>
					<div className="relative aspect-video w-full overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900/60 shadow-2xl">
						<div className="absolute inset-0 flex items-center justify-center">
							<div className="h-28 w-28 animate-pulse rounded-full bg-brand/40 blur-2xl" />
						</div>
						<div className="absolute inset-0 grid place-items-center">
							<button className="group inline-flex items-center gap-3 rounded-full border border-zinc-700 bg-black/70 px-5 py-2 text-sm font-medium text-white backdrop-blur hover:border-zinc-500">
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
									<path d="M8 5v14l11-7z" />
								</svg>
								Watch demo
							</button>
						</div>
					</div>
				</div>
			</section>

			<section id="work" className="relative z-10 border-t border-zinc-900/60 bg-black/40 py-16">
				<div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 px-6 md:grid-cols-3 md:px-10">
					{['Clutch outplays','Sync to beat','Story moments'].map((label) => (
						<div key={label} className="rounded-xl border border-zinc-800 bg-zinc-950 p-5">
							<div className="mb-3 h-40 rounded-lg bg-gradient-to-br from-brand/20 via-purple-700/10 to-transparent" />
							<h3 className="font-semibold">{label}</h3>
							<p className="mt-1 text-sm text-zinc-400">Short description of the style and pacing used in this category.</p>
						</div>
					))}
				</div>
			</section>

			<footer id="contact" className="relative z-10 border-t border-zinc-900/60 bg-black/60 px-6 py-12 md:px-10">
				<div className="mx-auto max-w-6xl">
					<h2 className="text-xl font-semibold">Let’s build your next montage</h2>
					<p className="mt-2 max-w-2xl text-sm text-zinc-400">Tell me the vibe, tracks, and clips. I’ll handle the pacing, transitions, and hype.</p>
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
