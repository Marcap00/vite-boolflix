<script>
import { store } from '../store.js';
import axios from 'axios';
import CardsItem from './ListCardsItem.vue';
export default {
    data() {
        return {
            urlApi: 'https://api.themoviedb.org/3/search/movie'
        }
    },
    components: {
        store,
        CardsItem
    },
    methods: {
        getMovies() {
            axios.get(this.urlApi, {
                params: {
                    api_key: "df92fe028bcac745150cea6e094cf605",
                    query: 'ritorno al futuro'
                }
            })
                .then((response) => {
                    console.log(response.data.results);
                    store.movies = response.data.results;
                    console.log('Dato memorizzato nello store:', store.movies);
                })
                .catch((error) => {
                    console.log(error);
                })
                .finally(() => {
                    console.log('========Chiamata Api effettuata======');
                });
        }
    },
    created() {
        this.getMovies();
    }
};
</script>

<template>
    <div class="row">
        <CardsItem />
    </div>
</template>

<style lang="scss">
.row {
    display: flex;
    gap: 2rem;
}
</style>