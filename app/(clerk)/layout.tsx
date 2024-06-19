const ClerkLayout = ({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) => {
	return (
		<div className='flex justify-center items-center min-h-screen'>
			{children}
		</div>
	);
};

export default ClerkLayout;
