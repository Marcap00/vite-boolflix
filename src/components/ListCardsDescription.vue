<script>

export default {
    data() {
        return {

        }
    },
    components: {

    }
};
</script>

<template>

    <div class="col" :key="movie.id">
        <div class="card">
            <ul>
                <li>{{ movie.title }}</li>
                <li>{{ movie.original_title }}</li>
                <li>{{ movie.vote_average }}</li>
                <li>{{ movie.overview }}</li>
            </ul>
        </div>
    </div>


</template>

<style lang="scss"></style>