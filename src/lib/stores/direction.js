import { derived } from "svelte/store";
import settings from "./settings";

const direction = derived(settings, ($settings) => {
    return $settings.language === 'en' ? 'dirige pela esquerda' : 'dirige pela direita'
});

export default direction;