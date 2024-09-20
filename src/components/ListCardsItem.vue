<script>
import { store } from '../store.js';

export default {
    data() {
        return {
            store
        }
    },
    props: {
        movie: Object
    }
};
</script>

<template>
    <div v-if="movie.poster_path" class="col" :key="movie.id">
        <div class="card">
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