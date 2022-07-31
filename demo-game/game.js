const app = Vue.createApp({
    data() {
        return {
            age: 1,
            x: 0,
            y: 0,
            url: 'https://github.com/hackingbirthdaybash22/makelearnhack/tree/siewwen-demo/demo-game',
        }
    },
    methods: {
        handleEvent() {
            this.age = this.age * 2
        },
        handleMouseMove(e) {
            //this.age = this.age / 2
            this.x = e.offsetX
            this.y = e.offsetY
        } 
    }
})
app.mount('#app')