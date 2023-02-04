<script>
    import settings from "../stores/settings";
    import location from "../stores/location";
</script>

<h2>Home</h2>
{#if $location && !$location.err}
    {$location.latitude} {$location.longitude}
{/if}
{#if $location && $location.err}
    {$location.err.message}
{/if}
{$settings.colorScheme}