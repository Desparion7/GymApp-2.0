const ClerkLayout = ({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) => {
	return (
		<div className='flex justify-center items-center min-h-full my-5'>
			{children}
		</div>
	);
};

export default ClerkLayout;
