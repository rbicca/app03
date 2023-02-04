import { readable } from "svelte/store";

const location = readable(null, (set) => {
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(
            (pos) => {
                console.log(pos);
                const {latitude ,longitude} = pos.coords;
                set({ latitude, longitude});
            },
            (err) => {
                console.log(err);
                set({err});
            }
        );
    }

    return () => {
        set(null);
    }
});

export default location;