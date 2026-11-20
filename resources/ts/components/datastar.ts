export default async function datastar() {
	// @ts-expect-error no declaration file
	await import('../vendored/datastar-pro.js');
}
