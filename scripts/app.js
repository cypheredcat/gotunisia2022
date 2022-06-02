window.loadScript=function (script){
  let scripturl = "scripts/"+script+".js";
  $.getScript(scripturl);
}

loadScript("sweetalert.min");
loadScript("socials");
