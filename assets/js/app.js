$().ready(function() {
  //Vista splash + función callback (view)
  $(".main-view").hide();
  $(".logo").fadeIn(5000).fadeOut(3000, view);

  function view (){
    $(".main-view").show();
  }

	//Filtrando restaurantes
  $('.category_item').click(function(){
	var catProduct = $(this).attr('category');
	console.log(catProduct);

	//Agregando clase active al tipo de comida seleccionado
	$('.category_item').removeClass('active');
	$(this).addClass('active');

	//Ocultando restaurantes
	$('.restaurant-item').hide();

	//Mostrando restaurantes
  $('.restaurant-item[category="'+catProduct+'"]').show();
	});

	//Mostrando todos los productos
  $('.category_item[category="all"]').click(function(){
		$('.restaurant-item').show();
	});

    /*$('.restaurant-list').show();
    $(this).removeClass('col-xs-4');
    $(this).addClass('col-xs-12');*/

  //Efecto mouseover + mouseout
  $('.restaurant-item').mouseover(function(){
    $(this).css('opacity', '0.5');
  });
  $('.restaurant-item').mouseout(function(){
    $(this).css('opacity', '1');
  });








});
