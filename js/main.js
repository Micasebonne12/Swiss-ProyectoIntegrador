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