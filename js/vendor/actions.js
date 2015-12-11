var target = "Hola";
function mostarRegistro(){
  $(".registro").css("display","block");
};

function cerrarRegistro(){
  $(".registro").css("display","none");
}

function mostrarPrincipal(e){
  target = e.value;
  $(".secundario").each(function(){
    $(this).css("display", "none");
  });
  $(".alta").each(function(){
    $(this).css("display", "none");
  });
  location.href="#"+target;
  $("#"+target).css("display","block");
  // if(target=="calendario"){
  //     location.href="";
  //     $("#"+target).css("display","block");
  // }else{
  //   location.href="#"+target;
  //   $("#"+target).css("display","block");
  // }
};

function cerrarSesion(){
  location.href="cerrarSesion";
};

function mostrarAlta(e){
  target = e.value;
  $("."+target).css("display","block");
}
function cerrarAlta(e){
  target = e.value;
  $("."+target).css("display","none");
};

function newContacto(){
  location.href="#guardarContacto"
};
function actualizarContacto(){
  location.href="#actualizarContacto"
};
function eliminarContacto(){
  location.href="#eliminarContacto"
};
function newEvento(){
  location.href="#guardarEvento"
};
function actualizarEvento(){
  location.href="#actualizarEvento"
};
function eliminarEvento(){
  location.href="#eliminarEvento"
};
function newNota(){
  location.href="#guardarNota"
};
function actualizarNota(){
  location.href="#actualizarNota"
};
function eliminarNota(){
  location.href="#eliminarNota"
};
function newTarea(){
  location.href="#guardarTarea"
};
function actualizarTarea(){
  location.href="#actualizarTarea"
};
function eliminarTarea(){
  location.href="#eliminarTarea"
};
$(document).ready(function() {
  var currentLangCode = 'es';
  $('#calendar').fullCalendar({
    header: {
      left: 'prev,next today',
      center: 'title',
    },
    lang: currentLangCode,
    defaultDate: '2015-11-16',
  });
});
