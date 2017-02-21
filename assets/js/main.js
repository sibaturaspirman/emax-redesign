/*MENU*/
$(document).ready(function() {
  var
  menu = $(".menu"),
  menuDropdown = $(".menu-dropdown"),
  menuDropdownHasChild = $(".menu-dropdown-has-child"),
  burgerMenu = $(".burger-menu"),
  mainContent = $("#main-content");

  //Ketika mainContent di click menu akan menutup
  mainContent.click(function(){
    menu.removeClass('menu-open');
    burgerMenu.removeClass('burger-menu-open');
    $("body").removeClass("body-push-left");
  });

  //Ketika burgerMenu di click menu akan muncul
  burgerMenu.click(function(){
    menu.toggleClass('menu-open');
    burgerMenu.toggleClass('burger-menu-open');
    $("body").toggleClass("body-push-left");
  });

  //dropdown menu
  menuDropdownHasChild.children('a').on('click', function(){
    $(this).next("ul").slideToggle(200).parent(".menu-dropdown-has-child").siblings(".menu-dropdown-has-child").children('a').next("ul").slideUp(200);
  });


});


$(window).on('scroll', function() {
  var posisi_scroll = $('.scroll-trigger-for-menu-bottom').offset().top; //Identifikasi Section yang menjadi batas
  var offset = 0; //Titik awal Scroll
  var tinggi_layar = $(window).height();  //Menghitung Tinggi Layar
  var tinggi_bottom_menu = $('.bottom-menu').height();  //Menghitung Tinggi bottom-menu
  var tinggi_layar_fix = tinggi_layar - tinggi_bottom_menu; //Menghitung tinggi layar dikurangi tinggi bottom-menu
  var tinggi_maks_scroll = $('body').height() + tinggi_layar; //Menghitung Tinggi Scroll
  var titik_batas_scroll = posisi_scroll - (tinggi_layar * offset); //Menghitung Titik poin batas scroll pada bagian
  var posisi_scroll_y = window.pageYOffset; //Menghitung Posisi Scroll Y
  var titik_batas = posisi_scroll_y > titik_batas_scroll; //Mendapatkan section batas
  var sisa_titik_batas = tinggi_maks_scroll <= posisi_scroll_y && !titik_batas; //Mendapatkan sisa titik batas


    $('.bottom-menu').css('top', tinggi_layar_fix);
    if (titik_batas || sisa_titik_batas) {
        $('.bottom-menu').addClass("bottom-menu-move");
    } else {
        $('.bottom-menu').removeClass("bottom-menu-move");
        $('.bottom-menu').addClass("bottom-menu-move-top");
    }
});
/*MENU*/
