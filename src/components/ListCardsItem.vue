<script>


export default {
    data() {
        return {
            activeHover: false
        }
    },
    methods: {

    },
    props: {
        movie: Object
    }
};
</script>

<template>
    <!-- Col -->
    <div class="col" v-if="movie.poster_path">
        <!-- Card -->
        <div class="card" @mouseenter="this.activeHover = true" @mouseleave="this.activeHover = false">
            <!-- Image Movie Card -->
            <img v-if="!this.activeHover" :src="`https://image.tmdb.org/t/p/w500${movie.poster_path}`"
                :alt="movie.title">
            <!-- Description Movie -->
            <ul v-if="this.activeHover">
                <li>
                    <b>Titolo: </b> {{ movie.title || movie.name }}
                </li>
                <!-- <li v-else>
                    <b>Titolo: </b> {{ movie.name }}
                </li> -->
                <li>
                    <b>Titolo originale: </b> {{ movie.original_title || movie.original_name }}
                </li>
                <!-- <li v-else>
                    <b>Titolo originale: </b> {{ movie.original_name }}
                </li> -->
                <li>
                    <b>Lingua: </b> {{ movie.original_language }}
                </li>
                <li>
                    <b>Voto: </b> {{ movie.vote_average.toFixed(1) }}
                </li>
                <li>
                    <b>Overview: </b> {{ movie.overview }}
                </li>
            </ul>
        </div>
    </div>
</template>

<style lang="scss">
.col {
    flex-shrink: 0;

    .card {
        height: 450px;
        width: 300px;
        background-color: #000;
        border: 1px solid #fff;
        color: white;

        ul {
            padding: 1rem;

            li {
                margin-bottom: 3px;

            }
        }
    }
}
</style>