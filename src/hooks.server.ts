import cookie from 'cookie';
import { v4 as uuid } from '@lukeed/uuid';
import type { Handle } from '@sveltejs/kit';



export const handle: Handle = async ({ event, resolve }) => {
	const request = event.request;
	const cookies = cookie.parse(request.headers.get('cookies') || '');
	event.locals.userid = cookies.userid || uuid();

	const response = await resolve(event);

	if (!cookies.userid) {
		// if this is the first time the user has visited this app,
		// set a cookie so that we recognise them when they return
		response.headers['set-cookie'] = `userid=${event.locals.userid}; Path=/; HttpOnly`;
	}

	return response;
};
