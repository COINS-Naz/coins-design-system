$('.tab-content').first().addClass('active');

$('.tabs li').click(function(){
  var tab_id = $(this).attr('data-tab');
  $(this).parent('ul.tabs').children('li').removeClass('active');
  $('.tab-content').removeClass('active');

  $(this).addClass('active');
  $("#"+tab_id).addClass('active');
});

$('.content-switch-module').each(function(index, el) {
  $(this).children('.content-switch-tab').first().addClass('active');
});
$('.content-switch li').click(function(){
  var tab_id = $(this).attr('data-content'),
      parent = $(this).parents('.content-switch-module');
  $(this).siblings('li').removeClass('active');
  parent.find('.content-switch-tab').removeClass('active');

  $(this).addClass('active');
  $("#"+tab_id).addClass('active');
});
