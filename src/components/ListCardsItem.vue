<script>
import { store } from '../store.js';

export default {
    data() {
        return {
            store
        }
    },
    components: {

    }
};
</script>

<template>
    <div class="col" v-for="movie in store.movies" :key="movie.id">
        <div v-if="movie.poster_path" class="card">
            <img :src="`https://image.tmdb.org/t/p/w500${movie.poster_path}`" alt="">
        </div>
    </div>
</template>

<style lang="scss">
.col {
    flex-shrink: 0;

    .card {
        background-color: #000;
        border: 1px solid #fff;

        img {

            height: 450px;
        }
    }
}
</style>