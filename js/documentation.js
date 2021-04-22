$(document).ready(function(){
  // code highlight
  hljs.configure({languages: ['HTML']});
  hljs.highlightAll();

  // Copy
  function copyToClipboard(el) {
    var text = el.siblings('pre').find('code').text();
    var input = document.createElement('textarea');
    input.innerHTML = text;
    document.body.appendChild(input);
    input.select();
    var result = document.execCommand('copy');
    document.body.removeChild(input);
    return result;
  }

  $('[data-copy-snippet').click(function(e) {
    copyToClipboard($(this));
  });
});

