Moviles.Router = Backbone.Router.extend({
  routes:{
    "contactos":"contactos",
    "contactos/:id":"detallesContacto",
    "guardarContacto":"guardarContacto",
    "actualizarContacto":"actualizarContacto",
    "eliminarContacto":"eliminarContacto",
    "notas":"notas",
    "notas/:id":"detallesNota",
    "eventos":"eventos",
    "guardarEvento":"guardarEvento",
    "eliminarEvento":"eliminarEvento",
    "actualizarEvento":"actualizarEvento",
    "guardarNota":"guardarNota",
    "actualizarNota":"actualizarNota",
    "eliminarNota":"eliminarNota",
    "eventos/:id":"detallesEvento",
    "tareas":"tareas",
    "tareas/:id":"detallesTarea",
    "guardarTarea":"guardarTarea",
    "actualizarTarea":"actualizarTarea",
    "eliminarTarea":"eliminarTarea"
  },

  initialize: function(){
    this.jsonData={},
    allContactos = new Moviles.Collections.Contactos(),
    allNotas = new Moviles.Collections.Notas(),
    allEventos = new Moviles.Collections.Eventos(),
    allTareas = new Moviles.Collections.Tareas(),
    Backbone.history.start();
  },

  contactos: function(){
    $("#ul_contactos").html("");
    console.log("Contactos");
    allContactos.forEach(function(modelo){
      var lista = new Moviles.Views.ListaContactos();
      $("#ul_contactos").append(lista.render(modelo).el);
    });
  },

  detallesContacto: function(id){
    console.log(id);
    $(".info_contacto").html("");
    //var id_num = parseInt(id);
    var contacto = new Moviles.Views.DetallesContacto();
    var modelo = new Moviles.Models.Contacto();
    modelo = allContactos.findWhere({id_contacto:id})
    $(".info_contacto").append(contacto.render(modelo).el);
  },
  guardarContacto:function(){
    var nombreVar = $("#nameContacto").val();
    var a_paternoVar = $("#a_paternoContacto").val();
    var a_maternoVar = $("#a_maternoContacto").val();
    var f_nacVar = $("#f_nac").val();
    var telefonoVar = $("#telefono").val();
    var celularVar = $("#celular").val();
    var direccionVar = $("#direccion").val();
    var id_userVar = $("#id_user").val();
    $(".alta").css("display","none");
    $("#ul_contactos").html("");
    $.ajax({
      url:"nuevoContacto",
      type:"POST",
      data:{
        id_user:id_userVar,
        nombre: nombreVar,
        a_paterno:a_paternoVar,
        a_materno:a_maternoVar,
        f_nac:f_nacVar,
        telefono:telefonoVar,
        celular:celularVar,
        direccion:direccionVar
      },
      success:function(data){
        alert("Se agrego el contacto exitosamente");
        $('#formNuevoContacto')[0].reset();
        allContactos = new Moviles.Collections.Contactos(),
        allContactos.forEach(function(modelo){
          var lista = new Moviles.Views.ListaContactos();
          $("#ul_contactos").append(lista.render(modelo).el);
        });
        location.href="";
      },
      error:function(data){
        alert("Se produjo un error. Intentalo de nuevo");
      }
    })
},
actualizarContacto:function(){
  var nombreVar = $("#DetallesContactonombre").val();
  var a_paternoVar = $("#DetallesContactoa_paterno").val();
  var a_maternoVar = $("#DetallesContactoa_materno").val();
  var f_nacVar = $("#DetallesContactof_nac").val();
  var telefonoVar = $("#DetallesContactotelefono").val();
  var celularVar = $("#DetallesContactocelular").val();
  var direccionVar = $("#DetallesContactodireccion").val();
  var id_userVar = $("#id_user").val();
  var id_contactoVar = $("#DetallesContactoid_contacto").val();
  $(".alta").css("display","none");
  $("#ul_contactos").html("");
  $.ajax({
    url:"actualizarContacto",
    type:"POST",
    data:{
      id_contacto:id_contactoVar,
      id_user:id_userVar,
      nombre: nombreVar,
      a_paterno:a_paternoVar,
      a_materno:a_maternoVar,
      f_nac:f_nacVar,
      telefono:telefonoVar,
      celular:celularVar,
      direccion:direccionVar
    },
    success:function(data){
      alert("El contacto se actualizó exitosamente");
      $('#formNuevoContacto')[0].reset();
      allContactos = new Moviles.Collections.Contactos(),
      allContactos.forEach(function(modelo){
        var lista = new Moviles.Views.ListaContactos();
        $("#ul_contactos").append(lista.render(modelo).el);
      });
      location.href="";;
    },
    error:function(data){
      alert("Se produjo un error. Intentalo de nuevo");
    }
  })
},

eliminarContacto: function(){
  var id_contactoVar = $("#DetallesContactoid_contacto").val();
  var id_userVar = $("#id_user").val();
  $.ajax({
    url:"eliminarContacto",
    type:"POST",
    data:{
      id_user:id_userVar,
      id_contacto:id_contactoVar
    },
    success:function(data){
      alert("El contacto se eliminó exitosamente");
      $('#formNuevoContacto')[0].reset();
      allContactos = new Moviles.Collections.Contactos(),
      allContactos.forEach(function(modelo){
        var lista = new Moviles.Views.ListaContactos();
        $("#ul_contactos").append(lista.render(modelo).el);
      });
      location.href="";
    },
    error:function(data){
      alert("Se produjo un error. Intentalo de nuevo");
    },
  })
},
guardarEvento:function(){
  var id_userVar = $("#id_user").val();
  var nombreEventoVar = $('#nombreEventoNuevo').val();
  var fechaEventoVar = $('#fechaNuevo').val();
  var h_inicioVar = $('#h_inicioNuevo').val();
  var h_terminoVar= $('#h_terminoNuevo').val();
  var detallesVar = $('#detallesEventoNuevo').val();
  $.ajax({
    url:"guardarEvento",
    type:"post",
    data:{
      id_user:id_userVar,
      nombre:nombreEventoVar,
      fecha:fechaEventoVar,
      h_inicio:h_inicioVar,
      h_termino:h_terminoVar,
      detalles:detallesVar
    },
    success:function(data){
      alert("Se creó el evento correctamente");
      location.href="";
      $('#formNuevoEvento')[0].reset();
      allEventos = new Moviles.Collections.Eventos(),
      allEventos.forEach(function(modelo){
        var lista = new Moviles.Views.ListaEventos();
        $("#ul_eventos").append(lista.render(modelo).el);
      });
    }
  });
},
actualizarEvento:function(){
  var id_userVar = $("#id_user").val();
  var id_eventoVar = $('#id_eventoDetalles').val();
  var nombreEventoVar = $('#nombreEvento').val();
  var fechaEventoVar = $('#fechaEvento').val();
  var h_inicioVar = $('#h_inicio').val();
  var h_terminoVar= $('#h_termino').val();
  var detallesVar = $('#detallesEvento').val();
  $.ajax({
    url:"actualizarEvento",
    type:"POST",
    data:{
      id_evento:id_eventoVar,
      id_user:id_userVar,
      nombre:nombreEventoVar,
      fecha:fechaEventoVar,
      h_inicio:h_inicioVar,
      h_termino:h_terminoVar,
      detalles:detallesVar
    },
    success:function(data){
      alert("Se actualizó el evento correctamente");
      allEventos = new Moviles.Collections.Eventos(),
      allEventos.forEach(function(modelo){
        var lista = new Moviles.Views.ListaEventos();
        $("#ul_eventos").append(lista.render(modelo).el);
      });
      location.href="";
    }
  });
},
eliminarEvento: function(){
  var id_eventoVar = $("#id_eventoDetalles").val();
  var id_userVar = $("#id_user").val();
  $.ajax({
    url:"eliminarEvento",
    type:"POST",
    data:{
      id_user:id_userVar,
      id_evento:id_eventoVar
    },
    success:function(data){
      alert("El evento se eliminó exitosamente");
      $('#formNuevoContacto')[0].reset();
      allContactos = new Moviles.Collections.Contactos(),
      allContactos.forEach(function(modelo){
        var lista = new Moviles.Views.ListaContactos();
        $("#ul_contactos").append(lista.render(modelo).el);
      });
      location.href="";
    },
    error:function(data){
      alert("Se produjo un error. Intentalo de nuevo");
    },
  })
},
  notas: function(){
    console.log("notas");
    $("#ul_notas").html("");
    allNotas.forEach(function(modelo){
      var lista = new Moviles.Views.ListaNotas();
      $("#ul_notas").append(lista.render(modelo).el);
    });
  },

  detallesNota: function(id){
    $(".info_nota").html("");
    //var id_num = parseInt(id);
    var nota = new Moviles.Views.DetallesNota();
    var modelo = new Moviles.Models.Nota();
    modelo = allNotas.findWhere({id_nota:id});
    $(".info_nota").append(nota.render(modelo).el);
  },

  guardarNota:function(){
    var id_userVar = $('#id_user').val();
    var nombreNotaVar = $('#nombreNotaNueva').val();
    var detallesNotaVar = $('#detallesNotaNueva').val();
    $.ajax({
      url:"guardarNota",
      type:"POST",
      data:{
        id_user:id_userVar,
        nombre:nombreNotaVar,
        detalles:detallesNotaVar
      },
      success: function(data){
        alert("Se agregó la nota correctamente");
        location.href="";
      }
     });
  },

  actualizarNota:function(){
    var id_userVar = $('#id_user').val();
    var nombreNotaVar = $('#nombreNota').val();
    var detallesNotaVar = $('#detallesNota').val();
    var id_notaVar =$('#id_notaDetalles').val();
    $.ajax({
      url:"actualizarNota",
      type:"POST",
      data:{
        id_nota:id_notaVar,
        id_user:id_userVar,
        nombre:nombreNotaVar,
        detalles:detallesNotaVar
      },
      success: function(data){
        alert("Se actualizó la nota correctamente");
        location.href="";
      }
     });
  },

  eliminarNota:function(){
    var id_userVar = $('#id_user').val();
    var id_notaVar =$('#id_notaDetalles').val();
    $.ajax({
      url:"eliminarNota",
      type:"POST",
      data:{
        id_user:id_userVar,
        id_nota:id_notaVar
      },
      success: function(data){
        alert("Se eliminó la nota correctamente");
        location.href="";
      }
     });
  },

  tareas: function(){
    console.log("tareas");
    $("#ul_tareas").html("");
    allTareas.forEach(function(modelo){
      var lista = new Moviles.Views.ListaTareas();
      $("#ul_tareas").append(lista.render(modelo).el);
    })
  },
  detallesTarea:function(id){
    $(".info_tarea").html("");
    //var id_num = parseInt(id);
    var tarea = new Moviles.Views.DetallesTarea();
    var modelo = new Moviles.Models.Evento();
    modelo = allTareas.findWhere({id_tarea:id});
    $(".info_tarea").append(tarea.render(modelo).el);
  },

  guardarTarea: function(){
    var id_userVar = $('#id_user').val();
    var materiaVar = $('#materiaTareaNueva').val();
    var detallesVar = $('#detallesTareaNueva').val();
    var fechaVar = $('#f_entregaTareaNueva').val();
    $.ajax({
      url:"guardarTarea",
      type:"post",
      data:{
        id_user:id_userVar,
        materia:materiaVar,
        detalles:detallesVar,
        fecha:fechaVar
      },
      success:function(data){
        alert("Se agregó la tarea correctamente");
        location.href="";
      }
    });
  },

  eliminarTarea:function(){
    var id_userVar = $('#id_user').val();
    var id_tareaVar = $('#id_tareaDetalles').val();
    $.ajax({
      url:"eliminarTarea",
      type:"POST",
      data:{
        id_user:id_userVar,
        id_tarea:id_tareaVar
      },
      success: function(data){
        alert("Se eliminó la tarea correctamente");
        location.href="";
      }
     });
  },

  actualizarTarea: function(){
    var id_tareaVar = $('#id_tareaDetalles').val();
    var id_userVar = $('#id_user').val();
    var materiaVar = $('#materiaTarea').val();
    var detallesVar = $('#detallesTarea').val();
    var fechaVar = $('#f_entregaTarea').val();
    $.ajax({
      url:"actualizarTarea",
      type:"post",
      data:{
        id_tarea:id_tareaVar,
        id_user:id_userVar,
        materia:materiaVar,
        detalles:detallesVar,
        fecha:fechaVar
      },
      success:function(data){
        alert("Se actualizó la tarea correctamente");
        location.href="";
      }
    });
  },

  eventos: function(){
    console.log("eventos");
    $("#ul_eventos").html("");
    allEventos.forEach(function(modelo){
      var lista = new Moviles.Views.ListaEventos();
      $("#ul_eventos").append(lista.render(modelo).el);
    })
  },

  detallesEvento: function(id){
    $(".info_evento").html("");
    //var id_num = parseInt(id);
    var evento = new Moviles.Views.DetallesEventos();
    var modelo = new Moviles.Models.Evento();
    modelo = allEventos.findWhere({id_evento:id});
    $(".info_evento").append(evento.render(modelo).el);
  }

})

Moviles.application = new Moviles.Router();
