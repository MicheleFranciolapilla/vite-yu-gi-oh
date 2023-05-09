        data()
        {
            return {

            }
        },

        created()
        {
            // Invocazione del metodo che si occupa della richiesta alla API
            this.get_cards(0);
        },

        methods :
        {
            set_overlay(id_name)
            {
                let id_to_get = document.querySelector(id_name);
                let overlay = document.createElement("div");
                overlay.setAttribute("id","overlay_on_id");
                overlay.setAttribute("style","position: absolute; top:0; bottom:0; left:0; right:0; background-color:blue; opacity:0.5;");
                id_to_get.append(overlay);
            },

            reset_overlay()
            {
                let overlay = document.querySelector("#overlay_on_id");
                overlay.remove();
            },

            loading_data(id_name)
            {
                this.set_overlay(id_name);
                this.loading_method = setInterval( function()
                {
                    console.log("loading");
                }, this.loading_freq);
            },

            data_loaded()
            {
                clearInterval(this.loading_method);
                this.reset_overlay();
                console.log("done");
            },




        }
    }
</script>

<template>
</template>