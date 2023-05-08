<script>
    import axios from "axios";
    import { store } from "../store"
    export default
    {
        name    : "Comp_get_cards",
        // props   : 
        // {
        //     API_code
        // },
        data()
        {
            return {
                // URL della API (effettivo)
                API_URL_actual  : "",
                // Array contenente le chiavi della query string
                URL_keys        : ["num=","offset="],
                loading_method  : null, 
                loading_freq    : 300, 
                store
            }
        },

        created()
        {
            // Invocazione del metodo che si occupa della richiesta alla API
            this.get_cards(0);
        },

        methods :
        {
            set_overlay(id_name)
            {
                let id_to_get = document.querySelector(id_name);
                let overlay = document.createElement("div");
                overlay.setAttribute("id","overlay_on_id");
                overlay.setAttribute("style","position: absolute; top:0; bottom:0; left:0; right:0; background-color:blue; opacity:0.5;");
                id_to_get.append(overlay);
            },

            reset_overlay()
            {
                let overlay = document.querySelector("#overlay_on_id");
                overlay.remove();
            },

            loading_data(id_name)
            {
                this.set_overlay(id_name);
                this.loading_method = setInterval( function()
                {
                    console.log("loading");
                }, this.loading_freq);
            },

            data_loaded()
            {
                clearInterval(this.loading_method);
                this.reset_overlay();
                console.log("done");
            },

            // Metodo che si occuperà della corretta formattazione della stringa "url" in base alle esigenze. Il parametro "code" indica il tipo di formattazione da eseguire
            set_api_url(code)
            {
                let query_string = "";
                // All'interno del blocco "switch" viene formattata la query string
                switch (code)
                {
                    case 0:
                        // Se "code = 0" formattiamo l'url con "numero di cards da richiedere" e "card di partenza"
                        query_string = query_string.concat(this.URL_keys[0],store.cards_to_get.toString(),"&",this.URL_keys[1],store.cards_base.toString());
                        break;
                }
                this.API_URL_actual = store.API_URL_default.concat("?", query_string);
            },

            // Metodo incaricato delle richieste alla API
            async get_cards(code)
            {
                this.set_api_url(code);
                // this.loading_data("#app_base");
                await axios.get(this.API_URL_actual).then( res => 
                {
                    this.store.cards = res.data.data;
                    console.log("res ",res.data.data);
                    console.log("store ",store.cards);
                });
                // this.data_loaded();
            }
        }
    }
</script>

<template>
</template>