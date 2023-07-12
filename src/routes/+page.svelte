<script>
  import { data } from "./data/data.js";
  import Header from "./components/Header.svelte";
  import Card from "./components/Card.svelte";
  import Filter from "./components/Filter.svelte";
  import Footer from "./components/Footer.svelte";
  let selectedTagName = "Showing all projects";

  $: filteredCards =
    selectedTagName === "Showing all projects" || selectedTagName === "Show all projects" || selectedTagName === ""
      ? data
      : data.filter(d => d.tags.includes(selectedTagName));
</script>

<svelte:head>
  <style>
    body {
      background-color: #eee;
    }
  </style>
  <title>Jennifer Cheng | Portfolio</title>
</svelte:head>
<div class="header-curve" />
<header>
  <Header />
</header>

<section>
  <Filter bind:selectedTagName />
</section>

<div class="middle-curves" />

<!-- legend -->

<div class="legend">
  <ul class="legend-elements">
    <li>
      <svg class="legend-marker"><rect width="100%" height="100%" fill="#D0FEA1" /></svg>Personal project
    </li>
    <li>
      <svg class="legend-marker"><rect width="100%" height="100%" fill="#A1FEFE" /></svg>Work project
    </li>
  </ul>
</div>

<main id="cards-container">
  {#each filteredCards as card}
    <Card {...card} />
  {/each}
</main>

<div class="footer-curve" />

<footer>
  <Footer />
</footer>

<style>
  .header-curve {
    padding: 0 !important;
    margin: 0;
    aspect-ratio: 250/5;
    width: 100%;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    background-image: url("./../../images/wave-orange-haikei.svg?raw");
  }

  section,
  header {
    width: min(100%, 45rem);
    margin-inline: auto;
    text-align: center;
  }

  header {
    padding-top: 2rem;
  }

  main {
    background-color: #fea1a1;
  }

  main#cards-container {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 3rem;
    padding: 2rem 3rem;
    padding-bottom: 5rem;
  }

  /* Wavy backgrounds: https://fireship.io/lessons/wavy-backgrounds/ 
  SVG: https://app.haikei.app/ */
  .middle-curves {
    padding: 0 !important;
    margin: 0;
    aspect-ratio: 1480/200;
    /* aspect-ratio: 960/140; */
    width: 100%;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    background-image: url("data:image/svg+xml,%3C%3Fxml version='1.0' encoding='utf-8'%3F%3E%3C!-- Generator: Adobe Illustrator 27.5.0, SVG Export Plug-In . SVG Version: 6.00 Build 0) --%3E%3Csvg version='1.1' id='visual' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 960 141' style='enable-background:new 0 0 960 141;' xml:space='preserve'%3E%3Cstyle type='text/css'%3E .st0%7Bfill:%23EEEEEE;%7D .st1%7Bfill:%23F9FBE7;%7D .st2%7Bfill:%23F6E1C0;%7D .st3%7Bfill:%23FCC2A5;%7D .st4%7Bfill:%23FEA1A1;%7D%0A%3C/style%3E%3Crect class='st0' width='960' height='140'/%3E%3Cpath class='st1' d='M0,22l26.7-1.8c26.6-1.9,80-5.5,133.3-3s106.7,11.1,160,16.3s106.7,6.8,160,4.2c53.3-2.7,106.7-9.7,160-9.9 c53.3-0.1,106.7,6.5,160,10.4c53.3,3.8,106.7,4.8,133.3,5.3L960,44v97h-26.7c-26.6,0-80,0-133.3,0s-106.7,0-160,0s-106.7,0-160,0 s-106.7,0-160,0s-106.7,0-160,0s-106.7,0-133.3,0H0V22z'/%3E%3Cpath class='st2' d='M0,66l26.7-1c26.6-1,80-3,133.3-6s106.7-7,160-5.8c53.3,1.1,106.7,7.5,160,10s106.7,1.1,160,0.1 s106.7-1.6,160-5.6s106.7-11.4,133.3-15L960,39v102h-26.7c-26.6,0-80,0-133.3,0s-106.7,0-160,0s-106.7,0-160,0s-106.7,0-160,0 s-106.7,0-160,0s-106.7,0-133.3,0H0V66z'/%3E%3Cpath class='st3' d='M0,74l26.7-0.3c26.6-0.4,80-1,133.3,1.8s106.7,9.2,160,12s106.7,2.2,160,2.5s106.7,1.7,160-0.3 s106.7-7.4,160-11.4s106.7-6.6,133.3-8L960,69v72h-26.7c-26.6,0-80,0-133.3,0s-106.7,0-160,0s-106.7,0-160,0s-106.7,0-160,0 s-106.7,0-160,0s-106.7,0-133.3,0H0V74z'/%3E%3Cpath class='st4' d='M0,106l26.7,0.8c26.6,0.9,80,2.5,133.3,1.2s106.7-5.7,160-6.8c53.3-1.2,106.7,0.8,160,4.1 c53.3,3.4,106.7,8,160,10s106.7,1.4,160-1.1s106.7-6.9,133.3-9L960,103v38h-26.7c-26.6,0-80,0-133.3,0s-106.7,0-160,0 s-106.7,0-160,0s-106.7,0-160,0s-106.7,0-160,0s-106.7,0-133.3,0H0V106z'/%3E%3C/svg%3E%0A");
    /* background-image: url("./../../images/layered-waves-haikei.svg"); */
  }

  footer {
    padding-bottom: 2rem;
    text-align: center;
    background-color: #f8fbe7;
  }

  .footer-curve {
    padding: 0 !important;
    margin: 0;
    aspect-ratio: 4000/150;
    width: 100%;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    background-image: url("./../../images/wave-yellow-haikei.svg");
  }

  .legend {
    padding-bottom: 1rem;
    background-color: #fea1a1;
  }

  .legend-marker {
    width: 15px;
    height: 15px;
    margin-right: 0.5em;
  }

  ul.legend-elements {
    font-family: "Poppins";
    font-weight: 600;
    font-size: 0.85em;
    text-transform: uppercase;
    list-style-type: none;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    padding: 0;
  }

  ul.legend-elements li:not(:first-child) {
    padding-left: 2.5em;
  }

  li {
    display: flex;
    align-items: center;
  }
</style>
