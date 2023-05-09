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
                box_width   : "",
                card_width  : "",
                store
            }
        },
        computed:
        {
            change_box_width()
            {
                console.log("chiamata a change box width");
                return `width : calc(100% * ${store.card_set_w_array[store.card_set_width]})`;
            },

            change_card_width()
            {
                console.log("chiamata a change card width");
                return `flex-basis: calc((100% - (${store.card_gap * (store.cards_per_row - 1)}vw)) / ${store.cards_per_row})`;
            }
        }
    }
</script>

<template>
    <div id="show_cards" class="mx-auto"
        v-bind:style="change_box_width">
        <div id="card_set_header">
            <span>Cards visualizzate: 
                <span>{{Math.min(store.cards.length, store.cards_to_get)}}</span> 
                su
                <span>{{(store.general_cards) ? (store.total_cards_nr) : (store.cards.length)}}</span> 
            cards totali</span>
        </div>
        <div id="card_set">
            <div v-for="(item, index) in store.cards" :key="index" v-bind:style="change_card_width">
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
        border: 3px solid black;
        height: calc(100%);
        padding: calc($card_set_gap * 2);
        #card_set_header
        {
            height: $card_set_header_h;
            background-color: $card_set_header_c;
            border-radius: 5px;
            display: flex;
            align-items: center;
            margin-bottom: 3px;
            span
            {
                color: $card_set_header_t;
                padding: 0 10px;
                span
                {
                    color: $card_set_header_d;
                    font-weight: 800;
                } 
            } 
        }
        #card_set
        {
            display: flex;
            flex-wrap: wrap;
            gap: $card_set_gap;
            height: calc(100% - $card_set_header_h - 3px);
            overflow-y: auto;
            div
            {
                overflow: hidden;
            } 
        } 
    }
</style>