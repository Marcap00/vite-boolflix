<script>
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import axios from 'axios';
import { store } from './store.js';

export default {
    data() {
        return {
            store,
            urlApi: 'https://api.themoviedb.org/3/search/multi',
        }
    },
    components: {
        AppHeader,
        AppMain
    },
    methods: {
        getMovies(inputUser) {
            axios.get(this.urlApi, {
                params: {
                    api_key: "df92fe028bcac745150cea6e094cf605",
                    query: inputUser,
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
        },
    }
};
</script>

<template>

    <AppHeader @input-user="getMovies" />
    <AppMain />


</template>

<style lang="scss">
@use './styles/general.scss' as *;
</style>
