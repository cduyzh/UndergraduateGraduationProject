(function(window){var svgSprite='<svg><symbol id="icon-103-copy" viewBox="0 0 1024 1024"><path d="M512 0c-281.6 0-512 230.4-512 512s230.4 512 512 512c281.6 0 512-230.4 512-512 0-281.6-230.4-512-512-512zM499.2 780.8c-25.6 25.6-70.4 25.6-96 0l-224-217.6c-25.6-25.6-25.6-70.4 0-96s70.4-25.6 96 0l172.8 166.4 332.8-326.4c25.6-25.6 70.4-25.6 96 0s25.6 70.4 0 96l-377.6 377.6z" fill="#999" ></path></symbol><symbol id="icon-icon37" viewBox="0 0 1024 1024"><path d="M533.48 612.311 1012 119.15l-75.2-76.18-406.25 417L84.27 42 12 123.05 533.48 612.311 533.48 612.311zM84.27 413.09 12 495.12 533.48 983.4 1012 491.22l-75.2-76.18-406.25 417L84.27 413.09 84.27 413.09z"  ></path></symbol><symbol id="icon-guanbi" viewBox="0 0 1024 1024"><path d="M583.168 523.776L958.464 148.48c18.944-18.944 18.944-50.176 0-69.12l-2.048-2.048c-18.944-18.944-50.176-18.944-69.12 0L512 453.12 136.704 77.312c-18.944-18.944-50.176-18.944-69.12 0l-2.048 2.048C46.08 98.304 46.08 129.536 65.536 148.48l375.296 375.296-375.296 375.296c-18.944 18.944-18.944 50.176 0 69.12l2.048 2.048c18.944 18.944 50.176 18.944 69.12 0l375.296-375.296 375.296 375.296c18.944 18.944 50.176 18.944 69.12 0l2.048-2.048c18.944-18.944 18.944-50.176 0-69.12l-375.296-375.296z"  ></path></symbol></svg>';var script=function(){var scripts=document.getElementsByTagName("script");return scripts[scripts.length-1]}();var shouldInjectCss=script.getAttribute("data-injectcss");var ready=function(fn){if(document.addEventListener){if(~["complete","loaded","interactive"].indexOf(document.readyState)){setTimeout(fn,0)}else{var loadFn=function(){document.removeEventListener("DOMContentLoaded",loadFn,false);fn()};document.addEventListener("DOMContentLoaded",loadFn,false)}}else if(document.attachEvent){IEContentLoaded(window,fn)}function IEContentLoaded(w,fn){var d=w.document,done=false,init=function(){if(!done){done=true;fn()}};var polling=function(){try{d.documentElement.doScroll("left")}catch(e){setTimeout(polling,50);return}init()};polling();d.onreadystatechange=function(){if(d.readyState=="complete"){d.onreadystatechange=null;init()}}}};var before=function(el,target){target.parentNode.insertBefore(el,target)};var prepend=function(el,target){if(target.firstChild){before(el,target.firstChild)}else{target.appendChild(el)}};function appendSvg(){var div,svg;div=document.createElement("div");div.innerHTML=svgSprite;svgSprite=null;svg=div.getElementsByTagName("svg")[0];if(svg){svg.setAttribute("aria-hidden","true");svg.style.position="absolute";svg.style.width=0;svg.style.height=0;svg.style.overflow="hidden";prepend(svg,document.body)}}if(shouldInjectCss&&!window.__iconfont__svg__cssinject__){window.__iconfont__svg__cssinject__=true;try{document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>")}catch(e){console&&console.log(e)}}ready(appendSvg)})(window)