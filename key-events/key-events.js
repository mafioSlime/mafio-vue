new Vue({
  el: "#vue-app",
  data: {
    name: '',
    age: ''
  },
  methods: {
    logName: function (event) {
      this.name = event.target.value
    },
    logAge: function () {

    }
  }
})