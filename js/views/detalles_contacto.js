Moviles.Views.DetallesContacto = Backbone.View.extend({
  template: _.template($("#DetallesContacto").html()),
  el:"<div>",

  initialize:function(){

  },

  render:function(modelo){
    this.$el.html(this.template(modelo.toJSON()));
    return this;
  }
})
