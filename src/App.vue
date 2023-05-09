<script>
// Importazione dello store (state management)
  import axios from "axios";
  import Comp_nav_menu from "./components/Comp_nav_menu.vue";
  import Comp_show_cards from "./components/Comp_show_cards.vue";
  import { store } from "./store"
  export default
  {
    name        : "App",
    components  : 
    {
      Comp_nav_menu,
      Comp_show_cards
    },
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
      // Prima invocazione del metodo per chiamate alla API con configurazione di default (numero cards e card di partenza)
      this.get_cards(0);
      // Invocazione del metodo per il popolamento dell'array con la lista degli archetipi disponibili. L'ordine di invocazione dei due metodi è tale da evitare eventuali problemi di richieste eccessive alla API (limite: 20 richieste al secondo)
      this.populate_archetypes();
    },
    methods:
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
        await axios.get(this.API_URL_actual).then( 
          res => 
          {
            this.store.cards = res.data.data;
            console.log("store ",store.cards);
          });
      },

      async populate_archetypes() 
      {
        await axios.get(this.store.API_URL_archetypes).then(
          res =>
          {
            res.data.forEach(
              element => 
              {
                this.store.archetypes.push({"name":element.archetype_name, "visible":true});
              });
            console.log("Archetipi in store: ",store.archetypes);
          });
      }     
    }
  }
</script>

<template>
  <div id="app_base" class="vh-100 position-relative">
    <header>
      <img id="logo" src="https://png.pngitem.com/pimgs/s/172-1722643_yugioh-logo-png-yu-gi-oh-logo-transparent.png" alt="logo">
      <h1>Yu-Gi-Oh Api</h1>
    </header>
    <nav>
      <Comp_nav_menu/>
    </nav>
    <main>
      <Comp_show_cards/>
    </main>
    <footer class="fixed-bottom">
    </footer>
  </div>
</template>

<style scoped lang="scss">
    // Uso del foglio di stile scss
    @use "./assets/style/main.scss" as *;

    #app_base
    {
      background-color: $background_color;
      header
      {
        height: $header_height;
        background-color: $header_color;
        display: flex;
        align-items: center;
        #logo
        {
          height: 80%;
          object-fit: contain;
          margin: 0 2rem;
        }
        h1
        {
          color: $title_color;
        } 
      }
      nav
      {
        height: $nav_height;
        padding-top: 10px;
      } 
      main
      {
        height: calc(100% - ($header_height + $nav_height + $footer_height));
        padding: 3vh 0;
      } 
      footer
      {
        height: $footer_height;
        background-color: $footer_color;
      } 
    }

</style>
