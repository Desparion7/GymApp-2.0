'use client';
import React from 'react';
import Tile from './_components/tile';
import { useUser } from '@clerk/nextjs';
import Link from 'next/link';
const Profile = () => {
	const { user } = useUser();
	return (
		<div className='text-black text-4xl min-h-[82vh] max-w-5xl flex flex-col justify-center items-center text-center mt-10 mb-10'>
			<h1 className='text-2xl sm:text-3xl uppercase'>
				Panel użytkownika {user?.username}
			</h1>
			<div className='flex flex-wrap justify-center items-center gap-4 sm:gap-10 mt-[1rem] my-[3rem] sm:mt-[2rem]'>
				<Tile
					title='Rozpocznij Trening'
					imgSrc='/start.png'
					description='Rozpocznij i zapisz swój trening korzystając z własnych
						lub dostępnych planów trenigowych'
				/>
				<Tile
					title='Historia treningów'
					imgSrc='/history.png'
					description='Kontroluj swoje postępy w historii treningów gdzie masz pełen dostęp do treningów kóre zostały wykonane'
				/>
				<Link href='/profil/moje-plany-treningowe'>
					<Tile
						title='Moje zestawy ćwiczeń'
						imgSrc='/sets.png'
						description='Utwórz swoje zestawy ćwiczeń, aby szybko rozpocząć trening z własnymi ćwiczeniami'
					/>
				</Link>
				<Tile
					title='Moje rekordy'
					imgSrc='/records.png'
					description='Dla ludzi lubiących notować swoje osiągnięcia. Zapisz najlepsze wyniki w wybranych ćwiczeniach.'
				/>
				<Tile
					title='Ustawienia konta'
					imgSrc='/gears.png'
					description='Zmień ustawienia swojego konta. Wprowadz zmiany w dostępie przez zmiane hasła lub emaila'
				/>
			</div>
		</div>
	);
};

export default Profile;
