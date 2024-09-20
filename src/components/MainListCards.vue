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

};
</script>

<template>
    <div class="row">
        <CardsItem />
    </div>
</template>

<style lang="scss">
.row {
    display: flex;
    gap: 2rem;
}
</style>