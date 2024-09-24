<script>


export default {
    data() {
        return {
            activeHover: false,
            typeResult: ''
        }
    },
    computed: {
    },
    methods: {
        parseType(type) {
            return this.typeResult = type === 'movie' ? 'Film' : 'Serie Tv';
        },
        parseLang(lang) {
            if (lang === 'en') {
                lang = 'GB';
                return `https://flagsapi.com/${lang}/flat/24.png`;
            } else if (lang === 'ko') {
                lang = 'KR';
                return `https://flagsapi.com/${lang}/flat/24.png`;
            } else if (lang === 'ja') {
                lang = 'JP';
                return `https://flagsapi.com/${lang}/flat/24.png`;
            } else if (lang === 'zh') {
                lang = 'CN';
                return `https://flagsapi.com/${lang}/flat/24.png`;
            }
            lang = lang.toUpperCase();
            return `https://flagsapi.com/${lang}/flat/24.png`;
        }
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
            <ul v-else>
                <li>
                    <b>Titolo: </b> {{ movie.title || movie.name }}
                </li>
                <li>
                    <b>Titolo originale: </b> {{ movie.original_title || movie.original_name }}
                </li>
                <li>
                    <b>Tipo: </b> {{ this.parseType(movie.media_type) }}
                </li>
                <li class="language">
                    <b>Lingua: </b>
                    <img :src="parseLang(movie.original_language)" :alt="movie.original_language">
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

                &.language {
                    display: flex;
                    align-items: center;
                    gap: 5px;
                }

            }
        }
    }
}
</style>