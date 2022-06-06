// Función que detecta el tamaño de pantalla para mostrar u ocultar vistas
$( window ).resize(()=> {
  let width = $( window ).width();
  if ( width < 735){
    $('main').show();
    $('section').show();
  }else{
    $('section').hide();
  }
 });

 // Función para que al hacer click en el ícono de flechas, cambie la vista de imagen por especificaciones
$('.icon-arrow').click(()=>{
  $('main').toggle()
  $('section').toggle()
}) 

// Funciones para que según el título en el que se haga click, se cambie por una u otra vista
$('.title-tech').click(function(){
  $('section').toggle();
  $('main').toggle();
})

$('.subtitle-box').click(function(){
  $('main').toggle();
  $('section').toggle();
})

// Funciones para que se abran y cierren las listas en versión mobile
$('.chevron1').click(function () {
    $('.lista1').toggle();
  }); 
$('.chevron2').click(function () {
    $('.lista2').toggle();
  }); 
$('.chevron3').click(function () {
    $('.lista3').toggle();
  }); 
$('.chevron4').click(function () {
    $('.lista4').toggle();
  });

  //Capturo ítems dentro de la imagen
let helmet = $(".helmet");
let manual = $(".manual"); 
let remote = $(".remote");
let bands = $(".bands");
let battery = $(".battery");

  let x = $(document);
  x.ready(inicializarEventos);

  //Función hover a cada ítem
function inicializarEventos() {
    helmet.hover(mouseHelmet, saleMouseHelmet);
    manual.hover(mouseManual, saleMouseManual);
    remote.hover(mouseRemote, saleMouseRemote);
    bands.hover(mouseBands, saleMouseBands);
    battery.hover(mouseBattery, saleMouseBattery);
}

//Funciones cuando entra el mouse en cada ítem
function mouseHelmet(){
  $('.helmet').css("background-color", "white");
  $('.helmet').css("border-color", "white");
  $('.helmet').css("fill", "#FF5640");
  $('.check').css("top", "10%");
  $('.check').css("right", "20%");
  $('.check').removeClass('.inactive');
  $('.check').addClass('active');
}

function mouseManual(){
  $('.manual').css("background-color", "white");
  $('.manual').css("border-color", "white");
  $('.manual').css("fill", "#FF5640");
  $('.check').css("top", "80%");
  $('.check').css("right", "10%");
  $('.check').removeClass('.inactive');
  $('.check').addClass('active');
}

function mouseRemote(){
  $('.remote').css("background-color", "white");
  $('.remote').css("border-color", "white");
  $('.remote').css("fill", "#FF5640");
  $('.check').css("top", "70%");
  $('.check').css("right", "32%");
  $('.check').removeClass('.inactive');
  $('.check').addClass('active');
}

function mouseBands(){
  $('.bands').css("background-color", "white");
  $('.bands').css("border-color", "white");
  $('.bands').css("fill", "#FF5640");
  $('.check').css("top", "77%");
  $('.check').css("right", "27%");
  $('.check').removeClass('.inactive');
  $('.check').addClass('active');
}

function mouseBattery(){
  $('.battery').css("background-color", "white");
  $('.battery').css("border-color", "white");
  $('.battery').css("fill", "#FF5640");
  $('.check').css("top", "80%");
  $('.check').css("right", "34%");
  $('.check').removeClass('.inactive');
  $('.check').addClass('active');
}

// Funciones cuando sale el mouse en cada ítem
function saleMouseHelmet(){
  $('.helmet').css("background-color", "transparent");
  $('.helmet').css("border-color", "#C5C5CF");
  $('.helmet').css("fill", "#1D1D1F");
  $('.check').removeClass('active');
}

function saleMouseManual(){
  $('.manual').css("background-color", "transparent");
  $('.manual').css("border-color", "#C5C5CF");
  $('.manual').css("fill", "#1D1D1F");
  $('.check').removeClass('active');
}

function saleMouseRemote(){
  $('.remote').css("background-color", "transparent");
  $('.remote').css("border-color", "#C5C5CF");
  $('.remote').css("fill", "#1D1D1F");
  $('.check').removeClass('active');
}

function saleMouseBands(){
  $('.bands').css("background-color", "transparent");
  $('.bands').css("border-color", "#C5C5CF");
  $('.bands').css("fill", "#1D1D1F");
  $('.check').removeClass('active');
}

function saleMouseBattery(){
  $('.battery').css("background-color", "transparent");
  $('.battery').css("border-color", "#C5C5CF");
  $('.battery').css("fill", "#1D1D1F");
  $('.check').removeClass('active');
}