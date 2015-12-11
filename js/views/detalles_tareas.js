Moviles.Views.DetallesTarea = Backbone.View.extend({
  template: _.template($("#DetallesTarea").html()),
  el:"<div>",
  initialize:function(){

  },

  render:function(modelo){
    this.$el.html(this.template(modelo.toJSON()));
    return this;
  }
})
