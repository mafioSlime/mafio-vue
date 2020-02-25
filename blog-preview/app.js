new Vue({
  el: "#vue-app",
  data: {
    preview: ''
  },
  methods: {
    viewPreview: function (event) {
      this.preview = event.target.value
    }
  }
})