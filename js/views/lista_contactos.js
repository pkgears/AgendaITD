Moviles.Views.ListaContactos = Backbone.View.extend({
  template: _.template($("#ListaContactos").html()),
  el:"<li>",
  initialize: function(){

  },

  render:function(modelo){
    this.$el.html(this.template(modelo.toJSON()));
    return this;
  }
})
