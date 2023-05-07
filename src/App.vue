<script>
// Importazione dello store (state management)
  import { store } from "./store"
  export default
  {
    name        : "App",
    components  : 
    {
    }
  }
</script>

<template>
  <div id="app_base">
    <header class="fixed-top">
      <img id="logo" src="https://png.pngitem.com/pimgs/s/172-1722643_yugioh-logo-png-yu-gi-oh-logo-transparent.png" alt="logo">
      <h1>Yu-Gi-Oh Api</h1>
    </header>
  </div>
</template>

<style scoped lang="scss">
    // Uso del foglio di stile scss
    @use "./assets/style/main.scss" as *;

    #app_base
    {
      background-color: $background_color;
      min-height: 100vh;
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
    }

</style>
