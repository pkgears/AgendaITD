Moviles.Views.ListaTareas = Backbone.View.extend({
  template: _.template($("#ListaTareas").html()),
  el:"<li>",

  initialize:function(){

  },

  render:function(modelo){
    this.$el.html(this.template(modelo.toJSON()));
    return this;
  }
})
