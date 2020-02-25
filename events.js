new Vue({
  el: "#vue-app",
  data: {
    age: 25,
    x: 0,
    y: 0
  },
  methods: {
    addYear: function (inc) {
      this.age += inc
    },
    subtractYear: function (dec) {
      this.age -= dec
    },
    updateXY: function (event) {
      console.log(event)
      this.x = event.offsetX
      this.y = event.offsetY
    }
  }
})