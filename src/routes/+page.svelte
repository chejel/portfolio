<script>
	import Header from '$lib/components/Header.svelte';
	import Card from '$lib/components/Card.svelte';

	//import { data } from '$lib/data/data.js';
</script>

<header>
	<Header />
</header>

<main>
	<Card />
</main>

<style>
	header {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
	}

	main {
		margin-top: 4rem;
	}
</style>
