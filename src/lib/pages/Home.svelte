<script>
    import { onDestroy } from "svelte";
    import settings from "../stores/settings";

    let colorScheme;

    const unsubscribe = settings.subscribe( val => {
        colorScheme = val.colorScheme;
    });

    onDestroy(unsubscribe);
    
</script>

<h2>Home</h2>
{colorScheme}