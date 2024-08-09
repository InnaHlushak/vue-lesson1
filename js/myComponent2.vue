<template>
    <h3>Лічильник лайків</h3>
    <div class="col-6">
        <h2 class="text-center">{{counter}}</h2>
    </div>
    <div class="col-6">
        <button class="btn btn-danger w-50" @click="counter++"> Like </button>
        <button class="btn btn-success w-50" @click="counter--"> Dislike </button>
    </div>
    <div class="container">
      <my-component3 :res="counter"></my-component3>
    </div>
</template>
  
<script>
  import myComponent3 from "./myComponent3.vue"

  export default {
    name: 'MyComponent2',
    components: {
      myComponent3
    },
    data() {
      return {
        counter: 0,
      }
    }
  }
</script>

<style scoped>
</style>