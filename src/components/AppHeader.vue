<script>
import { store } from '../store.js';
import axios from 'axios';


export default {
    data() {
        return {
            urlApi: 'https://api.themoviedb.org/3/search/movie',
            inputUser: '',
            isShown: false,
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
        },
        showInput() {
            this.isShown = !this.isShown;
        }
    },
    updated() {

    },


};
</script>

<template>
    <header>
        <div class="header-left">
            <h1>BOOLFLIX</h1>
            <ul>
                <li> <a href="#">Home</a></li>
                <li> <a href="#">Serie TV</a></li>
                <li> <a href="#">Film</a></li>
                <li> <a href="#">Original</a></li>
                <li> <a href="#">Aggiunti di recente</a></li>
                <li> <a href="#">La mia lista</a></li>
            </ul>
        </div>
        <div class="header-right">
            <div class="search-bar">
                <input v-if="isShown" @keyup.enter="searchMovie()" v-model="inputUser" type="text"
                    placeholder="Inserisci il titolo di un film">
                <i @click="showInput()" class="fas fa-search"></i>
            </div>
            <div class="current-profile">
                <p>BAMBINI</p>
            </div>
            <div class="notifications">
                <i class="fas fa-bell"></i>
            </div>
            <div class="dropdown-menu">
                <div class="image-profile"></div>
                <i class="fas fa-caret-down"></i>
            </div>
        </div>
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

    .header-left {
        display: flex;
        align-items: center;
        gap: 1rem;

        h1 {
            color: red;
            font-weight: 500;
        }

        ul {
            display: flex;
            gap: 1rem;

            a {
                cursor: pointer;
                color: #fff;
                text-decoration: none;
            }
        }
    }

    .header-right {
        display: flex;
        gap: 1rem;
        align-items: center;
        color: #fff;

        .search-bar {
            input {
                padding: 5px;
                border: none;
                border-radius: 5px;

                &:focus {
                    outline: none;
                }
            }
        }

        i {
            cursor: pointer;

            &.fa-search {
                margin-left: 1rem;
            }
        }
    }

}
</style>