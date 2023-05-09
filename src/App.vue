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
        on_loading      : false, 
        store
      }
    },
    mounted()
    {
      // Prima invocazione del metodo per chiamate alla API con configurazione di default (numero cards e card di partenza)
      this.get_cards(this.store.API_init,"");
      // Invocazione del metodo per il popolamento dell'array con la lista degli archetipi disponibili. L'ordine di invocazione dei due metodi è tale da evitare eventuali problemi di richieste eccessive alla API (limite: 20 richieste al secondo)
      this.populate_archetypes();
    },
    methods:
    {
      // Metodo che si occuperà della corretta formattazione della stringa "url" in base alle esigenze. Il parametro "code" indica il tipo di formattazione da eseguire
      set_api_url(code, search_data)
      {
        let query_string = "";
        // All'interno del blocco "switch" viene formattata la query string
        switch (code)
        {
          case this.store.API_init:
            // Se "code = 0" formattiamo l'url con "numero di cards da richiedere" e "card di partenza"
            query_string = query_string.concat(this.URL_keys[0],store.cards_to_get.toString(),"&",this.URL_keys[1],store.cards_base.toString());
            break;
        }
        this.API_URL_actual = store.API_URL_default.concat("?", query_string);
      },

      // Metodo incaricato delle richieste alla API
      async get_cards(code, search_data)
      {
        // Controlliamo i dati nella console
        console.log("code= ",code);
        console.log("search_data= ",search_data);
        // Caso in cui non si deve fare nulla: code != 0 (trattasi di input) e search_data = ""
        if (!((code != this.store.API_init) && (search_data == "")))
        // Per tutti gli altri casi si entra nell'if e si eseguono funzioni e controlli
        {
          switch (code)
          {
            // Caso in cui si sta solo inizializzando il programma (Prima chiamata alla API)
            case this.store.API_init:
              this.set_api_url(code, search_data);
              this.on_loading = true;
              await axios.get(this.API_URL_actual).then( 
                res => 
                {
                  this.store.cards = res.data.data;
                  console.log("store ",store.cards);
                  this.on_loading = false;
                });
              break;
            // Caso in cui si è appena digitato o selezionato l'archetipo da cercare
            case this.store.API_search_archetype:
              // Caso in cui l'archetipo da cercare esiste
              if (this.store.archetypes.includes(search_data))
              {

              }
              // Caso in cui l'input dell'archetipo è errato .... si genererà un errore e non ci sarà nessuna chiamata alla API
              else
              {

              }
              break;
        }
        }

      },

      async populate_archetypes() 
      {
        this.on_loading = true;
        await axios.get(this.store.API_URL_archetypes).then(
          res =>
          {
            res.data.forEach(
              element => 
              {
                this.store.archetypes.push(element.archetype_name);
              });
            console.log("Archetipi in store: ",store.archetypes);
            this.on_loading = false;
          });
      }     
    }
  }
</script>

<template>
  <div id="app_base" class="vh-100 position-relative">
    <div id="while_loading" class="position-absolute top-0 start-0 bottom-0 end-0" v-if="on_loading">
      <div class="spinner-border" role="status">
        <span class="visually-hidden">Caricamento in corso...</span>
      </div>
      <h3 class="my-4">Caricamento in corso...</h3>
    </div>
    <header>
      <img id="logo" src="https://png.pngitem.com/pimgs/s/172-1722643_yugioh-logo-png-yu-gi-oh-logo-transparent.png" alt="logo">
      <h1>Yu-Gi-Oh Api</h1>
    </header>
    <nav>
      <Comp_nav_menu @go_to_api = "get_cards" />
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
      #while_loading
      {
        background-color: rgba($color: #000000, $alpha: 0.5);
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        .spinner-border
        {
          width: 3rem;
          height: 3rem;
        }
      }
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
