import { writable } from "svelte/store";

const defaultSettings = {
    colorScheme: 'dark',
    language: 'en',
    fontSize: 12
};

const createSettingsStore = () => {
    const { subscribe, set, update } = writable(defaultSettings);
    return { 
        subscribe,
        set,
        update,
        reset: () => {
            set(defaultSettings);
        },
        updateSetting: (setting, value) => {
            update((old) => ({
                ...old,
                [setting]: value
            }));
        },
        toggleScheme: () => {
            update((old) => ({
                ...old,
                colorScheme: old.colorScheme === 'dark' ? 'light' : 'dark'
            }));
        }   
    };
};

export default createSettingsStore();