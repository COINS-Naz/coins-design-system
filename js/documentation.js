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


// UI Component Construction
// Add event listener
$('.component-builder-config input').on('change', function() {
  var classToggle = $(this).attr('data-class-toggle'),
      prepend = $(this).attr('data-prepend'),
      classRemove = $(this).attr('data-class-remove'),
      childReplace = $(this).attr('data-child-replace'),
      fullReplace = $(this).attr('data-full-replace'),

      parent = $(this).parents('.component-builder'),
      previewEl = $(parent).find('.preview'),
      codeEl = $(parent).find('code');
  componentUpdate(previewEl, codeEl, classToggle, prepend, classRemove, childReplace, fullReplace);
});

// codeUpdate();
function codeUpdate(codeEl, output) {
  codeEl.text(output);
  hljs.highlightAll('HTML');
}

// componentUpdate();
function componentUpdate(previewEl, codeEl, classToggle, prepend, classRemove, childReplace, fullReplace) {
  var el = previewEl.children().first()
      child = el.children().last();
  // Actions
  if (classToggle) {
    el.toggleClass(classToggle);
  }
  if (classRemove) {
    el.removeClass(classRemove);
  }
  if (childReplace) {
    child.replaceWith(childReplace);
  }
  if (prepend) {
    if (el.prop('outerHTML').indexOf(prepend) >= 0) {
      var replace = el.prop('outerHTML').replace(prepend, '');;
      el.replaceWith(replace);
    } else {
      el.prepend(prepend);
    }
  }
  
  if (fullReplace) {
    previewEl.html(fullReplace);
  }

  // Code update
  codeUpdate(codeEl, previewEl.prop('innerHTML'));
}