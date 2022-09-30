import { error } from '@sveltejs/kit';

// see https://kit.svelte.dev/docs#loading
export const load = async ({ fetch }) => {
	const res = await fetch('/todos.json');

	if (res.ok) {
		const todos = await res.json();

		return { todos };
	}

	const { message } = await res.json();

	throw error(500, message);
};
