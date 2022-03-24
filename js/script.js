$('.three-slider').slick({
    prevArrow: $('.two-left-arrow'),
    nextArrow: $('.two-right-arrow'),
    dots: true,
    responsive: [{
        breakpoint: 574,
        settings: {
            arrows: false,
        }
    }]
});



// $('.six-slider').slick({
//     prevArrow: $('.six-left-arrow'),
//     nextArrow: $('.six-right-arrow'),
// });
// $(".six-slider").on("afterChange", function(event, slick, currentSlide, nextSlide) {
//     $(".stor span").text(currentSlide + 1);
// });


// jQuery(function($){
// 	$(document).mouseup(function (e){ // событие клика по веб-документу
// 		var div = $(".seven-inner"); // тут указываем ID элемента
// 		if (!div.is(e.target) // если клик был не по нашему блоку
// 		    && div.has(e.target).length === 0) { // и не по его дочерним элементам
// 			div.find('.seven-inner-bottom').fadeOut(100); // скрываем его
// 			div.find('.seven-abs').removeClass('active');
// 		}
// 	});
// });


$('.seven-inner-top').click(function() {
  var siner = $(this).closest('.seven-inner').find('.seven-inner-bottom');
  var sabs = $(this).find('.seven-abs');
  $('.seven-inner-bottom').not(siner).removeClass('active');
  $('.seven-abs').not(sabs).removeClass('active');
  if ($(this).closest('.seven-inner').find('.seven-inner-bottom').hasClass('active')) {
    $(this).closest('.seven-inner').find('.seven-inner-bottom').removeClass('active');
    $(this).find('.seven-abs').toggleClass('active');
  }else{
    $(this).closest('.seven-inner').find('.seven-inner-bottom').addClass('active');
    $(this).find('.seven-abs').toggleClass('active');
  }
});

$('.bars img').click(function() {

    $(this).closest('.mob-header').find('.mob-menu').slideToggle(300);
});



// jQuery('.gallery-tab div').click(function() {
//     var tabindex = jQuery(this).index();
//     jQuery('.gallery-tab-object').removeClass('active');
//     jQuery(this).addClass('active');
//     jQuery('.gallery-content').hide(0);
//     jQuery('.gallery-content').eq(tabindex).fadeIn(500);
// });



$('.modal-phone').click(function() {
    $(this).find('.modal-phone-placeholder').fadeOut(200);

});
$('.modal-phone').mouseout(function() {
	if ($(this).find('input').val() == '') {
	    $(this).find('.modal-phone-placeholder').fadeIn(200);
	}
});


$('a[data-target="#exampleModal"]').click(function () {
	var modalIndex = $(this).attr('data-modal');
	$('.modal-form').hide(0);
	$('.modal-form').eq(modalIndex).show(0);
});

var scrollPos = 0;
$(window).scroll(function(){
   var st = $(this).scrollTop();
   if (st > scrollPos){
     $('.header').addClass('scroll');
   } else {
     $('.header').removeClass('scroll');
   }
   scrollPos = st;
});

$(function(){
  $("#phone1").mask("+48 999 999 999");
});



$(".faq-li").click(function() { // ID откуда кливаем
    $('html, body').animate({
        scrollTop: $(".seven").offset().top  // класс объекта к которому приезжаем
    }, 1000); // Скорость прокрутки
});
$(".Kontakt-li").click(function() { // ID откуда кливаем
    $('html, body').animate({
        scrollTop: $(".eleven").offset().top  // класс объекта к которому приезжаем
    }, 1000); // Скорость прокрутки
});
$(".opinie-li").click(function() { // ID откуда кливаем
    $('html, body').animate({
        scrollTop: $(".six").offset().top  // класс объекта к которому приезжаем
    }, 1000); // Скорость прокрутки
});

$(".Realizacje-li").click(function() { // ID откуда кливаем
    $('html, body').animate({
        scrollTop: $(".four").offset().top  // класс объекта к которому приезжаем
    }, 1000); // Скорость прокрутки
});
$(".Zalety-li").click(function() { // ID откуда кливаем
    $('html, body').animate({
        scrollTop: $(".two").offset().top  // класс объекта к которому приезжаем
    }, 1000); // Скорость прокрутки
});



$(document).ready(function () {
    $("form").submit(function () {
    // Получение ID формы
    var formID = $(this).attr('id');
    // Добавление решётки к имени ID
    var formNm = $('#' + formID);
    $.ajax({
      type: "POST",
      url: '../php/send.php',
      data: new FormData(formNm),
      processData: false,
      contentType: false,
      beforeSend: function () {
        // Вывод текста в процессе отправки
        $(formNm).html('<p style="text-align:center">Отправка...</p>');
      },
      success: function (data) {
        // Вывод текста результата отправки
        $(formNm).html('<p style="text-align:center">'+data+'</p>');
      },
      error: function (jqXHR, text, error) {
        // Вывод текста ошибки отправки
        $(formNm).html(error);
      }
    });
    return false;
  });
});

