$(document).ready(function(){
  //////////////////////
  // Code highlight
  //////////////////////
  hljs.configure({languages: ['HTML']});
  hljs.highlightAll();

  //////////////////////
  // showTooltipFeedback
  //////////////////////
  function showTooltipFeedback(el, direction, text) {
    var originalText = $(el).attr('data-tooltip-'+direction);
    $(el).attr('data-tooltip-'+direction, text);
    setTimeout(() => $(el).attr('data-tooltip-'+direction, originalText), 1000);
  };

  //////////////////////
  // Copy Code
  //////////////////////
  function copyCodeToClipboard(el) {
    var text = el.siblings('pre').find('code').text();
    var input = document.createElement('textarea');
    input.innerHTML = text;
    document.body.appendChild(input);
    input.select();
    var result = document.execCommand('copy');
    document.body.removeChild(input);
    // Feedback
    showTooltipFeedback(el, 'left', 'Copied!');
    return result;
  }

  $('[data-copy-snippet').click(function(e) {
    copyCodeToClipboard($(this));
  });

  //////////////////////
  // Add Links to H2
  //////////////////////
  const headings = document.querySelectorAll('.jekyll-content h2'); 
  const linkContent = '<i class="icn icn-Linked"></i>';
  for (const heading of headings) {
    const linkIcon = document.createElement('a');
    linkIcon.setAttribute('href', `#${heading.id}`);
    linkIcon.setAttribute('data-tooltip-right', 'Copy link');
    linkIcon.innerHTML = linkContent;
    heading.appendChild(linkIcon);
  }

  function copyH2Link(el) {
    var link = $(el).parent('h2').attr('id');
    var input = document.createElement('textarea');
    input.innerHTML = window.location.href.replace(location.hash,"") + '#'+ link;
    document.body.appendChild(input);
    input.select();
    var result = document.execCommand('copy');
    document.body.removeChild(input);
    // Feedback
    showTooltipFeedback(el, 'right', 'Copied!');
    return result;
  }
  $('.jekyll-content h2 a').click(function(e) {
    e.preventDefault();
    copyH2Link($(this));
  });

// End Doc Ready
});


