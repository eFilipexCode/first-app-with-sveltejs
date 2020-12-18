import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		title: 'Primeira Aplicação com <strong style="color: orange;">Svelte.js!</strong>',
	}
});

export default app;