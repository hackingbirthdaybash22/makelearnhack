const app = Vue.createApp({
    data() {
        return {
            name: "",
            message: "",
            isGenerated: false,
            honorific: "",
            newWindow: false,
            oldWindow: true,
            url: 'https://github.com/hackingbirthdaybash22/makelearnhack/tree/siewwen-demo/demo-card'
        }
    },
    methods: {
        confirm() {
            this.isGenerated = true
        },
        generate() {
            this.newWindow = true
            this.oldWindow = false
        }
    }
})
app.mount('#app')