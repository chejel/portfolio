<script>
	export let link, imgLink, imgAlt, title, description, org, dateMonthYr, tags;
</script>

<div class="card-container">
	<!-- SCREENSHOTS -->
	<div class="screenshots" aria-hidden="true">
		<a href={link}><img src={imgLink} alt={imgAlt} /></a>
		<!-- Date -->
		<span class="date">{dateMonthYr}</span>
	</div>

	<!-- TEXT -->
	<div class="description-container">
		<!-- Title -->
		<h1>
			<a href={link}>{title}</a>
		</h1>
		<!-- Tags -->
		<p class="tags">
			{#each tags as tag}
				<span>{tag}</span>
			{/each}
		</p>
		<!-- Description -->
		<p class="description">
			{@html description}
		</p>
		<!-- Organization -->
		<p class="organization"><strong>Organization</strong>: {@html org}</p>
		<!-- Button -->
		<a class="project" href={link}>View project</a>
	</div>
</div>
<hr />

<style>
	.card-container {
		display: flex;
		justify-content: center;
		align-items: flex-start;
		gap: 35px;
		width: 100%;
		margin: 3rem 0;
	}

	.screenshots {
		position: relative;
		margin-top: 0.25rem;
		width: 400px;
		height: auto;
		border-radius: 5px;
		border: 0.5px solid var(--purple);
		background: #d3cce3;
		background: -webkit-linear-gradient(to bottom, #e9e4f0, #d3cce3);
		background: linear-gradient(to bottom, #e9e4f0, #d3cce3);
	}

	.date {
		position: absolute;
		top: 8px;
		right: 0;
		background-color: rgba(51, 51, 51, 0.85);
		color: #fdfdfd;
		font-size: 0.75rem;
		font-weight: 500;
		padding: 3px 9px;
	}

	.description-container {
		width: calc(100% - 400px);
	}

	h1 a {
		text-decoration: none;
		color: #333;
	}

	h1 a:hover {
		color: rgba(51, 51, 51, 0.85);
	}

	.tags {
		display: flex;
		gap: 15px;
		font-size: 0.85rem;
		font-weight: 600;
		text-transform: uppercase;
		font-family: 'Work Sans', sans-serif;
		color: var(--purple);
		margin-top: 0.25rem;
	}

	.description {
		margin: 0.5rem 0 0.25rem 0;
	}

	.organization {
		margin-bottom: 1.25rem;
	}

	a.project {
		border: 0;
		background-color: var(--purple);
		color: white;
		text-transform: uppercase;
		font-size: 0.8rem;
		font-weight: 700;
		padding: 7px 12px;
		border-radius: 2px;
		text-decoration: none;
	}

	a:hover.project {
		background-color: rgba(95, 93, 156, 0.9);
	}

	hr {
		width: 90%;
		margin: auto;
	}

	@media screen and (max-width: 600px) {
		.card-container {
			flex-wrap: wrap;
		}
		.screenshots {
			width: 100%;
		}
		.description-container {
			width: 100%;
		}
	}
</style>
