const ClerkLayout = ({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) => {
	return (
		<div className='flex justify-center items-center min-h-[80vh] my-5'>
			{children}
		</div>
	);
};

export default ClerkLayout;
