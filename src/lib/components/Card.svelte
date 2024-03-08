<script>
	import bmgb from '$lib/images/bmgb.png';
	import aapiMap from '$lib/images/aapi-map.png';
</script>

<div class="card-container">
	<!-- SCREENSHOTS -->
	<div class="screenshots">
		<img src={bmgb} alt="" />
		<!-- Date -->
		<span class="date">Oct 2023</span>
	</div>

	<!-- TEXT -->
	<div class="description-container">
		<!-- Title -->
		<h1>Black Media Green Book</h1>
		<!-- Tags -->
		<p class="tags"><span>D3</span> <span>Illustrator</span></p>
		<!-- Description -->
		<p class="description">
			Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent porttitor consectetur ante
			eu laoreet. Nunc neque magna, posuere eu lectus at, consectetur dapibus arcu. Morbi non dui
			lectus. Etiam fringilla sapien vitae dui sollicitudin mattis. Curabitur vitae nulla nunc.
		</p>
		<!-- Button -->
		<a class="project" href="https://bmigreenbook.journalism.cuny.edu/">View project</a>
	</div>
</div>
<div class="card-container">
	<!-- SCREENSHOTS -->
	<div class="screenshots"><img src={aapiMap} alt="" /></div>
	<!-- TEXT -->
	<div class="description-container">
		<!-- Title -->
		<h1>AAPI Media Map</h1>
		<!-- Tags -->
		<p class="tags"><span>Svelte</span></p>
		<!-- Description -->
		<p class="description">
			Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent porttitor consectetur ante
			eu laoreet. Nunc neque magna, posuere eu lectus at, consectetur dapibus arcu. Morbi non dui
			lectus. Etiam fringilla sapien vitae dui sollicitudin mattis. Curabitur vitae nulla nunc.
		</p>
	</div>
</div>

<style>
	.card-container {
		display: flex;
		justify-content: center;
		align-items: flex-start;
		gap: 25px;
		width: 100%;
		margin: 3rem 0;
	}

	.screenshots {
		position: relative;
		margin-top: 0.25rem;
		width: 400px;
		height: auto;
		border-radius: 5px;
		border: 0.5px solid purple;
		background: #d3cce3; /* fallback for old browsers */
		background: -webkit-linear-gradient(
			to bottom,
			#e9e4f0,
			#d3cce3
		); /* Chrome 10-25, Safari 5.1-6 */
		background: linear-gradient(
			to bottom,
			#e9e4f0,
			#d3cce3
		); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
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

	.tags {
		display: flex;
		gap: 15px;
		font-size: 0.85rem;
		font-weight: 600;
		text-transform: uppercase;
		font-family: 'Work Sans', sans-serif;
		color: purple;
	}

	.description {
		margin: 0.5rem 0 1rem 0;
	}

	a.project {
		border: 0;
		background-color: purple;
		color: white;
		text-transform: uppercase;
		font-size: 0.8rem;
		font-weight: 700;
		padding: 7px 12px;
		border-radius: 2px;
		text-decoration: none;
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
