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