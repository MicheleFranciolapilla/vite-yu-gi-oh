<script>
    export default
    {
        name    : "Comp_single_card",
        props   : ['single_card']
    }
</script>

<template>
    <div>
        <img v-bind:src="single_card.card_images[0].image_url" alt="">
    </div>
</template>

<style scoped lang="scss">
    // Uso del foglio di stile scss
    @use "../assets/style/main.scss" as *;

    img
    {
        width: 100%;
        object-fit: contain;
    }
 
</style>