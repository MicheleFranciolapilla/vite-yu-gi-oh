<script>
    export default
    {
        name    : "Comp_single_card",
        props   : ['single_card']
    }
</script>

<template>
    <div class="yugioh_card">
        <div class="img_box">
            <img v-bind:src="single_card.card_images[0].image_url" alt="...">
        </div>
        <div class="card_info">
            <h6>{{single_card.name}}</h6>
            <span>{{single_card.archetype}}</span>
        </div>
    </div>
</template>

<style scoped lang="scss">
    // Uso del foglio di stile scss
    @use "../assets/style/main.scss" as *;

    .yugioh_card
    {
        border: 3px solid black;
        border-radius: 5px;
        width: calc(100%);
        .img_box
        {
            width: calc(100%);
            img
            {
                width: calc(100%);
                object-fit: contain;
            }
        } 
        .card_info
        {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            width: calc(100%);
            aspect-ratio: 2;
            background-color: $background_color;
            border: 2px solid lightgray;
            border-radius: 5px;
            padding: 3px;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            *{
                height: calc(100% / 3);
                width: calc(100%);
                text-align: center;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
            }
            h6
            {
                color: white;
            } 
        }
    } 

 
</style>