<script>
  import { onMount } from "svelte";
    import Head from "./lib/Head.svelte";
  import Home from "./lib/pages/Home.svelte";
  import Settings from "./lib/pages/Settings.svelte";

  let page;

  const onRouteChange = () => {
    const path = window.location.hash.slice(1);
    if (path === '/') {
      page = 'home';
    } else if (path === '/settings') {
      page = 'settings';
    } else {
      window.location.hash = '/';
    }
  };

  onMount(onRouteChange);

</script>

<svelte:window  on:hashchange={onRouteChange} />
  
<Head />

<h1>The Store</h1>
<nav>
  <a href="#/">Home</a>
  <a href="#/settings">Settings</a>
</nav>

{#if page === 'home'}
  <Home />
{:else if page === 'settings'}
  <Settings />
{ /if}



<style>
  
</style>
