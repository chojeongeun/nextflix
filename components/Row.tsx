import { Movie } from '@/types';
import Image from 'next/image';
import { baseURL } from '@/url';
import List from './List';

interface Props {
	title: string;
	movies: Movie[];
}

function Row({ title, movies }: Props) {
	title = title
		.split('_')
		.map((text) => text.charAt(0).toUpperCase() + text.slice(1))
		.join(' ');

	return (
		<article className='pl-4 pb-[10px] mb-4  md:pb-[30px] md:pl-12'>
			<h2 className='w-56 cursor-pointer text-base font-semibold text-[#e5e5e5] transition duration-200 md:text-xl lg:text-2xl hover:text-white '>
				{title}
			</h2>

			<div className='relative group'>
				<List movies={movies} />
			</div>
		</article>
	);
}

export default Row;
