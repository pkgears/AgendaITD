Moviles.Views.ListaNotas = Backbone.View.extend({
  template: _.template($("#ListaNotas").html()),
  el: "<li>",

  initialize: function(){

  },

  render:function(modelo){
    this.$el.html(this.template(modelo.toJSON()));
    return this;
  }
})
