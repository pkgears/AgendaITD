Moviles.Collections.Contactos = Backbone.Collection.extend({
  model: Moviles.Models.Contacto,

  initialize: function(){
    this.fetch({
      url:"json/contactos.json"
    })
  },
})
