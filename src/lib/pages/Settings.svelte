<script>
    import settings from "../stores/settings";

</script>

<h2>Settings</h2>


<button on:click={() => {
    $settings.colorScheme = $settings.colorScheme === 'dark' ? 'light' : 'dark';
}} >Toggle</button>

<label>
    <input type="radio" name= "colorScheme" value="dark" bind:group={$settings.colorScheme} /> Dark
</label>
<label>
    <input type="radio" name= "colorScheme" value="light" bind:group={$settings.colorScheme}/> Light
</label>