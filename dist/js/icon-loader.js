!function(e){"use strict";function t(e,t){var i=t||{},a=i.size?"is-"+i.size:"",o="icon icon-"+e+" "+a+(i["class"]||""),r='<svg class="icon__cnt"><use xlink:href="#icon-'+e+'" /></svg>',s='<div class="'+o+'">'+n(r,o)+"</div>";return s}function n(e,t){return t.indexOf("spinner")>-1?'<div class="icon__spinner">'+e+"</div>":e}function i(t){var n=""!==t&&"undefined"!=typeof t?t:"images/sprites/svg_sprite.svg",i=1450847449;e.createElementNS&&e.createElementNS("http://www.w3.org/2000/svg","svg").createSVGRect||(e.createElement("svg"),e.createElement("use"));var a,o,r="localStorage"in window&&null!==window.localStorage,s=function(){var t='<div style="display: none">'+o+"</div>";e.body.insertAdjacentHTML("afterbegin",t)},c=function(){e.body?s():e.addEventListener("DOMContentLoaded",s)};if(r&&parseInt(localStorage.getItem("inlineSVGrev"),10)===i&&(o=localStorage.getItem("inlineSVGdata")))return c(),!0;try{a=new XMLHttpRequest,a.open("GET",n,!0),a.onload=function(){a.status>=200&&a.status<400&&(o=a.responseText,c(),r&&(localStorage.setItem("inlineSVGdata",o),localStorage.setItem("inlineSVGrev",i)))},a.send()}catch(l){}}var a=function(n){for(var i=n?n.querySelectorAll("[data-icon]"):e.querySelectorAll("[data-icon]"),a=0;a<i.length;a++){var o=i[a],r=o.getAttribute("data-icon"),s={"class":o.className,size:o.getAttribute("data-size")};o.insertAdjacentHTML("beforebegin",t(r,s)),o.parentNode.removeChild(o)}};e.addEventListener("DOMContentLoaded",function(){i(),a()}),window.renderIcons=a}(window.document);