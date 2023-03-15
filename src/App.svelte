<script lang="ts">
  import Comic from "./lib/Comic.svelte";
  import Contacts from "./lib/Contacts.svelte";
  import Header from "./lib/Header.svelte";
  import Projects from "./lib/Projects.svelte";
</script>

<Header />
<main>
  <section id="bio">
    <h2>Bio</h2>
    <p>
      I'm a web developer with experience in front-end frameworks such as React
      and Nuxt. I've worked on a variety of projects, including e-commerce
      websites and interactive data visualizations.
    </p>
  </section>
  <Projects />
  <Comic />
  <Contacts />
</main>

<style>
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  main {
    max-width: 800px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    padding: 20px;
  }

  section {
    margin: 40px 0;
  }

  h2 {
    font-size: 2rem;
    margin-bottom: 10px;
  }
</style>
