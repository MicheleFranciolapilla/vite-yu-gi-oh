<script>
    import axios from "axios";
    import { store } from "../store"
    export default
    {
        name    : "Comp_get_cards",
        data()
        {
            return {
                // URL della API (effettivo)
                API_URL_actual  : "",
                // Array contenente le chiavi della query string
                URL_keys        : ["num=","offset="],
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
                await axios.get(this.API_URL_actual).then( res => 
                {
                    this.store.cards = res.data.data;
                    console.log("res ",res.data.data);
                    console.log("store ",store.cards);
                });
            }
        }
    }
</script>

<template></template>