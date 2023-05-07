<script>
    import { store } from "../store";
    import Comp_single_card from "./Comp_single_card.vue";
    export default
    {
        name        : "Comp_show_cards",
        components  : 
        {
            Comp_single_card
        },
        data()
        {
            return {
                box_width : `width : calc(100% * ${store.card_set_width})`,
                store
            }
        }
    }
</script>

<template>
    <div id="show_cards" class="mx-auto"
        v-bind:style="box_width">
        <div id="card_set_header">
            <span>Found {{ store.cards.length }} cards</span>
        </div>
        <div id="card_set">
            <div class="card"
            v-for="(item, index) in store.cards" :key="index">
                <Comp_single_card :single_card = "item"/>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
    // Uso del foglio di stile scss
    @use "../assets/style/main.scss" as *;

    #show_cards
    {
        background-color: $cards_back_color;
        height: 100%;
        padding: $cards_back_border;
        #card_set_header
        {
            height: $card_set_header_h;
            background-color: $card_set_header_c;
            display: flex;
            align-items: center;
            span
            {
                color: $card_set_header_t;
                padding: 0 10px;
            } 
        }
        #card_set
        {
            display: flex;
            flex-wrap: wrap;
            height: calc(100% - $card_set_header_h);
        } 
    }
</style>