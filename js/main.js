const options = {
    moduleCache: {
        vue: Vue
    },
    async getFile(url) {
        const res = await fetch(url);

        if (!res.ok)
            throw Object.assign(new Error(res.statusText + ' ' + url), { res });
        return {
            getContentData: asBinary => asBinary ? res.arrayBuffer() : res.text(),
        };
    },
    addStyle(textContent) {
        const style = Object.assign(document.createElement('style'), { textContent });
        const ref = document.head.getElementsByTagName('style')[0] || null;
        document.head.insertBefore(style, ref);
    },
};

const { loadModule } = window['vue3-sfc-loader'];

//Спільний об'єкт стану
const { createApp, reactive } = Vue
const sharedStateObject = reactive({
    homeWork: '"Домашнє завдання 1"',
})

//Основний обєкт Vue (екземпляр додатку)
const app = Vue.createApp({
    components: {
        'my-component1': Vue.defineAsyncComponent(() => loadModule('./js/myComponent1.vue', options)),
        'my-component2': Vue.defineAsyncComponent(() => loadModule('./js/myComponent2.vue', options)),
    },
    data() {
        return {
            sharedStateObject,
            numberClick: 0,
        }
    },
    template: `
        <h1> {{sharedStateObject.homeWork}}</h1>        
        <div class="container">
            <p> Натисніть кнопку таку кількість разів, скільки завдань  виконали. Ви натиснули кнопку {{numberClick}} разів.</p>
            <button class="btn btn-primary" @click="numberClick++"> Click me! </button>
        </div>
        <div class="container">
            <my-component1></my-component1>
        </div>
        <div class="container">
            <my-component2></my-component2>
        </div>
    `
});

app.mount('#app');

//Другорядний обєкт Vue (екземпляр додатку)
const app1 = Vue.createApp({
    data() {        
         return {
            sharedStateObject,
        }
    },
    template: `
        <h2>{{sharedStateObject.homeWork}} виконано!</h2>
    `
});

app1.mount('#app1');