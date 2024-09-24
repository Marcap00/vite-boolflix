import { reactive } from "vue";
import axios from "axios";

export const store = reactive({
    // Variables
    movies: [],
    urlPopularMovies: 'https://api.themoviedb.org/3/movie/popular',
    urlPopularTv: 'https://api.themoviedb.org/3/tv/popular',

    // Methods
    getPopularMovies() {
        axios.get(this.urlPopularMovies, {
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
    },
    getPopularTv() {
        axios.get(this.urlPopularTv, {
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
    },
});