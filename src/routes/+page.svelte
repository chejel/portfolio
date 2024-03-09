<script>
	// Components
	import Header from '$lib/components/Header.svelte';
	import Card from '$lib/components/Card.svelte';
	import Footer from '$lib/components/Footer.svelte';

	// Data
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
	<section id="project-cards">
		{#each data.sort((a, b) => b.date - a.date) as { link, imgLink, imgAlt, title, description, org, dateMonthYr, tags }}
			<Card {link} {imgLink} {imgAlt} {title} {description} {org} {dateMonthYr} {tags} />
		{/each}
	</section>
	<section id="project-links">
		<strong>Additional personal projects</strong>: U.S. map showing
		<a href="https://chejel.github.io/us-county-search">counties with the same name</a>,
		visualization of
		<a href="https://chejel.github.io/data-blog/posts/eurovision/"
			>Eurovision Song Contest results</a
		>
	</section>
</main>

<footer>
	<Footer />
</footer>

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

	section {
		line-height: 1.3;
	}

	#project-links {
		margin: 2rem 0;
		background-color: rgba(168, 162, 182, 0.15);
		padding: 1rem;
	}

	footer {
		margin-top: 3rem;
		display: flex;
		justify-content: center;
		gap: 15px;
	}
</style>
