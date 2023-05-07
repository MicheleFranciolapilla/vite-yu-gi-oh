// Importazione della funzione reactive
import { reactive } from "vue";
export const store = reactive(
    {
        // Larghezza della finestra di visualizzazione delle cards
        card_set_width      : 0.8,
        // Numero di cards per riga
        cards_per_row       : 5,
        // Indice della card da cui partire per la richiesta all'API
        cards_base          : 0, 
        // Numero di cards da richiedere all'API
        cards_to_get        : 20, 
        // Array con le cards ricevute dalla API
        cards               : [],  
        // URL della API (base)
        API_URL_default     : "https://db.ygoprodeck.com/api/v7/cardinfo.php",


    })