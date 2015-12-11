Moviles.Views.DetallesEventos = Backbone.View.extend({
  template: _.template($("#DetallesEvento").html()),
  el:"<div>",

  initialize:function(){

  },

  render:function(modelo){
    this.$el.html(this.template(modelo.toJSON()));
    return this;
  }
})
