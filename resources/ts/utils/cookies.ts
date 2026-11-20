export async function setCookie(name: string, value: string, days: number) {
	const date = new Date();
	date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
	await cookieStore.set({ name, value, expires: date.getTime() });
}

export async function getCookie(name: string) {
	return await cookieStore.get(name);
}

export async function eraseCookie(name: string) {
	await cookieStore.delete(name);
}
