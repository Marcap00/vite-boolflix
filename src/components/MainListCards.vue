<script>
import CardsItem from './ListCardsItem.vue';
export default {
    data() {
        return {

        }
    },
    components: {
        CardsItem
    }
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