Moviles.Collections.Notas = Backbone.Collection.extend({
  model: Moviles.Models.Nota,

  initialize: function(){
    this.loadNotas();
  },

  loadNotas: function(){
    var self = this;
    return $.getJSON("json/notas.json").then(function(data){
      self.jsonData = data;
      for(var id in data){
        if(data.hasOwnProperty([id])){
          self.addNota(id,data[id]);
        }
      }
    });
  },
  addNota: function(id,notas){
    allNotas.add(new Moviles.Models.Nota({
      id:id,
      id_nota:notas.id_nota,
      nombre:notas.nombre,
      detalles: notas.detalles,
      f_creacion:notas.f_creacion
    }))
  }

})
