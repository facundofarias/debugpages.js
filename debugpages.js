(function(document) {

  "use strict";

  var scripts = document.scripts;
  for (var i = 0; i < scripts.length; i++)
  {
    scripts[i].remove();
  }

  document.scripts.forEach(function(element, index, array){
    array[index].remove();
  });


  links = document.links;
  for (var i = 0; i < links.length; i++)
  {
    links[i].href='';
  }

  var span = document.createElement("span");
  span.setAttribute("style", "background: #FA0303; color: #fff; text-align: center; font-weight: bold; font-size: 1rem; position: relative; transition: 0.5s; position: absolute; display: block; overflow: hidden; width: 200px; padding: 5px 40px; top: 60px; right: -60px; transform: rotate(45deg); -webkit-transform: rotate(45deg); box-shadow: 4px 4px 10px rgba(0,0,0,0.8);");
  span.innerHTML = "You're browsing in <strong>DEBUG</strong> mode. Intended for quick read-only checks. Many features are disabled.";
  document.body.appendChild(span);

}(window.document));
