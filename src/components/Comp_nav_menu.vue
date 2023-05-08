<script>
    import { store } from "../store";
    export default
    {
        name        : "Comp_nav_menu",
        data()
        {
            return {
                store
            }
        },
        methods:
        {
            go_thinner() 
            { 
                if (this.store.card_set_width != 0)
                {
                    (this.store.card_set_width--);
                } 
            },

            go_thicker() 
            { 
                if (this.store.card_set_width != this.store.card_set_w_array.length - 1)
                {
                    (this.store.card_set_width++);
                } 
            },

            go_less()
            {
                if (this.store.cards_per_row > 1)
                {
                    (this.store.cards_per_row--);
                }
            },

            go_more()
            {
                if (this.store.cards_per_row < this.store.cards.length)
                {
                    (this.store.cards_per_row++);
                }
            }
        }
    }
</script>

<template>
    <div id="nav_menu">
        <div id="width_menu" class="menu_area">
            <button id="thinner" class="btn" type="button" v-on:click="go_thinner()"><i class="fa-solid fa-minimize"></i></button>
            <span id="width_data">{{ Math.trunc(store.card_set_w_array[store.card_set_width] * 100)}}%</span>
            <button id="thicker" class="btn" type="button" v-on:click="go_thicker()"><i class="fa-solid fa-maximize"></i></button>
        </div>
        <div id="rows_menu" class="menu_area">
            <button id="less" class="btn" type="button" v-on:click="go_less()"><i class="fa-solid fa-caret-down"></i></button>
            <span id="rows_data">{{ store.cards_per_row }}</span>
            <button id="more" class="btn" type="button" v-on:click="go_more()"><i class="fa-solid fa-caret-up"></i></button>
        </div>
    </div>
</template>

<style scoped lang="scss">
    // Uso del foglio di stile scss
    @use "../assets/style/main.scss" as *;

    #nav_menu
    {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
        gap: 50px;
        .menu_area
        {
            display: flex;
            justify-content: space-between;
            align-items: center;
            gap: 5px;
            background-color: $nav_menu_color;
            padding: 5px;
            border: 3px solid $nav_menu_border;
            border-radius: 5px;
            .btn
            {
                width: 15px;
                height: 50%;
                display: flex;
                justify-content: center;
                align-items: center;
                border: 2px solid $btn_color !important;
                border-radius: 5px;
                background-color: $btn_bg_color;
                color: $btn_color;
            }
            span
            {
                padding: 0 5px;
                text-align: center;
                min-width: 30px;
                background-color: $data_bg_color;
            } 
        }
    }
</style>