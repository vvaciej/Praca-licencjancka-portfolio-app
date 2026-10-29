import Image from 'next/image';

export default function Home() {
	return (
		<div className='flex flex-col items-center'>
			<div className='flex flex-col items-center h-full bg-orange-50 w-170'>
				<header className='flex justify-center h-17 border bg-[#303030] fixed w-310'>
					<nav className='flex items-center w-full justify-between text-xs px-60'>
						<button className='text-[0.95rem] bold font-semibold text-white cursor-pointer'>logo</button>
						<ul className='flex gap-16 uppercase pr-12 leading tracking-wider text-white'>
							<button className='cursor-pointer'>O mnie</button>
							<button className='cursor-pointer'>Projekty</button>
							<button className='cursor-pointer'>Doświadczenie</button>
							<button className='cursor-pointer'>Kontakt</button>
						</ul>
					</nav>
				</header>
				<main className='flex bg-[#161513] min-w-full min-h-full justify-center mt-16'>
					<div className='flex flex-col gap-y-14 items-center mt-12 w-full h-full bg-amber-50'>
						<section className='flex flex-col items-center text-center gap-y-8 w-3/4'>
							<div className=''>jakies logo</div>
							<h1 className='text-3xl'>
								Portfolio
								<br />
								Web Developer Maciej Skokowski
							</h1>
							<p className='w-3/4 h-full'>
								I am seasoned full-stack software engineer wit h oiver 2 ffronjoifjioo nefion 2oifjiof 2eoijf
							</p>
							<section className='flex gap-x-4'>
								<button className='border rounded-3xl px-5 py-2'>Get in Touch</button>
								<button className='border rounded-3xl px-5 py-2'>Download CV</button>
							</section>
						</section>
						<section className='flex flex-col items-center gap-y-5'>
							<h3 className='uppercase tracking-wide text-sm'>Expierence with</h3>
							<section className='flex gap-x-6'>
								<span>JS</span>
								<span>NEXT JS</span>
								<span>HTML</span>
								<span>CSS</span>
								<span>React</span>
							</section>
						</section>
						<section className='flex flex-col items-center gap-y-3 w-full'>
							<h2 className='uppercase text-2xl'>Projects</h2>
							<section className='flex gap-x-6 w-full h-50'>
								<div className=' bg-orange-300 rounded-2xl w-full'>html tutorial</div>
								<div className='rounded-2xl w-full bg-orange-300'>css tutorial</div>
							</section>
						</section>
						<section className='flex flex-col gap-y-3 w-full'>
							<h2 className='uppercase text-2xl text-center'>Expierence</h2>
							<section className='flex w-full flex-col gap-y-6'>
								<div className='flex flex-col gap-y-3'>
									<section className='flex justify-between w-full'>
										<section className='flex gap-x-3'>
											<p>logo</p>
											<h2>firma wefwefwef</h2>
										</section>
										<span>od kiedyyyyy</span>
									</section>
									<section>
										<h2>ddd</h2>
										<p>ewfwefefweg r ge g gre g e g gre </p>
									</section>
								</div>
								<div className='flex flex-col gap-y-3'>
									<section className='flex justify-between w-full'>
										<section className='flex gap-x-3'>
											<p>logo</p>
											<h2>firma wefwefwef</h2>
										</section>
										<span>od kiedyyyyy</span>
									</section>
									<section>
										<h2>ddd</h2>
										<p>ewfwefefweg r ge g gre g e g gre </p>
									</section>
								</div>
								<div className='flex flex-col gap-y-3'>
									<section className='flex justify-between w-full'>
										<section className='flex gap-x-3'>
											<p>logo</p>
											<h2>firma wefwefwef</h2>
										</section>
										<span>od kiedyyyyy</span>
									</section>
									<section>
										<h2>ddd</h2>
										<p>ewfwefefweg r ge g gre g e g gre </p>
									</section>
								</div>
							</section>
						</section>
					</div>
				</main>
				<footer className='w-full h-80 bg-[#191919] flex items-center'>
					<div className='h-4/7 w-full bg-gray-300 flex flex-col justify-between'>
						<section>
							<h3 className='text-xl'>Contact</h3>
						</section>
						<section className='flex flex-col gap-y-2'>
							<p>rewfwffw efw fewfwffe</p>
							<a>wfwfef</a>
						</section>
						<section className='flex gap-x-4'>
							<p>qeqef</p>
							<p>effwef</p>
							<p>wefwefw</p>
						</section>
					</div>
				</footer>
			</div>
		</div>
	);
}
