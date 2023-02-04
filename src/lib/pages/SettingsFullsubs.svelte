<script>
    import settings from "../stores/settings";
    import { onDestroy } from "svelte";

    let colorScheme;
    $: {
        settings.update(prev =>  ({... prev, colorScheme}) );
    }
    const unsubscribe = settings.subscribe( val => {
        colorScheme = val.colorScheme;
    });

    onDestroy(unsubscribe);
    
</script>

<h2>Settings</h2>

<label>
    <input type="radio" name= "colorScheme" value="dark" bind:group={colorScheme} /> Dark
</label>
<label>
    <input type="radio" name= "colorScheme" value="light" bind:group={colorScheme}/> Light
</label>