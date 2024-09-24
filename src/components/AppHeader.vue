<script>
import { store } from '../store';

export default {
    data() {
        return {
            store,
            inputUser: '',
            isShown: false,
            activeLink: 0,
            linksHeader: [
                {
                    text: 'Home',
                    href: '#',
                    active: true,
                    getPage() {
                        store.getPopularMovies();
                        store.searched = false;
                        store.onlyMovies = false;
                        store.onlyTv = false;
                    }
                },
                {
                    text: 'Serie TV',
                    href: '#',
                    active: false,
                    getPage() {
                        store.getPopularTv();
                        store.searched = false;
                        store.onlyMovies = false;
                        store.onlyTv = true;
                    }
                },
                {
                    text: 'Film',
                    href: '#',
                    active: false,
                    getPage() {
                        store.getPopularMovies();
                        store.searched = false;
                        store.onlyMovies = true;
                        store.onlyTv = false;
                    }
                },
                { text: 'Original', href: '#' },
                { text: 'Aggiunti di recente', href: '#' },
                { text: 'La mia lista', href: '#' },
            ],
        }
    },
    computed: {

    },
    methods: {
        setActiveLink(index) {
            this.linksHeader.forEach((link, i) => {
                link.active = i === index;
            });
        },

        showInput() {
            this.isShown = !this.isShown;
        },
        emitInputUser(inputUser) {
            this.$emit('input-user', inputUser);
            console.log('Input emesso:', inputUser);
            store.searched = true;
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
                <li v-for="(link, index) in linksHeader" :key="index"> <a :class="{ active: link.active }"
                        @click="link.getPage(), setActiveLink(index)" :href="link.href">{{
                            link.text }}</a></li>
            </ul>
        </div>
        <div class="header-right">
            <div class="search-bar">
                <input v-if="isShown" @keyup.enter="emitInputUser(inputUser)" v-model="inputUser" type="text"
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
                <i class="fas fa-caret-down fa-sm"></i>
            </div>
        </div>
    </header>
</template>

<style lang="scss">
@use '../styles/partials/variables' as *;

header {
    height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 1rem;

    background-color: $bg-main;

    .header-left {
        display: flex;
        align-items: center;
        gap: 1rem;

        h1 {
            color: red;
            font-weight: 600;
        }

        ul {
            display: flex;
            gap: 1rem;

            a {
                cursor: pointer;
                color: #fff;
                text-decoration: none;
                font-size: 14px;
                font-weight: 600;

                &.active,
                &:hover {
                    text-shadow: 0 0 5px #fff;
                }
            }
        }
    }

    .header-right {
        display: flex;
        gap: 1rem;
        align-items: center;
        color: #fff;

        p {
            font-size: 14px;

        }

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