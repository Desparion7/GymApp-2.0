'use client';
import { useState } from 'react';
import { useSignUp } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

type RegisterInputs = {
	email: string;
	name: string;
	password: string;
};
type VerifyInput = {
	code: string;
};

const SignUp = () => {
	const { isLoaded, signUp, setActive } = useSignUp();
	const [codeError, setCodeError] = useState(false);
	const [pendingVerification, setPendingVerification] = useState(false);

	const router = useRouter();
	// Form state for first step
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<RegisterInputs>();

	const onSubmit: SubmitHandler<RegisterInputs> = async (data) => {
		if (!isLoaded) {
			return;
		}
		try {
			await signUp.create({
				username: data.name,
				emailAddress: data.email,
				password: data.password,
			});

			// send the email.
			await signUp.prepareEmailAddressVerification({
				strategy: 'email_code',
			});

			// change the UI to our pending section.
			setPendingVerification(true);
		} catch (err) {
			console.error(err);
		}
	};
	// Form state for secodn step (verify code)
	const {
		register: confirmeCode,
		handleSubmit: handleSubmitCode,
		formState: { errors: errorsCode },
	} = useForm<VerifyInput>();

	const onPressVerify: SubmitHandler<VerifyInput> = async (data) => {
		if (!isLoaded) {
			return;
		}
		try {
			const completeSignUp = await signUp.attemptEmailAddressVerification(
				{
					code: data.code,
				}
			);
			if (completeSignUp.status !== 'complete') {
				setCodeError(true);
				console.log(JSON.stringify(completeSignUp, null, 2));
			}
			if (completeSignUp.status === 'complete') {
				setCodeError(false);
				await setActive({ session: completeSignUp.createdSessionId });
				router.push('/');
			}
		} catch (err) {
			console.error(JSON.stringify(err, null, 2));
		}
	};

	return (
		<div className='p-5 border rounded-xl bg-steel-gradient2'>
			<h1 className='text-3xl mb-[2rem] text-center'>
				Zarejestruj sie w Gym Pro
			</h1>
			{!pendingVerification && (
				<form
					onSubmit={handleSubmit(onSubmit)}
					className='flex flex-col gap-5'
				>
					<div className='flex flex-col gap-2'>
						<input
							type='email'
							className={cn(
								'p-2 pl-3',
								errors.email &&
									'border-red-400 border-2 rounded'
							)}
							{...register('email', {
								required: 'Emial jest wymagany',
							})}
							placeholder='Email'
						/>
						{errors.email && (
							<p className='text-center text-red-500'>
								{errors.email.message}
							</p>
						)}
					</div>
					<div className='flex flex-col gap-2'>
						<input
							className={cn(
								'p-2 pl-3',
								errors.name && 'border-red-400 border-2 rounded'
							)}
							type='text'
							{...register('name', {
								required:
									'Podanie nazwy użytkownika jest wymagane',
								minLength: {
									value: 4,
									message:
										'Nazwa użytkownika musi mieć minimum 4 znaki',
								},
								maxLength: {
									value: 64,
									message:
										'Nazwa użytkownika może mieć maksymalnie 64 znaki',
								},
							})}
							placeholder='Nazwa użytkownika'
						/>
						{errors.name && (
							<p className='text-center text-red-500'>
								{errors.name.message}
							</p>
						)}
					</div>
					<div className='flex flex-col gap-2'>
						<input
							className={cn(
								'p-2 pl-3',
								errors.password &&
									'border-red-400 border-2 rounded'
							)}
							type='password'
							{...register('password', {
								required: 'Podanie hasła jest wymagane',
								minLength: {
									value: 8,
									message: 'Hasło musi mieć minimum 8 znaków',
								},
							})}
							placeholder='Hasło'
						/>
						<p className='text-sm text-center text-gray-600'>
							Min 8 znaków (w tym znak specjalny, 1 duża litera)
						</p>
						{errors.password && (
							<p className='text-center text-red-500'>
								{errors.password.message}
							</p>
						)}
					</div>
					<Button type='submit' disabled={pendingVerification}>
						{pendingVerification ? 'Submitting...' : 'Utwórz konto'}
					</Button>
				</form>
			)}
			{pendingVerification && (
				<form
					onSubmit={handleSubmitCode(onPressVerify)}
					className='space-y-4 md:space-y-6'
				>
					<div className='flex flex-col gap-2'>
						<input
							type='text'
							className={cn(
								'p-2 pl-3',
								errorsCode.code &&
									'border-red-400 border-2 rounded'
							)}
							{...confirmeCode('code', {
								required: 'Kod jest wymagany',
							})}
							placeholder='Wprowadź kod veryfikacyjny z e-maila'
						/>
						{(errorsCode.code || codeError) && (
							<p className='text-center text-red-500'>
								Wprowadź poprawny kod
							</p>
						)}
					</div>
					<Button
						type='submit'
						className='w-full text-white bg-blue-600 hover:bg-blue-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center'
					>
						Zweryfikuj kod
					</Button>
				</form>
			)}
		</div>
	);
};

export default SignUp;
