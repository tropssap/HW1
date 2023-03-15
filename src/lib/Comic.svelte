<script lang="ts">
  import { onMount } from "svelte";
  import { createEventDispatcher } from "svelte";

  interface Comic {
    month: number;
    num: number;
    link: string;
    year: number;
    news: string;
    safe_title: string;
    transcript: string;
    alt: string;
    img: string;
    title: string;
    day: number;
  }

  const dispatch = createEventDispatcher();

  let title: string;
  let date: string;
  let img: string;
  let alt: string;
  let comicImg: HTMLImageElement;

  async function comicDownload() {
    const params = new URLSearchParams({
      email: "d.igolinskiy@innopolis.university",
    }); // Fetch the ID from the Innopolis API
    const response1: Response = await fetch(
      `https://fwd.innopolis.app/api/hw2?${params}`
    );
    const json1: string = await response1.json();
    const paramsID = new URLSearchParams({
      num: json1,
    });
    const response2 = await fetch(
      `https://getxkcd.vercel.app/api/comic?${paramsID}`
    );
    const data: Comic = await response2.json();

    img = data.img;
    alt = data.alt;
    title = data.title;
    date = new Date(data.year, data.month - 1, data.day).toLocaleDateString();

    dispatch("comicData", {
      img,
      alt,
      title,
      date,
    });
  }

  onMount(async () => {
    await comicDownload();
  });
</script>

<div id="imageContainer">
  <h2 class="title">{title}</h2>
  <p class="date">{date}</p>
  <img src={img} {alt} bind:this={comicImg} class="comic" />
  <button on:click={comicDownload}>Look for new comic</button>
</div>

<style>
  .comic {
    width: 100%;
    max-width: 800px;
  }
  .title {
    font-size: 1.5rem;
    font-weight: bold;
    margin-top: 1rem;
    margin-bottom: 0.5rem;
    text-align: center;
  }
  .date {
    font-size: 1rem;
    margin-bottom: 0.5rem;
    text-align: center;
  }

  div {
    gap: 8px;

    padding: 0.5rem 1rem;
    color: #333;
    padding: 10px;
    border: 1px solid #333;
    border-radius: 5px;
  }

  button {
    padding: 0.5rem 1rem;
    color: #333;
    padding: 10px;
    border: 1px solid #333;
    border-radius: 5px;
    display: inline-block;
    margin-right: 10px;
    font-size: 1rem;
    font-weight: bold;
    cursor: pointer;
  }

  button:hover {
    background-color: #0069d9;
  }
</style>
