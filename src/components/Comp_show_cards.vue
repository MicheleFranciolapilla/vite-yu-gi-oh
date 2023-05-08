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

        //     change_box_width()
        //     {
        //         this.box_width   = `width : calc(100% * ${store.card_set_w_array[store.card_set_width]})`;
        //         return this.box_width;
        //     },

        //     change_card_width()
        //     {
        //         this.card_width   = `flex-basis: calc((100% - (${store.card_gap * (store.cards_per_row - 1)}vw)) / ${store.cards_per_row})`;
        //         return this.card_width;
        //     }
        // }
            change_box_width()
            {
                return `width : calc(100% * ${store.card_set_w_array[store.card_set_width]})`;
            },

            change_card_width()
            {
                return `flex-basis: calc((100% - (${store.card_gap * (store.cards_per_row - 1)}vw)) / ${store.cards_per_row})`;
            }
        }

    }
</script>

<template>
    <div id="show_cards" class="mx-auto"
        v-bind:style="change_box_width">
        <div id="card_set_header">
            <span>Cards trovate: {{ store.cards.length }} cards</span>
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
            display: flex;
            align-items: center;
            margin-bottom: 3px;
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