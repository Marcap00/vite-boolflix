<script>
import { store } from '../store.js';
import axios from 'axios';

export default {
    data() {
        return {
            urlApi: 'https://api.themoviedb.org/3/search/movie',
            inputUser: '',
            store
        }
    },
    computed: {

    },
    methods: {
        getMovies() {
            axios.get(this.urlApi, {
                params: {
                    api_key: "df92fe028bcac745150cea6e094cf605",
                    query: store.inputUser,
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
        storeInputUser() {
            store.inputUser = this.inputUser;
            console.log('Input memorizzato nello store:', store.inputUser);
        },
        searchMovie() {
            this.storeInputUser();
            this.getMovies();
        }
    },
    updated() {

    },


};
</script>

<template>
    <header>
        <h1>BOOLFLIX</h1>
        <input @keyup.enter="searchMovie()" v-model="inputUser" type="text"
            placeholder="Inserisci il titolo di un film">
    </header>
</template>

<style lang="scss">
header {
    height: 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 1rem;

    background-color: #000;
    color: red;

    h1 {
        font-weight: 500;
    }
}
</style>