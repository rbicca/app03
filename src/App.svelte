<script>
  import { writable } from "svelte/store";
  import {tweened} from "svelte/motion";

  const scale = tweened(1);

</script>

<button on:click={()=> $scale += 1} >Make it Bigger</button>
<button on:click={()=> $scale -= 1}>Make it Smaller</button>
<div style="width: 100px; height: 100px; background-color:purple; transform: scale({$scale}); transform-origin: 0 0">

</div>