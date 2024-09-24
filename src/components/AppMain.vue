<script>
import ListCards from './MainListCards.vue';
export default {
    data() {
        return {

        }
    },
    components: {
        ListCards
    }
};
</script>

<template>

    <main>
        <div class="container">

            <ListCards />

        </div>
    </main>


</template>

<style lang="scss">
@use '../styles/partials/variables.scss' as *;

main {
    background-color: $bg-main;
    height: calc(100vh - 60px);
    overflow-y: scroll
}
</style>