'use client'
import React from 'react';
import Tile from './_components/tile';
// import { auth } from '@clerk/nextjs/server';
import { useUser } from '@clerk/nextjs';

const Profile = () => {
	// const { sessionId, userId } = auth();
	const {user} = useUser();

	return (
		<div className='text-black text-4xl min-h-[85vh] fle flex-col justify-center items-center text-center mt-10'>
			<h1 className='h-3xl'>Panel użytkownika {user?.username} </h1>
			<div className='flex flex-wrap justify-center items-center gap-10 mt-[3rem]'>
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
				<Tile
					title='Moje zestawy ćwiczeń'
					imgSrc='/sets.png'
					description='Utwórz swoje zestawy ćwiczeń, aby szybko rozpocząć trening z własnymi ćwiczeniami'
				/>
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
