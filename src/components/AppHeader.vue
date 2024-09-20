<script>
import { store } from '../store.js';
export default {
    data() {
        return {
            inputUser: '',
            store
        }
    },
    /* computed: {
        storeInputUser() {
            return store.inputUser = this.inputUser;
        }
    }, */
    methods: {
        storeInputUser() {
            store.inputUser = this.inputUser;
        }
    },
    updated() {
        this.storeInputUser();
        console.log('Input memorizzato nello store:', store.inputUser);
    }
};
</script>

<template>
    <header>
        <h1>BOOLFLIX</h1>
        <input v-model="inputUser" type="text" placeholder="Inserisci il titolo di un film">
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