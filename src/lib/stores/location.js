import { readable } from "svelte/store";

const location = readable(null, (set) => {
    let watchId;
    if(navigator.geolocation && navigator.geolocation.watchPosition){
        
        watchId = navigator.geolocation.watchPosition(
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
        if(navigator.geolocation && navigator.geolocation.watchPosition){
            navigator.geolocation.clearWatch(watchId);
        }
        set(null);
    }
});

export default location;

//getCurrentPosition --> Método da geolocation que pega a posição apenas uma vez