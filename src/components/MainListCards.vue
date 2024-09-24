<script>
import { store } from '../store.js';


import CardsItem from './ListCardsItem.vue';

export default {
    data() {
        return {
            store,

        }
    },
    components: {
        CardsItem
    },

    methods: {
    },
    created() {
        store.getPopularMovies();
        store.getPopularTv();
    }

};
</script>

<template>
    <section v-if="!store.searched">
        <div v-if="!store.onlyTv">
            <h2>FILM POPOLARI</h2>
            <div class="row">
                <CardsItem v-for="movie in store.popularMovies" :key="movie.id" :movie="movie" />
            </div>
        </div>
        <div v-if="!store.onlyMovies">
            <h2>SERIE TV POPOLARI</h2>
            <div class="row">
                <CardsItem v-for="movie in store.popularTv" :key="movie.id" :movie="movie" />
            </div>
        </div>
    </section>
    <section v-else>
        <h2>Hai cercato:</h2>
        <div class="row">
            <CardsItem v-for="movie in store.movies" :key="movie.id" :movie="movie" />
        </div>

    </section>


</template>

<style lang="scss">
h2 {
    margin-bottom: 1rem;
    color: #fff;
}

.row {
    display: flex;
    gap: 2rem;
    overflow-x: scroll;
    margin-bottom: 3rem;
}
</style>