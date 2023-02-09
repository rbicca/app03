<script>
  import direction from "../stores/direction";
  import settings from "../stores/settings";
</script>

<h2>Settings</h2>


<button on:click={() => {
    //$settings.colorScheme = $settings.colorScheme === 'dark' ? 'light' : 'dark';
    //dolarzinho antes somente para acessar valores
    settings.toggleScheme();
}} >Toggle</button>

<button on:click={() => {
    settings.updateSetting('language', Math.random());
}} >Language</button>

<button on:click={() => {
    settings.reset();
}} >Reset</button>

<label>
    <input type="radio" name= "colorScheme" value="dark" bind:group={$settings.colorScheme} /> Dark
</label>
<label>
    <input type="radio" name= "colorScheme" value="light" bind:group={$settings.colorScheme}/> Light
</label>
<hr />

{$settings.colorScheme} <br />
{$settings.language} <br />
{$direction} <br />