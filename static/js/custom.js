$(document).on('click','a:not([data-toggle])', function() {
  $('html').removeClass('nav-open');
  nowuiKit.misc.navbar_menu_visible = 0;
  setTimeout(function() {
    $toggle.removeClass('toggled');
    $('#bodyClick').remove();
  }, 550);
});