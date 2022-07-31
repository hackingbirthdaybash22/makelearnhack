const app = Vue.createApp({
    data() {
        return {
            name: "",
            message: "",
            isGenerated: false,
            honorific: "",
            newWindow: false,
            oldWindow: true,
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