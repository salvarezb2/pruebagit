<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js"></script>
<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"></script>
<script src="https://unpkg.com/@rive-app/canvas@2.7.0/rive.js"></script>

<script>

document.addEventListener("DOMContentLoaded", function() {
console.log("inicio");
  document.getElementById('bene1').addEventListener('click', function() {
    var myModal = new bootstrap.Modal(document.getElementById('miModal'));
    myModal.show();
});

document.getElementById('bene2').addEventListener('click', function() {
    var myModal = new bootstrap.Modal(document.getElementById('miModal2'));
    myModal.show();
});

document.getElementById('bene3').addEventListener('click', function() {
    var myModal = new bootstrap.Modal(document.getElementById('miModal3'));
    myModal.show();
});

document.getElementById('bene4').addEventListener('click', function() {
    var myModal = new bootstrap.Modal(document.getElementById('miModal4'));
    myModal.show();
});

  

$(document).on("click",".btn-close", function(){
   $('#miModal').hide();
   });
   $(document).on("click","#closeb11", function(){
   $('#miModal').hide();
   });
   
   $(document).on("click",".btn-close", function(){
   $('#miModal2').hide();
   });
   $(document).on("click","#closeb11", function(){
   $('#miModal2').hide();
   });
   
   $(document).on("click",".btn-close", function(){
   $('#miModal3').hide();
   });
   $(document).on("click","#closeb11", function(){
   $('#miModal3').hide();
   });
   
   $(document).on("click",".btn-close", function(){
   $('#miModal4').hide();
   });
   $(document).on("click","#closeb11", function(){
   $('#miModal4').hide();
   });
   
   



    // Obtener referencias a todas las modales
    var modal1 = new bootstrap.Modal(document.getElementById('miModal'));
    var modal2 = new bootstrap.Modal(document.getElementById('miModal2'));
    var modal3 = new bootstrap.Modal(document.getElementById('miModal3'));
    var modal4 = new bootstrap.Modal(document.getElementById('miModal4'));
    
    // Escuchar clics en los botones de cierre y el botón de cerrar de la primera modal
    document.querySelector('#miModal .btn-close').addEventListener('click', function () {
        // Ocultar la modal
        modal1.hide();
        // Remover la clase "modal-open" del body
        document.body.classList.remove('modal-open');
    });
    document.querySelector('#miModal #closeb11').addEventListener('click', function () {
        modal1.hide();
        document.body.classList.remove('modal-open');
    });
    document.querySelector('#miModal2 .btn-close').addEventListener('click', function () {
        modal2.hide();
        document.body.classList.remove('modal-open');
    });
    document.querySelector('#miModal2 #closeb11').addEventListener('click', function () {
        modal2.hide();
        document.body.classList.remove('modal-open');
    });
    document.querySelector('#miModal3 .btn-close').addEventListener('click', function () {
        modal3.hide();
        document.body.classList.remove('modal-open');
    });
    document.querySelector('#miModal3 #closeb11').addEventListener('click', function () {
        modal3.hide();
        document.body.classList.remove('modal-open');
    });
    document.querySelector('#miModal4 .btn-close').addEventListener('click', function () {
        modal4.hide();
        document.body.classList.remove('modal-open');
    });
    document.querySelector('#miModal4 #closeb11').addEventListener('click', function () {
        modal4.hide();
        document.body.classList.remove('modal-open');
    });
});
</script>

<script>

var currentTime = new Date();
var year = currentTime.getFullYear();
const urlParams = new URLSearchParams(window.location.search);
const utmid = urlParams.get('utm_id');
var campaign = urlParams.get('utm_campaign');

window.addEventListener('DOMContentLoaded', (event) => {
     // Esperar 4 segundos antes de ejecutar el siguiente código
    setTimeout(() => {
        $(".col-sm-12:nth-child(3)").removeClass("col-sm-12").addClass("col-sm-4");
        $(".col-sm-4.form-group.mb-3").removeClass("col-sm-4").addClass("col-sm-12");
        $('.col-sm-12 .card-footer button.btn.btn-secondary').text('CONTINUAR').attr('id', 'perfilar');
        $('.col-sm-12 .card-footer button.btn.btn-secondary').attr('href', '#ancla');
        $('#perfilar').prop('disabled', true);
        

        
    }, 1500);
     $(".col-sm-12:nth-child(3)").removeClass("col-sm-12").addClass("col-sm-4");
        $(".col-sm-4.form-group.mb-3").removeClass("col-sm-4").addClass("col-sm-12");
       $('.col-sm-12 .card-footer button.btn.btn-secondary').text('CONTINUAR').addClass('perfilar').attr('id', 'perfilar');


$('body').on('click', '#tipov', function() {
    var aa = $('#tipov').val();
    var bb = $('#anio').val();
   //console.log(aa);
   $('#perfilar').prop('disabled', true);

   if(aa != "Tipo de Vehículo" && bb && bb.length === 4){
    $('#perfilar').prop('disabled', false);

   } 

				   

    });






    $('body').on('click', '#perfilar', function() {
    var a = $('#tipov').val();
    var b = $('#anio').val();
    var result;
    result = 2024-b;
    

				  
							 
	 

    document.getElementById("perfilar").classList.add("btnmargintop");
    document.getElementById("perfilar").classList.remove("btnmargintopmoto");   
											 
	 if(utmid==75){
        campaign = "carwash";
    }

    if(utmid != null && campaign != null){
    var link1 = $("#btnCotizaRecomendado").attr('href');
    var link2 = $("#btnCotiza").attr('href');
    $("#btnCotizaRecomendado").attr("href", link1+"?utm_id="+utmid+"&utm_campaign="+campaign);
    $("#btnCotiza").attr("href", link2+"?utm_id="+utmid+"&utm_campaign="+campaign);

    } 																					  
																				   

	   
     



        if (window.matchMedia('(max-width: 767px)').matches) {
    if(a == "Motocicleta"){
        
        document.getElementById("perfilar").classList.remove("btnmargintop");
        document.getElementById("perfilar").classList.add("btnmargintopmoto");

        console.log(a);
        document.getElementById("detallemoto").style.display = "none";
        document.getElementById("auto360").style.display = "none";
        document.getElementById("rc").style.display = "none";
        document.getElementById("standar360").style.display = "none";
        document.getElementById("moto360").style.display = "none";
        document.getElementById("detalle").style.display = "none";
        document.getElementById("auto360m").style.display = "none";
        document.getElementById("rcm").style.display = "none";
        document.getElementById("standar360m").style.display = "none";
        document.getElementById("moto360m").style.display = "block";
        document.getElementById("relleno").style.display = "block";
        console.log("IF1");
    } else {
        console.log("IF2");
           if (result <= 15){
               document.getElementById("detalle").style.display = "none";
               document.getElementById("auto360").style.display = "none";
               document.getElementById("rc").style.display = "none";
               document.getElementById("standar360").style.display = "none";
               document.getElementById("moto360").style.display = "none";
               document.getElementById("detallemoto").style.display = "none";
               document.getElementById("auto360m").style.display = "block";
               document.getElementById("rcm").style.display = "block";
               document.getElementById("standar360m").style.display = "none";
               document.getElementById("moto360m").style.display = "none";
               document.getElementById("relleno").style.display = "none";
           } else if(result <= 33){
               document.getElementById("detalle").style.display = "none";
               document.getElementById("standar360").style.display = "none";
               document.getElementById("rc").style.display = "none";
               document.getElementById("auto360").style.display = "none";
               document.getElementById("moto360").style.display = "none";
               document.getElementById("detallemoto").style.display = "none";
               document.getElementById("standar360m").style.display = "block";
               document.getElementById("rcm").style.display = "block";
               document.getElementById("auto360m").style.display = "none";
               document.getElementById("moto360m").style.display = "none";
               document.getElementById("relleno").style.display = "none";

           } else {
            document.getElementById("detalle").style.display = "none";
            document.getElementById("standar360").style.display = "none";
            document.getElementById("rc").style.display = "none";
            document.getElementById("auto360").style.display = "none";
            document.getElementById("moto360").style.display = "none";
            document.getElementById("detallemoto").style.display = "none";
            document.getElementById("standar360m").style.display = "none";
            document.getElementById("rcm").style.display = "none";
            document.getElementById("auto360m").style.display = "none";
            document.getElementById("moto360m").style.display = "none";
            document.getElementById("relleno").style.display = "none";
           }
        } 

       
    } else if (window.matchMedia('(min-width: 768px)').matches) {
        if(a == "Motocicleta"){
            console.log(a);
            document.getElementById("detallemoto").style.display = "block";
            document.getElementById("auto360").style.display = "none";
            document.getElementById("rc").style.display = "none";
            document.getElementById("standar360").style.display = "none";
            document.getElementById("moto360").style.display = "block";
            document.getElementById("detalle").style.display = "none";
            document.getElementById("auto360m").style.display = "none";
            document.getElementById("rcm").style.display = "none";
            document.getElementById("standar360m").style.display = "none";
            document.getElementById("moto360m").style.display = "none";
            document.getElementById("relleno").style.display = "none";
            console.log("IF1");
        } else {
            console.log("IF2");
               if (result <= 15){
                   document.getElementById("detalle").style.display = "block";
                   document.getElementById("auto360").style.display = "block";
                   document.getElementById("rc").style.display = "block";
                   document.getElementById("standar360").style.display = "none";
                   document.getElementById("moto360").style.display = "none";
                   document.getElementById("detallemoto").style.display = "none";
                   document.getElementById("auto360m").style.display = "none";
            document.getElementById("rcm").style.display = "none";
            document.getElementById("standar360m").style.display = "none";
            document.getElementById("moto360m").style.display = "none";
            document.getElementById("relleno").style.display = "none";
               } else if(result <= 33){
                   document.getElementById("detalle").style.display = "block";
                   document.getElementById("standar360").style.display = "block";
                   document.getElementById("rc").style.display = "block";
                   document.getElementById("auto360").style.display = "none";
                   document.getElementById("moto360").style.display = "none";
                   document.getElementById("detallemoto").style.display = "none";
                   document.getElementById("auto360m").style.display = "none";
            document.getElementById("rcm").style.display = "none";
            document.getElementById("standar360m").style.display = "none";
            document.getElementById("moto360m").style.display = "none";
            document.getElementById("relleno").style.display = "none";
               } else {
                document.getElementById("detalle").style.display = "none";
                document.getElementById("standar360").style.display = "none";
                document.getElementById("rc").style.display = "none";
                document.getElementById("auto360").style.display = "none";
                document.getElementById("moto360").style.display = "none";
                document.getElementById("detallemoto").style.display = "none";
                document.getElementById("auto360m").style.display = "none";
            document.getElementById("rcm").style.display = "none";
            document.getElementById("standar360m").style.display = "none";
            document.getElementById("moto360m").style.display = "none";
            document.getElementById("relleno").style.display = "none";
               }
            } 
           
        }
    });
    
    
  
	
$('body').on('keyup', '#anio', function() {
    var minLength = 4;
    var maxLength = 4;
    var temp = $('#anio').val();
    var tempv = $('#tipov').val();
    var charLength = temp.length;
    
       // Verificar si el campo de año está vacío
    if (temp === '') {
        $('#warning-message').html('');
        $('#perfilar').prop('disabled', true);
        return; // Salir de la función si el campo de año está vacío
    }


    if(charLength !== 0){
        if(charLength < minLength){
            $('#warning-message').html('<i class="fas fa-info" style="color: #813134; margin-right:3px;"></i>El año debe tener 4 caracteres.');
            $('#perfilar').prop('disabled', true);
        } else if(charLength > maxLength){
            $('#warning-message').html('<i class="fas fa-info" style="color: #813134; margin-right:3px;"></i>El año debe tener 4 caracteres.');
            $('#perfilar').prop('disabled', true);
            $('#anio').val(char.substring(0, maxLength));
        } else if (temp <1900 || temp > 2024){
            $('#warning-message').html('<i class="fas fa-info" style="color: #813134; margin-right:3px;"></i>Verifica el año de tu vehículo.');
            $('#perfilar').prop('disabled', true);
        } else if (tempv !== '' && tempv !== 'Tipo de Vehículo'){
            $('#warning-message').html('');
            $('#perfilar').prop('disabled', false); 
        } else {
            $('#warning-message').html('');
        }
    }

    // Llamamos a la función para verificar el tipo de vehículo después de realizar las comprobaciones del campo de año
    verificarTipoVehiculo();
});

// Función para mostrar u ocultar el mensaje de advertencia para el tipo de vehículo
function verificarTipoVehiculo() {
    var tempv = $('#tipov').val();

    if (tempv === "" || tempv === "Tipo de Vehículo") {
        $('#warning-message2').html('<i class="fas fa-info" style="color: #EAAA21; margin-right:3px;"></i>Seleccione un tipo de vehículo.')
    } else {
        $('#warning-message2').html('');
    }
}


// Controlador de eventos para el campo de tipo de vehículo
$('body').on('change', '#tipov', function() {
    verificarTipoVehiculo();
});

							




			   
								   
					  
					   
																																																																																							  
			
																																																																																							  
	 
    
// selector de padre
//var myParent = document.getElementsByClassName("col-sm-4")[0];
//Create array of options to be added
var array = ["Tipo de Vehículo","Automóvil","Pick Up","Camioneta","SUV","Motocicleta"];

//Create and append select list
var selectList = document.createElement("select");
selectList.id = "vehicletype";
//myParent.appendChild(selectList);
//selectList.classList.add("form-select");
																		  
									   
			   
				 
	   

//Create and append the options
for (var i = 0; i < array.length; i++) {
    var option = document.createElement("option");
    option.value = array[i];
    option.text = array[i];
    selectList.appendChild(option);
}

    // Fin
    
    
    
   

 

 setTimeout(() => {
    const r = new rive.Rive({
        src: "assets/images/roble.riv",
        canvas: document.getElementById("canvas"),
        autoplay: true,
        artboard: 'auto-movimiento-2',
        stateMachines: "animaciones",
        onLoad: () => {
          r.resizeDrawingSurfaceToCanvas();
        },
      });
      console.log("Rive Script");
    
    r.layout = new rive.Layout({ fit: rive.Fit.Cover });
    
  }, 3000);
    
    



						 

  let codmodelo=0;
  let codmarca=0;
  let codlinea=0;
  let idlinea=0;
  let clasificacion=0;
  
  //let linkbtn=document.getElementsByClassName("select2-results__options")[3];
  
  /*
  linkbtn.addEventListener("click", function() {
      
      codmodelo=localStorage.getItem("codmodelo");
      codmarca=localStorage.getItem("codmarca");
      codlinea=localStorage.getItem("codlinea");
      idlinea=localStorage.getItem("idlinea");
      clasificacion=localStorage.getItem("clasificacion");
      let newurl = "codmodelo="+codmodelo+"&codmarca="+codmarca+"&codlinea="+codlinea+"&idlinea="+idlinea+"&clasificacion="+clasificacion;
      // linkbtn.href="https://tautos2.seguroselroble.com/cotizador/autos?"+newurl; 
  
  });
  
*/

													
									 
		   
   




});





  
  
</script>