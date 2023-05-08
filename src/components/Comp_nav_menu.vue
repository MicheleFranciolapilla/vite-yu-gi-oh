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
        }
    }
</script>

<template>
    <div id="nav_menu">
        <div id="width_menu">
        </div>
        <div id="rows_menu">
            <button id="less" class="btn" type="button"><i class="fa-solid fa-caret-down"></i></button>
            <span id="rows_data">{{ store.cards_per_row }}</span>
            <button id="more" class="btn" type="button"><i class="fa-solid fa-caret-up"></i></button>
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
        border: 3px solid blue;
        #width_menu
        {
            display: flex;
            justify-content: space-between;
            align-items: center;
        } 
        #rows_menu
        {
            display: flex;
            justify-content: space-between;
            align-items: center;
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
        }
    }
</style>