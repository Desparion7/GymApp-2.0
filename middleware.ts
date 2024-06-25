import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';

const isProtectedRoute = createRouteMatcher(['/profil(.*)']);
const baseRoute = createRouteMatcher(['/']);

export default clerkMiddleware((auth, req) => {
	if (!auth().userId && isProtectedRoute(req)) {
		let path = '/sign-in';
		const redirectUrl = new URL(path, req.url);
		return NextResponse.redirect(redirectUrl);
	}
	if (auth().userId && baseRoute(req)) {
		let path = '/profil';
		const redirectUrl = new URL(path, req.url);
		return NextResponse.redirect(redirectUrl);
	}
});

export const config = {
	matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
};
