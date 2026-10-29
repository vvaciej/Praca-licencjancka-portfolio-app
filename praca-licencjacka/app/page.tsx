import Image from 'next/image';

export default function Home() {
	return (
		<div className='flex justify-center'>
			<div className='flex justify-center h-full w-360 min-h-300 bg-orange-50'>
				<header className='flex justify-center h-17 border bg-[#303030] fixed w-360'>
					<nav className='flex items-center w-full justify-between text-xs px-60'>
						<button className='text-[0.95rem] bold font-semibold text-white cursor-pointer'>logo jakies</button>
						<ul className='flex gap-16 uppercase pr-12 leading tracking-wider text-white'>
							<button className='cursor-pointer'>O mnie</button>
							<button className='cursor-pointer'>Projekty</button>
							<button className='cursor-pointer'>Doświadczenie</button>
							<button className='cursor-pointer'>Kontakt</button>
						</ul>
					</nav>
				</header>
				<main className='flex bg-[#161513] min-w-full min-h-full justify-center mt-16'>
					<div className='bg-white w-220 flex flex-col gap-y-8 items-center mt-12'>
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
							<div className='flex gap-x-4'>
								<button className='border rounded-3xl px-5 py-2'>Get in Touch</button>
								<button className='border rounded-3xl px-5 py-2'>Download CV</button>
							</div>
						</section>
						<section className='mt-8 flex flex-col items-center gap-y-5'>
							<h3 className='uppercase tracking-wide text-sm'>Expierence with</h3>
							<div className='flex gap-x-6'>
								<span>JS</span>
								<span>NEXT JS</span>
								<span>HTML</span>
								<span>CSS</span>
								<span>React</span>
							</div>
						</section>
					</div>
				</main>
			</div>
		</div>
	);
}
