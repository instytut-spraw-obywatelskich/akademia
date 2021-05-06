function targetBlank() {
  var wewnetrzny = location.host.replace("www.", "");
      wewnetrzny = new RegExp(wewnetrzny, "i");              
  var linki = document.getElementsByTagName('a');
  for (var i = 0; i < linki.length; i++) {
    var href = linki[i].host;
    if( !wewnetrzny.test(href) ) {
      linki[i].setAttribute('target', '_blank');
    }
  }
};
targetBlank();