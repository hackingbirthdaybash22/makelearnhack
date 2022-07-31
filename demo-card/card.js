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
            //window.location.href = "../demo-happy-birthday/hbd.html";
            this.isGenerated = true
        },
        generate() {
            //window.open(`/details/${this.name}`, '_blank')
            this.newWindow = true
            this.oldWindow = false
        }
    }
})
app.mount('#app')