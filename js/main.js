
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

const app = Vue.createApp({
    components: {
        'my-component1': Vue.defineAsyncComponent(() => loadModule('./js/myComponent1.vue', options)),
        'my-component2': Vue.defineAsyncComponent(() => loadModule('./js/myComponent2.vue', options)),
    },
    data() {
        return {
            nunberClick: 0,
        }
    },
    template: `
        <h1>Домашнє завдання 1 </h1>        
        <div class="container">
            <p> Ви натиснули кнопку {{nunberClick}} разів. </p>
            <button class="btn btn-primary" @click="nunberClick++"> Click me! </button>
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
