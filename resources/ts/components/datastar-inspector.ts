export default async function datastarInspector() {
	// @ts-expect-error no declaration file
	await import('../vendored/datastar-inspector.js');
}
