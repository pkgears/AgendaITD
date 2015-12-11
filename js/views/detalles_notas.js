Moviles.Views.DetallesNota = Backbone.View.extend({
  template: _.template($("#DetallesNota").html()),
  el:"<div>",
  initialize:function(){

  },

  render:function(modelo){
    this.$el.html(this.template(modelo.toJSON()));
    return this;
  }
})
