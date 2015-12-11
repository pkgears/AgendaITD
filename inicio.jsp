<%@page import="java.io.PrintWriter"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%

    if(session.getAttribute("user")==null || session.getAttribute("id")==null){
        response.sendRedirect("index.html");
        System.out.println("No ha iniciado sesión");
    }
    String id_user = session.getAttribute("id").toString();
    if(id_user==null){
      response.sendRedirect("index.html");
      System.out.println("La sesión ha caducado");
    }
      %>
<!DOCTYPE html>
<html>
  <head>
      <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
      <title>Agenda</title>
      <link rel="stylesheet" href="css/normalize.css">
      <link rel="stylesheet" href="css/estilos.css" >
      <link rel='stylesheet' href='css/fullcalendar.css'/>
      <link rel='stylesheet' href='css/fullcalendar.print.css' media='print' />
  </head>
    <body>
        <header>
          <center><span class="titulo">Agenda - Moviles 2015</span></center>
        </header>
        <div class="contenido">
          <aside class="menu">
            <ul>
              <li><button type="button" id="btn_calendario" value="calendario" onclick="mostrarPrincipal(this)">Calendario</button></li>
              <li><button type="button" id="btn_contactos" value="contactos"onclick="mostrarPrincipal(this)">Contactos</button></li>
              <li><button type="button" id="btn_eventos" value="eventos" onclick="mostrarPrincipal(this)">Eventos</button></li>
              <li><button type="button" id="btn_notas" value="notas" onclick="mostrarPrincipal(this)">Notas</button></li>
              <li><button type="button" id="btn_tareas" value="tareas" onclick="mostrarPrincipal(this)">Tareas</button></li>
              <li><button type="button" name="button" onclick="cerrarSesion()">Cerrar sesion</button></li>
            </ul>
          </aside>
          <section class="principal">
            <input type="hidden" id="id_user" value="<%=id_user%>">
            <div id="calendario" class="secundario">
              <center><h1>Calendario</h1></center>
              <div id="calendar">

              </div>
            </div>
            <div id="contactos" class="secundario">
              <center><h1>Contactos</h1></center><br>
              <center><button type="button" name="button" value="nuevo_contacto" onclick="mostrarAlta(this)">Nuevo contacto</button></center>
              <div class="all_contactos lista">
                <ul id="ul_contactos">

                </ul>
              </div>
              <div class="info_contacto info"></div>
              <div class="nuevo_contacto alta">
                <form id="formNuevoContacto" method="post">
                  <table>
                    <tr>
                      <td>
                        Nombre*:
                      </td>
                      <td>
                        <input type="text" name="nombre" id="nameContacto"  required="requiered">
                      </td>
                    </tr>
                    <tr>
                      <td>
                        Apellido paterno*:
                      </td>
                      <td>
                        <input type="text" name="apellido_p" id="a_paternoContacto"required="requiered">
                      </td>
                    </tr>
                    <tr>
                      <td>
                        Apellido materno:
                      </td>
                      <td>
                        <input type="text" name="apellido_m" id="a_maternoContacto">
                      </td>
                    </tr>
                    <tr>
                      <td>
                        Fecha de nacimiento:
                      </td>
                      <td>
                        <input type="date" name="f_nac"  id="f_nac">
                      </td>
                    </tr>
                    <tr>
                      <td>
                        Telefono:
                      </td>
                      <td>
                        <input type="text" name="telefono" id="telefono">
                      </td>
                    </tr>
                    <tr>
                      <td>
                        celular:
                      </td>
                      <td>
                        <input type="text" name="celular" id="celular">
                      </td>
                    </tr>
                    <tr>
                      <td>
                        Direccion:
                      </td>
                      <td>
                        <textarea name="direccion" rows="5" cols="20" id="direccion">
                        </textarea>
                      </td>
                    </tr>
                  </table>

                  <center><input type="button"  id="guardarContacto" value="Guardar" onclick="newContacto()"></center>
                  <center><button type="button" name="button" value="nuevo_contacto" onclick="cerrarAlta(this)">Cerrar</button></center>
                </form>
              </div>
            </div>
            <div id="eventos" class="secundario">
              <center><h1>Eventos</h1></center>
              <center><button type="button" name="button" value="nuevo_evento" onclick="mostrarAlta(this)">Nuevo evento</button></center>
              <div class="all_eventos lista">
                <ul id="ul_eventos">

                </ul>
              </div>
              <div class="info_evento info">

              </div>
              <div class="nuevo_evento alta">
                <form id="formNuevovcento" method="post">
                  <table>
                    <tr>
                      <td>
                        Nombre:
                      </td>
                      <td>
                        <input type="text" id="nombreEventoNuevo">
                      </td>
                    </tr>
                    <tr>
                      <td>
                        Fecha:
                      </td>
                      <td>
                        <input type="date" id="fechaNuevo" value="">
                      </td>
                    </tr>
                    <tr>
                      <td>
                        Hora inicio:
                      </td>
                      <td>
                        <input type="time" id="h_inicioNuevo" value="">
                      </td>
                    </tr><tr>
                      <td>
                        Hora finalización:
                      </td>
                      <td>
                        <input type="time" id="h_terminoNuevo" value="">
                      </td>
                    </tr>
                    <tr>
                      <td>
                        Detalles
                      </td>
                      <td>
                        <textarea id="detallesEventoNuevo" rows="4" cols="20"></textarea>
                      </td>
                    </tr>
                  </table>

                  <center><input type="button"  id="guardarEvento" value="Guardar" onclick="newEvento()"></center>
                  <center><button type="button" name="button" value="nuevo_evento" onclick="cerrarAlta(this)">Cerrar</button></center>
                </form>
              </div>
            </div>
            <div id="notas" class="secundario">
              <center>
                <h1>Notas</h1>
                <center><button type="button" name="button" value="nueva_nota" onclick="mostrarAlta(this)">Nuevo nota</button></center>
              </center>
              <div class="all_notas lista">
                <ul id="ul_notas">
                </ul>
              </div>
              <div class="info_nota info">

              </div>
              <div class="nueva_nota alta">
                <form id="formNuevaNota" method="post">
                  <table>
                    <tr>
                      <td>
                        Nombre:
                      </td>
                      <td>
                        <input type="text" id="nombreNotaNueva">
                      </td>
                    </tr>
                    <tr>
                      <td>
                        Detalles:
                      </td>
                      <td>
                        <textarea id="detallesNotaNueva" rows="4" cols="20"></textarea>
                      </td>
                    </tr>
                  </table>

                  <center><input type="button"  id="guardarNota" value="Guardar" onclick="newNota()"></center>
                  <center><button type="button" name="button" value="nuevo_nota" onclick="cerrarAlta(this)">Cerrar</button></center>
                </form>
              </div>
            </div>
            <div id="tareas" class="secundario">
              <center><h1>Tareas</h1></center>
              <center><button type="button" name="button" value="nueva_tarea" onclick="mostrarAlta(this)">Nueva tarea</button></center>
              <div class="all_tareas lista">
                <ul id="ul_tareas">
                </ul>
              </div>
              <div class="info_tarea info">

              </div>
              <div class="nueva_tarea alta">
                <form id="formNuevaTarea" method="post">
                  <table>
                    <tr>
                      <td>
                        Materia:
                      </td>
                      <td>
                        <input type="text" id="materiaTareaNueva">
                      </td>
                    </tr>
                    <tr>
                      <td>
                        Detalles:
                      </td>
                      <td>
                        <textarea id="detallesTareaNueva" rows="4" cols="20"></textarea>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        Fecha de entrega:
                      </td>
                      <td>
                        <input type="date" id="f_entregaTareaNueva">
                      </td>
                    </tr>
                  </table>
                  <center><input type="button"  id="guardarTarea" value="Guardar" onclick="newTarea()"></center>
                  <center><button type="button" name="button" value="nueva_tarea" onclick="cerrarAlta(this)">Cerrar</button></center>
                </form>
              </div>
            </div>

          </section>
          <%-- <footer>
            <center><span class="itd">Instituto Tecnológico de Durango</span></center>
          </footer> --%>
        </div>
    </body>
    <!-- SCRIPTS -->
    <script src="js/vendor/jquery-1.11.1.min.js"></script>
      <script src="js/vendor/queries.js"></script>
    <script src='js/vendor/moment.min.js'></script>
    <script src='js/vendor/fullcalendar.js'></script>
    <script src='js/vendor/lang-all.js'></script>
    <script src="js/vendor/actions.js"></script>
    <script src="js/vendor/underscore.js"></script>
    <script src="js/vendor/backbone.js"></script>
    <script src="js/app.js"></script>
    <!-- Tempaltes -->
    <script type="text/template" id="ListaContactos">
        <a href="#contactos/<#=id_contacto#>"><#=nombre#> <#=apellido_p#></a>
    </script>
    <script type="text/template" id="DetallesContacto">
      <form action="actualizarContacto" method="post">
        <table>
          <tr>
            <td>
              Nombre:
            </td>
            <td>
              <input type="text" id="DetallesContactonombre" value="<#=nombre#>">
            </td>
          </tr>
          <tr>
            <td>
              Apellido paterno:
            </td>
            <td>
              <input type="text" id="DetallesContactoa_paterno" value="<#=apellido_p#>">
            </td>
          </tr>
          <tr>
            <td>
              Apellido materno:
            </td>
            <td>
              <input type="text" id="DetallesContactoa_materno" value="<#=apellido_m#>">
            </td>
          </tr>
          <tr>
            <td>
              Fecha de nacimiento:
            </td>
            <td>
              <input type="date" id="DetallesContactof_nac" value="<#=f_nac#>">
            </td>
          </tr>
          <tr>
            <td>
              Telefono:
            </td>
            <td>
              <input type="text" id="DetallesContactotelefono" value="<#=telefono#>">
            </td>
          </tr>
          <tr>
            <td>
              celular:
            </td>
            <td>
              <input type="text" id="DetallesContactocelular" value="<#=celular#>">
            </td>
          </tr>
          <tr>
            <td>
              Direccion:
            </td>
            <td>
              <textarea id="DetallesContactodireccion" rows="4" cols="30">
                <#=direccion#>
              </textarea>
            </td>
          </tr>
        </table>
        <input type="hidden" id="DetallesContactoid_contacto" value="<#=id_contacto#>">
        <center>
          <input type="button"  value="Guardar" onclick="actualizarContacto()">
          <input type="button"  value="Eliminar" onclick="eliminarContacto()">
        </center>
      </form>
    </script>
    <script type="text/template" id="ListaNotas">
        <a href="#notas/<#=id_nota#>"><#=nombre#></a>
    </script>
    <script type="text/template" id="DetallesNota">
      <center><form class="" action="actualizarNota" method="post">
        <table>
          <tr>
            <td>
              Nombre:
            </td>
            <td>
              <input type="text" id="nombreNota" value="<#=nombre#>">
            </td>
          </tr>
          <tr>
            <td>
              Nota:
            </td>
            <td>
              <textarea id="detallesNota" rows="4" cols="25">
                <#=detalles#>
              </textarea>
            </td>
          </tr>
          <tr>
            <td>Fecha de creación: </td>
            <td> <#=f_creacion#></td>
          </tr>
        </table>
        <input type="hidden" id="id_notaDetalles" value="<#=id_nota#>">
        <center>
          <input type="button" name="name" value="Guardar" onclick="actualizarNota()">
          <input type="button" name="name" value="Eliminar" onclick="eliminarNota()">
        </center>
      </form></center>
    </script>
    <script type="text/template" id="ListaEventos">
        <a href="#eventos/<#=id_evento#>"><#=nombre#></a>
    </script>
    <script type="text/template" id="DetallesEvento">
      <form class="" action="actualizarEvento" method="post">
        <table>
          <tr>
            <td>
              Nombre:
            </td>
            <td>
              <input type="text" id="nombreEvento" value="<#=nombre#>">
            </td>
          </tr>
          <tr>
            <td>
              Fecha:
            </td>
            <td>
              <input type="date" id="fechaEvento" value="<#=fecha#>">
            </td>
          </tr>
          <tr>
            <td>
              Hora de inicio:
            </td>
            <td>
              <input type="time" id="h_inicio" value="<#=h_inicio#>">
            </td>
          </tr>
          <tr>
            <td>
             Hora de finalizacion:
            </td>
            <td>
              <input type="time" id="h_termino" value="<#=h_termino#>">
            </td>
          </tr>
          <tr>
            <td>
              Detalles:
            </td>
            <td>
              <textarea id="detallesEvento" rows="4" cols="25"><#=detalles#></textarea>
            </td>
          </tr>
        </table>
        <center>
          <input type="hidden"  value="<#=id_evento#>" id="id_eventoDetalles">
          <input type="button"  value="Guardar" onclick="actualizarEvento()">
          <input type="button"  value="Eliminar" onclick="eliminarEvento()">
        </center>
      </form>
    </script>
    <script type="text/template" id="ListaTareas">
        <a href="#tareas/<#=id_tarea#>"><#=materia#></a>
    </script>
    <script type="text/template" id="DetallesTarea">
      <form class="" action="actualizarTarea" method="post">
        <table>
            <td>
              Materia:
            </td>
            <td>
              <input type="text" id="materiaTarea" value="<#=materia#>">
            </td>
          </tr>
          <tr>
            <td>
              Detalles:
            </td>
            <td>
              <textarea id="detallesTarea" rows="4" cols="25"><#=detalles#></textarea>
            </td>
          </tr>
          <tr>
            <td>
              Fecha de entrega:
            </td>
            <td>
              <input type="text" id="f_entregaTarea" value="<#=f_entrega#>">
            </td>
          </tr>
          <tr>
        </table>
        <center>
          <input type="hidden"  value="<#=id_tarea#>" id="id_tareaDetalles">
          <input type="button"  value="Guardar" onclick="actualizarTarea()">
          <input type="button"  value="Eliminar" onclick="eliminarTarea()">
        </center>
      </form>
    </script>
    <!-- Modelos -->
    <script src="js/models/contacto.js"></script>
    <script src="js/models/evento.js"></script>
    <script src="js/models/nota.js"></script>
    <script src="js/models/tarea.js"></script>
    <!-- Colleciones -->
    <script src="js/collections/contactos.js"></script>
    <script src="js/collections/notas.js"></script>
    <script src="js/collections/eventos.js"></script>
    <script src="js/collections/tareas.js"></script>
    <!-- Views -->
    <script src="js/views/lista_contactos.js"></script>
    <script src="js/views/detalles_contacto.js"></script>
    <script src="js/views/lista_notas.js"></script>
    <script src="js/views/detalles_notas.js"></script>
    <script src="js/views/lista_eventos.js"></script>
    <script src="js/views/detalles_eventos.js"></script>
    <script src="js/views/lista_tareas.js"></script>
    <script src="js/views/detalles_tareas.js"></script>
    <!-- Router -->
    <script src="js/routes/router.js"></script>
</html>
