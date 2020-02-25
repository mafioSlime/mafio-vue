new Vue({
  el: "#vue-app",
  data: {
    name: "MafioSlime",
    job: "mafia",
    website: "http://www.thenetninja.co.uk",
    websiteTag: '<a href="http://www.thenetninja.co.uk">The Net Ninja</a>'
  },
  methods: {
    greet: function (time) {
      return "Good " + time + ' ' + this.name

    }
  }
})