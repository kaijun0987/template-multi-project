import React from 'react';

export default function App() {
	return (
		<div className='min-h-screen bg-slate-950 text-slate-100'>
			<main className='mx-auto flex max-w-3xl flex-col gap-6 px-6 py-16'>
				<header className='flex flex-col gap-2'>
					<p className='text-sm tracking-[0.3em] text-slate-400 uppercase'>Template Lab</p>
					<h1 className='text-4xl font-semibold text-white'>Animation Template</h1>
					<p className='text-base text-slate-300'>
						This is a blank template for components, motion studies, and quick experiments.
					</p>
				</header>

				<section className='rounded-2xl border border-slate-800 bg-slate-900/70 p-6'>
					<h2 className='text-lg font-medium text-white'>Start here</h2>
					<ul className='mt-3 list-disc space-y-2 pl-5 text-sm text-slate-300'>
						<li>Keep your prototype UI inside `projects/template/src`.</li>
						<li>Add routes or import components directly for extra pages.</li>
						<li>The style entry point is `global.css` for shared styles.</li>
					</ul>
				</section>

				<footer className='text-xs text-slate-500'>
					Powered by Vite + React. Happy prototyping.
				</footer>
			</main>
		</div>
	);
}
