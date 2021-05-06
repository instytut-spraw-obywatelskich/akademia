var infoCiastkaZakmniete = localStorage.getItem('infoCiastkaZakmniete');
if (infoCiastkaZakmniete != 'tak') {
  window.addEventListener('DOMContentLoaded', function() {
    var aktywnyElement = document.activeElement;
    var infoCiastka = document.querySelector('#infoCiastka');
    var zamknijInfoCiastka = document.querySelector('#zamknijInfoCiastka');
    infoCiastka.classList.remove('hidden');
    infoCiastka.classList.add('flex');
    zamknijInfoCiastka.focus();
    zamknijInfoCiastka.addEventListener('click', function() {
      infoCiastka.classList.remove('flex');
      infoCiastka.classList.add('hidden');
      localStorage.setItem('infoCiastkaZakmniete', 'tak');
      aktywnyElement.focus();
    });
  });
}