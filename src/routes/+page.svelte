<script>
	import Header from '$lib/components/Header.svelte';
	import Card from '$lib/components/Card.svelte';

	import { data } from '$lib/data/work.js';
	data.forEach((d) => {
		d.date = new Date(d.date); // Convert date field to Date type
		d.tags = d.tags.sort((a, b) => a.localeCompare(b));
	});
</script>

<header>
	<Header />
</header>

<main>
	{#each data.sort((a, b) => b.date - a.date) as { link, imgLink, imgAlt, title, description, org, dateMonthYr, tags }}
		<Card {link} {imgLink} {imgAlt} {title} {description} {org} {dateMonthYr} {tags} />
	{/each}
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
