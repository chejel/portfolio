<script>
  import { scale } from "svelte/transition";
  import { expoInOut } from "svelte/easing";

  export let plotLink;
  export let imgLink;
  export let imgAlt;
  export let plotTitle;
  export let plotDescription;
  export let type;
  export let tags;
</script>

<section transition:scale={{ duration: 1000, easing: expoInOut }}>
  <div
    class="card"
    style="border-top: 8px solid {type === 'personal' ? '#D0FEA1' : '#A1FEFE'}; border-bottom: 4px solid {type ===
    'personal'
      ? '#D0FEA1'
      : '#A1FEFE'};"
  >
    <a href={plotLink} target="_blank"><img src={imgLink} alt={imgAlt} /></a>
    <div class="card-bottom">
      <div class="title"><a href={plotLink} target="_blank">{plotTitle}</a></div>
      <div class="description">{@html plotDescription}</div>
      {#each tags as d}
        <div class="tags">&nbsp;{d}&nbsp;</div>
      {/each}
    </div>
  </div>
</section>

<style>
  .card {
    width: 300px;
    background-color: white;
    box-shadow: rgba(0, 0, 0, 0.18) 0px 1px 5px;
    border-radius: 8px;
    overflow: hidden;
    position: relative;
  }

  .card-bottom {
    padding: 1rem 1.25rem;
    background-color: #fff;
  }

  img {
    width: 100%;
    opacity: 0.8;
  }

  img:hover {
    opacity: 1;
  }

  .title {
    font-size: 1.5em;
    line-height: 1.1;
    font-weight: 400;
  }

  .title a {
    color: #f83b3b;
  }

  .title a:hover {
    color: #e51d1d;
    text-decoration: none;
  }

  .description {
    font-size: 0.9em;
    padding: 0.5rem 0;
  }

  .tags {
    font-family: "Poppins";
    font-weight: 700;
    font-size: 0.85em;
    text-transform: uppercase;
    color: #333;
    width: max-content;
    display: inline-block;
  }

  .tags:after:not(:last-child) {
    content: "/";
  }

  .tags:not(:first-child):not(:last-child) {
    margin-top: 0.5rem;
    margin-right: 0.4rem;
  }
  /* in between tag rows, if applicable */
  .tags:not(:first-child) {
    margin-top: 0.25rem;
  }
</style>
