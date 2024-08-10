<template>
    <p>Фільм набрав {{res}} лайків</p>
    <p>{{getConclusion}} </p>
    <button @click="doConclution">Мої висновки</button>
    <p>{{myConclution}}</p>
</template>
  
<script>
  export default {
    name: 'MyComponent3',
    props: {      
        res: {
            type: Number,
            required: false,
            default: 0
        },      
    },
    data() {
      return {
        myConclution: ''
      }
    },
    //Обчислювальна властивiсть:
    computed: {
      // геттер обчислювальної властивості: 
        getConclusion() {
            let conclution = '';
            if (this.res > 0) { 
                conclution = 'Фільм варто подивитися'
            } else {
                conclution = 'Фільм не варто дивитися'
            }
            return conclution;
        }
    },
  //Обробник подій:
    methods: {
        doConclution() {
            this.myConclution = 'Мені фільм сподовався';
        }
    }
}
</script>