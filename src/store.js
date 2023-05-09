// Importazione della funzione reactive
import { reactive } from "vue";
export const store = reactive(
    {
        card_gap            : 0.8,
        // Larghezza della finestra di visualizzazione delle cards
        card_set_width      : 5,
        card_set_w_array    : [0.5, 0.55, 0.6, 0.65, 0.7, 0.75, 0.8, 0.85, 0.9, 0.95],
        // Numero di cards per riga
        cards_per_row       : 5,
        // Indice della card da cui partire per la richiesta all'API
        cards_base          : 777, 
        // Numero di cards da richiedere all'API
        cards_to_get        : 10, 
        // Array con le cards ricevute dalla API
        cards               : [],  
        // URL della API (base)
        API_URL_default     : "https://db.ygoprodeck.com/api/v7/cardinfo.php"


    })