Moviles.Collections.Tareas = Backbone.Collection.extend({
  model: Moviles.Models.Tarea,

  initialize: function(){
    this.fetch({
      url:"json/tareas.json",
    })
  }
})
