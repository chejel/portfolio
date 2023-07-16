<script>
  import { uniqueTags } from "../data/data.js";

  export let selectedTagName;
  export const selectTag = e => {
    selectedTagName = e.target.textContent.trim();
    console.log(selectedTagName);
    if (
      selectedTagName === "Show all projects" ||
      selectedTagName === "Showing all projects" ||
      selectedTagName === ""
    ) {
      document.querySelector(
        ".tag-all"
      ).innerHTML = `Showing all projects &nbsp;<i class="fa-solid fa-circle-arrow-down fa-sm" />`;
    } else if (uniqueTags.includes(selectedTagName)) {
      document.querySelector(
        ".tag-all"
      ).innerHTML = `Show all projects &nbsp;<i class="fa-solid fa-circle-arrow-down fa-sm" />`;
    }
  };
</script>

<div class="tags-container">
  <!-- tags -->
  <div>
    {#each uniqueTags as tag}
      <div class="tag" on:click={selectTag} class:active={selectedTagName === tag}>{tag}</div>
    {/each}
    <br />
  </div>

  <!-- show all button -->

  <div
    class="tag tag-all"
    on:click={selectTag}
    class:active={selectedTagName === "Show all projects" ||
      selectedTagName === "Showing all projects" ||
      selectedTagName === ""}
  >
    Showing all projects &nbsp;<i class="fa-solid fa-circle-arrow-down fa-sm" />
  </div>
</div>

<style>
  .tags-container {
    margin: 0;
    padding: 0;
  }

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    padding-bottom: 1.5rem;
  }

  .tag {
    transition: 1s;
    font-family: "Poppins";
    margin-top: 1rem;
    font-size: 1em;
    font-weight: 700;
    text-transform: uppercase;
    padding: 0.25rem 0.9rem;
    background-color: #e3222d;
    color: white;
    width: max-content;
    border-radius: 3px;
    display: flex;
    margin-right: 1rem;
    cursor: pointer;
    border: 0;
    box-shadow: rgba(50, 50, 85, 0.2) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  }

  .tag:hover {
    transition: 1s;
    background-color: #333;
    background: #333;
    color: white;
  }

  .tag-all {
    display: flex;
    align-items: center;
    background: linear-gradient(90deg, rgba(135, 203, 185, 1) 5%, rgba(247, 208, 96, 1) 50%, rgba(255, 109, 96, 1) 95%);
    border: 1px solid #333;
    font-size: 0.8em;
    color: #000;
    text-transform: uppercase;
    font-weight: 700;
  }

  .active {
    background-color: #333;
    background: #333;
    color: #fff;
    cursor: auto;
  }
</style>
