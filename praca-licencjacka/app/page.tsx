import Image from 'next/image';

export default function Home() {
	return (
		<div className='flex justify-center h-full w-full min-h-200 bg-orange-50'>
			<main className='flex bg-black w-300 min-h-full'>
				<header className='flex justify-center bg-blue-50 h-16 w-full mt-4 rounded-2xl border border-amber-100 px-8'>
					<nav className='flex items-center w-full justify-between text-sm'>
            <h4>Maciej Skokowski <span className='text-orange'>//dev</span></h4>
						<ul className='flex gap-5 uppercase'>
							<li>O mnie</li>
							<li>Projekty</li>
							<li>Doświadczenie</li>
              <li>Opinie</li>
						</ul>
            <button className='uppercase'>Napisz do mnie</button>
					</nav>
				</header>
			</main>
		</div>
	);
}
