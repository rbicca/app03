import { writable } from "svelte/store";

const settings = writable({
    colorScheme: 'dark',
    language: 'en',
    fontSize: 12
}, (set) => {
    console.log('construiu');
    const timer = setTimeout(() => {
        set({
            colorScheme: 'light',
            language: 'en',
            fontSize: 12
        });
    }, 1000);
    return () => {
        clearTimeout(timer);
        console.log('destruiu');
    };
});

export default settings;