$(document).ready(function(){
  //////////////////////
  // Dark Mode
  //////////////////////
  var darkMode = localStorage.getItem('darkMode');
  if (darkMode == 'true') {
    $('#dark-mode').prop('checked', true);
    $('body').addClass('dark-mode');
    $('#code-dark-css').removeAttr('disabled');
  } else {
    $('#dark-mode').prop('checked', false);
    $('body').removeClass('dark-mode');
    $('#code-dark-css').attr('disabled', 'disabled');
  }

  // Toggle
  $('#dark-mode').on('change', function(event) {
    if ($(this).is(':checked')) {
      localStorage.setItem('darkMode', true);
      $('body').addClass('dark-mode');
      $('#code-dark-css').removeAttr('disabled');
    } else {
      localStorage.setItem('darkMode', false);
      $('body').removeClass('dark-mode');
      $('#code-dark-css').attr('disabled', 'disabled');
    }
  });
// End Doc Ready
});
