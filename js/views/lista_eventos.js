Moviles.Views.ListaEventos = Backbone.View.extend({
  template: _.template($("#ListaEventos").html()),
  el:"<li>",

  initialize:function(){

  },

  render:function(modelo){
    this.$el.html(this.template(modelo.toJSON()));
    return this;
  }

})
