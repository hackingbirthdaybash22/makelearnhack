console.log("Learning Vue")

// create app and mount it to id app in index.html
// it controls everything relating to that id
const app = Vue.createApp({
    // data, functions
    // the items here will be injected to id app in *.html
    //template: '<h2>I am the template</h2>'
    data() {
        return {
            showStatement: true,
            title: 'Happy Birthday',
            person: 'MLH',
            expression: '!',
            age: 1,
            change: 'change me',
            statement: 'Hello',
            x: 0,
            y: 0,
            books: [
                { title: 'name of the wind', author: 'patrick rothfuss' },
                { title: 'the way of kings', author: 'brandon sanderson' },
                { title: 'the final empire', author: 'brandon sanderson' },
            ],
            url: 'https://www.thenetninja.co.uk',
        }
    },
    methods: {
        changeMe() {
            console.log("You Clicked Me!")
            this.change = "Changed!"
        },
        changeMeToo(change) {
            this.change = change
        },
        hideShowStatement() {
            this.showStatement = false
        },
        displayShowStatement() {
            this.showStatement = true
        },
        toggleShowStatement() {
            this.showStatement = !this.showStatement
        },
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