Moviles.Collections.Eventos = Backbone.Collection.extend({
  model: Moviles.Models.Evento,

  initialize: function(){
    this.fetch({
        url:"json/eventos.json",
    });
  }
})
