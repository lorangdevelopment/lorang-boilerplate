export function match(param) {
	console.log({ lang: { param } });
	console.log(param === 'fr-fr');
	return param === 'fr-fr';
}
