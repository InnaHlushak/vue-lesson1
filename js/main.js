const App = {
    data() {
        return {
            title: 'Counter',
            counter: 0,
        }
    },
}

const app = Vue.createApp(App);
app.mount('#counter');