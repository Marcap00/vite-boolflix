<script>
import { store } from '../store.js';
import axios from 'axios';

import CardsItem from './ListCardsItem.vue';

export default {
    data() {
        return {
            store,
            /* urlApi: 'https://api.themoviedb.org/3/movie/popular', */
        }
    },
    components: {
        CardsItem
    },

    methods: {
        /* getPopularMovies() {
            axios.get(this.urlApi, {
                params: {
                    api_key: "df92fe028bcac745150cea6e094cf605",
                }
            })
                .then((response) => {
                    console.log('=======Inizio chiamata Api=======');
                    console.log(response.data.results);
                    store.movies = response.data.results;
                    console.log('Array dei movies memorizzato nello store:', store.movies);
                })
                .catch((error) => {
                    console.log(error);
                })
                .finally(() => {
                    console.log('========Chiamata Api effettuata======');
                });
        }, */
    },
    created() {
        store.getPopularMovies();
    }

};
</script>

<template>
    <div class="row">
        <CardsItem v-for="movie in store.movies" :key="movie.id" :movie="movie" />
    </div>
</template>

<style lang="scss">
.row {
    display: flex;
    gap: 2rem;
    overflow-x: scroll;
}
</style>