// Función que detecta el tamaño de pantalla para mostrar u ocultar vistas
$(window).resize(() => {
  let width = $(window).width();
  if (width < 735) {
    $('main').show();
    $('section').show();
  } else {
    if ($("main").is(":visible")) {
      $('section').hide();
    }
  }
});

// Función para que al hacer click en el ícono de flechas, cambie la vista de imagen por especificaciones
$('.icon-arrow').click(() => {
  $('main').toggle()
  $('section').toggle()
})

// Funciones para que según el título en el que se haga click, se cambie por una u otra vista
$('.title-tech').click(function () {
  $('section').toggle();
  $('main').toggle();
})

$('.subtitle-box').click(function () {
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

// Oculta el check
$('.check').hide();

// Función para que aparezca el check sobre los elementos al hacer hover y se cambien los estilos
function botonHover(element, type) {
  let item = $(element).find('svg');
  item.addClass('hover')
  $('.check').show();
  if (type == 'helmet') {
    $('.check').css("top", "10%");
    $('.check').css("right", "20%");
  } else if (type == 'manual') {
    $('.check').css("top", "80%");
    $('.check').css("right", "10%");
  } else if (type == 'remote') {
    $('.check').css("top", "70%");
    $('.check').css("right", "32%");
  } else if (type == 'bands') {
    $('.check').css("top", "77%");
    $('.check').css("right", "27%");
  } else if (type == 'battery') {
    $('.check').css("top", "80%");
    $('.check').css("right", "34%");
  }
}

//Función para que al dejar de hacer hover, los estilos se restablezcan
function botonLeft(element){
  let item = $(element).find('svg');
  item.removeClass('hover');
  $('.check').hide();
}