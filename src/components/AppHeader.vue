<script>
export default {
    data() {
        return {

        }
    },
};
</script>

<template>
    <header>
        <h1>BOOLFLIX</h1>
        <input type="text" placeholder="Inserisci il titolo di un film">
    </header>
</template>

<style lang="scss">
header {
    height: 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 1rem;

    background-color: #000;
    color: red;

    h1 {
        font-weight: 500;
    }
}
</style>