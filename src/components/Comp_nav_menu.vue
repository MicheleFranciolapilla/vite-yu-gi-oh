<script>
    import { store } from "../store";
    export default
    {
        name        : "Comp_nav_menu",
        data()
        {
            return {
                store,
                archetype_data : store.the_archetype
            }
        },
        methods:
        {
            check_limit(btn,direction)
            {
                switch (btn)
                {
                    case "width":
                        // Toggle sul pulsante "thinner"
                        if (((direction == "-") && (this.store.card_set_width == 0)) || ((direction == "+") && (this.store.card_set_width == 1)))
                        {
                            let btn_id = document.querySelector("#thinner");
                            btn_id.classList.toggle("on_limit");
                        }
                        // Toggle sul pulsante "thicker"
                        else if (((direction == "-") && (this.store.card_set_width == this.store.card_set_w_array.length - 2)) || ((direction == "+") && (this.store.card_set_width == this.store.card_set_w_array.length - 1)))
                        {
                            let btn_id = document.querySelector("#thicker");
                            btn_id.classList.toggle("on_limit");
                        }
                        break;
                    case "row":
                        // Toggle sul pulsante "less"
                        if (((direction == "-") && (this.store.cards_per_row == 1)) || ((direction == "+") && (this.store.cards_per_row == 2)))
                        {
                            let btn_id = document.querySelector("#less");
                            btn_id.classList.toggle("on_limit"); 
                        }
                        // Toggle sul pulsante "more"
                        else if (((direction == "-") && (this.store.cards_per_row == this.store.cards.length - 1)) || ((direction == "+") && (this.store.cards_per_row == this.store.cards.length)))
                        {
                            let btn_id = document.querySelector("#more");
                            btn_id.classList.toggle("on_limit");
                        }
                        break;
                }
            },

            go_thinner() 
            { 
                if (this.store.card_set_width != 0)
                {
                    this.store.card_set_width--;
                    this.check_limit("width","-");
                } 
            },

            go_thicker() 
            { 
                if (this.store.card_set_width != this.store.card_set_w_array.length - 1)
                {
                    this.store.card_set_width++;
                    this.check_limit("width","+");
                } 
            },

            go_less()
            {
                if (this.store.cards_per_row > 1)
                {
                    this.store.cards_per_row--;
                    this.check_limit("row","-");
                }
            },

            go_more()
            {
                if (this.store.cards_per_row < this.store.cards.length)
                {
                    this.store.cards_per_row++;
                    this.check_limit("row","+");
                }
            }
        }
    }
</script>

<template>
    <div id="nav_menu" class="row">
        <form id="input_area" class="menu_area col-3 offset-1">
            <span id="input_label">Archetipo...</span>
            <input type="text" name="archetype_input" list="archetype_list" v-model="archetype_data" placeholder="ricerca archetipo">
                <!-- elemento "datalist": non supportato o parzialmente supportato sui browser "Opera Mini", "KaiOS" e "IE"-->
                <!-- datalist consente di avere un input di tipo select combinato ad un input text classico -->
            <datalist v-if="store.archetypes.length != 0" id="archetype_list">
                <option v-for="(archetype_data, index) in store.archetypes" :key="index + 100">{{ archetype_data }}</option>
            </datalist>
            <button id="input_btn" class="btn btn-primary" type="submit" @click.prevent="$emit('go_to_api', store.API_search_archetype, archetype_data)">Conferma</button>
        </form>
        <div id="width_menu" class="menu_area col-1 offset-5">
            <button id="thinner" class="btn" type="button" v-on:click="go_thinner()">
                <i class="fa-solid fa-minimize"></i>
            </button>
            <span id="width_data">{{ Math.trunc(store.card_set_w_array[store.card_set_width] * 100)}}%</span>
            <button id="thicker" class="btn" type="button" v-on:click="go_thicker()">
                <i class="fa-solid fa-maximize"></i>
            </button>
        </div>
        <div id="rows_menu" class="menu_area col-1">
            <button id="less" class="btn" type="button" v-on:click="go_less()">
                <i class="fa-solid fa-caret-down"></i>
            </button>
            <span id="rows_data">{{ store.cards_per_row }}</span>
            <button id="more" class="btn" type="button" v-on:click="go_more()">
                <i class="fa-solid fa-caret-up"></i>
            </button>
        </div>
    </div>
</template>

<style scoped lang="scss">
    // Uso del foglio di stile scss
    @use "../assets/style/main.scss" as *;

    #nav_menu
    {
        // display: flex;
        // justify-content: center;
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
            .btn:not(#input_btn)
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
                &:hover
                {
                    border-color: blue !important;
                    color: blue;
                }
            }
            .btn.on_limit
            {
                border-color: $btn_onlimit_color !important;
                color: $btn_onlimit_color;
            }
            span:not(#input_label)
            {
                padding: 0 5px;
                text-align: center;
                min-width: 30px;
                background-color: $data_bg_color;
            } 
        }
    }
</style>