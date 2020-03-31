function validar() {
    var nom = document.getElementById('nombre');
    var ocu = document.getElementById('ocupacion');
    var inv = document.getElementById('invitado');
    var conta = document.getElementById('contador');
    var term = document.getElementById('terminos');
    var v = document.getElementById("post");
      
    // control de nombre
    if (nom.value.length <= 0) { 
      nom.classList.add("invalid") 
      } else { nom.classList.remove("invalid") }

    // control de ocupacion
        if (ocu.value.length <= 0) { 
      ocu.classList.add("invalid") 
      } else { ocu.classList.remove("invalid") }
    
    // control de invitado
        if (inv.value.length <= 0) {
      inv.classList.add("invalid")
      } else { inv.classList.remove("invalid") }

    // control de contador
    if (conta.value.length <= 0) {
    conta.classList.add("invalid")
    } else { conta.classList.remove("invalid") }
    
    // finalmente habilito el botón si todo es válido
      if (nom.checkValidity() && ocu.checkValidity() && term.checkValidity() && conta.value.length > 3 && inv.value.length > 3) { 
      v.classList.remove('disabled');
      } else { v.classList.add('disabled') }
      //
}    

function ok() {
    var name = document.getElementById('nombre').value;
    var ok_ocupacion = document.getElementById('ocupacion').value;
    var ok_conta = document.getElementById('contador').value;
    var ok_invitado = document.getElementById('invitado').value;
    var sp = " ";
    var comi = "\"";
    var punto = ". "
    var aparte = "\r\n\r\n";
    var renglon = "\r\n"
    var waStr = "Hola 'Herramientas Financieras', soy"+ sp + name + sp + "(" + ok_ocupacion + ")" + punto + aparte + ok_conta + sp + punto + aparte + "Me invitó:" + sp + comi + ok_invitado + comi;
    var mensaje = "https://wa.me/543513056590?text=" + encodeURIComponent(waStr);
    window.open(mensaje);
}

