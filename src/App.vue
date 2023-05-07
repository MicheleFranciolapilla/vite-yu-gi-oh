<script>
// Importazione dello store (state management)
  import Comp_get_cards from "./components/Comp_get_cards.vue";
  import Comp_show_cards from "./components/Comp_show_cards.vue";
  import { store } from "./store"
  export default
  {
    name        : "App",
    components  : 
    {
      Comp_get_cards,
      Comp_show_cards
    }
  }
</script>

<template>
  <div id="app_base" class="vh-100">
    <header>
      <img id="logo" src="https://png.pngitem.com/pimgs/s/172-1722643_yugioh-logo-png-yu-gi-oh-logo-transparent.png" alt="logo">
      <h1>Yu-Gi-Oh Api</h1>
    </header>
    <nav>
    </nav>
    <main>
      <Comp_get_cards/>
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
