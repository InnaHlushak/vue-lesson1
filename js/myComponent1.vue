<template>
    <input type="text" v-model="movie" placeholder="Вкажіть назву фільму" >
    <p>Чи варто дивитися фільм "{{movie}}"?</p>
</template>

<script>
    export default {
        name: 'MyComponent1',
        data() {
            return {
                movie: '',
            }
        },
    }
</script>